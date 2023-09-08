-- Implement the Flowlight protocol for talking to the pick to light controller
-- from "PicktToLight Systems S.l.".
--
-- (c) 2022 Haller + Erne GmbH (www.haller-erne.de)
--
-- TODO:
-- * add better response timeout and disconnect handling
-- * maybe add support for bin counter values
--
local socket = require("socket")

local m = {}
local log = function(s,level) 
	if not level then level = 16 end
    XTRACE(level, s)
end

-- ------------------------------  module-local variables --------------------------
local server = nil
local client = {
    socket  = nil,
    state   = 0,
    cmd_code = -1,          -- command state
    cmd_text = '',
    cmd_seq = 0,            -- last sent command sequence number
    cmd_to = nil            -- command response timeout 
}
local callbackFn = nil
local callbackParam = nil

m.errorcodes = {
    ['00'] = 'No Error',
    ['99'] = 'Unknown MID',
}
-- ------------------ lowlevel send helpers (require only a socket parameter) ----------------------
-- Send a command over TCP, handles the lowlevel send and the encapsulation
-- s = socket
-- seq = command sequence number (0...999)
-- cmd = command string
local function sendCmd(s, seq, cmd)
    local buf
    local len = 9 + #cmd
    if (seq > 999) then seq = seq % 1000 end
    buf = string.format('%c%03d%04d', 2, seq, #cmd)
    buf = buf .. cmd .. string.format('%c', 3)
    log(string.format('Transmit: [%03d] [%s]', seq, tostring(cmd)))
    XTRACE(16, string.format('Transmit info: cmd: %s   BUF: %s' , cmd,buf))
    return s:send(buf)
end

-- ---------------------- higher level function (accepting a client) -----------------
-- send the init comman (should be sent immediately after a connection is established)
local function sendCmd_Init(cli)
    cli.cmd_code = 1
    cli.cmd_text = 'Z'
    cli.cmd_seq  = cli.cmd_seq + 1
    cli.cmd_to   = os.time()
    local ok, err = sendCmd(cli.socket, cli.cmd_seq, cli.cmd_text)
    return ok, err
end
-- blk = block number (0...99)
-- adr = device address (0...9999, typ 101,102,...)
-- txt = display text (5 characters)
local function sendCmd_P1(cli, blk, adr, txt, farbe)
    cli.cmd_code = 2
    cli.cmd_seq  = cli.cmd_seq + 1
    if (blk > 99) then blk = blk % 100 end
    if (adr > 99) then adr = adr % 10000 end
    cli.cmd_text = string.format('P1%02d%04d%5.5s', blk, adr, txt)  -- P10001
    cli.cmd_to   = os.time()
    local ok, err = sendCmd(cli.socket, cli.cmd_seq, cli.cmd_text)
    return ok, err
end
local function sendCmd_P4(cli, blk, adr, txt, farbe)
    cli.cmd_code = 2
    cli.cmd_seq  = cli.cmd_seq + 1
    if (blk > 99) then blk = blk % 100 end
    if (adr > 99) then adr = adr % 10000 end
    cli.cmd_text = string.format('P4%02d%04d%5.5s', blk, adr, txt)
    cli.cmd_to   = os.time()
    local ok, err = sendCmd(cli.socket, cli.cmd_seq, cli.cmd_text)
    return ok, err
end

local function sendCmd_PP5(cli, blk, adr, txt, farbe)
    cli.cmd_code = 2
    cli.cmd_seq  = cli.cmd_seq + 1
    if (blk > 99) then blk = blk % 100 end
    if (adr > 99) then adr = adr % 10000 end
    cli.cmd_text = string.format('PP5050000m1%s%04d%5.5s', farbe, adr, txt)  -- PP5050000m1 2$11! 0001 00015
    cli.cmd_to   = os.time()
    XTRACE(16, string.format('start PP505 with params: text = %s , farbe = %s , cmd: %s' , txt, farbe, cli.cmd_text))
    local ok, err = sendCmd(cli.socket, cli.cmd_seq, cli.cmd_text)
    return ok, err
end
-- switch off all bins (delete/terminate command)
local function sendCmd_D(cli)
    cli.cmd_code = 1
    cli.cmd_text = 'D????'   -- broadcast to all modules 
    cli.cmd_seq  = cli.cmd_seq + 1
    cli.cmd_to   = os.time()
    local ok, err = sendCmd(cli.socket, cli.cmd_seq, cli.cmd_text)
    return ok, err
end
-- send acknowledge response (to incoming event)
local function sendAck(cli, ack_seq)
    cli.cmd_code = 0
    cli.cmd_text = 'O'
    local ok, err = sendCmd(cli.socket, ack_seq, cli.cmd_text)
    return ok, err
end

-- ------------------------------- receive handler --------------------------------

local function handleRes(cli, hdr, data)
    log(string.format('Received: [%03d] [%s] (last cmd = [%s])', hdr.seq, tostring(data), tostring(cli.cmd_text)))
    if cli.cmd_code == 1 then       -- init command
        if data ~= 'o' then
            return nil, 'command failed, ret='..tostring(data)
        end
        -- success, so set to "idle"
        cli.cmd_code = 0
    elseif cli.cmd_code == 2 then   -- P1 command
        if data ~= 'o' then
            return nil, 'P1 command failed, ret='..tostring(data)
        end
        -- success ful, so switch to "wait for button press"
        cli.cmd_code = 3
    elseif cli.cmd_code == 3 then   -- wait for button pressed command
        -- check for result
        if string.sub(data, 1, 1) == 't' and #data >= 7  then
            -- pressed!
            hdr.adr = tonumber(string.sub(data, 2, 5)) -- originator address
            hdr.status = tonumber(string.sub(data, 6, 7)) -- 0 = ok, 1 = error, 10 = shortage
            -- now send the acknowledge
            sendAck(cli, hdr.seq)
            -- and notify the caller
            if callbackFn then
                callbackFn(hdr.adr, hdr.status, callbackParam)
            end
        else
            return nil, 'invalid event data='..tostring(data)
        end
    else
        return nil, 'unknown response='..tostring(data)
    end
    return 1, nil   -- success!
end    

-- Create/initialize a server
function m.Init(host, port)
    log(string.format('Init: Host=%s:%d', host, port))
    client.host = host
    client.port = port
    client.state = 0
    client.cmd_code = -1
    client.cmd_text = ''
end    
    
function m.Poll()
    if client.state == 0 then
        -- try to create and connect the socket
        client.socket = socket.tcp()
        client.socket:settimeout(0.01)
        local ok, err = client.socket:connect(client.host, client.port)
        if ok then
            client.state = 2    -- connected without timeout
        else 
            client.state = 1    -- connect without delay
			client.start_time = os.clock()
        end
        
    elseif client.state == 1 then
        -- wait until the socket is actually connected - it should be "writeable", if connected
        local r, w, err = socket.select({ client.socket }, nil, 0.01)
        if w ~= nil and #w > 0 then
            client.state = 2
		else 
			if os.clock() - client.start_time  > 1 then
				client.state = 99    -- if socket is not ready after 1 seconds then reopen
				log('Close pending socket.', 1)
			end	
        end
    
    elseif client.state == 2 then
        -- connected, immediately do the init
        log('Connected.')
        local ok, err = sendCmd_Init(client)
        if not ok then 
            client.state = 99
        else
            client.state = 3
        end

    elseif client.state == 3 then
        -- poll the socket for new data received
        local r, w, err = socket.select({ client.socket }, nil, 0)
        if r ~= nil and #r > 0 then
            client.socket:settimeout(0)            -- only read what's there so far
            local header, err = client.socket:receive(8)
            if header ~= nil and #header == 8 then
                -- successfully received header, decode and read rest of the packet
                local h = {}
                h.buf = header                             -- raw data received
                h.stx = string.sub(header, 1, 1)           -- should be \002
                h.seq = tonumber(string.sub(header, 2, 4)) -- len of header + data excluding terminating 0
                h.len = tonumber(string.sub(header, 5, 8)) -- MID code
                client.socket:settimeout(0.1)  -- read the data part (give it 100ms)
                local data, err = client.socket:receive(h.len+1)
                if data ~= nil and #data == h.len+1 then
                    -- handle MID
                    handleRes(client, h, data:sub(1, -2))
                else
                    -- error/timeout
                    log('Timeout/Error receiving data, err='..tostring(err), 1) 
                    client.state = 99
                end
            else
                -- No data or not enough data. This should never ever happen.
                log('Timeout/Error receiving header, err='..tostring(err),1) 
                client.state = 99
            end
        else
            --client.socket:send('.')
        end
        -- check for response/command timeouts
        if client.cmd_code == 1 or client.cmd_code == 2 then -- waiting for a response
            if os.time() - client.cmd_to > 2.0 then -- timeout 2 seconds
                log('Response timeout! Disconnecting',1) 
                client.state = 99
            end
        end
        
    elseif client.state == 99 then
        log('Disconnecting...',1)
        client.socket:close()
        client.state = 0
    end
end

function m.IsConnected()
    return (client.state >= 3)
end

function m.SetCallback(fn, param)
    local old = callbackFn
    callbackFn = fn
    callbackParam = param
    return old
end    

function m.GetState()
    return client.state, client.cmd_code
end    

function m.RequestBin(blk, adr, txt, farbe)
   log(string.format('RequestBin(Blk=%d, adr=%d, txt="%s, farbe= %s")', blk, adr, txt, farbe))
    if client.cmd_code ~= 0 then
        return nil, "Called in invalid state, retry later"
    end
    return sendCmd_P1(client, blk, adr, txt)
end
function m.RequestBinExt(blk, adr, txt, farbe)
    log(string.format('RequestBinExt(Blk=%d, adr=%d, txt="%s, farbe= %s")', blk, adr, txt, farbe))
    if client.cmd_code ~= 0 then
        return nil, "Called in invalid state, retry later"
    end
    return sendCmd_PP5(client, blk, adr, txt, farbe)
end
function m.ClearBins()
    log('ClearBins()')
    if client.cmd_code ~= 0 and client.cmd_code ~= 3 then
        return nil, "Called in invalid state, retry later"
    end
    return sendCmd_D(client)
end

function m.Test()
    log = function(s)   -- override the modules log function to print to the console
        print(s)
    end 
    local addr = 101
    local i = 0
    local cb = function(adr, sta) 
        log(string.format("adr = %04d, sta=%02d", adr, sta))
        i = 0
        addr = addr + 1
    end
    m.SetCallback(cb, nil)
    
    m.Init("192.168.1.11", 2000)
    -- loop forever waiting for clients
    while 1 do
        m.Poll()
        if client.state >= 3 then
            i = i + 1
            if i == 50000 then
                local ok, err = m.RequestBin(0, addr, "0001")
                if not ok then
                    print(err)
                end
            end
            if i == 500000 then
                local ok, err = m.ClearBins()
                if not ok then
                    print(err)
                end
            end
        end
    end
end

  
-- uncomment to run a simple test
--m.Test()

return m
