-- Load custom project from subfolder
-- To use, require this file from monitor.lua
local ogs = require("lualib/ogs")
local base = debug.getinfo(1).source:gsub('^@(.+/)[^/]+$', '%1')

ogs.Initialize(base..'ST03-HandyTrack')
