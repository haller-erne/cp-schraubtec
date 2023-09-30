---------------------------------------------------------------------------------------
-- custom NOK and loosen behaviour
local M = {
    initialized = nil,
    channels = {}
}

--[[
-- Implement NOK counter handling
local NOK_Counters = {
    MaxAllowedNok = 5,      -- block tool after 5 NOKs for a single bolt
    counter = {},           -- clear NOK counters
    user_level = 0
}

-- Get the current NOK count
local function GetCurrentNOKCounter()

    local job, task, action = get_current_action()
    if job > 0 and task > 0 then
        local JobName = Workflow.Jobs[job].Name
        local TaskName = Workflow.Jobs[job].Tasks[task].Name
        local key = JobName..TaskName
        if NOK_Counters.counter[key] then return NOK_Counters.counter[key] end
    end
    return 0
end

-- Called from OGS to override default NOK counter handling
function ProcessNOKCounters(error_code)

	if NOK_Counters.user_level > 1 then return end -- do not count NOKs if supervisor logged on

    local job, task, action = get_current_action()
    if job > 0 and task > 0 then
        local JobName = Workflow.Jobs[job].Name
        local TaskName = Workflow.Jobs[job].Tasks[task].Name
        local key = JobName..TaskName
        if error_code == 0 then  -- this is OK -> clear error counter
            NOK_Counters.counter[key] = nil
            ResetLuaAlarm('NOKAlarm');
        else
            if not NOK_Counters.counter[key] then
                NOK_Counters.counter[key] = 1
            else
                NOK_Counters.counter[key] = NOK_Counters.counter[key] + 1
            end
        end
    end
end

-- local NOK strategy (per operation)
--	process_nok_loosen = 0  default
--  process_nok_skip   = 1
--  process_nok_repeat = 2
--  process_nok_dont_check_rights = 16
--  < 0  - use global/default behaviour (NOK_STRATEGIE from station.ini)
function GetNokBehaviour(Tool, State, JobName, TaskName,  RundownName, rework)

    -- -- Add tool specific NOK handling here
    --    if rework > 0 and Tool >= 31 then
    --        return process_nok_repeat + process_nok_dont_check_rights
    --    end
    --
    --    if Tool == 29 then  -- check loader state
    --        return process_nok_repeat + process_nok_dont_check_rights
    --    end
    --
    --    return process_nok_loosen
    local key = JobName..TaskName
    if NOK_Counters.counter[key] and NOK_Counters.counter[key] >= NOK_Counters.MaxAllowedNok  then
        SetLuaAlarm('NOKAlarm', -1, 'NOK limit exceeded! Call superviser!');
        if rework > 0 then
            return process_nok_repeat
        else
            return process_nok_loosen
        end
    end
    return -1   -- process_nok_use_global_definition
end
]]--
function GetNokBehaviour(Tool, State, JobName, TaskName,  RundownName, rework)
    if Tool == 1 then   -- GWK
        return process_nok_repeat + process_nok_dont_check_rights
    end
    if Tool >= 11 and Tool <= 13 then   -- TASS measurements - no need to loosen here!
        return process_nok_repeat + process_nok_dont_check_rights
    end
--[[
    if true then
        user_rights[1000] = 1000
        return -1
    end
    if M.channels[Tool] ~= nil then
        local chn = M.channels[Tool]
        if chn.nok_loosen > 0 then
            -- always allow CCW loosen after Nok (even for operator access level)
            return process_nok_repeat + process_nok_dont_check_rights
        end
    end
]]--
    return -1       -- use behaviour from station.ini
end

-- initialize the module, read config, etc.
M.Init = function()
    local cfg, err
    M.channels = {}
	local tbl = ReadIniSection('OPENPROTO')
	if type(tbl) ~= 'table' then
		error('INI-section: "OPENPROTOCOL": section missing!')
	end
    for k,v in pairs(tbl) do
        local channel = k:match("CHANNEL_(%d%d)_CUSTOM_NOK_LOOSEN")
        if channel ~= nil then
            -- found something
            local chn = {
                chn = tonumber(channel),
                nok_loosen = tonumber(v)
            }
        end
    end
    M.initialized = true
end
--[[
-- StatePoll is called cyclically
local function OnStatePoll(info)

    local wf = info.Workflow
    if not M.initialized then
        XTRACE(16, "Init positioning...")
        M.Init()
    end
end

if StatePollFunctions ~= nil then
	StatePollFunctions.add(OnStatePoll)
end
]]--
M.Init()
return M