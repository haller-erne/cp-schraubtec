-- Generic low-level Ethernet-IP module
-- To use, require this module and add OnConnChanged and OnDataChanged functions
-- 
-- List all Ethernet/IP devices in station.ini!
--
local enip = require("luaenip")     -- load our LuaENIP.dll Ethernet/IP scanner library
local struct = require("struct")    -- see http://www.inf.puc-rio.br/~roberto/struct/
                                    -- see also: https://github.com/25A0/blob
local basexx = require('basexx')
require("ethernet_devices")         -- Get the well known Ethernet/IP devices...

-------------------------------------------------------------------------------
--          TURCK AL1234 4-port IO-Link master
------------------------------------------------------------------------------
ethernet_devices.TURCK_AL1324 = {
    -- Connection path: 20 04 24 C7 2C 97 2C 66
    --                           --                 Configuration assembly instance (0xC7 = 199)
    --                                 --           O -> T assembly instance (0x97 = 151)
    --                                       --     T -> O assembly instance (0x66 = 102)
	-- O->T parameters: PLC --> Device, "PLC Outputs"
    ---------------------------------------------------------------------------
	--ConnectionMode    OT_Mode;		-- Connection mode: default POINT2POINT
	OT_Inst             = 0x97,			-- O->T Instance ID
	OT_Size             = 130,			-- O->T data size (in bytes)
	--RealTimeFormat    OT_RTFormat;   	-- O->T Header/Heartbeat/Modeless/Zerolen
	--Priority		    OT_Priority;
	OT_ExclusiveOwner   = true,         -- true = exclusive owner
	OT_VariableLength   = false,        -- true = variable length allowed
    ---------------------------------------------------------------------------
	-- T->O parameters: Device -> PLC, "PLC Inputs"
	--TO_Mode             = 1,			-- connection mode: default MULTICAST, 0=NULL, 1=Multicast, 2=Point2Point
	TO_Inst             = 0x66,			-- T->O Instance ID
	TO_Size             = 140,			-- T->O data size (in bytes)
	--RealTimeFormat	TO_RTFormat;    -- T->O Header/Heartbeat/Modeless/Zerolen
	--Priority		TO_Priority;
	TO_ExclusiveOwner   = true,         -- true = exclusive owner
	TO_VariableLength   = false,        -- true = variable length allowed
    ---------------------------------------------------------------------------
	-- Configuration Assembly (optional)
	Cfg_Inst            = 0xC7,        	-- 0 = unused
	Cfg_Data            = {             -- 50 bytes of config data
							3,          -- USINT Communication profile (3=keep setting)
                            4,          -- SINT  Port Process data size (4=32Bytes)
                            -- per port settings:
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
                            --                                          Pin mode [3=IO-Link (Pin4)]
                               --                                       Port speed (0=as fast as possible)
                                  --                                    Swap (1=enabled)
                                     --                                 Validation (0=no check and clear)
                                        -----------                     Vendor-ID
                                                    -----------         Device-ID
                                                                --      Fail safe mode (0=no fail safe)
                                                                   --   Fail safe value (1=old value)
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
                            3, 0, 1, 0, 0x00, 0x00, 0, 0, 0, 0, 0, 1,
						},
    ---------------------------------------------------------------------------
	-- Startup parameter writes (optional) - only as workaround for (buggy) Rexroth devices
	-- Parameters are given as a sequence of bytes for writing using SetAttributeSingle.
	-- For each Par_Count elements, the following data must be provided:
	-- 		[byte]	Class
	--		[byte]	Instance
	--		[byte]	Attr
	--		[byte]	Number of data bytes to write
	--		[bytes] [actual data bytes to write]
	--
	Par_Data            = {},  -- parameter data in the above format
    ---------------------------------------------------------------------------
	-- common parameters
	Rate                = 50,			-- data rate in [ms]
	Keying              = {},        	-- Electronic key segment
}
-----------------------------------------------------------------------------------------------------------------
-- Define a module for handling the Ethernet/IP devices
local M = {
    _TYPE='module',
    _NAME='station_io_enip',
    _VERSION='1.0-0',
    -- module specific data
    dev = {
        ['ini-name'] = {
            cfg = {                         -- everything from the ini-section
                name='ini-name',            -- <name>=<ip>,<model>
                ip='10.10.2.1',             --
                model = 'Turck_xyz',        --
                params = '',                -- the original string <ip>,<model>,<whatever>
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
local vdlls, vddlt = enip.version_mod()
XTRACE(16, "Ethernet/IP scanner library. Version = "..vdlls)

-----------------------------------------------------------------------------------------
local function trim(s)
    return (s~=nil) and s:match "^%s*(.-)%s*$" or nil
end
local function empty(n)
    local s = ''
    for i = 1,n do s = s .. '\x00' end
    return s
end
-----------------------------------------------------------------------------------------
local function get_dev_params(section, name, params)
    local ip, model = params:match("([^,]+),([^,]+)")
    local cfg = {
        name = name,
	    ip = trim(ip),
	    model = trim(model),
	    params = trim(params)
    }
	if not cfg.ip then
        return nil, string.format('INI-section: "%s": %s missing parameter ip (expected format =ip,model)!',
            section, params)
	end
	if not cfg.model then
        return nil, string.format('INI-section: "%s": %s missing parameter model (expected format =ip,model)!',
            section, params)
	end
	cfg.fwo = GetParamSetForEthernetDevice(cfg.model)
	if not cfg.fwo then
        return nil, string.format('INI-section: "%s": %s unknown Ethernet/IP sensor model!', section, params)
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
            dev[name] = {}
            dev[name].cfg = cfg
            -- create an ethernet/ip driver instance
            dev[name].ctx = enip.new(cfg.ip, cfg.fwo)
            if not dev[name].ctx then
                local sErr = 'ERROR: initialization failed for Ethernet/IP device '..name..' ('..cfg.ip..')'
                XTRACE(2, sErr)
                return nil, sErr
            else
                XTRACE(16,'Initialization for '..name..' ('..cfg.ip..') successful')
            end
            dev[name].data = {
                i = empty(cfg.fwo.TO_Size),
                q = empty(cfg.fwo.OT_Size)
            }
            dev[name].data_old = {
                i = empty(cfg.fwo.TO_Size),
                q = empty(cfg.fwo.OT_Size)
            }
        end
    end
    return dev
end
-----------------------------------------------------------------------------------------
local function Init()

    M.dev = {}
    local dev, err = read_ini_params('STATION_IO_ENIP')
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
        local connected = dev.ctx:is_cycliciorunning()
        if connected ~= dev.connected then        -- connection state changed
            if M.OnConnChanged then M.OnConnChanged(dev, connected) end
            if connected then
                XTRACE(16, name..": Cyclic IO running!")
                ResetLuaAlarm(name)
            else
                XTRACE(1, name.." DISCONNECTED!")
                SetLuaAlarm(name, -2, name.." disconnected!")
            end
        end
        dev.connected = connected
        -- update data
        if dev.connected then
            -- read inputs
            dev.data_old.i = dev.data.i
            dev.data.i = dev.ctx:read_cyclic_io(0, dev.cfg.fwo.TO_Size)
            if dev.data.i ~= dev.data_old.i then
                if M.OnDataChanged then M.OnDataChanged(dev) end
                if M.DebugLevel > 0 then
                    XTRACE(16, string.format('     rd: %s: #size=%d: %s', name, #dev.data.i, basexx.to_hex(dev.data.i)))
                end
            end
            -- update outputs
            if dev.cfg.fwo.OT_Size > 0 then
                if dev.data.q ~= dev.data_old.q then
                    if M.DebugLevel > 0 then
                        XTRACE(16, string.format('     wr: %s: #size=%d: %s', name, #dev.data.q, basexx.to_hex(dev.data.q)))
                    end
                    dev.ctx:write_cyclic_io(0, dev.data.q)
                    dev.data_old.q = dev.data.q
                end
            end
         end
    end
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
