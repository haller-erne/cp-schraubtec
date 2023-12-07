local string = require "string"
local sbyte = string.byte
local hid = require("luahid")      -- load our LuaHID.dll USB HID device interface library
USB_DEVICE_VID = 0x0483         -- DOME (!!!)
USB_DEVICE_PID = 0x1001

-- Handle the Acknowledge tool input
-- NOTE: the key_input.ok and key_input.nok will be set from external I/O (station_io.lua)
-- Typical sequence is:
--   active = true (as soon as a key press request gets active), resets ok, nok and done
--   wait until ok or nok is set (at the rising edge of a physical key press)
--   wait until done is set (at the physical release of a key press)
local key_input = {
    ledmode = 0,
    active = nil,
    ok = nil,
    nok = nil,
    done = nil,
}
-- return -1 = no key, 0 = OK key, 1001 = NOK key
function GetOperationResultByKeyInput (Tool, ActionName, Key, first_call)
    if first_call then  -- reset flags
        key_input.active = true
        key_input.ok = nil
        key_input.nok = nil
        key_input.done = nil
	elseif key_input.done then
        key_input.active = nil
        key_input.done = nil
        key_input.led_mode = 1
        if key_input.ok then
            key_input.ok = nil
            key_input.nok = nil
            return 0        -- OK key pressed
        else -- if key_input.nok then
            key_input.ok = nil
            key_input.nok = nil
            return 1001     -- NOK key pressed (or done without ok set)
        end
    end
    return -1       -- wait
end

local dev = {
    h = nil,
    tOld = os.clock(),
    pos = 0,
    color = 0,
}
local function leds_chase()
    local t = os.clock()
    if t - dev.tOld > 0.1 then
        dev.tOld = t
        dev.pos = dev.pos + 1
        if dev.pos >= 12 then dev.pos = 0 end
        local tx = string.char(0x00, 0x02, 12*3)    -- addr, command, len
        for i = 0, 11 do
            if i%4 == dev.pos%4 then
              tx = tx .. string.char(0x00, 0x00, 0x20)
            else
              tx = tx .. string.char(0x00, 0x00, 0x00)
            end
        end
        dev.h:write(tx)
    end
end
local function leds_pulse()
    local t = os.clock()
    if t - dev.tOld > 0.1 then
        dev.tOld = t
        local tx = string.char(0x00, 0x01, 3, dev.color, 255-dev.color, 0x78) -- addr, command, len, rgb-colors
        --print(sfmt("Writing 0x%02X%02X%02X%02X to device", sbyte(tx, 1), sbyte(tx, 2), sbyte(tx, 3), sbyte(tx, 4)))
        dev.h:write(tx)
        dev.color = dev.color + 16
        if dev.color > 255 then dev.color = 0 end
    end
end
local function leds_off()
    local tx = string.char(0x00, 0x01, 3, 0x00, 0x00, 0x00) -- addr, command, len, rgb-colors
    dev.h:write(tx)
end
local function leds_pressed()
    local tx = string.char(0x00, 0x01, 3, 0x00, 0xFF, 0x00) -- addr, command, len, rgb-colors
    dev.h:write(tx)
end

local function usb_poll(ledmode)
    if not dev.initialized then
        hid.init()
        dev.h = hid.open(USB_DEVICE_VID, USB_DEVICE_PID)
        if dev.h then
            dev.h:set("noblock")
        end
        dev.initialized = true
    end
    if not dev.h then
        return
    end
    local rx = dev.h:read(4)  -- read 4 bytes (addr, cmd, len, state)
    if not rx then
        -- todo: disconnect/reconnect
        -- print("Error: "..dev:error())
        return
    elseif rx == "" then
        -- print("Waiting...")
    else
        if #rx > 0 then
            if sbyte(rx,1) == 1 and sbyte(rx,4) > 0 then
                -- key pressed (rising edge)
                if key_input.active then
                    key_input.ok = true
                end
            else
                -- key released (falling edge)
                if key_input.active then
                    key_input.done = true
                end
            end
        end
    end
    if key_input.ledmode == 1 then
        leds_chase()                -- idle
    elseif key_input.ledmode == 2 then
        leds_pulse()                -- wait for button press
    elseif key_input.ledmode == 3 then
        leds_pressed()              -- button pressed!
    else
        leds_off()
    end
end

local wfstate_old = nil
local ledmode_old = nil
local function poll(wf)
    local wfstate = wf.State    -- the current workflow state
    if wfstate == 0 then
        -- idle
        key_input.ledmode = 1
    elseif wfstate == 2 then
        if key_input.active then
            if key_input.ok then
                key_input.ledmode = 3
            else
                key_input.ledmode = 2
            end
        else
            key_input.ledmode = 1
        end
    else
        key_input.active = nil
        --key_input.ledmode = 0
    end
    usb_poll(key_input.ledmode)
    --if wfstate_old ~= wfstate then
    --    XTRACE(16, "wfstate = ".. tostring(wfstate))
    --end
    --wfstate_old = wfstate
    --if ledmode_old ~= key_input.ledmode then
    --    XTRACE(16, "ledmode = ".. tostring(key_input.ledmode))
    --end
    --ledmode_old = key_input.ledmode
end
--[[
    local tool = info.Tool
    if wf.Why == 1 and wf.State == 2
    then
        -- new result received
        -- see system.lua:
        -- TOOL_TYPE = {
        --    ERGOSPIN=1, GWK=2, NEXO=3, ByHAND=4, NEWTYPE=5, CONFIRMATION=6, MODBUS=7, BARCODE_READER=8, CUSTOM_TOOL=9
        -- }
        if tool.Type >= 1 and tool.Type <= 3 then
]]

----------------------------------------------------------------------------------------------
-- NOTE: the internal workflow state is always visible in the "InternalWorkflowStructure"
--       global table
local function WorkflowStatePoll(info)
    local wf = info.Workflow    -- the current workflow state table
    poll(wf)
end

if StatePollFunctions ~= nil then
	StatePollFunctions.add(WorkflowStatePoll)
end
