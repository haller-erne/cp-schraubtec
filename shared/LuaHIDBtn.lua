--[[

Test luaHID.dll USB HID communication for LUA

See more samples here: https://github.com/ynezz/luahidapi/tree/master/doc/examples

]]--

local a = 3
local b = 4
local hid = require("luahid")      -- load our LuaHID.dll USB HID device interface library

local string = require "string"
local sfmt, sbyte = string.format, string.byte
local dev

------------------------------------------------------------------------
-- initialize
------------------------------------------------------------------------
USB_DEVICE_VID = 0x483         -- ARDUINO Leonardo (!!!)
USB_DEVICE_PID = 0x1001
USB_REPORT_SIZE = 4
LuaHID_initialized = 0

local function LuaHIDInit()

  if LuaHID_initialized ~= 0  then return LuaHID_initialized > 0 end
  LuaHID_initialized = -1

  -- Get version info
  vdlls, vddlt = hid.version_mod()
  local LuaDLL_version = param_as_str(vdlls)

  XTRACE(16, string.format("Lib VERSION %s build on %s", hid._VERSION, hid._TIMESTAMP))
  if  hid.init() then
     XTRACE(16, string.format("LUA HID Initialization OK. LuaDLL version %s", LuaDLL_version))
  else
      XTRACE(1, string.format("LUA HID init error. LuaDLL version %s", LuaDLL_version))
      return false
    end

  dev = hid.open(USB_DEVICE_VID, USB_DEVICE_PID)
  if not dev then
    XTRACE(1, "Open: unable to open test device")
    LuaHID_initialized = -1
    return false
  end
------------------------------------------------------------------------
-- read the manufacturer string
------------------------------------------------------------------------
  local mstr = dev:getstring("manufacturer")
  if mstr then
    XTRACE(16,"LUA HID Manufacturer String: "..mstr)
  else
    XTRACE(1,"LUA HID Unable to read manufacturer string")
    return false
  end

------------------------------------------------------------------------
-- read the product string
------------------------------------------------------------------------

  local pstr = dev:getstring("product")
  if pstr then
    XTRACE(16,"LUA HID Product String: "..pstr)
  else
    XTRACE(1,"LUA HID Unable to read product string")
    return false
  end

------------------------------------------------------------------------
-- non-blocking read test
------------------------------------------------------------------------

  -- set non-blocking reads
  if not dev:set("noblock") then
    XTRACE(1,"LUA HID Failed to set non-blocking option")
    return false
  end

  -- Try to read from the device. There shoud be no
  -- data here, but execution should not block.

  local rx = dev:read(USB_REPORT_SIZE)
  if not rx then
    XTRACE(1,"LUA HID Read error during non-blocking read test")
    return false
  end

------------------------------------------------------------------------
-- write to the device
------------------------------------------------------------------------

  local tx = string.char(0x00, 0x12, 0x34, 0x56, 0x78)
  local res = dev:write(tx)
  if not res then
    XTRACE(1,"LUA HID Unable to write() Error: "..dev:error())
    return false
  end
  LuaHID_initialized = 1
  return true

end

------------------------------------------------------------------------
-- open test device
------------------------------------------------------------------------

-- (1) test device is an Arduino Leonardo used for prototyping, running
--     a low-speed USB connection and a custom USB HID descriptor
-- (2) fixed report size for both IN and OUT, no multiple report IDs
-- (3) a simple buffer is implemented: bytes written to using the OUT
--     pipe are echoed by the MCU and read back via the IN pipe
-- (4) buffer holds only one report's worth of data
-- (5) set/get feature report not implemented


------------------------------------------------------------------------
-- read from the device
------------------------------------------------------------------------
local color = 0
local t = os.clock()
local tOld = os.clock()
----------------------------------------------------------------------
local function chase()
  if t - tOld > 0.1 then
      tOld = t
      color = color + 1
      if color >= 12 then color = 0 end
      local tx = string.char(0x02, 12*3, 0x80)    -- command, len, brightness
      for i = 0, 11 do
          if i == color then
            tx = tx .. string.char(0x80, 0x00, 0x00)
          else
            tx = tx .. string.char(0x00, 0x00, 0x00)
          end
      end
      dev:write(tx)
  end
end

local function pulse()
  if t - tOld > 0.1 then
      tOld = t
      local tx = string.char(0x01, 4, 0x80, color, 255-color, 0x78) -- command, len, rgb-colors
      --print(sfmt("Writing 0x%02X%02X%02X%02X to device", sbyte(tx, 1), sbyte(tx, 2), sbyte(tx, 3), sbyte(tx, 4)))
      dev:write(tx)
      color = color + 16
      if color > 255 then color = 0 end
  end
end

local function blink()
  if t - tOld > 0.1 then
      tOld = t
	  local tx
	  if color < 10 then
		tx = string.char(0x01, 4, 0x80, 255,0,0) -- command, len, rgb-colors
      else 
		tx = string.char(0x01, 4, 0x80, 0,0,0) -- command, len, rgb-colors
	  end
      dev:write(tx)
      color = color + 1
      if color > 20 then color = 0 end
  end
end

----------------------------------------------------------------------------
LUAHID_YELLOW = string.char(0x01, 4, 0x80, 255,255,0)       -- command, len, brightness, color in RGB
LUAHID_WHITE  = string.char(0x01, 4, 0x80,   0,  0,0)       -- command, len, brightness, color in RGB

LUAHID_current_color = LUAHID_WHITE
LUAHID_current_tool  = 0  

function GetOperationResultByKeyInput (Tool, ActionName, Key, first_call)

  if not LuaHIDInit() then return -1 end
  if first_call then
    LUAHID_current_tool = Tool
    LUAHID_current_color = LUAHID_YELLOW
    dev:write(LUAHID_current_color)
  end
  local rx = dev:read(USB_REPORT_SIZE)
  if not rx then
    XTRACE(1,"LUA HID Unable to read() Error: "..dev:error())
    return -1
  elseif rx == "" then
    return -1   --  "Waiting..."
  end
  if #rx > 0 and sbyte(rx,1) > 0 then
        --print(sfmt("Read 0x%02X%02X%02X%02X from device",
        --  sbyte(rx, 1), sbyte(rx, 2), sbyte(rx, 3), sbyte(rx, 4)))
        -- pressed
    LUAHID_current_color = LUAHID_WHITE
    dev:write(LUAHID_current_color)
    return 0  -- key pressed
  end
  return -1      -- wait
end
-------------------------------------------------------------------------------
local function WF_StateChanged(info)
  local wf = info.Workflow
  if not LuaHIDInit() then return end
  if wf.State ~= 2 or LUAHID_current_tool ~= wf.Channel then
    -- JobActive not active or tool changed
    LUAHID_current_color = LUAHID_WHITE
  end
end
-------------------------------------------------------------------------------
local function LUAHID_poll(info)
  WF_StateChanged(info)
  if not LuaHIDInit() then return end
  dev:write(LUAHID_current_color)
end
-------------------------------------------------------------------------------
-- register the callbacks with core.
StatePollFunctions.add(LUAHID_poll)
StateChangedFunctions.add(WF_StateChanged)

