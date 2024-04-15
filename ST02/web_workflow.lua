local json = require('cjson')
local wfd = require('workflow_data')
-- this is needed to register the browser callback - TODO: change this to include a (better) key
local WebBrowser_Url = 'http://127.0.0.1:59990/cad-viewer.html'
local M = {}

local function SendWorkflowData(name)
--    local wf_data = wfd.GetData()                   -- get the "full" block
--    local wf_mqtt = GetMqttWorkflowData(wf_data)    -- copy only what we need :-)
--    MQTT:Publish("/heOpMon/wfd", 0, json.encode(wf_mqtt))
    local data = wfd.GetData()
    local ok, res = pcall(json.encode, data)
    if not ok then
        error(res)
    end
    Browser.ExecJS_async(name, "UpdateData('"..res.."');")
end

local function OnStatePoll(info)
    -- check our workflow for changes
    local hasChanges = wfd.StatePoll(info)
	local wf_data = wfd.GetData()
    if not wf_data or not wf_data.jobs or not wf_data.jobs[1] or not wf_data.jobs[1].Actions then
        return
    end
	if hasChanges then
        SendWorkflowData("ProcessView")
    end
end

local oldState = 0
local function OnStateChanged(info)
    local hasChanges = wfd.StateChange(info)  -- update the workflow data
	local wf_data = wfd.GetData()
	if not wf_data or not wf_data.jobs or not wf_data.jobs[1] or not wf_data.jobs[1].Actions then
        return
    end
	local wf = info.Workflow
	if wf.State ~= oldState or hasChanges then
        SendWorkflowData("ProcessView");
    end

--[[
	local msg = string.format("{ \"State\":%d, \"Part\":\"%s\", \"ID\":\"%s\", \"jobname\":\"%s\", \"opnum\":\"%d\" }",
        wf.State, wf.PartName, wf.PartSerial, wf.JobName, wf.Op)
	MQTT:Publish("/heOpMon/workflowstate", 1, msg);
	--MQTT:Publish("/heOpMon/workflowjson", 0, json.encode(info))

	--XTRACE(16, "MQTT: Workflow State="..Workflow.State.." tt="..wftagtime)
	if wf.State ~= oldState then
		-- send a state change notifivation over MQTT
		XTRACE(16, "MQTT: Workflow state change: "..tostring(oldState).."-->"..tostring(wf.State))
		hasChanges = true           -- always send whenever something has changed

		if oldState == 0 and wf.State > 0 then
			-- new workflow started
			-- send initial status
		end
		oldState = wf.State
	end
    if 	shouldSend or hasChanges then
        SendNodeRedData()
    end
]]--
end

local function OnShutdown()
	XTRACE(16, "WWF: Shutdown...")
end

local function OnSidePanelMsg(name, cmd)
--    XTRACE(16, string.format("name=%s, cmd=%s", tostring(name), tostring(cmd)))
    local o = json.decode(cmd)
    if o and o.cmd then
        if o.cmd == 'get-config' then
            -- assemble an object to send tool and workflow (static) data to the webpage
            local data = {
                config = Config,
                tools = Tools,
                data = wfd.GetData()
            }
            local ok, res = pcall(json.encode, data)
            if not ok then
                error(res)
            end
            Browser.ExecJS_async(name, "UpdateConfig('"..res.."');")
            return
        elseif o.cmd == 'get-data' then
            local data = wfd.GetData()
            local ok, res = pcall(json.encode, data)
            if not ok then
                error(res)
            end
            Browser.ExecJS_async(name, "UpdateData('"..res.."');")
            return
        elseif o.cmd == 'set-params' then
            -- M.curtask.pos.angle     = tonumber(o.params.Pos.angle)
            return
        end
    end
end
Browser.RegMsgHandler('ProcessView', OnSidePanelMsg, "");   -- NOTE: for ProcessView, the URL-specific handler does not work currently! (WebBrowser_Url)

-- register the callbacks with core.
if StatePollFunctions ~= nil then
	StatePollFunctions.add(OnStatePoll)
end
if StateChangedFunctions ~= nil then
	StateChangedFunctions.add(OnStateChanged)
end
if StateShutdownFunctions ~= nil then
	StateShutdownFunctions.add(OnShutdown)
end

return M