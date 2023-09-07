local api = require('luaart')
local json = require('cjson')

local M =
{
    tracking = nil
}


M.Init = function(chn)
    -- global ART DLL init
    if M.dev == nil then
        local ret = api.init()
        if ret ~= true then
            XTRACE(1, "Failed to initialize the ART API!")
            -- error("Failed to initialize the ART API!")
            SetLuaAlarm('ART', -2, string.format('AR-Tracking: Failed to initialize, err: %s!', tostring(err)))
            return nil
        end
        M.dev = api.open()
    end
    chn.mod = {}
    -- currently no config needed
    local cfg = {}
    chn.mod.cfg = cfg
    return nil -- OK!
end

M.UpdatePos_Abs3D = function(chn, x, y, z, rx, ry, rz)
    local pos = {
        -- the calculated carthesian values
        posx = x,
        posy = y,
        posz = z,
        dirx = rx,
        diry = ry,
        dirz = rz,
    }
    if chn.pos ~= pos then
        XTRACE(16, string.format("Pos: x/y/z: %.2f/%.2f/%.2f", x, y, z))
        chn.pos = pos
    end
    return pos  -- OK!
end

-- check, if the position is already available and update it eventually
function M.SelectPos(chn, pos)
    local cfg = chn.mod.cfg
    local ok, err = M.dev:add_position(pos)
    if ok ~= true then
        -- maybe overlapping positions?
        SetLuaAlarm('ART', -2, string.format('AR-Tracking: Tool %d: Cannot set position, err=%s!',
            chn.chn, param_as_str(err)))
    end
end

function M.StartTask(chn, JobName)
    -- start the positioning system
    -- select the workspace
    XTRACE(2, "START TASK")
    if not M.tracking then
        M.dev:set_workspace(JobName)

        --   	-- check the bolts and possibly update them
        --   	local art_poslist, err = M.dev:get_position_list()

        -- NOTE: as we don't have the list of positions for the job, simply 
        --       delete all positions from the ART interface and add them 
        --       later step by step...
        M.dev:del_position_list()

        -- finally, start tracking
        local ok, err = M.dev:start()
        if ok ~= true then
            SetLuaAlarm('ART', -2, string.format('AR-Tracking: Failed to start tracking, err: %s!', tostring(err)))
        else
            M.tracking = true
            ResetLuaAlarm('ART')
        end
        return ok
    end
    return true
end

function M.StopTask(chn, JobName)
    -- stop tracking
    XTRACE(2, "STOP TASK")
    if M.tracking then
        local ret = M.dev:stop()
        if (ret == 0) then
            ResetLuaAlarm('ART')
        end
    end
    M.tracking = nil
    return 0                -- ok
end


-- Get current position
-- Return:
--    pos, inpos    inpos = 0/1 or nil (if inpos is external)
--    nil, error    if no position is available
M.GetCurrentToolPos = function(chn, expectedpos)

    local inpos, pos  = M.dev:find_position(chn.chn)
    if inpos ~= nil then
		if inpos == 1 then
            if expectedpos ~= nil then  -- shall we check against a given position?
			    if expectedpos.id ~= pos.id then
                    inpos = 0
			    end
            end
		end
        return pos, inpos
    else
        -- some error
        return nil, pos -- pos is now an error string!
    end
--[[
    local connected = M.IsConnected() and inpos ~= nil
    if not M.Connected and connected then
        XTRACE(16, "ART connected!")
    end
    if M.Connected and not connected then
        XTRACE(1,"ART DISCONNECTED!")
    end
    M.Connected = connected

    if not M.Connected then
        return nil, "not connected"
    end
]]--
end

return M