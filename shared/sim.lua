
-------------------------------------------------------------
-- register driver class/type
local lua_virtual_tool = {
	type = 'SIMULATION', 	-- type identifier (as in INI file)
	channels = {},  	-- regisrered channels
}
lua_known_tool_types.add_type(lua_virtual_tool)

-------------------------------------------------------------
-- callback: initialize driver
function lua_virtual_tool.registration(tool, ini_params)

	channel = lua_virtual_tool.channels[tool]
	if channel ~= nil then
		return 'multiple tool definition'
	end
	-- check timeout, default to 1 second
	if ini_params.DELAY == nil then
	    ini_params.DELAY = 1
	end
	ini_params.DELAY = 3
	-- register channel
	lua_virtual_tool.channels[tool] = {
		tool = tool,
		ini_params = CloneTable(ini_params),
		task_state = lua_task_idle,
		dll_state  = dll_tool_idle,
		DELAY       = tonumber(ini_params.DELAY),
		start_time    =  0, 
		conn_attr = {},
	}
	channel = lua_virtual_tool.channels[tool]
	-- check initialization parameters

	channel.conn_state = lua_tool_connected
	XTRACE(16, 'Lua Virtual Tool '..param_as_str(tool)..' Dealay='..param_as_str(channel.DELAY)) 

	--end
	return 'OK'
end

function lua_virtual_tool.start(tool, prg)
	channel = lua_virtual_tool.channels[tool]
	if channel == nil then
		return lua_tool_req_error
	end
	channel.start_time = os.clock()
	channel.task_state  = lua_task_processing 
	channel.DELAY = prg
end	
-----------------------------------------------------------------------------    
-- callback: cyclically called from core
function lua_virtual_tool.poll(tool, state)

	channel = lua_virtual_tool.channels[tool]
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
		if channel.task_state  == lua_task_processing then
			if (os.clock() - channel.start_time >= channel.DELAY) then
				lua_virtual_tool.save_results(tool, 1)
			end
		end
	end	
	return channel.task_state
end
-----------------------------------------------------------------------------------
-- core callback: return conn attr and lua tool state (connected/not)
function lua_virtual_tool.get_conn_attr(tool)
	channel = lua_virtual_tool.channels[tool]
	if channel == nil then
		return lua_tool_reg_error
	end
	return channel.conn_attr, channel.conn_state
end
-----------------------------------------------------------------------------------
-- helper to finish operation
function lua_virtual_tool.save_results(tool, error_code)

	channel = lua_virtual_tool.channels[tool]
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

function  lua_virtual_tool.get_tool_units(tool)

	return '', '','', ''

end

function lua_virtual_tool.get_tool_resultinfo(tool)
	return { }
end

----------------------------------------------------------------------------------------------
-- process raw values from DLL
-- @param tool: channel number as configured in station.ini
-- @output: values ready to show and to save into database

function lua_virtual_tool.process_tool_result(tool)
	return 0 --  use raw values without preprocessing
end
------------------------------------------------

-- Get the tool specific result string
function lua_virtual_tool.get_tool_result_string(tool)

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
function lua_virtual_tool.get_footer_string(tool)
	return 'virtual tool'
end
------------------------------------------------
-- Get the tool specific program name
function lua_virtual_tool.get_prg_string(tool)
	return 'vt'
end
--==========================================================================
