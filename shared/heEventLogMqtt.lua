-- send eventlog data over mqtt
local mqtt = require('luamqttclient')
local json = require('json')	

--require('heEventLog')

local _M = {
    name = 'MQTT_EVENTS',   -- "driver" name (for the station.ini section and for log output)
	drv = nil,              -- low level MQTT interface and parameters 
	MQTT = {}               -- MQTT helpers
}

EventLog = {
    COMMON      = 0,
    BARCODE 	= 1,
    INTERACTION = 2,
    USER_LOGON  = 3,
    ALARM       = 4,
    WORKFLOW    = 5,     -- Workflow changes
    RESULT		= 6,     -- Tool results
    SOFTWARE_ERROR = 7,  -- configuration( ini)  errors

	initialised = false,
}
-----------------------------------------------------------------------------------------------
EventLog.Stop = function()

	EventLog.initialised  = false

end

----------------------------------------------------------------------------------------------
EventLog.Init = function()

	if EventLog.initialised then
		EventLog.Stop()
	end
	
    local ini = ReadIniSection(_M.name)
    if _M.drv == nil then
        -- initialize the (single instance) broker connection
        _M.drv = {                  
            ini = CloneTable(ini),      -- copy ini parameters
            mqttclient = MqttClient()	-- create a new MQTT broker connection
        }
        -- Start the initial connection to the MQTT broker
        local MC = _M.drv.mqttclient
        local rc = MC:Init(ini.Broker, ini.ClientId)	-- initialize the client instance
        if rc ~= 0 then
            XTRACE( 1, string.format('%s: ERROR %d initializing MQTT client")', _M.name, param_as_str(rc)))
            return -1
        end
        MC:set_debug(ini.Debug or false)		-- do not be that noisy.
        rc = MC:Connect(ini.User, ini.Pass, ini.LastWillTopic, ini.LastWillData)
        if rc ~= 0 then
            XTRACE( 1, string.format('%s: mqtt: ERROR %d connecting MQTT client")', _M.name, param_as_str(rc)))
            return -2
        end
        if ini.LastWillTopic ~= nil then
            MC:Publish(ini.LastWillTopic, 0, "connected");
        end
        
        -- finally: register the cyclic callbacks with core.
        if StatePollFunctions ~= nil then
	        StatePollFunctions.add(_M.StatePoll)
        end	
    end
	
	EventLog.initialised = true

	return true
end
-----------------------------------------------------------------------------------------------
EventLog.Stop = function()

	EventLog.initialised  = false

end

-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

local function DecodeBarcodeEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)

	local status_str
	local msg = text
	return 'BARCODE',status_str,msg
end
-----------------------------------------------------------------------------------
local function DecodeInteractionEvent(status, user1, user2, text, JobSeq,OpSeq,field,p4,p5,p6)

	local status_str = 'click button'
	local msg
	local inputOK = (JobSeq == 0)

    if status == 1 then --	finishProcess 	= 0x0001 ,  // finish assembly processing
	    msg = 'Finish Process'
    elseif status == 2 then --  clearProcess  	= 0x0002,   // clear all tightening results on assembly go to first Job
	    msg = 'Clear Process'
    elseif status == 4 then --	startJob	  	= 0x0004,   // start current Job (is available only in WorkflowState::WaitJobStart)
	    msg = 'Start Job'
    elseif status == 8 then -- finishJob	  	= 0x0008,   // finish current Job processing and set WorkflowState::WaitJobStart
	    msg = 'Stop Job'
    elseif status == 0x10 then --skipJob		  	= 0x0010,   // finish current Job processing and go to next Job
        if JobSeq > 0 then  msg = string.format('Select Job (%d)',JobSeq)
        else                msg = 'Skip Job'    end
    elseif status == 0x20 then --	clearJob	  	= 0x0020,   // clear all tightening results on current Job and set WorkflowState::WaitJobStart
	    msg = 'Clear Job'
    elseif status == 0x40 then -- 	skipRundown	  	= 0x0040,   //  go to next operation
	    msg = 'Skip Rundown'
    elseif status == 0x80 then -- clearBolt 		= 0x0080,  	// set current Bolt to NOT_PROCESSED
	    msg = 'Clear Task'
    elseif status == 0x100 then -- startDiag    	= 0x0100,  	// enable start diagnostic job
	    msg = 'Start Diag'
    elseif status == 0x200 then -- selectRundown	= 0x0200,  	// select Job / Bolt in view or on image
	    msg = string.format('Operation (Job seq=%d, Op. seq = %d)',JobSeq,OpSeq)
	    status_str = 'select'
	elseif status == 0x4000  then -- manual barcode input in start view
	    if inputOK then status_str = 'valid input'
	    else            status_str = 'invalid input' end
	    msg = string.format('Field: %s Value:%s', field, text)
    else
	    msg = string.format('unknown (%d)',status)
    end

	return 'INTERACTION',status_str,msg
end
-----------------------------------------------------------------------------------

local function DecodeUserLogonEvent(status, worker, supervisor, text, level, p2,p3,p4,p5,p6)

-- status codes:

--    0  -  OK
--   -1  -  NOK
	local status_str = '' -- default status is empty
	local msg = text

	if status     ==  0 then -- logon Success! User found, password ok and priviledge sufficient

		status_str = 'login'
		msg = string.format('level(%d)',level)

	elseif status     ==  1 then -- logoff

		status_str = 'logoff'

	elseif status     ==  2 then -- logon Success! User found, password ok and priviledge sufficient

		status_str = 'autologon'
		msg = string.format('level(%d)',level)

	elseif status == -1 then  --  Unknown username or database error

		status_str = 'rejected'
		msg = string.format('user "%s" not found',text)


	elseif status == -2 then  --  Password incorrect

		status_str = 'rejected'
		msg = string.format('user "%s" entered invalid password',text)

	elseif status == -3 then -- NoPriviledges   	= -3,       //

		status_str = 'rejected'
		msg = string.format('user "%s" has insufficient priviledges',text)

	else
		status_str = status
	end

	return 'USER_LOGON',status_str,msg
end
-----------------------------------------------------------------------------------

local function DecodeAlarmEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)

	local status_str
	--- 0 = info, -1 = warning, -2 = error
	if status == 0 then
	    status_str = 'info'
	elseif status == 1 then
        status_str = 'warning'
    else
        status_str = 'error'
    end
	return 'ALARM',status_str,text
end
-----------------------------------------------------------------------------------

local function DecodeWorkflowEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)

	local status_str
	local msg
--	 (5, Worlflow.State, werker, supervisor, text, JobName, TaskName, OpName,currentTool,toolStatus, nil)
	if status == 0 then
	    status_str = 'Idle'
	elseif status == 1 then
        status_str = 'Wait Job Start'
	elseif status == 2 then
        status_str = 'Job Active'
	elseif status == 3 then
        status_str = 'Job Completed'
	elseif status == 4 then
        status_str = 'Done'
	elseif status == 5 then
        status_str = 'Done Wait User'
	elseif status == 6 then
        status_str = 'Job Aborted'
    else
        status_str = 'Idle'
    end
	if status == 2 then
		msg = string.format('Job: "%s", Task: "%s", Operation: "%s", Tool: "%s" Status: "%s"',
							param_as_str(p1),param_as_str(p2),param_as_str(p3),param_as_str(p4),param_as_str(p5) )
	else
		msg = string.format('Job: "%s"',param_as_str(p1))
	end

	return 'WORKFLOW',status_str,msg
end
-----------------------------------------------------------------------------------

local function DecodeResultEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)

-- (6, resultCode, werker, supervisor, currentTool, Workflow.ResultValue1,Workflow.ResultValue2, Workflow.ResultValue3, Workflow.ResultValue4, Workflow.ResultValue5,Workflow.ResultValue6)

	local status_str
	local msg
	local currentTool = text

	if status == 1 then status_str = 'OK'
	else  status_str = 'NOK' end

	-- local tool_name = text
	-- if text == 'NEXO1' then
	local isOK = string.find(currentTool, 'Ack') or string.find(currentTool, 'R-Taste') or string.find(currentTool, 'Crimp') or string.find(currentTool, 'BC')
	if isOK then
		msg = string.format('Tool: %s', currentTool)
	else
		local schrauber = string.find(currentTool, 'CS351') or string.find(currentTool, 'NEXO') or string.find(currentTool, 'GWK')
		if 	schrauber then
			msg = string.format('Tool: "%s" Torque = %s   Angle = %s', param_as_str(currentTool), number_as_text(p1,'',2),number_as_text(p2,'',1))
		elseif currentTool == 'HA1800M' then
			msg = string.format('Tool: "HA1800M" Ireal(mA):%s Ureal(V):%s ',number_as_text(p1,'',5),number_as_text(p2,'',2))
		elseif currentTool == 'Innomatec' then
			 msg = string.format('Tool: "Innomatec" Druckablauf(Pa):%s Leckrate(ml/min):%s Pruefdruck(bar):',number_as_text(p1,'',2),number_as_text(p2,'',2),number_as_text(p3,'',2))
		elseif currentTool == 'Bontech' then
			msg = string.format('Tool: "Bontech" ALS(mm): %s VEN(mm): %s',number_as_text(p1,'',4),number_as_text(p2,'',4))
		elseif currentTool == 'TetraTec' then
			msg = string.format('Tool: "TetraTec" Pruefdruck(mBar): %s  Massenstrom(kg/h): %s',number_as_text(p1,'',1),number_as_text(p2,'',5))
		else
			msg = string.format('Tool: "%s" Value1 = %s   Value2 = %s', param_as_str(currentTool), number_as_text(p1,'',2),number_as_text(p2,'',2))
		end
	end

	return 'RESULT',status_str,msg
end
-----------------------------------------------------------------------------------

local function DecodeSoftwareErrorEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)

	local status_str
	local msg
	return 'SOFTWARE_ERROR',status_str,msg
end
-----------------------------------------------------------------------------------

local function DecodeCommonEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)

	local status_str
	local msg = text
	return 'COMMON',status_str,msg
end
-----------------------------------------------------------------------------------

EventLog.EvtParms = {   -- define custom tags names for the function parameters
    [1] = { name='BARCODE',     'fieldno', 'user1', 'user2', 'code', 'source', 'tag' },
    [2] = { name='INTERACTION', 'status', 'user1', 'user2', 'text', 'jobseq', 'opseq', 'field' },
    [3] = { name='USER_LOGON',  'status', 'user1', 'user2', 'login', 'level' },
    [4] = { name='ALARM',       'severity', 'user1', 'user2', 'message' },
    [5] = { name='WORKFLOW',    'status', 'user1', 'user2', 'message', 'source', 'tag' },
    [6] = { name='RESULT',      'status', 'user1', 'user2', 'code', 'source', 'tag' },
    --[7] = { name='COMMON', 'type', 'status', 'text' },
    --[0] = { name='SOFTWARE_ERROR', 'type', 'status', 'text' },
}

EventLog.Write = function (type, ...)
    -- build a table with named function parameters depending on the event type

    local params = EventLog.EvtParms[type]
	if not params then return end
	local t = os.date('*t')
    local res = {
        type = type,
        timestamp = string.format('%04d-%02d-%02d %02d:%02d:%02d',t.year,t.month,t.day,t.hour,t.min,t.sec),
    }
    res.name = params.name or 'UNKNOWN'
    if params then
        for i = 2,#arg do
            res[params[i-1]] = arg[i-1]
        end
    end
    -- publish over mqtt
    local msg = json.encode(res)        
    _M.drv.mqttclient:Publish(_M.drv.ini.LeanTopic, 0, msg)
end

EventLog.WriteOld = function (type, status, user1, user2, text, p1,p2,p3,p4,p5,p6)

	if not _M.drv then return end  -- invalid initialization

	local t = os.date('*t')
    local timestamp = string.format('%04d-%02d-%02d %02d:%02d:%02d',t.year,t.month,t.day,t.hour,t.min,t.sec)

	local current_day = string.format('%04d-%02d-%02d',t.year,t.month,t.day)
	--if current_day ~= EventLog.StartDay then
	--	EventLog.Init()   -- save log from previous day and start new log for today
	--end

	local status_str, event_str, msg

	if  type == EventLog.BARCODE 	 then
		local source = param_as_str(p1)
		if p1 == 'Rfid_Anmelden' or p1 == 'Rfid_Abmelden' then
			text = param_as_str(ExtractPassword(text))
			if #text == 0 then return end
		end
		event_str,status_str,msg = DecodeBarcodeEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	elseif type == EventLog.INTERACTION then
		event_str,status_str,msg = DecodeInteractionEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	elseif type == EventLog.USER_LOGON  then
		event_str,status_str,msg = DecodeUserLogonEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	elseif type == EventLog.ALARM       then
		event_str,status_str,msg = DecodeAlarmEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	elseif type == EventLog.WORKFLOW    then
		event_str,status_str,msg = DecodeWorkflowEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	elseif type == EventLog.RESULT		then
		event_str,status_str,msg = DecodeResultEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	elseif type == EventLog.SOFTWARE_ERROR then
		event_str,status_str,msg = DecodeSoftwareErrorEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	else
		event_str,status_str,msg = DecodeCommonEvent(status, user1, user2, text, p1,p2,p3,p4,p5,p6)
	end

	local str = string.format('%s;%s;%s;%s;%s;%s;\r',
	                           param_as_str(timestamp),
							   param_as_str(event_str),
							   param_as_str(status_str),
							   param_as_str(user1),
							   param_as_str(user2),
							   param_as_str(msg))
	
    local MC = _M.drv.mqttclient
    local cmd = {
        cmd = "event",
        msg = str
    }
    local msg = json.encode(cmd)
    MC:Publish(ini.LeanTopic, 0, msg)

end
------------------------------------------------------------------------------------------------------------------
-- MQTT callbacks -------------------------------------------------------------

-- MQTT callback: "onConnect" - do your subscriptions here, so they will 
-- automatically get re-subscribed in case the connection got lost.
_M.MQTT.OnConnect = function(Token, sessionPresent, serverURI)
	
    local MC = _M.drv.mqttclient
    -- subscribe to the ID code change topic (TopicIncoming)
    MC:Subscribe(_M.drv.ini.TopicIncoming, 0)
	-- eventually publish something
	-- Lastwill: MQTT:Publish(MqttLasWillTopic, 1, "connected");
	--           MQTT:Publish("/heOpMon/config", 0, json.encode(Config))
end
_M.MQTT.OnConnectFailed = function(Token, Code, Message)
	XTRACE(2, "ERROR: MQTT Connect failed, code="..tostring(Code)..", err="..Message)
end
_M.MQTT.OnDisconnect = function(Message)
	XTRACE(2, "ERROR: MQTT Connection lost, err="..tostring(Message))
end

-- MQTT message callback: called after a new data for a subscription was received
_M.MQTT.OnMessage = function(MsgId, QoS, Flags, TopicLen, PayloadLen, TopicName, PayloadData)
	XTRACE(16, "MQTT: New data received: Topic=" .. TopicName .. " Payload=" .. PayloadData)

	-- Check on which topic this was received and process it accordingly
	if TopicName == _M.drv.ini.TopicIncoming then
	    -- decode
		XTRACE(16, "MQTT: new ID code message received [" .. PayloadData .."]")
	    local data = json.decode(PayloadData)
	    _M.OnNewIdReceived(data)
--    elseif TopicName == _M.drv.ini.AliveTopic then
--        -- handle global Alive - we don't actually care about the message contents
--        _M.lastAlive = os.clock()
    else
        -- unknown topic...?
	end
--]]
end

-- Additional callbacks
_M.MQTT.OnSubscribe = function(Token, QoS)
--	XTRACE(16, tostring(Token)..": Subscribe ok, QoS="..tostring(QoS))
end
_M.MQTT.OnSubscribeFailed = function(Token, Code, Message)
--	XTRACE(16, tostring(Token)..": ERROR: Subscribe failed, code="..tostring(Code)..", err="..Message)
end
_M.MQTT.OnDeliveryComplete = function(Token)
--	XTRACE(16, tostring(Token)..": Delivery complete.")
end

-- MQTT queue handler --------------------------------------------------------
_M.MQTT.connstate = -1
_M.MQTT.ProcessEvents = function()
    local MC = _M.drv.mqttclient
	-- get events from the queue and dispatch them accordingly
	repeat
		res,item = MC:QueueGet()
		if res ~= 0 then
			--print("---------------------------------------->" .. tostring(res) .. "/" .. tostring(item))
			--tprint(item)
			
			-- dispatch to callbacks
			if item.mc == 0 then 
				if item.flags == 1 then _M.MQTT.OnConnect(item.key, item.i2, item.s1)
				else _M.MQTT.OnConnectFailed(item.key, item.i2, item.s1)
				end
			elseif item.mc == 1 then _M.MQTT.OnMessage(item.key, item.qos, item.flags, item.i1, item.i2, item.s1, item.s2)
			elseif item.mc == 2 then 
				if item.flags == 1 then _M.MQTT.OnSubscribe(item.key, item.qos)
				else _M.MQTT.OnSubscribeFailed(item.key, item.i2, item.s1)
				end
			elseif item.mc == 3 then _M.MQTT.OnDisconnect(item.s1)
			elseif item.mc == 4 then _M.MQTT.OnDeliveryComplete(item.key)
			end
		end
	until (res == 0)
	if MC:GetConnState() ~= _M.MQTT.connstate then
		_M.MQTT.connstate = MC:GetConnState()
		XTRACE(16, "MQTT: INFO: new connection state = " .. tostring(_M.MQTT.connstate))
		_M.LastIOSet = 'DUMMY'
		if _M.MQTT.connstate == 1 then
			-- pahoe MQTT auto-reconnect forgets about active subscriptions, so redo them
			_M.MQTT.OnConnect(0, 0, 'reconnect')
		end
	end
end

-----------------------------------------------------------------------------
local tool_ticker = os.clock()

-- StatePoll is cyclically called every 100-200ms
_M.PollTools = function(info)


	if os.clock() - tool_ticker > 2 then		-- every 2 seconds...

		-- Publish tool information over MQTT
		for idx = 1, table.getn(Tools) do
			local tool = Tools[idx]		-- get the tool info
			if tool.Driver == 'OPConn' then
    			local state = tool.Status	-- get the tools current status
	    		-- format status as json sting
		    	local msg = string.format("{  \"Channel\":%d, \"Name\":\"%s\", \"ConnState\":%d, \"BatteryState\":%d, \"BatteryLevel\":%d, \"SignalLevel\":%d, \"ToolSN\":\"%s\", \"ToolCalibDate\":\"%s\", \"ControllerSN\":\"%s\", \"ToolCycles\":%d }", 
			    	tool.Channel, tool.Name, state.ConnState, state.BatteryState, state.BatteryLevel, state.SignalLevel, 
				    state.ToolSerialNumber, state.LastCalibrationTime, state.ControllerSerialNumber, state.ToolCycles)
    			local topic = _M.drv.ini.ToolTopic .. idx	
	    		_M.drv.mqttclient:Publish(topic, 0, msg);
		    end
		end
		
		tool_ticker = os.clock()
	end

end
-----------------------------------------------------------------------------
local wf_ticker = os.clock()

-- StatePoll is cyclically called every 100-200ms

-----------------------------------------------------------------------------
local current_workflow_state =
    {
        last_msg = '',
        model = '',
        sn    = '',
        operation_total   = 0,
        current_job       = 0, 
        current_operation = 0,
        start_time        = nil,
        state             = 0,
        curr_nok_cnt      = 0,
        part_ok_cnt       = 0,
        part_nok_cnt      = 0,
        job_offset        = {},  
        fmt_str =     ", \"model\":\"%s\""
                    ..", \"sn\":\"%s\""
                    ..", \"start_time\":\"%s\""
                    ..", \"duration\":\"%s\""
                    ..", \"percent\":%d"
                    ..", \"nok_cnt\":%d"
                    ..", \"part_total\":%d"
                    ..", \"part_nok\":%d"
                    ..", \"user_level\":%d"
                    ..", \"user\":\"%s\""
                    .." }",       
        
        clear   = function(this)
            this.operation_total   = 0
            this.current_job       = 0 
            this.job_offset        = {}  
            this.curr_nok_cnt      = 0
            this.model  = ''
            this.sn     = ''
            this.start_time  = nil
            this.state = 0
        end,
        process = function(this,state, job_num, job_name, op_num, op_name, user, level) 
            this.state =  state
            this.current_operation = op_num 
            this.current_job = job_num

            local str_state = 'Idle'
            if state == 0 and #this.last_msg > 0 then  -- IDLE --> use last message for report
                return string.format("{ \"State\":\"%s\", ", str_state) .. this.last_msg 
            elseif  state == 1 then str_state = 'WaitJobStart'
            elseif  state == 2 then str_state = 'JobActive'
            elseif  state == 3 then str_state = 'JobCompleted'
            elseif  state == 4 then str_state = 'Done'
            elseif  state == 5 then str_state = 'DoneWaitUser'
            elseif  state == 6 then str_state = 'JobAborted'
                return nil 
            end
            
            -- calculate percent
            local percent = 0
            if state == 4 and job_num ==0 and op_num == 0 then -- Done OK
                percent = 100
            else 
                local offset = this.job_offset[job_num]
                if this.operation_total > 0 and offset and op_num + offset <=  this.operation_total then 
                    percent = math.floor (100*(offset + op_num -1 )/this.operation_total)
                end
            end 
            -- calculate time
            local str_start_time = '00:00:00'
            local duration   = '00:00'
            if this.start_time then
                local t1 = os.time(this.start_time)
                local t2 = os.time(os.date("*t"))
                str_start_time = string.format('%02d:%02d:%02d', this.start_time.hour, this.start_time.min, this.start_time.sec)
                local seq = os.difftime (t2, t1)
                local min = math.floor(seq/60)
                seq = seq - min* 60
                duration = string.format('%02d:%02d', min, seq)
            end
            if not level then level = 0 end
            local txt = string.format(this.fmt_str, this.model, this.sn, str_start_time, duration, percent,
                                      this.curr_nok_cnt, this.part_ok_cnt + this.part_nok_cnt, this.part_nok_cnt,
                                      level ,  param_as_str(user))
            this.last_msg = txt 
            return string.format("{ \"State\":\"%s\" ", str_state) .. txt
        end
    }
---------------------------------------------------------------------------------------------    

_M.PollWorkwlov = function(info)

	if os.clock() - wf_ticker > 2 then		-- every 2 seconds...
		-- Publish tool information over MQTT
		local wf = info.Workflow
		local task_seq = wf.BoltSeq
		if not task_seq then task_seq = 1 end
		local job_seq = wf.JobSeq
		if not job_seq then job_seq = 0 end
		local msg = current_workflow_state:process(wf.State, job_seq, '',task_seq,'', UserManager.user, UserManager.user_level)
		local topic = _M.drv.ini.WorkflowTopic
		_M.drv.mqttclient:Publish(topic, 0, msg);
		wf_ticker = os.clock()
	end

return
end
-----------------------------------------------------------------------------
-- StatePoll is cyclically called every 100-200ms
function _M.StatePoll(info)
    local wf = info.Workflow        -- info about the current workflow
    -- poll the tool driver state machine to handle low level 
    -- communication with the devices
    if _M.MQTT.ProcessEvents and _M.drv then
        _M.MQTT.ProcessEvents()
    end
	_M.PollTools(info)
	_M.PollWorkwlov(info)
end


-- register the callbacks with core.
-----------------------------------------------------------------------
local base_start_assembly  = Barcode_StartAssembly
local base_stop_assembly   = Barcode_StopAssembly
-----------------------------------------------------------------------------
_M.StopAssembly = function (final_state)
    
    if final_state == 1 then 
          current_workflow_state.part_ok_cnt = current_workflow_state.part_ok_cnt + 1  -- OK
          local msg = current_workflow_state:process(4, 0, '',0,'', UserManager.user, UserManager.user_level)  --Done OK
	      local topic = _M.drv.ini.WorkflowTopic
	      _M.drv.mqttclient:Publish(topic, 0, msg);
    else
      current_workflow_state.part_nok_cnt= current_workflow_state.part_nok_cnt + 1 -- NOK or not completed 
    end 
    current_workflow_state:clear()
    base_stop_assembly(final_state)
    
end
---------------------------------------------------------------------
_M.StartAssembly = function()

    base_start_assembly()
    current_workflow_state.start_time = os.date("*t")
    current_workflow_state.model = param_as_str(active_barcodes[1].val)
    current_workflow_state.sn    = param_as_str(active_barcodes[2].val)

    current_workflow_state.operation_total = 0
    local op_total   = 0
    for i,job in pairs(Workflow.Jobs) do 
        current_workflow_state.job_offset[job.Seq] = op_total
        for k,action in pairs(job.Actions) do 
            op_total = op_total + 1
        end 
    end
    current_workflow_state.operation_total = op_total 
end
---------------------------------------------------------------------------------
Barcode_StartAssembly  = _M.StartAssembly
Barcode_StopAssembly   = _M.StopAssembly
--------------------------------------------------------------------------------


return _M

