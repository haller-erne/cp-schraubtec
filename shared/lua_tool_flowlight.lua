-- Implements the "Pick2Light" tool for the AIOI Systems (https://www.hello-aioi.com/,
-- https://www.picktolightsystems.com/de/) pick to light Ethernet controller.
local flowlight = require('lua_drv_flowlight')
local _M = {
	type = 'LUA_FLOWLIGHT',     -- type identifier (as in INI file)
	channels = {},  	        -- registered channels for this tool driver
}

-------------------------------------------------------------
-- register this driver in the global tool type table
XTRACE(16, 'lua_tool: registering "LUA_FLOWLIGHT"')
lua_known_tool_types.add_type(_M)

-------------------------------------------------------------
-- create a new tool instance
function _M.registration(tool, ini_params)

    XTRACE(16, string.format('lua_tool: %d: flowlight")', tool))
	channel = _M.channels[tool]
	if channel ~= nil then
		return 'multiple tool definition'
	end

	-- check initialization parameters
	local cfg = {}

	-- pick2light parameters

    -- Blink bit: 0/1
    cfg.ipaddr = ini_params.IPADDR
	-- Acknowledge all input bit: 0-7
    cfg.ipport = tonumber(ini_params.IPPORT)

	if cfg.ipport == nil then
	    cfg.ipport = 5003
	end

	-- register channel
	_M.channels[tool] = {
		tool = tool,
		ini_params = CloneTable(ini_params),
		conn_state = lua_tool_connected,
		task_state = lua_task_idle,
		dll_state  = dll_tool_idle,
		conn_attr = {	-- for GUI/Alarms/JSON data output
			ip = cfg.ipaddr,
			port = cfg.ipport,
		},
		cfg = CloneTable(cfg),
		outbit = 0,
		inval_old = 0,
        -- intialize the low level driver
        drv = flowlight,
        flowlight.Init(cfg.ipaddr, cfg.ipport)
	}

	return 'OK'
end
--------------------------------------------------------------------------------------------------------------------------
------------------------Befehlsformat ------------------------
--Anfang Befehl| ------ |Sequenznummer| ----- |Datenlänge| ------------- |Kommando| ------ |Ende Befehl|
------|STX| -------------- |Seq No.| -------- |Data Length| ------------ |Command| --------- |ETX |
------| 02 | ----------- |  1 2 3   | ------- |   0  0  0  5    | ------ |Command| --------- | 03  |

------------ Command------------
--|Header| ------  | parameter|
--|Kopfdaten| ---| parameter|
--------------------------------------------------------------------------------------------------------------------------
--P P 5 0 5 - [1] - [[2]- [3] - [4] - [5]   =>  'PP5050000m111!m22$11!'
--P P 5 0 5 | ---- [1]Spezifikation | ---- [2]Block No. | ---- [3] Mode Array | ---- [4] Address | ---- [5]Display Data
--   PP505                  00                  00                m111!m22$11!'
--------------------------------------------------------------------------------------------------------------------------
--PP5 : Kann Anzeigedaten angeben, nachdem die Fn-Taste gedrückt wurde. Geben Sie eine Blockbedienungsanweisung. Wiederbeschreibbar. 
--------------------------------------------------------------------------------------------------------------------------
--[1] Spezifikation der Anzeigedaten nach Drücken der Fn-Taste   00 : Nicht spezifiziert,   05 : Spezifiziert
--[2] Block-Nr. Blocknummer Möglicher Spezifikationsbereich ist 00 ~ 99.
--[3] Modus-Array Siehe [Modus-Array]. Variable Länge, kann weglassen Beim Weglassen des "Mode Array", ab [4] nach [2] fortfahren.
--[4] Adresse Lichtmoduladresse Kann 0001 ~ 7999 angeben.
--[5] Anzeigedaten Anzeigedaten immer 5 Zeichen angeben
--------------------------------------------------------------------------------------------------------------------------
--|---------------Mode Array  -----------------|
--|       Mode         |       Mode          |
--|       Type           |       Value          |
--|       Type           |  - LED2  -  LED1 -  LED0  -  SEG -  B U Z   |
--|         m1           |   11!
--------------------------------------------------------------------------------------------------------------------------
--Mode  Type
--m1: Status anzeigen
--m2: Status nach Drücken von BESTÄTIGEN anzeigen Taste
--m3: Statusanzeige nach Drücken der Fn-Taste
--m4: Taste BESTÄTIGEN, Fn-Taste 
--------------------------------------------------------------------------------------------------------------------------
--|       Type           |-   0 0 1 1 -    LED2  -   LED1   -    LED0    -    SEG   -  B U Z    -|
--|                      |   [----Byte 1----]    -   [----Byte 2----]    -   [----Byte 3----]   
-------------------------|
--|       Mode           | -  0 0 1 1 -    LED2  -   LED1   -    LED0 -     SEG   -   B U Z     -|
--|         m1           | -  0 0 1 1 -  0 0 0 1 -  0 0 1 0 -  0 0 0 1 -  0 0 1 0 -  0 0 1 1 	-|
--|         m1           | -  0 0 1 1 -    OFF   -     ON   -    OFF  --  0 0 1 0 -  0 0 1 1 	-|
--|         m1           | -  0 0 1 1 -  0 0 1 0 -  0 0 0 1 -  0 0 0 1 -  0 0 1 0 -  0 0 1 1 	-|
--|         m1           |                               11!
--GRUEN-Farbe EIN, Summer AUS, Segment oder Anzeige EIN
--0001: AUS
--0010: EIN
--0011: Blinken
--0100: Blinken mit hoher Geschwindigkeit
--0111: Keine Änderung
--------------------------------------------------------------------------------------------------------------------------
--|       Farbe          | -First part-     LED2  -   LED1   -    LED0  -|
--							 always
--|       blau           | -  0 0 1 1  -    OFF   -    OFF   -  Blinken -|	00110001 00010010  | 1$12  - Char(49) & Char(18)
--|      turkis          | -  0 0 1 1  -    OFF   -     ON   -     ON   -|	00110001 00100010  | 1"    - Char(49) & Char(34)
--|        rot           | -  0 0 1 1  -     ON   -    OFF   -    OFF   -|	00110010 00010001  | 2$11  - Char(50) & Char(17)
--|       rosa           | -  0 0 1 1  -     ON   -    OFF   -     ON   -|	00110010 00010010  | 2$12  - Char(50) & Char(18)
--|       gelb           | -  0 0 1 1  -     ON   -     ON   -    OFF   -|	00110010 00100001  | 2!    - Char(50) & Char(33)
--|      weiss           | -  0 0 1 1  -     ON   -     ON   -     ON   -|	00110010 00100010  | 2"    - Char(50) & Char(34)
--------------------------------------------------------------------------------------------------------------------------
--|       Farbe          | -First part-     LED2  -   LED1   -    LED0  -|
--							 always
--|       blau           | -  0 0 1 1  -    OFF   -    OFF   -  Blinken -|	00110001 00010011  | 1$13  - Char(49) & Char(19)
--|      gruen           | -  0 0 1 1  -    OFF   -  Blinken -    OFF   -|	00110001 00110001  | 11    - Char(49) & Char(49)
--|      turkis          | -  0 0 1 1  -    OFF   -  Blinken -  Blinken -|	00110001 00110011  | 13    - Char(49) & Char(51)
--|        rot           | -  0 0 1 1  -  Blinken -    OFF   -    OFF   -|	00110011 00010001  | 3$11  - Char(51) & Char(17)
--|       rosa           | -  0 0 1 1  -  Blinken -    OFF   -  Blinken -|	00110011 00010011  | 3$13  - Char(51) & Char(19)
--|       gelb           | -  0 0 1 1  -  Blinken -  Blinken -    OFF   -|	00110011 00110001  | 31    - Char(51) & Char(49)
--|      weiss           | -  0 0 1 1  -  Blinken -  Blinken -  Blinken -|	00110011 00110011  | 33    - Char(51) & Char(51)
--------------------------------------------------------------------------------------------------------------------------
--|       Type           |-    SEG(display)  -      B U Z       -|
--|       Type           |-       OFF        -       OFF        -|	00010001 | $11 .. string.char(17)..
--|       Type           |-       OFF        -        ON        -|	00010010 | $12 .. string.char(18)..
--|       Type           |-       OFF        -     Blinken      -|	00010011 | $13 .. string.char(19)..
--|       Type           |-        ON        -       OFF        -|	00100001 | !   .. string.char(33)..
--|       Type           |-        ON        -        ON        -|	00100010 | "   .. string.char(34)..
--|       Type           |-        ON        -     Blinken      -|	00100011 | #   .. string.char(35)..
--|       Type           |-      Flash       -       OFF        -|	00110001 | 1   .. string.char(49)..
--|       Type           |-      Flash       -        ON        -|	00110010 | 2   .. string.char(50)..
--|       Type           |-      Flash       -     Blinken      -|	00110011 | 3   .. string.char(51)..

function _M.ConvertColorToCode(Farbe)

	local code = '2"!'   -- default
	
    if Farbe == 'rot' then      
		code = '2'.. string.char(17)..'3'	--2$11# 	RED color ON, buzzer FLASH, segment(display) ON
    elseif Farbe == 'gruen'  then   
		code = '1!!'						--1!! 		GREEN color ON, buzzer OFF, segment(display) ON
	elseif Farbe == 'gelb'  then   
		code = '311'						--2!1 		YELLOW color ON, buzzer OFF, segment(display) FLASH 
	elseif Farbe == 'turkis'  then   
		code = '1"!' 						--1"1 		LIGHT BLUE color ON, buzzer OFF, segment(display) FLASH 
	elseif Farbe == 'weiss'  then   
		code = '2"!'						--2"1 		WHITE color ON, buzzer Z OFF, segment(display) FLASH 
	elseif Farbe == 'rosa'  then   
		code = '2'..string.char(18)..'!'	--2$121 	PURPLE color ON, buzzer OFF, segment(display) FLASH 
	elseif Farbe == 'blau'  then   
		code = '1'..string.char(18)..'!'	--1$121 	DARK BLUE color ON, buzzer OFF, segment(display) FLASH 
	else  
		code = '2"!'						--2"! 		WHITE color ON, buzzer OFF, segment(display) ON 
	end	
	
	return code
end 
-------------------------------------------------------------
function _M.start(tool, prg)

	channel = _M.channels[tool]
	if channel == nil then
		channel.task_state = lua_task_not_ready
		return
	end

	-- Start tool
    XTRACE(16, string.format('tool [%d]: starting prg=%d...', channel.tool, prg))
    channel.last_ticker = os.clock()
    channel.prg = prg

    local drv = channel.drv
    drv.event = nil
    drv.prg = nil    
    
	channel.cfg_text  = get_object_property(3, 'text')					-- Text von Bedienprogram auslesen
	local farbe = get_object_property(3, 'farbe')		-- Farbe von Bedienprogram auslesen
	if not channel.cfg_text then 
		channel.cfg_text = '9999'
	end
	
	if not farbe then 
		farbe = 'weiß'	-- ???
	end
	
	channel.cfg_farbe =  _M.ConvertColorToCode(farbe)
    -- we are started, so report we are now processing
    channel.task_state = lua_task_processing

end	
-------------------------------------------------------------
-- no return or change of global state expected here!
function _M.stop(tool)

	channel = _M.channels[tool]
	if channel == nil then
		return
	end

	-- Stop tool
    XTRACE(16, string.format('tool [%d]: stopping...', channel.tool))
    local drv = channel.drv
    drv.event = nil
    drv.prg = nil  
  
    drv.ClearBins()
end	
-------------------------------------------------------------
-- internal function to finish the tools process. 
-- two things must be done: send a result and set task state to done
local function int_set_finished(channel, qc)
    channel.task_state = lua_task_completed
	local seq = 0
	local step = 'A2'
	local values = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 }
	local status = lua_tool_result_response(channel.tool, qc, seq, step, values)
end

-------------------------------------------------------------
-- flowlight callback
local flowlight_cb = function(adr, sta, channel) 
    local drv = channel.drv
    XTRACE(16, string.format("prg = %d, adr = %04d, sta=%02d", drv.prg, adr, sta))
    if channel.task_state ~= lua_task_processing then
        XTRACE(16, string.format("    --> event dropped (wrong state %d)", channel.task_state))
        return
    end    
    if adr == drv.prg and drv.prg ~= 0 then
        -- received acknowledge for our program (address)
        drv.event = { adr = adr, sta = sta }
    end
end

-- StatePoll is cyclically called every 100-200ms
function _M.StatePoll(info)

    local wf = info.Workflow
    local PosCtrl = wf.PosCtrl
    local LockReason = wf.LockReason
    if PosCtrl <=0 or LockReason > 0 then
        -- process stopped or action does not need recipe
        -- PS_AbortCurrentTracking() 
        -- posOK = {}
    end
    -- poll the tool driver state machine to handle low level TCP
    -- communication with the device
    flowlight.Poll()
    
end

-- this is the low level handler for pick2light
-- NOTE: this is only called when the tool is active, see the function StatePoll 
--       for the always called cyclic function!
local function int_poll(channel)
    
    local drv = channel.drv
    if not drv.cb then
        drv.cb = flowlight_cb
        drv.SetCallback(flowlight_cb, channel)
    end        
    -- drv.Poll() -- see above
    
    if not drv.IsConnected() then
        -- no connection
        channel.conn_state = lua_tool_conn_error
        return
    end
    
    -- tool is connected
    channel.conn_state = lua_tool_connected
    local tool_started = false
    local tool_stopped = false
    if channel.task_state ~= channel.drv.task_state then
        XTRACE(16, string.format('TASK: State change: %s -> %s', tostring(channel.drv.task_state), tostring(channel.task_state)))
        tool_started = (channel.drv.task_state == 0) and (channel.task_state ~= 0)
        tool_stopped = (channel.drv.task_state ~= 0) and (channel.task_state == 0)
        channel.drv.task_state = channel.task_state
    end
   
    
    if channel.task_state ~= lua_task_processing then
        -- not enabled, set outputs to zero and return
        if tool_stopped then
            drv.event = nil
            drv.ClearBins()
        end    
--        -- track inputs
--        channel.inval_old = LineIO.getPick2Light()
        return
    end
    
    -- running, handle IOs
    --if drv.prg ~= channel.prg then
    if tool_started then
        -- send command to pick2light
        drv.event = nil
        local ok, err = drv.RequestBinExt(0, channel.prg, channel.cfg_text,channel.cfg_farbe)
        if ok then
            drv.prg = channel.prg
        end
    end    
    
    -- check inputs (only the specific bit)
    local completed = false
    if drv.event ~= nil then
        -- drv.event
        completed = true
    end
    if completed == true then
        int_set_finished(channel, 0)     -- 0 = OK
    end
--    channel.inval_old = inval
end

-------------------------------------------------------------
local old_state = nil
function _M.poll(tool, state)
    
    if old_state ~= state then
        XTRACE(16, string.format('STATE: %s -> %s', tostring(old_state), tostring(state)))
        -- detect the "tool stop" command
        if state == dll_tool_idle then
            _M.stop(tool)
        end
        old_state = state
    end

	channel = _M.channels[tool]
	if channel == nil then
		channel.task_state = lua_task_not_ready
		return lua_task_not_ready
	end

	-- call driver
	int_poll(channel)
	
	if channel.conn_state ~= lua_tool_connected then
		channel.task_state = lua_task_not_ready
		return lua_task_not_ready
	end

	channel.dll_state = state

	if (state == dll_tool_idle) 	or
  	   (state == dll_tool_disable)  or
	   (state == dll_tool_wait_release) then

		-- todo:: stop tool
		channel.task_state = lua_task_idle
		return lua_task_idle

	end

	if (state == dll_tool_enable) then

		if (channel.task_state  == lua_task_processing) or
		   (channel.task_state  == lua_task_completed)  then
		   return channel.task_state
		end

	end

	return channel.task_state
end

-----------------------------------------------------------------------------------
function _M.get_conn_attr(tool)

	channel = _M.channels[tool]
	if channel == nil then
		return lua_tool_reg_error
	end

	return channel.conn_attr, channel.conn_state

end
-----------------------------------------------------------------------------------


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
	return '',''
end
----------------------------------------------------------------------------------------------
-- process raw values from DLL
-- @param tool: channel number as configured in station.ini
-- @output: values ready to show and to save into database

function _M.process_tool_result(tool)

	local ResultValues = gui_lua_support.ResultValues
	if tool ~= ResultValues.Tool then
		return lua_tool_param_error
	end

	ResultValues.Param1 		= ResultValues.Param1
	ResultValues.Param1_min 	= ResultValues.Param1_min
	ResultValues.Param1_max 	= ResultValues.Param1_max
	ResultValues.Param2 		= ResultValues.Param2
	ResultValues.Param2_min 	= ResultValues.Param2_min
	ResultValues.Param2_max 	= ResultValues.Param2_max
	
	ResultValues.Step = '3A'
	return 1 --  processing completed
	--return 0 --  use raw values without preprocessing

end
------------------------------------------------
-- Get the tool specific result string

function _M.get_tool_result_string(tool)
	local ResultValues = gui_lua_support.ResultValues
	if tool ~= ResultValues.Tool then
		return 'invalid tool'
	end
	if ResultValues.QC == 0 then
	    return 'OK'	
	end    
    return 'NOK'	
end
------------------------------------------------
-- Get the tool specific footer string

function _M.get_footer_string(tool)

	local CfgValues = gui_lua_support.CfgValues
	if tool ~= CfgValues.Tool then
		return 'invalid tool'
	end


	local result = 'lua_error'

	local p1 = tonumber(CfgValues.Param1_min)
	local p2 = tonumber(CfgValues.Param1_max)

	if (p1 ~= nil) and (p2 ~= nil) then
		result = '' -- string.format('Pressure (Pa) MAX=%.2f MIN=%.2f', p1, p2)
	end

	return result
end
------------------------------------------------
-- Get the tool specific program name

function _M.get_prg_string(tool)

	local CfgValues = gui_lua_support.CfgValues
	if tool ~= CfgValues.Tool then
		return 'invalid tool'
	end

	local result = 'lua_error'

	local p1 = tonumber(CfgValues.Prg)

	if (p1 ~= nil) then
		result = string.format('Bin %d', p1 )
	end

	return result
end

--=================================================================================================
--
--				API implementation for json/xml output (json_ftp.lua)
--
--=================================================================================================

-- process task attributes and results before using in json output
-- @input  tm: timestamp contains lua datetime structure
-- 		Param: see the list of available result parameters in "json_ftp.lua"
-- @output: file name to save
function _M.process_param_list(tm, Param)

	Param.job_name = string.sub(Param.job_name, 1, 30)
	local file = '' -- string.format('GUI_INP\\%04d%02d%02d%02d%02d%02d.json',tm.year,tm.month,tm.day,tm.hour,tm.min,tm.sec)
	return file    -- set empty to use default filename for FTP Client -> Sys3xxGateway -> Database
end
-----------------------------------------------------------------------------------------------
function _M.get_tags(tool)
-- @input  tool number
--
-- @output: system type and table of tags: <act, min, max, target> for using in Sys3xxGateway and in MS SQL data base

return 2,        -- Press System
		{	'PR', -- Pressure  		| tag 1
			'C'	  -- Temperature 	| tag 2
		}
end
-----------------------------------------------------------------------------------------------
--  See in "json_ftp.lua" default_JsonFmt and the list of parameters available for use in JSONFmt format string:
-----------------------------------------------------------------------------------------------
_M.JsonFmt = json_lua_output.default_JsonFmt

--=================================================================================================
-- register the callbacks with core.
-- Cyclic function to trigger handle the tool communication
if StatePollFunctions ~= nil then
	StatePollFunctions.add(_M.StatePoll)
end	
--=================================================================================================

return _M
