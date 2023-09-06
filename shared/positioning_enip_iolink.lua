local enip = require("luaenip")     -- load our LuaENIP.dll Ethernet/IP scanner library
local json = require("cjson")       -- json support
local reg = require("heReg")        -- load the registry helpers
local struct = require("struct")    -- see http://www.inf.puc-rio.br/~roberto/struct/
                                    -- see also: https://github.com/25A0/blob
local basexx = require('basexx')
require("ethernet_devices")         -- Get the well known Ethernet/IP devices...
-------------------------------------------------------------------------------
--          TURCK AL1234 4-port IO-Link master
------------------------------------------------------------------------------
ethernet_devices.TURCK_AL1324 = {
    -- Connection path: 20 04 24 C7 2C 96 2C 64
    --                           --                 Configuration assembly instance (0xC7 = 199)
    --                                 --           O -> T assembly instance (0x96 = 150)
    --                                       --     T -> O assembly instance (0x64 = 100)
	-- O->T parameters: PLC --> Device, "PLC Outputs"
    ---------------------------------------------------------------------------
	--ConnectionMode    OT_Mode;		-- Connection mode: default POINT2POINT
	OT_Inst             = 0x96,			-- O->T Instance ID
	OT_Size             = 174,			-- O->T data size (in bytes)
	--RealTimeFormat    OT_RTFormat;   	-- O->T Header/Heartbeat/Modeless/Zerolen
	--Priority		    OT_Priority;
	OT_ExclusiveOwner   = true,         -- true = exclusive owner
	OT_VariableLength   = false,        -- true = variable length allowed
    ---------------------------------------------------------------------------
	-- T->O parameters: Device -> PLC, "PLC Inputs"
	--TO_Mode             = 1,			-- connection mode: default MULTICAST, 0=NULL, 1=Multicast, 2=Point2Point
	TO_Inst             = 0x64,			-- T->O Instance ID
	TO_Size             = 246,			-- T->O data size (in bytes)
	--RealTimeFormat	TO_RTFormat;    -- T->O Header/Heartbeat/Modeless/Zerolen
	--Priority		TO_Priority;
	TO_ExclusiveOwner   = true,         -- true = exclusive owner
	TO_VariableLength   = false,        -- true = variable length allowed
    ---------------------------------------------------------------------------
	-- Configuration Assembly (optional)
	Cfg_Inst            = 0xC7,        	-- 0 = unused
	Cfg_Data            = {             -- 50 bytes of config data
							3,          -- USINT Communication profile (3=keep setting)
                            4,          -- SINT  Port Process data size (4=32Bytes)
                            -- per port settings:
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
                            --                                          Pin mode [3=IO-Link (Pin4)]
                               --                                       Port speed (0=as fast as possible)
                                  --                                    Swap (1=enabled)
                                     --                                 Validation (0=no check and clear)
                                        -----------                     Vendor-ID
                                                    -----------         Device-ID
                                                                --      Fail safe mode (0=no fail safe)
                                                                   --   Fail safe value (1=old value)
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
						},
    ---------------------------------------------------------------------------
	-- Startup parameter writes (optional) - only as workaround for (buggy) Rexroth devices
	-- Parameters are given as a sequence of bytes for writing using SetAttributeSingle.
	-- For each Par_Count elements, the following data must be provided:
	-- 		[byte]	Class
	--		[byte]	Instance
	--		[byte]	Attr
	--		[byte]	Number of data bytes to write
	--		[bytes] [actual data bytes to write]
	--
	Par_Data            = {},  -- parameter data in the above format
    ---------------------------------------------------------------------------
	-- common parameters
	Rate                = 50,			-- data rate in [ms]
	Keying              = {},        	-- Electronic key segment
}
-----------------------------------------------------------------------------------------------------------------
local M = {
    dev = nil,
    posname = nil,
    pos_cfg = nil,
    db_cfg = nil,
    curtask = {
        PosCtrl = 0,
        tracking = false,
        job = '',
        task = '',
    },
    key = nil,          -- if nil, then no position enabled task, else <Part+Job+Task>
    cfg = {
        len = { model='', ip='', scale=1, offs=0, fwo=nil },
        rad = { model='', ip='', scale=1, offs=0, fwo=nil },
        ref = { x=0, y=0, len=1000 }
    }
}

-- convert a position info into a database string
-- note, that this is limited to 64 chars
function M.EncodePos(cur_x, cur_y, cur_z, pos_cfg)
    -- total length = 25 (max range: +/-9999mm <~> +/-10m)
    return string.format("%+05d%+05d%+05d%03d%03d%-04d",
        cur_x, cur_y, cur_z,    -- in mm
        pos_cfg.radius,         -- in mm
        pos_cfg.height,         -- in mm
		pos_cfg.offset or 0)	-- in mm
end

-- convert a database string int a position info lua object
function M.DecodePos(ToolDefPos)
   if type(ToolDefPos) ~= "string" or #ToolDefPos ~= 25 then
        -- nothing stored in the database
        local pos = {      				-- table with position info
            id = 'pos1',    				    -- position_id (is unique in the job context)
            posx = 10, posy = 10, posz = 10,    -- (float) location
            dirx = 0, diry = 0, dirz = 0,
            radius = 20,                        -- tolerance radius
            height = 20,                        -- tolerance height
            offset = 0,                         -- tool head offset/length
        }
        return pos
    end
    local pos = {
        id = '__dummy__',                        -- will be replaced anyway
        posx = tonumber(ToolDefPos:sub( 1,  5)),
        posy = tonumber(ToolDefPos:sub( 6, 10)),
        posz = tonumber(ToolDefPos:sub(11, 15)),
        radius = tonumber(ToolDefPos:sub(16, 18)),      -- tolerance radius
        height = tonumber(ToolDefPos:sub(19, 21)),      -- tolerance height
        offset = tonumber(ToolDefPos:sub(22, 25)),      -- tool head offset/length
        dirx = 0, diry = 0, dirz = 0
    }
    return pos
end

-- check, if the position is already available and update it eventually
function M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local posname = JobName..BoltName
    if M.posname ~= posname or M.db_cfg ~= ToolPosDef then
        -- task changed - update positioning system
        XTRACE(16, string.format("Selected pos changed: Job=%s task=%s Cfg=%s",
            param_as_str(JobName), param_as_str(BoltName), param_as_str(ToolPosDef)))
        M.posname = posname
        M.db_cfg = ToolPosDef
        M.curtask.tracking = true
        M.curtask.job = JobName
        M.curtask.task = BoltName

        -- decode positions from DB
        local pos = M.DecodePos(ToolPosDef)
        -- add position name
		M.xPos = BoltName
        pos.id = BoltName
        M.pos_cfg = pos
        -- update WebPanel!
        Browser.ExecJS_async('SidePanel', "OGS.onJobOrTaskChanged();")
    end
end

function M.StartTask(wf)
    -- start the positioning system
    return 0                -- ok
end

function M.StopTask(wf)
    -- stop tracking
    M.tracking = false
    M.posname = nil
    M.pos_cfg = nil
    M.curtask.tracking = false
    M.curtask.job = ''
    M.curtask.task = ''
    return 0                -- ok
end

----------------------------------------------------------------------------
-- Get version info
local vdlls, vddlt = enip.version_mod()
XTRACE(16, "Ethernet/IP scanner library. Version = "..vdlls)

local ethernet_iol = { connected = false, measurement = -1 }
local positioning_initialized = false

-----------------------------------------------------------------------------------------
local function trim(s)
    return (s~=nil) and s:match "^%s*(.-)%s*$" or nil
end
-----------------------------------------------------------------------------------------
local function get_dev_params(section, name, tbl)
    local params = { model='', ip='', scale=1, offs=0, fwo=nil }
    local key_sensor = 'SENSOR_'..name
    local key_scale  = 'SCALE_'..name
    local sensor = tbl[key_sensor]
    local scale = tbl[key_scale]
    if type(sensor) ~= 'string' then
        return nil, string.format('INI-section: "%s": %s not found!', section, key_sensor)
	end
    if type(scale) ~= 'string' then
        return nil, string.format('INI-section: "%s": %s not found!', section, key_scale)
	end
    params.scale = tonumber(scale)
    local ip, model = sensor:match("([^,]+),([^,]+)")
	params.ip = trim(ip)
	params.model = trim(model)
	if not params.ip then
        return nil, string.format('INI-section: "%s": %s missing parameter ip (expected format =ip,model)!',
            section, key_sensor)
	end
	if not params.model then
        return nil, string.format('INI-section: "%s": %s missing parameter model (expected format =ip,model)!',
            section, key_sensor)
	end
	params.fwo = GetParamSetForEthernetDevice(params.model)
	if not params.fwo then
        return nil, string.format('INI-section: "%s": %s unknown Ethernet/IP sensor model!', section, key_sensor)
    end
    -- read the reference offset value from the registry (default to 0)
	local key = 'HKEY_CURRENT_USER\\Software\\Haller + Erne GmbH\\Monitor\\Positioning'
	local offs = reg.ReadString(key, 'REF_INCREMENTS_'..name)
    if not offs or offs == "nil" then 
        params.offs = 0
    else
        params.offs = tonumber(offs)
    end
    return params
end
-----------------------------------------------------------------------------------------
local function save_reference(len_increments, rad_increments)

    local res, err
	local key = 'HKEY_CURRENT_USER\\Software\\Haller + Erne GmbH\\Monitor\\Positioning'
    res, err = reg.WriteString(key, 'REF_INCREMENTS_LEN', tostring(len_increments))
	if not res then
        if not err then err = 'Unknown error!' end
		XTRACE(1,string.format('Save reference position failed. %s', param_as_str(err)))
	end
    res, err = reg.WriteString(key, 'REF_INCREMENTS_RAD', tostring(rad_increments))
	if not res then
        if not err then err = 'Unknown error!' end
		XTRACE(1,string.format('Save reference position failed. %s', param_as_str(err)))
	end
end
-----------------------------------------------------------------------------------------
local function read_ini_params(inisection)

    local err
    local cfg  ={
        iol = { model='', ip='', scale=1, fwo=nil },
        ref = { x=0, y= 0 }
    }
	local tbl = ReadIniSection(inisection)
	if type(tbl) ~= 'table' then
		return nil, string.format('INI-section: "%s": section missing!', inisection)
	end
    cfg.iol, err = get_dev_params(inisection, 'IOL', tbl)
    if not cfg.iol then
		return nil, err
    end
    -- get the reference position value
    if type(tbl.REF_POS) == 'string' then   -- refpos given
        local x, y = tbl.REF_POS:match("([^,]+),([^,]+)")
        cfg.ref.x = tonumber(trim(x))
        cfg.ref.y = tonumber(trim(y))
    end
    if type(tbl.REF_LEN) == 'string' then   -- refpos given
        cfg.ref.len = tonumber(tbl.REF_LEN)
    end

    return cfg
end
-----------------------------------------------------------------------------------------
local function Init()

    if positioning_initialized then return nil end  -- OK!

    local cfg, err = read_ini_params('POSITIONING')
    if not cfg then
        XTRACE(11,'POSITIONING: initialization failed:'..err)
        return 'Invalid configuration!'
    end

    -- init Ethernet/IP
    ethernet_iol.ctx = enip.new(cfg.iol.ip, cfg.iol.fwo)
    if not ethernet_iol.ctx then
        XTRACE(2,'POSITIONING: initialization failed!')
        return 'Sensor IOL error!'
    else
        XTRACE(16,'SENSOR_IOL initialization successful')
    end

    -- save the config params
    M.cfg = cfg

    positioning_initialized = true
    return nil -- OK!
end
--------------------------------------------------------------------------------------------
-- poll I/O module, returns true, if inputs changed
local function PollIO(dev, name)
    local changed = false
    local c = dev.ctx:is_cycliciorunning()
    XTRACE(16, name.." -> "..tostring(c))
    if not dev.connected and c then
        XTRACE(16, name.." connected!")
        ResetLuaAlarm(name)
    end
    if dev.connected and not c then
        XTRACE(1, name.." DISCONNECTED!")
        SetLuaAlarm(name, -2, "Sensor LEN disconnected!")
    end
    dev.connected = c

    if dev.connected then
       local buf = dev.ctx:read_cyclic_io(0, cfg.iol.fwo.TO_Size)
       --local newdata = struct.unpack("<L", buf)
       if buf ~= dev.rawinp then
            dev.rawinp = buf
            XTRACE(16, string.format('     rd: #size=%d: %s', #buf, basexx.to_hex(buf)))
            changed = true
       end
    else
        return nil, name.." DISCONNECTED!"
    end
    return changed
end

--------------------------------------------------------------------------------------------
-- return changed, err
local function GetSensorVal(dev, name)
    local changed = false
    if dev.connected then
        local sens_rad = dev.rawinp:sub(120, 124)
        local sens_len = dev.rawinp:sub(150, 154)
        local raw_rad = struct.unpack("<L", sens_rad)
        local raw_len = struct.unpack("<L", sens_len)
        if raw_rad ~= dev.old_rad or raw_len ~= dev.old_len then
            dev.old_rad = raw_rad
            dev.old_len = raw_len
            changed = true
        end
    else
        return nil, name.." DISCONNECTED!"
    end
    return changed
end
----------------------------------------------------------------------------------------------
-- Read the current x,y position from the sensors
-- x,y,ok = GetCurrentPosition()
local function GetCurrentPosition(Tool)

    local cfg = M.cfg
    local len_changed, rad_changed, err

    len_changed, err = GetSensorVal(ethernet_iol, "SENSOR_LEN")
    if len_changed == nil then
        return 0, 0, err
    end

    -- plausibility check
    local len_increments = tonumber(ethernet_iol.measurement)
    local rad_increments = 0
    if not len_increments then return 0,0,'SENSOR_LEN invalid data' end
    if not rad_increments then return 0,0,'SENSOR_RAD invalid data' end

    -- remove zero offset
    if type(cfg.iol.offs_rad) ~= "number" then cfg.iol.offs_rad = 0.0 end
    if type(cfg.iol.offs_len) ~= "number" then cfg.iol.offs_len = 0.0 end
    local rad_value = rad_increments - cfg.iol.offs_rad
    local len_value = len_increments - cfg.iol.offs_len

    -- debug:
    if (rad_changed) then XTRACE(16, "SENSOR_RAD : "..param_as_str(rad_value)) end
    if (len_changed) then XTRACE(16, "SENSOR_LEN : "..param_as_str(len_value)) end
    --if (len_changed) then XTRACE(16, "SENSOR_LEN : "..param_as_str(len_value).." -> "..param_as_str(len_mm)..'mm') end

    ------------------------------------------
    --  calculate cartesian coordinates from polar coordinates

    --  Rotation axis: scale is increments per 360 Grad
    cfg.iol.scale_rad = 4096
    cfg.iol.scale_len = 1.0

    rad_value = (rad_value % cfg.iol.scale_rad)
    local rad = rad_value * ( 2 * math.pi / cfg.iol.scale_rad) -- in radiant

    -- Linear axis: scale is increments per mm
    local len_mm = (len_value / cfg.iol.scale_rad) + cfg.ref.len

    local x = len_mm * math.sin(rad)
    local y = len_mm * math.cos(rad)

    local x_abs = x + cfg.ref.x
    local y_abs = y + cfg.ref.y - cfg.ref.len

    if (len_changed or rad_changed) then
        XTRACE(16, string.format("Pos: l/r: %.2fmm/%.2f° x/y: %.2f/%.2f -> %.2f/%.2f", len_mm, rad*360/(2*3.1415), x, y, x_abs, y_abs))
    end

    M.pos_cur = {
        -- the raw sensor values
        len = len_increments,
        rad = rad_increments,
        -- the calculated carthesian values
        posx = x_abs,
        posy = y_abs,
        posz = 0,
        dirx = 0, diry = 0, dirz = 0,
    }
    return x, y, nil  -- OK!
end

-----------------------------------------------------------------------------------------------------------------
-- Calculate distance between actual and expected position
-- inTolerance, dx, dy, dz = GetPositionDifference(cur_x, cur_y, cur_z, ToolPosDef)
----------------------------------------------------------------------------
local function GetPositionDifference(cur_x, cur_y, cur_z, pos_cfg)

	-- compare current and learned positions
	local dif_x = cur_x - pos_cfg.posx
	local dif_y = cur_y - pos_cfg.posy
	local dif_z = 0 -- cur_z - pos_cfg.posz

    -- check, if the current position is within our cylinder
    local dist2 = (dif_x*dif_x) + (dif_y*dif_y)
    local inpos = (dist2 <= (pos_cfg.radius*pos_cfg.radius))
    -- currently, we don't care about the Z position!

	return inpos, dif_x, dif_y, dif_z

end
----------------------------------------------------------------------------
-- Check if positioning system reports in position or not
-- returns:
--   errortext on error
--   true in position
--   false not in position
function PS_CheckToolPosition(Tool, JobName, BoltName, PosCtrl, ToolPosDef, mode)
--  mode = 0 - before task start (checking external conditions...)
--       = 1 - after task start (task released)  but tool is still not running (start button not pressed)
--       = 2 - Tool In Cycle

    if PosCtrl == nil or PosCtrl == 0 then
        M.curtask.tracking = false
        M.curtask.job = ''
        M.curtask.task = ''
        return "Position control not enabled for this task!"
    end

    local initErr = Init()
    if initErr then return initErr end

    -- decode the position parameter
    M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local cur_x, cur_y, err = GetCurrentPosition(Tool)
    if err ~= nil then
        -- error!
        M.InPos = -1
        return "No position info available!"
    end

--	if mode == 2 then
-- 		return true  -- if tool was already started then ignore tool position
--	end

    -- calculate difference
	local inpos, dif_x,dif_y,dif_z = GetPositionDifference(cur_x, cur_y, 0, M.pos_cfg)
    M.InPos = inpos
    if inpos == true then
        return true, "Ok"       -- in position
    else
        local diff = string.format("%+d/%+d/%+d", dif_x, dif_y, dif_z)
	    return false, diff       -- true if in position!
	end
end

--------------------------------------------------------------------------------
function PS_TeachToolPosition(State, Tool, JobName, BoltName, PosCtrl, ToolPosDef)

-- "parameter/return value" State: 	unknown = 0, teaching_in_process = 1, start_teaching = 2, stop_teaching = 3

    M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local cur_x, cur_y, err = GetCurrentPosition(Tool)
    local cur_z = 0
    if err then
        return 0                    -- error!
    end

	local new_state = nil  --
	if State == 2 then -- start_teaching
	    new_state = 3 -- stop_teaching = 3
	end

	-- this string will be used as ToolPosDef parameter by "PS_CheckToolPosition" function call
	local newToolPosDef = M.EncodePos(cur_x, cur_y, cur_z, M.pos_cfg)
	local inpos, dif_x,dif_y,dif_z = GetPositionDifference(cur_x, cur_y, cur_z, M.pos_cfg)
	local DisplayMsg = string.format("%+d/%+d/%+d", dif_x,dif_y,dif_z)
	return new_state, dif_z,dif_y,dif_x, newToolPosDef, DisplayMsg

end

local function OnStatePoll(info)

    local wf = info.Workflow
    if not positioning_initialized then
        XTRACE(16, "Init positioning...")
        Init()
    else
        PollIO(ethernet_iol, "SENSOR_IOL")
    end
end

-- StateChanged is called each time the workflow state, tool state or
-- job/operation state changes.
local function OnWorkflowStateChanged(info)

	local wf = info.Workflow
    if not positioning_initialized then
        XTRACE(16, "Init positioning...")
        Init()
    end
	local msg = string.format("State=%d, Part=%s, jobname=%s, boltname=%s, opnum=%d PosCtrl=%d",
					wf.State, wf.PartName, wf.JobName, wf.BoltName, wf.Op, wf.PosCtrl)
	XTRACE(16, msg);
    M.curtask.PosCtrl = wf.PosCtrl

    local key = wf.PartName .. wf.JobName .. wf.BoltName
    if wf.PosCtrl ~= 0 then
        -- this task has a positioning property assigned!
        if M.key ~= key then
            Browser.ExecJS_async('SidePanel', "OGS.onJobOrTaskChanged(1);")
            M.key = key
        end
        if wf.State >= 1 then
            -- we should start tracking
            if M.tracking ~= true then
                XTRACE(16, 'Positioning: start tracking: ' .. wf.JobName .. ':' .. wf.BoltName);
                M.StartTask(wf)
            end
        end
    else
        -- this task does not have positioning!
        if M.key ~= nil then
            Browser.ExecJS_async('SidePanel', "OGS.onJobOrTaskChanged(0);")
            M.key = nil
        end

        if wf.State >= 1 then
            -- we should stop tracking
            if M.tracking == true then
                XTRACE(16, 'Positioning: stop tracking: ' .. wf.JobName .. ':' .. wf.BoltName);
                M.StopTask(wf)
            end
        end
    end

    -- check end of workflow
    if wf.State ~= M.wfState then
        if wf.State == 0 then           -- workflow completed
            XTRACE(16, 'task stopped: ' .. wf.JobName .. ':' .. wf.BoltName);
            M.StopTask(wf)
        end
    end
    M.wfState = wf.State
end
if StateChangedFunctions ~= nil then
	StateChangedFunctions.add(OnWorkflowStateChanged)
end
if StatePollFunctions ~= nil then
	--StatePollFunctions.add(OnStatePoll)
end

--------------------------------------------------------------------------------
-- SIDEPANEL
--------------------------------------------------------------------------------
-- Wire up the panel button events
local Positioning_SidePlanel_Url = 'http://127.0.0.1:59990/index.html'
local function ShowSidePanel()
    Browser.Show('SidePanel', Positioning_SidePlanel_Url)
end
function Panel_OnToolButtonClicked(tool, toolType, WFState, WFLockReason)
    if M.curtask.PosCtrl and M.curtask.PosCtrl > 0 then
        ShowSidePanel()
    end
    return false            -- true would block OGS default click handling
end
function Panel_OnSTKNButtonClicked(tool, toolType, WFState, WFLockReason)
    if M.curtask.PosCtrl and M.curtask.PosCtrl > 0 then
        ShowSidePanel()
    end
    return false            -- true would block OGS default click handling
end

-- !!!!!!!!!!!!!! WARNING: handler is single instance and might break other handlers !!!!!!!!!!!!
local function OnSidePanelMsg(name, cmd)
--    XTRACE(16, string.format("name=%s, cmd=%s", tostring(name), tostring(cmd)))
    local o = json.decode(cmd)
    if o and o.cmd then
        if o.cmd == 'get-position' then
            local p = {
                State = 0,                      -- TODO: connection state
                InPos = M.InPos,
                Pos = nil,                      -- M.pos_cur
                user_level = UserManager.user_level,
                admin_level = UserManager.admin_level,
            }
            if type(M.pos_cur) == 'table' then
                p.Pos = M.pos_cur
                p.Error = nil
            else
                p.State = -1                    -- Positioning not running
                p.Error = M.pos_cur             -- Positioning error message
            end
            local par = json.encode(p)
            Browser.ExecJS_async(name, "UpdatePosition('"..par.."');")
            return
        elseif o.cmd == 'get-params' then
            local p = {
                Job = M.curtask.job,
                Task = M.curtask.task,
                Tool = 1,                       -- TODO
                Pos = M.pos_cfg
            }
            local par = json.encode(p)
            Browser.ExecJS_async(name, "UpdateParams('"..par.."');")
            return
        elseif o.cmd == 'set-params' then
            --M.pos_cfg.tolerance = o.params.Pos.tolerance
            M.pos_cfg.radius    = o.params.Pos.radius
            M.pos_cfg.height    = o.params.Pos.height
            M.pos_cfg.offset    = o.params.Pos.offset
            return

        elseif o.cmd == 'save-ref' then
            if type(M.pos_cur) == 'table' then
                M.cfg.offs_len = M.pos_cur.len
                M.cfg.offs_rad = M.pos_cur.rad
                save_reference(M.cfg.offs_len, M.cfg.offs_rad)
            end
            return

        end
    end
--[[
    -- if we get here, then either this is a unknown command or not for us anyway
    -- try to be nice and call old handler (if any)
    if OnSidePanelMsgOld then
        OnSidePanelMsgOld(name, cmd)
    end
]]--
end
Browser.RegMsgHandler('SidePanel', OnSidePanelMsg, Positioning_SidePlanel_Url)


XTRACE(16, "Ethernet/IP scanner library. Version = "..vdlls)
return M
