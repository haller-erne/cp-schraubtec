-- add the shared folder (..\shared)
OGS.Project.AddPath('../shared')

-- Start the debugger (automatically detects, if running under VSCode Lua Local Debug)
require('lua-local-debugger')

requires = {
	"barcode",
	"usb_button",
	--"user_manager",
	--"positioning_enip_iolink",
	"custom",
	--"resultdata",
	"custom_nok_handling",
	"lua_tool_delay",
	"lua_tool_tass",
	"station_io",
	-- "lua_tool_mqtt",
	"sim",
	"heEventLogMqtt.lua",
}
current_project.logo_file = 'JH.png'
current_project.billboard = 'http://127.0.0.1:59990/billboard.html'



