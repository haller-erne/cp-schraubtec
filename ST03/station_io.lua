local enip_io = require('station_io_enip')
local struct = require("struct")    -- see http://www.inf.puc-rio.br/~roberto/struct/
                                    -- see also: https://github.com/25A0/blob
local basexx = require('basexx')
local bit32 = require('bit32')      -- bit manipulation
local positioning = require('positioning')

local M = {
    P = { {}, {}, {}, {} },         -- 4 IO-Link ports. TODO: add some IOLINK-Device handlers/classes
    data = {
        -- TODO:: set to nil, if data is not valid (IO-Link error, etc)
        distance = 0,               -- [mm] Wenglor IO-Link laser distance sensor
        rotation = 0,               -- [increments] TR-Electronic CMV582M-00028
        tilt_x = 0,                 -- [deg] IFM JN2200
        tilt_y = 0,                 -- [deg] IFM JN2200
    },
}

-- setup the callback hooks for data change
enip_io.OnConnChanged = function(dev)
    if dev.name == 'IOLINK_MASTER' then
        if dev.connected then
            XTRACE(16, "IO-Link master running!")
        else
            XTRACE(4, "IO-Link master lost connection!")
            -- TODO: might reset internal data/state
            positioning.ErrorNoData(3)
        end
    end
end

enip_io.OnDataChanged = function(dev)
    --XTRACE(16, "Data changed: "..dev.cfg.name)
    if dev.cfg.name == 'IOLINK_MASTER' then
        -- Decode all data from the IO-Link master
        for i = 1,4 do
            M.P[i].i_old = M.P[i].i
            M.P[i].PQI_old = M.P[i].PQI
        end
        -- TR-electronic CMV582M absolute rotation sensor
        M.P[1].PQI = dev.data.i:sub(4+1, 5+1)
        M.P[1].i = dev.data.i:sub(12+1, 12+32)
        local h, l = struct.unpack("<hH", M.P[1].i)
        M.data.rotation = l     -- don't care about the high word
        XTRACE(16, string.format("%s: ROT: %s", dev.cfg.name, basexx.to_hex(M.P[1].i)))
        -- Wenglor P1PY101 laser distance sensor
        M.P[2].PQI = dev.data.i:sub(6+1, 7+1)
        M.P[2].i = dev.data.i:sub(44+1, 44+32)
        M.data.distance = struct.unpack("<h", M.P[2].i)
        -- IFM JN2200 2D tilt sensor
        M.P[3].PQI = dev.data.i:sub(8+1, 9+1)
        M.P[3].i = dev.data.i:sub(76+1, 76+32)
        local status, diags, x, y = struct.unpack("<BBhh", M.P[3].i)
        M.data.tilt_x = x
        M.data.tilt_y = y
        -- IFM AL2321 Port 4 digital I/O module
        M.P[4].PQI = dev.data.i:sub(10+1, 11+1)
        M.P[4].i = dev.data.i:sub(108+1, 108+32)
        local b1, b2, b3, b4 = struct.unpack("<BBBB", M.P[4].i)
        M.data.io = {}
        local io = M.data.io
        io.ccwsel = bit32.band(b4, 0x10)
        io.cwsel  = bit32.band(b3, 0x10)
        io.sensor = bit32.band(b4, 0x02)
        io.axial  = bit32.band(b3, 0x01)
        io.radial = bit32.band(b4, 0x01)
        io.blue   = bit32.band(b4, 0x04)
        io.black  = bit32.band(b3, 0x04)
        for i = 1,4 do
            -- TODO: throw alarm, if any of the IO-link ports report an error!
            local P = M.P[i]
            if P.PQI ~= P.PQI_old then
                XTRACE(16, string.format("%s: P%d: PQI now %s", dev.cfg.name, i, basexx.to_hex(P.PQI)))
            end
            --if P.i ~= P.i_old then
            --    XTRACE(16, string.format("P%d: input now %s", i, basexx.to_hex(P.i)))
            --end
        end

        -- update dependencies
        if M.P[1].i ~= M.P[1].i_old or M.P[2].i ~= M.P[2].i_old or M.P[3].i ~= M.P[3].i_old then
            XTRACE(16, string.format("%s: P1: rotation = %u, P2: distance = %d, P3: tilt x/y = %d/%d", 
                dev.cfg.name, M.data.rotation, M.data.distance, M.data.tilt_x, M.data.tilt_y))
            -- make them mm and degrees?
            -- update the tool tracking - we use tool 3 connected to the len/rot sensors
            positioning.UpdatePos_RotIncLenAbs(3, M.data.rotation, M.data.distance, M.data.tilt_x, M.data.tilt_y, 0)
        end
        if M.P[4].i ~= M.P[4].i_old then
            XTRACE(16, string.format("P4: CCWSel=%d, CWSel=%d, Start=%d, Anw=%d", io.ccwsel, io.cwsel, io.radial, io.sensor))
        end

    end
end

---------------------------------------------------------------------------------------
-- Handle the OpenProtocol IOs
local prev_output = nil
local prev_input = nil
local Tool3_Error = nil

-- StatePoll is called cyclically
local function OnStatePoll(info)

    local wf = info.Workflow
    local output = 0

    -- cyclically update the OpenProtocol I/O data
    if M.data.io ~= nil then
        local io = M.data.io
        if io.radial > 0 and io.ccwsel > 0 then
            output = 0x80
        elseif io.radial > 0 and io.cwsel > 0 then
            output = 0x40
        end
        if io.blue > 0 then output = output + 1 end
        if io.black > 0 then output = output + 2 end
    end
    -- Only tool3 supports I/O
    local input, err = ToolIOExchange(3, output)
    if err then
        if not Tool3_Error then
            SetLuaAlarm('ToolIO', -2, param_as_str(err))
            XTRACE(1, param_as_str(err))
            Tool3_Error = true
        end
        return nil
    else
        if Tool3_Error then
            ResetLuaAlarm('ToolIO')
            XTRACE(8, 'Tool3 IO running!')
            Tool3_Error = nil
        end
        if output ~= prev_output or input ~= prev_input then
            XTRACE(16, 'IO changed. Input: '..param_as_str(output).. '   Output: '..param_as_str(input))
            prev_output = output
            prev_input  = input
        end
    end
end

if StatePollFunctions ~= nil then
	StatePollFunctions.add(OnStatePoll)
end

--[[

--------------------------------------------------------------------------------------------
-- return changed, err
local function GetSensorVal(dev, name)
    local changed = false
    if dev.connected then
        local sens_rad = dev.rawinp:sub(120, 124)
        local sens_len = dev.rawinp:sub(150, 154)
        local raw_rad = struct.unpack("<L", sens_rad)
        local raw_len = struct.unpack("<L", sens_len)
        if raw_rad ~= dev.old_rad or raw_len ~= dev.old_len then
            dev.old_rad = raw_rad
            dev.old_len = raw_len
            changed = true
        end
    else
        return nil, name.." DISCONNECTED!"
    end
    return changed
end
----------------------------------------------------------------------------------------------
-- Read the current x,y position from the sensors
-- x,y,ok = GetCurrentPosition()
local function GetCurrentPosition(Tool)

    local cfg = M.cfg
    local len_changed, rad_changed, err

    len_changed, err = GetSensorVal(ethernet_iol, "SENSOR_LEN")
    if len_changed == nil then
        return 0, 0, err
    end

    -- plausibility check
    local len_increments = tonumber(ethernet_iol.measurement)
    local rad_increments = 0
    if not len_increments then return 0,0,'SENSOR_LEN invalid data' end
    if not rad_increments then return 0,0,'SENSOR_RAD invalid data' end

    -- remove zero offset
    if type(cfg.iol.offs_rad) ~= "number" then cfg.iol.offs_rad = 0.0 end
    if type(cfg.iol.offs_len) ~= "number" then cfg.iol.offs_len = 0.0 end
    local rad_value = rad_increments - cfg.iol.offs_rad
    local len_value = len_increments - cfg.iol.offs_len

    -- debug:
    if (rad_changed) then XTRACE(16, "SENSOR_RAD : "..param_as_str(rad_value)) end
    if (len_changed) then XTRACE(16, "SENSOR_LEN : "..param_as_str(len_value)) end
    --if (len_changed) then XTRACE(16, "SENSOR_LEN : "..param_as_str(len_value).." -> "..param_as_str(len_mm)..'mm') end

    ------------------------------------------
    --  calculate cartesian coordinates from polar coordinates

    --  Rotation axis: scale is increments per 360 Grad
    cfg.iol.scale_rad = 4096
    cfg.iol.scale_len = 1.0

    rad_value = (rad_value % cfg.iol.scale_rad)
    local rad = rad_value * ( 2 * math.pi / cfg.iol.scale_rad) -- in radiant

    -- Linear axis: scale is increments per mm
    local len_mm = (len_value / cfg.iol.scale_rad) + cfg.ref.len

    local x = len_mm * math.sin(rad)
    local y = len_mm * math.cos(rad)

    local x_abs = x + cfg.ref.x
    local y_abs = y + cfg.ref.y - cfg.ref.len

    if (len_changed or rad_changed) then
        XTRACE(16, string.format("Pos: l/r: %.2fmm/%.2f° x/y: %.2f/%.2f -> %.2f/%.2f", len_mm, rad*360/(2*3.1415), x, y, x_abs, y_abs))
    end

    M.pos_cur = {
        -- the raw sensor values
        len = len_increments,
        rad = rad_increments,
        -- the calculated carthesian values
        posx = x_abs,
        posy = y_abs,
        posz = 0,
        dirx = 0, diry = 0, dirz = 0,
    }
    return x, y, nil  -- OK!
end
]]--
return M
