local reg = require("heReg")        -- load the registry helpers
local M = {

}

-----------------------------------------------------------------------------------------
local function trim(s)
    return (s~=nil) and s:match "^%s*(.-)%s*$" or nil
end
-----------------------------------------------------------------------------------------
local function save_reference(len_increments, rad_increments)

    local res, err
	local key = 'HKEY_CURRENT_USER\\Software\\Haller + Erne GmbH\\Monitor\\Positioning'
    res, err = reg.WriteString(key, 'REF_INCREMENTS_LEN', tostring(len_increments))
	if not res then
        if not err then err = 'Unknown error!' end
		XTRACE(1,string.format('Save reference position failed. %s', param_as_str(err)))
	end
    res, err = reg.WriteString(key, 'REF_INCREMENTS_RAD', tostring(rad_increments))
	if not res then
        if not err then err = 'Unknown error!' end
		XTRACE(1,string.format('Save reference position failed. %s', param_as_str(err)))
	end
end
-----------------------------------------------------------------------------------------
local function get_dev_params(section, name, tbl)
    local params = { scale=1, offs=0 }
    local key_scale  = 'SCALE_'..name
    local scale = tbl[key_scale]
    if type(scale) ~= 'string' then
        return nil, string.format('INI-section: "%s": %s not found!', section, key_scale)
	end
    params.scale = tonumber(scale)
    -- read the reference offset value from the registry (default to 0)
	local key = 'HKEY_CURRENT_USER\\Software\\Haller + Erne GmbH\\Monitor\\Positioning'
	local offs = reg.ReadString(key, section..'_REF_INCREMENTS_'..name)
    if not offs or offs == "nil" then
        XTRACE(2, string.format('[%s]: Offset not found: %s', section, section..'_REF_INCREMENTS_'..name))
        params.offs = 0
    else
        XTRACE(16, string.format('[%s]: Offset = %s (%s)', section, offs, section..'_REF_INCREMENTS_'..name))
        params.offs = tonumber(offs)
    end
    return params
end
-----------------------------------------------------------------------------------------
local function read_ini_params(inisection)

    local err
    local cfg  ={
        len = { scale=1 },
        rad = { scale=1 },
        ref = { x=0, y= 0 }
    }
	local tbl = ReadIniSection(inisection)
	if type(tbl) ~= 'table' then
		return nil, string.format('INI-section: "%s": section missing!', inisection)
	end
    cfg.len, err = get_dev_params(inisection, 'LEN', tbl)
    if not cfg.len then
		return nil, err
    end
    cfg.rad, err = get_dev_params(inisection, 'RAD', tbl)
    if not cfg.rad then
		return nil, err
    end
    -- get the reference position value
    if type(tbl.REF_POS) == 'string' then   -- refpos given
        local x, y = tbl.REF_POS:match("([^,]+),([^,]+)")
        cfg.ref.x = tonumber(trim(x))
        cfg.ref.y = tonumber(trim(y))
    end
    if type(tbl.REF_LEN) == 'string' then   -- refpos given
        cfg.ref.len = tonumber(tbl.REF_LEN)
    end
    if type(tbl.DEBUG) == 'string' then   -- set debug level
        cfg.DEBUG = tonumber(tbl.DEBUG)
    else
        cfg.DEBUG = 0
    end

    return cfg
end
-----------------------------------------------------------------------------------------
-- local channels/tools configuration section and/or registry parameters
M.Init = function(chn)

    chn.mod = {}
    local cfg, err = read_ini_params(chn.section)
    if not cfg then
        XTRACE(11, 'Error reading station.ini:'..err)
        error('Error reading station.ini:'..err)
    end

    -- save the config params
    chn.mod.cfg = cfg
    return nil -- OK!
end

local function PolarToCarthesian()
    -- TODO: refactor, copy common code to here (or better to positioning_tools.lua)...
end

M.UpdatePos_RotIncLenAbs = function(chn, rotation_inc, distance_abs, tilt_x, tilt_y, tilt_z)
    -- calculate absolute position
    local cfg = chn.mod.cfg         -- our driver specific stuff is in chn.mod

    -- plausibility check
    local len_abs = tonumber(distance_abs)
    local rad_increments = tonumber(rotation_inc)
    if not len_abs then return nil,'SENSOR_LEN invalid data' end
    if not rad_increments then return nil,'SENSOR_RAD invalid data' end

    -- remove zero offset
    if type(cfg.rad.offs) ~= "number" then cfg.rad.offs = 0.0 end
    if type(cfg.len.offs) ~= "number" then cfg.len.offs = 0.0 end
    local rad_value = rad_increments - cfg.rad.offs
    local len_value = len_abs - cfg.len.offs

    ------------------------------------------
    --  calculate cartesian coordinates from polar coordinates

    --  Rotation axis: scale is increments per 360 Grad
    rad_value = (rad_value % cfg.rad.scale)
    if cfg.DEBUG > 1 then
        XTRACE(16, string.format("Pos: rad-ticks = %f, scale = %f", rad_value, cfg.rad.scale))
    end
    local rad = rad_value * ( 2 * math.pi / cfg.rad.scale) -- in radiant

    -- Linear axis: scale is increments per mm
    local len_mm = (len_value / cfg.len.scale) + cfg.ref.len
    local x = len_mm * math.sin(rad)
    local y = len_mm * math.cos(rad)

    local x_abs = x + cfg.ref.x
    local y_abs = y + cfg.ref.y - cfg.ref.len

    local pos = {
        -- the raw sensor values
        len = len_abs,
        rad = rad_increments,
        -- the calculated carthesian values
        posx = x_abs,
        posy = y_abs,
        posz = 0,
        dirx = tilt_x,
        diry = tilt_y,
        dirz = tilt_z,
    }
    if chn.pos ~= pos then
        if cfg.DEBUG > 0 then
            XTRACE(16, string.format("Pos: l/r: %.2fmm/%.2f° x/y: %.2f/%.2f -> %.2f/%.2f", 
                len_mm, rad*360/(2*3.1415), x, y, x_abs, y_abs))
        end
        chn.pos = pos
    end
    return pos  -- OK!
end

-- translate the given parameters into 3d space coordinates
-- take reference positions, etc into account
M.UpdatePos_RotIncLenInc = function(chn, rotation_inc, distance_inc, tilt_x, tilt_y, tilt_z)
    -- calculate absolute position
    local cfg = chn.mod.cfg         -- our driver specific stuff is in chn.mod

    -- plausibility check
    local len_increments = tonumber(distance_inc)
    local rad_increments = tonumber(rotation_inc)
    if not len_increments then return nil,'SENSOR_LEN invalid data' end
    if not rad_increments then return nil,'SENSOR_RAD invalid data' end

    -- remove zero offset
    if type(cfg.rad.offs) ~= "number" then cfg.rad.offs = 0.0 end
    if type(cfg.len.offs) ~= "number" then cfg.len.offs = 0.0 end
    local rad_value = rad_increments - cfg.rad.offs
    local len_value = len_increments - cfg.len.offs

    ------------------------------------------
    --  calculate cartesian coordinates from polar coordinates

    --  Rotation axis: scale is increments per 360 Grad
    rad_value = (rad_value % cfg.rad.scale)
    local rad = rad_value * ( 2 * math.pi / cfg.rad.scale) -- in radiant

    -- Linear axis: scale is increments per mm
    local len_mm = (len_value / cfg.len.scale) + cfg.ref.len
    local x = len_mm * math.sin(rad)
    local y = len_mm * math.cos(rad)

    local x_abs = x + cfg.ref.x
    local y_abs = y + cfg.ref.y - cfg.ref.len

    local pos = {
        -- the raw sensor values
        len = len_increments,
        rad = rad_increments,
        -- the calculated carthesian values
        posx = x_abs,
        posy = y_abs,
        posz = 0,
        dirx = tilt_x,
        diry = tilt_y,
        dirz = tilt_z,
    }
    if chn.pos ~= pos then
        XTRACE(16, string.format("Pos: l/r: %.2fmm/%.2f° x/y: %.2f/%.2f -> %.2f/%.2f", 
            len_mm, rad*360/(2*3.1415), x, y, x_abs, y_abs))
        chn.pos = pos
    end
    return pos  -- OK!
end
-- translate the given parameters into 3d space coordinates
-- x/y/z and angular rotations
M.UpdatePos_Abs3D = function(chn, x, y, z, rx, ry, rz)
    return nil, 'not implemented!'
end

return M