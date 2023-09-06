---------------------------------------------------------------------------------------

-- do not show the "return all tools to the socket tray" message
function CheckExternalConditions(secondsRunning, socket, state)
    return 0
end

---------------------------------------------------------------------------------------
-- webbrowser stuff
function OnSidePanelMsg(name, cmd)
    XTRACE(16, string.format("name=%s, cmd=%s", tostring(name), tostring(cmd)))
    local v = OGS.Version
    Browser.ExecJS_nonblocking(name, "setVersion('"..v.s:sub(1,8).."');")
    --Browser.ExecJS_async(name, "alert('x.y.z');")
end
Browser.RegMsgHandler('SidePanel', OnSidePanelMsg)
Browser.RegMsgHandler('StartView', OnSidePanelMsg)

local function OnWebRequestLua(abspath, qrystr, verb, body)
    XTRACE(16, string.format("HTTP: request to %s, qry=%s, verb=%s, body=%s", tostring(abspath), tostring(qrystr), tostring(verb), tostring(body)))
    -- repare the response and return it
    return nil
end
Webserver.RegUrl('/lua', OnWebRequestLua)


local M = {
    initialized = nil,
    channels = {}
}

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

return M