# Project switching hints

By default, OGS selects the active project by reading and executing `monitor.lua` (located in the installation folder). 

To change projects, one would usually change the `monitor.lua` file and point it to the project folder. However, this usually requires elevation (as the file is located inside `%programfiles%`). 

To make this easier, a two step bootstrap can be used instead:

1. Create a projects base folder (e.g. `C:\OGS-Projects`) and place your projects into a subfolder (one folder for each project e.g. `C:\OGS-Projects\My Project 1`).
2. Create a "dispatcher" LUA file, which is referenced from `monitor.lua`
3. Inside the "dispatcher" LUA file, load the actual project

### Sample monitor.lua

Replace the `monitor.lua` file with the following (assuming your projects folder is `C:\OGS-Projects` and you have a `C:\OGS-Projects\activeproject.lua` file):

	-- Define the projects root - change as needed:
	ProjectsRoot = [[C:\OGS-Projects]]
	
	require('lualib/system')
	package.path = ProjectsRoot..'/?.lua;'..package.path
	require('activeproject')



### Sample activeproject.lua

Create the file activeproject.lua and add the following (assuming you want to load the project `My Project 1` located in the `C:\OGS-Projects\My Project 1` subfolder):
	
	-- Define the subfolder to load as the active project:
	ProjectFolder = 'My Project 1'
	local ogs = require("lualib/ogs")
	ogs.Initialize(ProjectsRoot..'/'..ProjectFolder)

To switch to another project, just change the first line accordingly.
