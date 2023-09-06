-- add the shared folder (..\shared)
OGS.Project.AddPath('../shared')

-- Start the debugger (automatically detects, if running under VSCode Lua Local Debug)
require('lua-local-debugger')

requires = {
	"barcode",
	--"user_manager",
	--"positioning_enip_iolink",
	--"custom",
	--"resultdata",
	"custom_nok_handling",
	"station_io",
	"sim",
}
current_project.logo_file = 'rexroth.png'
current_project.billboard = 'http://127.0.0.1:59990/billboard.html'



