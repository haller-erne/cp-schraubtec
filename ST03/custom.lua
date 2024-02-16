---------------------------------------------------------------------------------------

-- do not show the "return all tools to the socket tray" message
function CheckExternalConditions(secondsRunning, socket, state)
    return 0 -- don't wait for return sockets back on end of process
--[[
    if 0 == Socket then 
        return 0 -- don't wait for return sockets back on end of process
    end  
    if 0 ~= Socket then 
        return 1 -- show notification
    else
	    return 2 -- wait   while secondsRunning < 5
    end
]]--     
end

--[[
local oldEvaluateExternalIO = EvaluateExternalIO
function EvaluateExternalIO(Tool, Socket, Inputs, Outputs, Pos)

    -- tool 3 has custom socket tray
    if Tool == 3 then
    else
        return oldEvaluateExternalIO(Tool, Socket, Inputs, Outputs, Pos)
    end
end
]]--


---------------------------------------------------------------------------------------
-- webbrowser stuff
local function OnSidePanelMsg(name, cmd)
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


