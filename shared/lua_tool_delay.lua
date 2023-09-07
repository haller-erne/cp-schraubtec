-- LUA custom tool to implement a "wait" or "countdown" function
-- NOTES:
--  * Requires a custom "action" parameter "delay" of type number,
--    which is the countdown/delay in (fractional) seconds.
--  * Tries to call javascript in the browser windows to 
--    allow custom visualization pages
local json = require('json')	

local _M = {
	type = 'LUA_DELAY',     -- type identifier (as in INI file)
	channels = {},  	    -- registered channels/instances for this tool driver
}

-------------------------------------------------------------
-- callback: initialize driver
function _M.registration(tool, ini_params)

    XTRACE(16, string.format('tool[%d]: registering tool', tool))
	local channel = _M.channels[tool]
	if channel ~= nil then
		return 'multiple tool definition'
	end
	-- register channel
	_M.channels[tool] = {
		tool = tool,
		ini_params = CloneTable(ini_params),
		conn_state = lua_tool_connected,
		task_state = lua_task_idle,
		dll_state  = dll_tool_idle,
		start_time = 0, 
		conn_attr = {},
		browser_upd = 0,
	}
	
	return 'OK'
end
-----------------------------------------------------------------------------    
-- callback: cyclically called from core
function _M.start(tool, prg)

	local channel = _M.channels[tool]
	if channel == nil then
		channel.task_state = lua_task_not_ready
	else
        -- get the parameters for the job/task/action
        local wf = Workflow
        local props = {
            -- job = get_object_property(1),
            -- task = get_object_property(2),
            action = get_object_property(3)
        }
		channel.DELAY = 10        -- set 10 seconds as default
        if props.action and props.action.delay then
	        channel.DELAY = tonumber(props.action.delay)
	    end
		channel.start_time = os.clock()
		channel.task_state = lua_task_processing
	end
	return channel.task_state	
end

function _M.poll(tool, state)

	channel = _M.channels[tool]
	if channel == nil then
		channel.task_state = lua_task_not_ready
		return lua_task_not_ready
	end

	channel.dll_state = state
	if (state == dll_tool_idle) 	or
  	   (state == dll_tool_disable)  or
	   (state == dll_tool_wait_release) then
 		channel.task_state = lua_task_idle
		return lua_task_idle
	end
	if (state == dll_tool_enable and channel.task_state ~= lua_task_completed) then
		if channel.task_state == lua_task_processing then
		    local elapsed = os.clock() - channel.start_time
			if ((channel.DELAY == 0) or (elapsed >= channel.DELAY)) then
				-- done
				elapsed = channel.DELAY
				_M.save_results(tool, 1)
			end
		    -- update the browser
		    if (os.clock() - channel.browser_upd > 0.5) then
    			local sCmd = string.format("UpdateTimer(%f, %f);", elapsed, channel.DELAY)
		        Browser.ExecJS_sync("ProcessView", sCmd)
		        channel.browser_upd = os.clock()
		    end
		end
	end	
	return channel.task_state
end
-----------------------------------------------------------------------------------
-- core callback: return conn attr and lua tool state (connected/not)
function _M.get_conn_attr(tool)
	channel = _M.channels[tool]
	if channel == nil then
		return lua_tool_reg_error
	end
	return channel.conn_attr, channel.conn_state
end
-----------------------------------------------------------------------------------
-- helper to finish operation
function _M.save_results(tool, error_code)

	channel = _M.channels[tool]
	channel.task_state = lua_task_completed
	channel.conn_state = lua_tool_connected

	if error_code == 1 then error_code = 0     -- OK
	elseif error_code == 0 then error_code = 1 -- NOK
	end

	local values = {0.0, 0.0, 0.0, 0.0, 0.0, 0.0}

	seq = 0
	step = 'A2'
	status = lua_tool_result_response(tool, error_code, seq, step, values)
	if status == 0 then
		XTRACE(1, tool..' '..param_as_str(tool)..' is not active')
	else  if status < 0 then
			XTRACE(16, string.format('tool [%d] invalid parameter set (error=%d)', tool, status))
		  end
	end
	return 0
end

--=================================================================================================
--
--				API implementation for gui_support interface (gui_support.lua)
--
--=================================================================================================

------------------------------------------------
-- Get the tool specific measurement units for modbus <=> data mapping
-- @param tool: channel number as configured in station.ini
-- @output:  applicable only for the first two values (from 6)

function  _M.get_tool_units(tool)

	return '', '','', ''

end

function _M.get_tool_resultinfo(tool)
	return { }
end

----------------------------------------------------------------------------------------------
-- process raw values from DLL
-- @param tool: channel number as configured in station.ini
-- @output: values ready to show and to save into database

function _M.process_tool_result(tool)
	return 0 --  use raw values without preprocessing
end
------------------------------------------------

-- Get the tool specific result string
function _M.get_tool_result_string(tool)

	local ResultValues = gui_lua_support.ResultValues
	if tool ~= ResultValues.Tool then
		return 'invalid tool'
	end
	if ResultValues.QC == 1 then
	    return 'OK'	
	end    
    return 'NOK'	
end
------------------------------------------------

-- Get the tool specific footer string
function _M.get_footer_string(tool)
	return 'delay'
end
------------------------------------------------
-- Get the tool specific program name
function _M.get_prg_string(tool)
	return 'vt'
end
--==========================================================================

-- register this driver in the global tool type table
XTRACE(16, 'lua_tool: registering "'.._M.type..'"')
lua_known_tool_types.add_type(_M)

return _M