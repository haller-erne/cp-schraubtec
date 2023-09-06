-- Generic positioning handler
-- Used  as a top-level module to wire positioning and IO
local M = {
    channels = {},
    curtask = {
        PosCtrl = 0,
        tracking = false,
        job = '',
        task = '',
        pos = nil,      -- the database configured position (if any)
    },
    key = nil,          -- if nil, then no position enabled task, else <Part+Job+Task>
}
local initialized = nil

local tools = require('positioning_tools')
local json = require('cjson')

local drivers = {
    ART = require('positioning_ART'),
    IO = require('positioning_IO')
}

-- allow adding/overriding driver modules
-- call as:
--   LoadDriverModule(name) to load <name>.lua and register it as <name>
--   LoadDriverModule(name, module) to load <module>.lua and register it as <name>
M.LoadDriverModule = function(name, module)
    if module == nil then module = name end
    drivers[name] = require(name)
end

-- new position info from hardware received
-- usually called from station_io.lua
-- Can bei ether polar coordinates or 3d coordinates
M.UpdatePos_RotIncLenAbs = function(tool, rotation_inc, distance_abs, tilt_x, tilt_y, tilt_z)
    -- select tool, then calculate 3d space position
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'error invalid tool')
        return nil, 'invalid tool'
    end
    if not chn.drv.UpdatePos_RotIncLenAbs then return nil, 'RotIncLenAbs not implemented!' end
    local pos, err = chn.drv.UpdatePos_RotIncLenAbs(chn, rotation_inc, distance_abs, tilt_x, tilt_y, tilt_z)
    return pos, err
end
M.UpdatePos_RotIncLenInc = function(tool, rotation_inc, distance_inc, tilt_x, tilt_y, tilt_z)
    -- select tool, then calculate 3d space position
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'error invalid tool')
        return nil, 'invalid tool'
    end
    if not chn.drv.UpdatePos_RotIncLenInc then return nil, 'RotIncLenInc not implemented!' end
    local pos, err = chn.drv.UpdatePos_RotIncLenInc(chn, rotation_inc, distance_inc, tilt_x, tilt_y, tilt_z)
    return pos, err
end
-- x/y/z and angular rotations
M.UpdatePos_Abs3D = function(tool, x, y, z, rx, ry, rz)
    -- select tool, then calculate 3d space position
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'error invalid tool')
        return nil, 'invalid tool'
    end
    if not chn.drv.UpdatePos_Abs3D then return nil, 'Abs3D not implemented!' end
    local pos, err = chn.drv.UpdatePos_Abs3D(chn, x,y,z,rx,ry,rz)
    return pos, err
end

-- no data, lost connection
M.ErrorNoData = function(tool)
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'error invalid tool')
        return nil, 'invalid tool'
    end
    chn.pos = nil
end

-- convert a position info into a database string
-- note, that this is limited to 64 chars
function M.EncodePos(cur_x, cur_y, cur_z, pos_cfg, dirx, diry, dirz)
    -- total length = 25 (max range: +/-9999mm <~> +/-10m)
    return string.format("%+06d%+06d%+06d%03d%03d%-04d%+04d%+04d%+04d",
        cur_x, cur_y, cur_z,    -- in mm
        pos_cfg.radius,         -- in mm
        pos_cfg.height,         -- in mm
		pos_cfg.offset or 0,	-- in mm
        dirx, diry, dirz)
end

-- convert a database string int a position info lua object
function M.DecodePos(ToolDefPos, id)
   if type(ToolDefPos) ~= "string" or #ToolDefPos ~= 40 then
        -- nothing stored in the database
        local pos = {      				-- table with position info
            id = id,    				        -- position_id (is unique in the job context)
            posx = 10, posy = 10, posz = 10,    -- (float) location
            dirx = 0, diry = 0, dirz = 0,
            radius = 20,                        -- tolerance radius
            height = 20,                        -- tolerance height
            offset = 0,                         -- tool head offset/length
        }
        return pos
    end
    local pos = {
        id = id,
        posx = tonumber(ToolDefPos:sub( 1,  6)),
        posy = tonumber(ToolDefPos:sub( 7, 12)),
        posz = tonumber(ToolDefPos:sub(13, 18)),
        radius = tonumber(ToolDefPos:sub(19, 21)),      -- tolerance radius
        height = tonumber(ToolDefPos:sub(22, 24)),      -- tolerance height
        offset = tonumber(ToolDefPos:sub(25, 28)),      -- tool head offset/length
        dirx = tonumber(ToolDefPos:sub(29, 32)),
        diry = tonumber(ToolDefPos:sub(33, 36)),
        dirz = tonumber(ToolDefPos:sub(37, 40)),
    }
    return pos
end

-- generate a unique key for the position - from workflow data
function M.GetKey(JobName, BoltName)
    local key = JobName..BoltName
    return key
end

-- check, if the position is already available and update it eventually
-- Note, this might be called multiple times, if e.g. the user changes parameters for the position
function M.SelectPos(tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'Positioning: start task: error invalid tool')
        return nil, 'invalid tool'
    end
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
        local pos = M.DecodePos(ToolPosDef, posname)
        M.curtask.pos = pos
        -- update driver
        if chn.drv.SelectPos then
            -- Send positioning information to driver
            chn.drv.SelectPos(chn, pos)
        end
        -- update WebPanel!
        Browser.ExecJS_async('SidePanel', "OGS.onJobOrTaskChanged();")
    end
    return 0    -- ok
end

-----------------------------------------------------------------------------------------------------------------
-- Calculate distance between actual and expected position
-- inTolerance, dx, dy, dz = GetCurrentDistance(tool)
----------------------------------------------------------------------------
function M.GetDistance(tool, curpos, exppos)

    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'Positioning: get current pos failed: error invalid tool')
        return nil, 'invalid tool'
    end
    if curpos == nil then curpos = chn.pos end
    if exppos == nil then exppos = M.curtask.pos end
    if curpos == nil or exppos == nil then
        XTRACE(1, 'Positioning: no pos info set')
        return nil, 'no position available yet!'
    end
    if curpos.posx == nil or exppos.posx == nil then
        XTRACE(1, 'Positioning: posx info is empty!')
        return nil, 'posx info is empty!'
    end

    -- compare current and learned positions
	local dif_x = curpos.posx - exppos.posx
	local dif_y = curpos.posy - exppos.posy
	local dif_z = curpos.posz - exppos.posz

    -- TODO: implement more matching primitives

    -- check, if the current position is within our cylinder
    local distxy = (dif_x*dif_x) + (dif_y*dif_y)
    local inpos = (distxy <= (exppos.radius*exppos.radius))
    -- currently, we don't care about the Z position!

	return inpos, dif_x, dif_y, dif_z
end

-- Get current position
-- Return:
--    pos, inpos    inpos = 0/1 or nil (if inpos is external)
--    nil, error    if no position is available
function M.GetCurrentToolPos(tool)
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'Positioning: get current pos failed: error invalid tool')
        return nil, 'invalid tool'
    end
    if chn.drv.GetCurrentToolPos ~= nil then
        local pos, inpos = chn.drv.GetCurrentToolPos(chn, M.curtask.pos)
        if pos ~= nil then
            -- valid position, update our channel data
            chn.pos = pos
        else
            XTRACE(1, 'Positioning: error returned from GetCurrentToolPosition!')
            return nil, inpos
        end
        return chn.pos, inpos
    else
        -- chn.pos is set by calling one of the UpdatePos_XXX functions!
        -- return the last reported position
        return chn.pos
    end

end

function M.StartTask(tool, JobName)
    -- start the positioning system
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'Positioning: start task: error invalid tool')
        return nil, 'invalid tool'
    end
    if chn.drv.StartTask then
        return chn.drv.StartTask(chn, JobName)
    end
    return 0        -- not implemented in driver, so skip
end
function M.StartTasks(JobName)
    for tool, chn in pairs(M.channels) do
        M.StartTask(tool, JobName)
    end
    M.tracking = true
end

function M.StopTask(tool, JobName)
    -- stop tracking
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'Positioning: stop task: error invalid tool')
        return nil, 'invalid tool'
    end
    if chn.drv.StopTask then
        return chn.drv.StopTask(chn, JobName)
    end
    return 0        -- not implemented in driver, so skip
end
function M.StopTasks(JobName)
    for tool, chn in pairs(M.channels) do
        M.StopTask(tool, JobName)
    end
    M.tracking = false
    M.posname = nil
    M.pos_cfg = nil
    M.curtask.tracking = false
    M.curtask.job = ''
    M.curtask.task = ''
end


-- initialize the module, read config, etc.
-- TODO: improve reading ini file, so far only works for OPENPROTOCOL tools...
local function Init()
    local cfg, err
    M.channels = {}
	local tbl = ReadIniSection('OPENPROTO')
	if type(tbl) ~= 'table' then
		error('INI-section: "OPENPROTOCOL": section missing!')
	end
    for k,v in pairs(tbl) do
        local channel = k:match("CHANNEL_(%d%d)_POSITIONING")
        if channel ~= nil then
            -- found something
            local chn = {
                chn = tonumber(channel),
                section = v
            }
            -- try read the section
            local ini = ReadIniSection(v)
            if type(ini) ~= 'table' then
                error(string.format('INI-section: "%s": section missing!', v))
            end
            if drivers[ini.DRIVER] ~= nil then
                chn.cfg = ini
                chn.drv = drivers[ini.DRIVER]
                M.channels[chn.chn] = chn
                XTRACE(16, string.format("Positioning: Tool %d: added %s", chn.chn, v))
                if chn.drv.Init then
                    chn.drv.Init(chn)
                end
            else
                error(string.format('INI-section: "%s": unknown/missing DRIVER!', v))
            end
        end
    end
    initialized = true
end

-- StatePoll is called cyclically
local function OnStatePoll(info)

    local wf = info.Workflow
    if not initialized then
        XTRACE(16, "Init positioning...")
        Init()
    end
end

-- StateChanged is called each time the workflow state, tool state or
-- job/operation state changes.
local function OnWorkflowStateChanged(info)

	local wf = info.Workflow
    if not initialized then
        XTRACE(16, "Init positioning...")
        Init()
    end
	local msg = string.format("State=%d, Part=%s, jobname=%s, boltname=%s, opnum=%d PosCtrl=%d",
					wf.State, wf.PartName, wf.JobName, wf.BoltName, wf.Op, wf.PosCtrl)
	XTRACE(16, msg);

    -- check end of workflow
    if wf.State ~= M.wfState then
        if wf.State == 0 then           -- workflow completed
            XTRACE(16, 'Tracking: STOP: ' .. wf.JobName .. ':' .. wf.BoltName);
            M.StopTasks(wf.JobName)
        end
    end
    M.wfState = wf.State

end

if StateChangedFunctions ~= nil then
	StateChangedFunctions.add(OnWorkflowStateChanged)
end
if StatePollFunctions ~= nil then
	StatePollFunctions.add(OnStatePoll)
end

----------------------------------------------------------------------------
local TaskState_old, TaskStep_old
-- Check if positioning system reports in position or not
-- returns:
--   errortext on error
--   true in position
--   false not in position
--  TaskState:
--       = 0 - before task start (checking external conditions...)
--       = 1 - after task start (task released)  but tool is still not running (start button not pressed)
--       = 2 - Tool In Cycle
--  TaskStep:
--
function PS_CheckToolPosition(Tool, JobName, BoltName, PosCtrl, ToolPosDef, TaskState, TaskStep)
    M.curtask.PosCtrl = PosCtrl
    M.curtask.Tool    = Tool
    local key = M.GetKey(JobName, BoltName)
    if TaskState_old ~= TaskState or TaskStep_old ~= TaskStep or M.key ~= key then
        XTRACE(16, string.format('PS_CheckToolPosition: Tool=%d, Job=%s, Task=%s, PosCtrl=%d, TaskState=%d, TaskStep=%d',
            Tool, JobName, BoltName, PosCtrl, TaskState, TaskStep))
        TaskState_old = TaskState
        TaskStep_old = TaskStep
    end
    if M.key ~= key then
        -- Job/task changed - notify web-gui
        if PosCtrl == nil or PosCtrl == 0 then
            Browser.ExecJS_async('SidePanel', "OGS.onJobOrTaskChanged(0, "..tostring(Tool)..");")
        else
            Browser.ExecJS_async('SidePanel', "OGS.onJobOrTaskChanged(1, "..tostring(Tool)..");")
        end
        M.key = key
    end
    if PosCtrl == nil or PosCtrl == 0 then
        M.curtask.tracking = false
        M.curtask.job = ''
        M.curtask.task = ''
        return "Position control not enabled for this task!"
    end
    if M.tracking ~= true then
        XTRACE(16, 'Tracking: START: ' .. JobName .. ':' .. BoltName);
        M.StartTasks(JobName)
    end

--    local initErr = Init()
--    if initErr then return initErr end

    -- Notify driver of possible changes in expected position
    M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    -- Get the current position
    local pos, err = M.GetCurrentToolPos(Tool)
    if pos == nil then
        -- error!
        M.InPos = -1
        return err -- "No position info available!"
    end

--	if mode == 2 then
-- 		return true  -- if tool was already started then ignore tool position
--	end

    -- calculate difference
    local inpos, dif_x,dif_y,dif_z = M.GetDistance(Tool, pos)
    if inpos == nil then
        -- no useful positioning info available???
        return 'No diff!'
    end
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
    if M.tracking ~= true then
        XTRACE(16, 'Positioning: start tracking: ' .. JobName .. ':' .. BoltName);
        M.StartTasks(JobName)
    end

    M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local pos, err = M.GetCurrentToolPos(Tool)
    if pos == nil then
        -- error!
        return 0
    end

    local new_state = nil  --
    if State == 2 then -- start_teaching
        new_state = 3 -- stop_teaching = 3
    end

    -- this string will be used as ToolPosDef parameter by "PS_CheckToolPosition" function call
    local newToolPosDef = M.EncodePos(pos.posx, pos.posy, pos.posz, M.curtask.pos, pos.dirx, pos.diry, pos.dirz)
    local inpos, dif_x,dif_y,dif_z = M.GetDistance(Tool, pos)
    if inpos == nil then
        -- no useful positioning info available???
        return 'No diff!'
    end
    local DisplayMsg = string.format("%+d/%+d/%+d", dif_x,dif_y,dif_z)
    return new_state, dif_z,dif_y,dif_x, newToolPosDef, DisplayMsg

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
    -- TODO: maybe only show the panel if paused?
    local paused = (WFState == 1)
    local isAdmin = (UserManager.user_level > 1)
    if paused and isAdmin and M.curtask.PosCtrl and M.curtask.PosCtrl > 0 then
        ShowSidePanel()
    end
    return false            -- true would block OGS default click handling
end
function Panel_OnSTKNButtonClicked(tool, toolType, WFState, WFLockReason)
    -- TODO: maybe only show the panel if paused?
    local paused = (WFState == 1)
    local isAdmin = (UserManager.user_level > 1)
    if paused and isAdmin and M.curtask.PosCtrl and M.curtask.PosCtrl > 0 then
        ShowSidePanel()
    end
    return false            -- true would block OGS default click handling
end

-- !!!!!!!!!!!!!! WARNING: handler is single instance and might break other handlers !!!!!!!!!!!!
local function OnSidePanelMsg(name, cmd)
--    XTRACE(16, string.format("name=%s, cmd=%s", tostring(name), tostring(cmd)))
    local chn = nil
    if M.curtask.Tool then
        chn = M.channels[M.curtask.Tool]
    end
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
            if type(chn.pos) == 'table' then
                p.Pos = chn.pos
                p.Error = nil
            else
                p.State = -1                    -- Positioning not running
                p.Error = 'no data'             -- Positioning error message
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


return M