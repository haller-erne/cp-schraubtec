local M = {
    tracking = nil,
    inpos = nil,
}

-----------------------------------------------------------------------------------------
local function trim(s)
    return (s~=nil) and s:match "^%s*(.-)%s*$" or nil
end

-----------------------------------------------------------------------------------------
local function read_ini_params(inisection)

    local cfg  ={
        ofs = 0,
    }
	local tbl = ReadIniSection(inisection)
	if type(tbl) ~= 'table' then
		return nil, string.format('INI-section: "%s": section missing!', inisection)
	end
    -- if type(tbl.DEBUG) == 'string' then
    --  cfg.ofs = tonumber(tbl.OFS)
    -- end
    if type(tbl.DEBUG) == 'string' then   -- set debug level
        cfg.DEBUG = tonumber(tbl.DEBUG)
    else
        cfg.DEBUG = 0
    end
    return cfg
end
-----------------------------------------------------------------------------------------
-- local channels/tools configuration section and/or registry parameters
M.Init = function(chn)

    chn.mod = {}
    local cfg, err = read_ini_params(chn.section)
    if not cfg then
        XTRACE(11, 'Error reading station.ini:'..err)
        error('Error reading station.ini:'..err)
    end

    -- save the config params
    chn.mod.cfg = cfg
    chn.mod.state = {
        inpos = nil,
        tracing = nil,
    }
    return nil -- OK!
end

--M.UpdatePos_RotIncLenAbs = function(chn, rotation_inc, distance_abs, tilt_x, tilt_y, tilt_z)
--    return nil, 'not implemented!'
--end
--M.UpdatePos_RotIncLenInc = function(chn, rotation_inc, distance_inc, tilt_x, tilt_y, tilt_z)
--    return nil, 'not implemented!'
--end

M.UpdatePos_InPos = function(chn, isInPos)
    local state = chn.mod.state
    state.inpos = isInPos
    return 0
end

function M.StartTask(chn, JobName)
    local state = chn.mod.state
    -- start the positioning system
    -- select the workspace
    XTRACE(2, string.format("[tool %d] START TASK", chn.chn))
    if not state.tracking then
        -- NOTE: M.curtask.PosCtrl has the current position number
        state.tracking = true
    end
    return true
end

function M.StopTask(chn, JobName)
    local state = chn.mod.state
    -- stop tracking
    XTRACE(2, string.format("[tool %d] STOP TASK", chn.chn))
    if state.tracking then
        -- NOTE: M.curtask.PosCtrl has the current position number
        state.tracking = nil
    end
    return 0                -- ok
end

-- Get current position
-- Return:
--    pos, inpos    inpos = 0/1 or nil (if inpos is external)
--    nil, error    if no position is available
M.GetCurrentToolPos = function(chn, expectedpos)
    local inst = chn.mod

    -- TODO: check status
    -- int status, err = M.dev:get_status()
    local pos = {           -- we don't have any position info, so just return an empty data block
        posx = 0,
        posy = 0,
        posz = 0,
        dirx = 0,
        diry = 0,
        dirz = 0,
    }
    local inpos = inst.state.inpos
    if global_set_inpos then
        global_set_inpos(inpos)
    end
    return pos, inpos
end

return M