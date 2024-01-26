-- Generic low-level Modbus/TCP/UDP module
-- To use, require this module and add OnConnChanged and OnDataChanged functions
--
-- List all Modbus devices in section [STATION_IO_MODBUS] in station.ini!
--
--  [STATION_IO_MODBUS]
--  ; Define the Modbus/TCP/UDP devices used in this station as <name>=<ip>[,<params>]
--  ; Reference a device by <name> later from the station_io_modbus.lua LUA module.
--  ; Each <name> requires an additional section [<name>] in station.ini to define
--  ; the actual scan list (and an initial register write, if needed).
--  ; NOTE: do a `local io = require('station_io_modbus')` to use this module.
--  DEBUG=0
--  MB_DEV1=192.168.1.71
--  MB_DEV2=192.168.1.72
--
--  [MB_DEV1]   ; define the MB_DEV1 parameters (register scan list in JSON notation)
--  WR_REG=[ { "adr": 0x100, "len": 1 }, { "adr": 0x200, "len": 2 } ]
--  RD_REG=[ { "adr": 0x10, "len": 10 }, { "adr": 0x20, "len": 20 } ]
--  INI_REG=[ { "adr": 8000, "val": [ 0x06, 0x01 ] } ]
--
-- [MB_DEV2]
-- ...
--
local mb = require("luamodbus")     -- load our LuaModbus.dll Modbus master library
local struct = require("struct")    -- see http://www.inf.puc-rio.br/~roberto/struct/
                                    -- see also: https://github.com/25A0/blob
local basexx = require('basexx')
local json = require('cjson')

-----------------------------------------------------------------------------------------------------------------
-- Define a module for handling the Modbus devices
local M = {
    _TYPE='module',
    _NAME='station_io_modbus',
    _VERSION='1.0-0',
    -- module specific data
    dev = {
        ['ini-name'] = {
            cfg = {                         -- everything from the ini-section
                name='ini-name',            -- <name>=<ip>,<model>
                ip='10.10.2.1',             --
                scanlist = {},              --
                params = '',                -- the original string <ip>[,<params>]
                fwo=nil                     -- the model specific forwar open parameters
            },
            ctx = nil,                      -- the device driver instance
            data = {
                i = '',
                q = ''
            },
            -- more
        }
    },
    DebugLevel = 0,
    -- callback functions
    OnDataChanged = nil,
    OnConnChanged = nil,
}
local initialized = nil

----------------------------------------------------------------------------
-- Get version info
XTRACE(16, "Modbus/IP scanner library. Version = "..mb.version())

-----------------------------------------------------------------------------------------
local function trim(s)
    return (s~=nil) and s:match "^%s*(.-)%s*$" or nil
end
local function empty(n)
    local s = ''
    for i = 1,n do s = s .. '\0' end
    return s
end
-----------------------------------------------------------------------------------------
-- read the scanlist (and other params)
local function get_modbus_params(section, cfg)
    local scanlist = {}
	local tbl = ReadIniSection(section)
	if type(tbl) ~= 'table' then
		return nil, string.format('INI-section: "%s": section missing!', section)
	end
    local mode = 1      -- use FC23 (0 = seperate FCs for read/write)
    if tbl.MODE then mode = tonumber(tbl.MODE) end
    local wr_reg = tbl.WR_REG and json.decode(tbl.WR_REG)
    local rd_reg = tbl.RD_REG and json.decode(tbl.RD_REG)
    local ini_reg = tbl.INI_REG and json.decode(tbl.INI_REG)
    cfg.wr_bytes = 0
    cfg.rd_bytes = 0
    if wr_reg then
        for k,v in pairs(wr_reg) do
            if not scanlist[k] then scanlist[k] = {} end
            scanlist[k].wadr = v.adr
            scanlist[k].wlen = v.len
            scanlist[k].mode = mode
            cfg.wr_bytes = cfg.wr_bytes + (v.len * 2)
        end
    end
    if rd_reg then
        for k,v in pairs(rd_reg) do
            if not scanlist[k] then scanlist[k] = {} end
            scanlist[k].radr = v.adr
            scanlist[k].rlen = v.len
            scanlist[k].mode = mode
            cfg.rd_bytes = cfg.rd_bytes + (v.len * 2)
        end
    end
    if ini_reg then
        for k,v in pairs(ini_reg) do
            if not scanlist[k] then scanlist[k] = {} end
            scanlist[k].iadr = v.adr
            scanlist[k].idata = v.val
        end
    end
    cfg.rate        = 100           -- poll rate
    cfg.mode        = mode          -- mode 1 = FC23
    cfg.scanlist    = scanlist
    return cfg
end
-----------------------------------------------------------------------------------------
local function get_dev_params(section, name, params)
    local ip = params   -- ip, model = params:match("([^,]+),([^,]+)")
    local cfg = {
        name = name,
	    ip = trim(ip),
        port = 502,
	    model = trim(name),
	    params = {}
    }
	if not cfg.ip then
        return nil, string.format('INI-section: "%s": %s missing parameter ip (expected format =ip)!',
            section, params)
	end
	get_modbus_params(name, cfg)
	if not cfg.scanlist then
        return nil, string.format('INI-section: "%s": %s undefined scanlist!', section, params)
    end
    return cfg
end
-----------------------------------------------------------------------------------------
local function read_ini_params(inisection)

    local cfg, err
    local dev = {}
	local tbl = ReadIniSection(inisection)
	if type(tbl) ~= 'table' then
		return nil, string.format('INI-section: "%s": section missing!', inisection)
	end
    for name,params in pairs(tbl) do
        if name == 'DEBUG' then
            M.DebugLevel = tonumber(params)
        else
            cfg, err = get_dev_params(inisection, name, params)
            if not cfg then
                return nil, err
            end
            cfg.start_time = os.clock()
            dev[name] = {}
            dev[name].cfg = cfg
            -- create an modbus driver instance
            dev[name].ctx = mb.new_tcp_pi_x(
                cfg.ip, cfg.port,           -- IP-Address and port
                cfg.rate,      			    -- update rate in milliseconds
                cfg.scanlist                -- setup the cyclic scan list as defined above
            )
            if not dev[name].ctx then
                local sErr = 'ERROR: initialization failed for Modbus device '..name..' ('..cfg.ip..')'
                XTRACE(2, sErr)
                return nil, sErr
            else
                XTRACE(16,'Initialization for '..name..' ('..cfg.ip..') successful')
            end
            -- set connect/response timeout to 500ms for further communications
            dev[name].ctx:set_response_timeout(0, 500000)
            if M.DebugLevel > 16 then
                dev[name].ctx:set_debug(true)
            end
            dev[name].data = {
                i = empty(cfg.rd_bytes),
                q = empty(cfg.wr_bytes)
            }
            dev[name].data_old = {
                i = empty(cfg.rd_bytes),
                q = empty(cfg.wr_bytes)
            }
        end
    end
    return dev
end
-----------------------------------------------------------------------------------------
local function Init()

    M.dev = {}
    local dev, err = read_ini_params('STATION_IO_MODBUS')
    if not dev then
        XTRACE(11, 'Error reading station.ini:'..err)
        error('Error reading station.ini:'..err)
    end

    -- save the config params
    M.dev = dev
    initialized = true

    return nil -- OK!
end
--------------------------------------------------------------------------------------------
-- Poll I/O modules
local function Poll()
    if not initialized then Init() end
    for name, dev in pairs(M.dev) do
        -- check connection state
        local connected = dev.ctx:is_connected()
        if connected ~= dev.connected then        -- connection state changed
            if not connected and dev.connected == nil and os.clock() - dev.cfg.start_time < 5 then
                -- if not connected during startup, stay silent for 5 seconds
            else
                if M.OnConnChanged then M.OnConnChanged(dev, connected) end
                if connected then
                    XTRACE(16, name..": Cyclic IO running!")
                    ResetLuaAlarm(name)
                else
                    XTRACE(1, name.." DISCONNECTED!")
                    SetLuaAlarm(name, -2, name.." disconnected!")
                end
                dev.connected = connected
            end
        end
        -- update data
        if dev.connected then
            -- read inputs
            dev.data_old.i = dev.data.i
            local err
            dev.data.i, err = dev.ctx:read_cyclic_io_b(0, dev.cfg.rd_bytes)
            if dev.data.i ~= dev.data_old.i then
                if M.OnDataChanged then M.OnDataChanged(dev) end
                if M.DebugLevel > 0 then
                    XTRACE(16, string.format('     rd: %s: #size=%d: %s', name, #dev.data.i, basexx.to_hex(dev.data.i)))
                end
            end
            -- update outputs
            if dev.cfg.wr_bytes > 0 then
                if dev.data.q ~= dev.data_old.q then
                    if M.DebugLevel > 0 then
                        XTRACE(16, string.format('     wr: %s: #size=%d: %s', name, #dev.data.q, basexx.to_hex(dev.data.q)))
                    end
                    local ok = dev.ctx:write_cyclic_io(0, dev.data.q)
                    dev.data_old.q = dev.data.q
                end
            end
         end
    end
end

M.UpdateOutputs = function()
    Poll()
end

-------------------------------------------------------------------------------

-- Hook up the cyclic poll function
local function OnStatePoll(info)

    local wf = info.Workflow
    Poll()
end
if StatePollFunctions ~= nil then
	StatePollFunctions.add(OnStatePoll)
end
--[[
-- WARNING: This hooks into OGS internals to call the module init function as
--          the very fist LUA code after loading all dependencies and before
--          executing *any* other OGS event (that is in between loading the
--          modules and executing their code and before calling any StatePoll
--          function)!
local OnInitCompleteOld = OnInitComplete
function OnInitComplete()
    XTRACE(16, "StationIO: Ethernet/IP: OnInitComplete...")
    OnInitCompleteOld()
    XTRACE(16, "StationIO: Ethernet/IP: OnInitCompleted")
    Init()
end
]]--
return M
