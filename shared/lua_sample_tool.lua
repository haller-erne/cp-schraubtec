
sample_tool = {
	type = 'LUA_SAMPLE_TOOL', 	-- type identifier (as in INI file)
	channels = {},  	-- registered channels
}
lua_known_tool_types.add_type(sample_tool)

-- Functions that need obligatory custom implementation
-------------------------------------------------------------
-- @ output: true|false  - tool enabled/not inabled
sample_tool.enable = function(channel)
    return true
end	
-----------------------------------------------------------------------------------
-- function is called only if tool is connected, enabled and task is not completed
-- @ output: lua task status to show in OGS GUI:  lua_task_processing | lua_task_completed | ....
--           see the full list of possible return values in "lua_tool.lua"
sample_tool.execute = function(channel)

	-- LUA code --
	
	return lua_task_processing  -- lua_task_completed | ..  info to show in OGS GUI
end
--[[  
-------------------------------------------------------------
-- Functions that do not need obligatory custom implementation
-- if function is not defined then default implementation will be used (see in "lua_tool.lua" ) 
-------------------------------------------------------------
-- @ output: true|false  - tool disabled/not disabled
sample_tool.disable = function(channel)
    return true
end	
-----------------------------------------------------------------------------------
-- @ output: true|false  - tool inactive/not inactive
sample_tool.deactivate = function(channel)
    return true
end	
-------------------------------------------------------------
-- @ output: true|false  - tool activated/not activated
sample_tool.activate = function(channel)
    return true
end	
-------------------------------------------------------------
-- @ output: true|false  - tool activated/not activated
sample_tool.check_connection = function(channel)
    return true
end    
-------------------------------------------------------------
sample_tool.registration = function(tool, ini_params)
sample_tool.get_conn_attr = function(tool)
sample_tool.save_results = function(tool, values)
sample_tool.get_tool_units = function(tool)
sample_tool.get_tool_result_string = function(tool)
sample_tool.get_footer_string = function(tool)
]]
