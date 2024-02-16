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
    delta = {},
    key = nil,          -- if nil, then no position enabled task, else <Part+Job+Task>
    defaults = {
        posx = 10, posy = 10, posz = 10,    -- (float) location
        dirx = 0, diry = 0, dirz = 0,
        tolerance = 0,                      -- tolerance kind (0=sphere, 1=cylinder, 2=frustum, 3=cylinder+frustrum)
        r1 = 20,                            -- primary tolerance radius
        h1 = 20,                            -- primary tolerance height
        r2 = 20,                            -- secondary tolerance radius
        h2 = 20,                            -- secondary tolerance height
        offset = 0,                         -- tool head offset/length
        angle = 0,                          -- no angle check
    }
}
local initialized = nil

local tools = require('positioning_tools')
local json = require('cjson')
local math = require('math')

local drivers = {
    -- TODO: add position encoding, defaults, ... to driver
    ART = require('positioning_ART'),
    IO = require('positioning_IO'),
    DIGITAL = require('positioning_DIGITAL'),
}

-- allow adding/overriding driver modules
-- call as:
--   LoadDriverModule(name) to load <name>.lua and register it as <name>
--   LoadDriverModule(name, module) to load <module>.lua and register it as <name>
M.LoadDriverModule = function(name, module)
    if module == nil then module = name end
    drivers[name] = require(module)
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
-- simple digital inpos
M.UpdatePos_InPos = function(tool, isInPos)
    -- select tool, then set inpos
    local chn = M.channels[tool]
    if chn == nil then
        XTRACE(1, 'error invalid tool')
        return nil, 'invalid tool'
    end
    if not chn.drv.UpdatePos_InPos then return nil, 'InPos not implemented!' end
    local pos, err = chn.drv.UpdatePos_InPos(chn, isInPos)
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
    return string.format("%01d%+06.0f%+06.0f%+06.0f%03d%03d%03d%03d%-04d%+05.0f%+05.0f%+05.0f%03d",
        pos_cfg.tolerance,      -- type of tolerance
        cur_x, cur_y, cur_z,    -- in mm
        pos_cfg.r1,        -- in mm
        pos_cfg.h1,        -- in mm
        pos_cfg.r2,        -- in mm
        pos_cfg.h2,        -- in mm
		pos_cfg.offset or 0,	-- in mm
        dirx*1000, diry*1000, dirz*1000, -- 0.1 degrees or normal-vector*1000
        pos_cfg.angle)          -- degrees
end

-- convert a database string int a position info lua object
function M.DecodePos(ToolDefPos, id)
   if type(ToolDefPos) ~= "string" or #ToolDefPos ~= 53 then
        -- nothing stored in the database
        local pos = {      				-- table with position info
            id = id,    				        -- position_id (is unique in the job context)
            tolerance = M.defaults.tolerance,
            posx = M.defaults.posx,
            posy = M.defaults.posy,
            posz = M.defaults.posz,            -- (float) location
            dirx = M.defaults.dirx,
            diry = M.defaults.diry,
            dirz = M.defaults.dirz,
            r1 = M.defaults.r1,
            h1 = M.defaults.h1,
            r2 = M.defaults.r2,
            h2 = M.defaults.h2,
            offset = M.defaults.offset,        -- tool head offset/length
            angle = M.defaults.angle,
        }
        return pos
    end
    local pos = {
        id = id,
        tolerance = tonumber(ToolDefPos:sub( 1,  1)),
        posx = tonumber(ToolDefPos:sub( 2,  7)),
        posy = tonumber(ToolDefPos:sub( 8, 13)),
        posz = tonumber(ToolDefPos:sub(14, 19)),
        r1 = tonumber(ToolDefPos:sub(20, 22)),
        h1 = tonumber(ToolDefPos:sub(23, 25)),
        r2 = tonumber(ToolDefPos:sub(26, 28)),
        h2 = tonumber(ToolDefPos:sub(29, 31)),
        offset = tonumber(ToolDefPos:sub(32, 35)),      -- tool head offset/length
        dirx = tonumber(ToolDefPos:sub(36, 40))/1000,
        diry = tonumber(ToolDefPos:sub(41, 45))/1000,
        dirz = tonumber(ToolDefPos:sub(46, 50))/1000,
        angle = tonumber(ToolDefPos:sub(51, 53)),
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
        XTRACE(1, 'Positioning: start task: error invalid tool: '..param_as_str(tool))
        return nil, 'invalid tool'
    end
    local posname = JobName..BoltName
    if M.posname ~= posname or M.db_cfg ~= ToolPosDef then
        -- task changed - update positioning system
        XTRACE(16, string.format("Selected pos changed: Job=%s task=%s pos=%s, Cfg=%s",
            param_as_str(JobName), param_as_str(BoltName), param_as_str(PosCtrl), param_as_str(ToolPosDef)))
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

    local inpos, dif_x, dif_y, dif_z, r_x, r_y, r_z = tools.calc_distance(curpos, exppos)

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
            chn.err = nil
        else
            XTRACE(1, 'Positioning: error returned from GetCurrentToolPosition: '..param_as_str(inpos))
            chn.pos = nil
            chn.err = inpos
            return nil, inpos
        end
        return chn.pos, inpos
    else
        -- chn.pos is set by calling one of the UpdatePos_XXX functions!
        -- return the last reported position and nil for inpos - this indicates,
        --   to check with our own code for InPos
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
function M.StartTasks(Tool, JobName)
    -- make sure to activate tracking only for a single tool
    if M.tracking then
        if M.tracking == Tool then
            return                      -- we are already tracking this tool
        else
            M.StopTask(Tool, JobName)   -- stop tracking the old tool
        end
    end
    --for tool in pairs(M.channels) do    -- for tool,chn in pairs(...)
    --    M.StartTask(tool, JobName)
    --end
    M.StartTask(Tool, JobName)
    M.tracking = Tool
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
    if M.tracking then
        --for tool in pairs(M.channels) do   -- for tool, chn in pairs(M.channels) do
        --    M.StopTask(tool, JobName)
        --end
        M.StopTask(M.tracking, JobName)
    end
    M.tracking = nil
    M.posname = nil
    M.pos_cfg = nil
    M.curtask.tracking = false
    M.curtask.job = ''
    M.curtask.task = ''
end

function M.Shutdown()
    -- M.StopTask(M.tracking, JobName)
    for tool,chn in pairs(M.channels) do
        if chn.drv.Shutdown then
            chn.drv.Shutdown(chn)
        end
    end
end

M.save_reference = function(x, y)
    -- TODO: forward to actual driver
end

-- initialize the module, read config, etc.
-- TODO: improve reading ini file, so far only works for OPENPROTOCOL tools...
local function Init()
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
                XTRACE(16, string.format("Positioning: Add Tool %d: %s", chn.chn, v))
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
        if wf.State <= 1 then           -- workflow completed or wait for job
            XTRACE(16, 'Tracking: STOP: ' .. wf.JobName .. ':' .. wf.BoltName);
            M.StopTasks(wf.JobName)
        end
    end
    M.wfState = wf.State

end

-- Shutdown hook - make sure to call the ART close() function to cleanup everything
local function OnStateShutdown()
    M.Shutdown()
end

if StateChangedFunctions ~= nil then
	StateChangedFunctions.add(OnWorkflowStateChanged)
end
if StatePollFunctions ~= nil then
	StatePollFunctions.add(OnStatePoll)
end
if StateShutdownFunctions ~= nil then
	StateShutdownFunctions.add(OnStateShutdown)
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
    local chn = M.channels[Tool]
    if chn == nil then
        -- seems like the positioning driver name is missing for the tool in station.ini!
        return 'invalid tool '..param_as_str(Tool)
    end
    M.curtask.PosCtrl = PosCtrl
    M.curtask.Tool    = Tool
    local key = M.GetKey(JobName, BoltName)
    if TaskState_old ~= TaskState or TaskStep_old ~= TaskStep or M.key ~= key then
        XTRACE(16,
            string.format('PS_CheckToolPosition: Tool=%d, Job=%s, Task=%s, PosCtrl=%d, TaskState=%d, TaskStep=%d',
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
    if not M.tracking then
        XTRACE(16, 'Tracking: START: ' .. JobName .. ':' .. BoltName);
        --M.StartTasks(JobName)
        M.StartTasks(Tool, JobName)
    end

--    local initErr = Init()
--    if initErr then return initErr end

    -- Notify driver of possible changes in expected position
    M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    -- Get the current position
    local pos, inpos = M.GetCurrentToolPos(Tool)
    if pos == nil then
        -- error!
        local err = inpos
        M.InPos = -1
        return err -- "No position info available!"
    end

--	if mode == 2 then
-- 		return true  -- if tool was already started then ignore tool position
--	end

    -- calculate difference
    local inpos2, dif_x,dif_y,dif_z = M.GetDistance(Tool, pos)
    if inpos == nil then
        -- Driver did not return inpos info - use the M.GetDistance info.
        -- * for ART (and others), inpos is returned from M.GetCurrentToolPos
        -- * for simple sensors, we need to calculate it ourselfs (M.GetDistance)
        inpos = inpos2
    end
    if inpos == nil then
        -- no useful positioning info available???
        return 'No diff!'
    end
    M.InPos = inpos
    M.delta.dif_x   = dif_x
    M.delta.dif_y   = dif_y
    M.delta.dif_z   = dif_z
    if inpos == true or inpos == 1 then
        return true, "Ok"       -- in position
    else
        local diff = string.format("%+.0f/%+.0f/%+.0f", dif_x, dif_y, dif_z)
        return false, diff       -- true if in position!
    end
end

--------------------------------------------------------------------------------
function PS_TeachToolPosition(State, Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local chn = M.channels[Tool]
    if chn == nil then
        XTRACE(1, 'Positioning: teach_tool_position: error invalid tool: '..param_as_str(Tool))
        return nil, nil,nil,nil, '-', '!! Invalid tool '..param_as_str(Tool)..' !!'
    end

-- "parameter/return value" State: 	unknown = 0, teaching_in_process = 1, start_teaching = 2, stop_teaching = 3
    if not M.tracking then
        XTRACE(16, 'Positioning: start tracking: ' .. JobName .. ':' .. BoltName);
        M.StartTasks(Tool, JobName)
    end
    M.curtask.PosCtrl = PosCtrl
    M.curtask.Tool    = Tool

    M.SelectPos(Tool, JobName, BoltName, PosCtrl, ToolPosDef)
    local pos, inpos = M.GetCurrentToolPos(Tool)
    if pos == nil then
        -- error!
        M.InPos = -1
        local err = inpos
        -- TODO: return the correct error!
        return 0
    end

    local new_state = nil  --
    if State == 2 then -- start_teaching
        new_state = 3 -- stop_teaching = 3
    end

    -- this string will be used as ToolPosDef parameter by "PS_CheckToolPosition" function call
    local newToolPosDef = M.EncodePos(pos.posx, pos.posy, pos.posz, M.curtask.pos, pos.dirx, pos.diry, pos.dirz)
    local inpos2, dif_x,dif_y,dif_z = M.GetDistance(Tool, pos)
    if inpos == nil then
        -- Driver did not return inpos info - use the M.GetDistance info.
        -- * for ART (and others), inpos is returned from M.GetCurrentToolPos
        -- * for simple sensors, we need to calculate it ourselfs (M.GetDistance)
        inpos = inpos2
    end
    if inpos == nil then
        -- no useful positioning info available???
        return 'No diff!'
    end
    M.InPos = inpos
    M.delta.dif_x   = dif_x
    M.delta.dif_y   = dif_y
    M.delta.dif_z   = dif_z
    local DisplayMsg = string.format("%+.0f/%+.0f/%+.0f", dif_x,dif_y,dif_z)
    return new_state, dif_z,dif_y,dif_x, newToolPosDef, DisplayMsg

end

--------------------------------------------------------------------------------
-- SIDEPANEL
--------------------------------------------------------------------------------
-- Wire up the panel button events
local Positioning_SidePlanel_Url = 'http://127.0.0.1:59990/positioning.html'
local function ShowSidePanel()
    Browser.Show('SidePanel', Positioning_SidePlanel_Url)
end
function Panel_OnToolButtonClicked(tool, toolType, WFState, WFLockReason)
    -- TODO: maybe only show the panel if paused?
    local paused = (WFState == 1)
    local isAdmin = (UserManager.user_level > 1)
    if paused and isAdmin and M.curtask.PosCtrl and M.curtask.PosCtrl > 0 then
        ShowSidePanel()
        return false            -- true would block OGS default click handling
    end
    return true -- do not allow to switch to teach mode if the above parameters are not valid!
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
    else
        error("failed!")
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
                editallowed = true,             -- TODO: only if teaching is active !!!
                Delta = {
                    posx = '', posy = '', posz = '',
                    dir = '',
                    dirx = '', diry = '', dirz = '',
                }
            }
            if type(chn.pos) == 'table' then
                p.Pos = chn.pos
                p.Error = nil
                p.Delta.posx = M.delta.dif_x    --p.Pos.posx - M.curtask.pos.posx
                p.Delta.posy = M.delta.dif_y    --p.Pos.posy - M.curtask.pos.posy
                p.Delta.posz = M.delta.dif_z    --p.Pos.posz - M.curtask.pos.posz
                if M.curtask.pos.angle ~= 0 then
                    p.Delta.dirx = p.Pos.dirx - M.curtask.pos.dirx
                    p.Delta.diry = p.Pos.diry - M.curtask.pos.diry
                    p.Delta.dirz = p.Pos.dirz - M.curtask.pos.dirz
                    -- Winkelabweichung zwischen den zwei Einheitsvektoren berechnen
                    -- Theoretisch sollte das Skalarprodukt zwischen zwei Einheitsvektoren
                    -- immer einen Wert zwischen -1 und 1 haben, aber wegen Rundung kann
                    -- die Länge auch größer 1 werden --> dann schlägt acos fehl...
                    local p1 = p.Pos
                    local p2 = M.curtask.pos
                    local len1 = p1.dirx * p1.dirx + p1.diry * p1.diry + p1.dirz * p1.dirz
                    local len2 = p2.dirx * p2.dirx + p2.diry * p2.diry + p2.dirz * p2.dirz
                    local snen = p1.dirx * p2.dirx + p1.diry * p2.diry + p1.dirz * p2.dirz
                    local ok, szal = pcall(math.sqrt(len1) * math.sqrt(len2))
                    if not ok or szal == 0 then szal = 1 end
                    local sp = snen / szal
                    if (sp > 1) then sp = 1 end     -- rounding errors
                    if (sp < -1) then sp = -1 end   -- rounding errors
                    local rad = math.acos(sp)
                    p.Delta.dir = 180 * (rad / math.pi)
                end
            else
                p.State = -1                    -- Positioning not running
                p.Error = chn.err or 'no data'  -- Positioning error message
            end
            --local par = json.encode(p)
            local ok, par = pcall(json.encode, p)
            if not ok then
                error(par)
            end
            Browser.ExecJS_async(name, "UpdatePosition('"..par.."');")
            return
        elseif o.cmd == 'get-params' then
            local p = {
                Job = M.curtask.job,
                Task = M.curtask.task,
                Tool = M.curtask.Tool,            -- TODO: tool name?
                Pos = M.curtask.pos,
                Driver = '',
                Ini = {},
            }
            if chn ~= nil then
                p.Driver = chn.cfg.DRIVER
                p.Ini = chn.cfg
            end
            p.Pos.PosCtrl = M.curtask.PosCtrl       -- add the missing position number
            local par = json.encode(p)
            Browser.ExecJS_async(name, "UpdateParams('"..par.."');")
            return
        elseif o.cmd == 'set-params' then
            M.curtask.pos.tolerance = tonumber(o.params.Pos.tolerance)
            M.curtask.pos.r1        = tonumber(o.params.Pos.r1)
            M.curtask.pos.h1        = tonumber(o.params.Pos.h1)
            M.curtask.pos.r2        = tonumber(o.params.Pos.r2)
            M.curtask.pos.h2        = tonumber(o.params.Pos.h2)
            M.curtask.pos.offset    = tonumber(o.params.Pos.offset)
            M.curtask.pos.angle     = tonumber(o.params.Pos.angle)
            -- update defaults
            M.defaults.tolerance    = tonumber(o.params.Pos.tolerance)
            M.defaults.r1           = tonumber(o.params.Pos.r1)
            M.defaults.h1           = tonumber(o.params.Pos.h1)
            M.defaults.r2           = tonumber(o.params.Pos.r2)
            M.defaults.h2           = tonumber(o.params.Pos.h2)
            M.defaults.offset       = tonumber(o.params.Pos.offset)
            M.defaults.angle        = tonumber(o.params.Pos.angle)
            return

        elseif o.cmd == 'save-ref' then
            if type(chn.pos) == 'table' then
                M.curtask.pos.offs_len = chn.pos.len
                M.curtask.pos.offs_rad = chn.pos.rad
                M.save_reference(M.curtask.pos.offs_len, M.curtask.pos.offs_rad)
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