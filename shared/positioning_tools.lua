local reg = require("heReg")        -- load the registry helpers

local M = {

}

-----------------------------------------------------------------------------------------
local function trim(s)
    return (s~=nil) and s:match "^%s*(.-)%s*$" or nil
end
-----------------------------------------------------------------------------------------
function M.get_dev_params(section, name, tbl)
    local params = { model='', ip='', scale=1, offs=0, fwo=nil }
    local key_sensor = 'SENSOR_'..name
    local key_scale  = 'SCALE_'..name
    local sensor = tbl[key_sensor]
    local scale = tbl[key_scale]
    if type(sensor) ~= 'string' then
        return nil, string.format('INI-section: "%s": %s not found!', section, key_sensor)
    end
    if type(scale) ~= 'string' then
        return nil, string.format('INI-section: "%s": %s not found!', section, key_scale)
    end
    params.scale = tonumber(scale)
    local ip, model = sensor:match("([^,]+),([^,]+)")
    params.ip = trim(ip)
    params.model = trim(model)
    if not params.ip then
        return nil, string.format('INI-section: "%s": %s missing parameter ip (expected format =ip,model)!',
            section, key_sensor)
    end
    if not params.model then
        return nil, string.format('INI-section: "%s": %s missing parameter model (expected format =ip,model)!',
            section, key_sensor)
    end
    params.fwo = GetParamSetForEthernetDevice(params.model)
    if not params.fwo then
        return nil, string.format('INI-section: "%s": %s unknown Ethernet/IP sensor model!', section, key_sensor)
    end
    -- read the reference offset value from the registry (default to 0)
    local key = 'HKEY_CURRENT_USER\\Software\\Haller + Erne GmbH\\Monitor\\Positioning'
    local offs = reg.ReadString(key, 'REF_INCREMENTS_'..name)
    if not offs or offs == "nil" then
        params.offs = 0
    else
        params.offs = tonumber(offs)
    end
    return params
end

-- calc angle deviation (in degrees)
M.calc_angle_dev = function(curpos, exppos)
    -- Winkelabweichung zwischen den zwei Einheitsvektoren berechnen
    -- Theoretisch sollte das Skalarprodukt zwischen zwei Einheitsvektoren
    -- immer einen Wert zwischen -1 und 1 haben, aber wegen Rundung kann
    -- die Länge auch größer 1 werden --> dann schlägt acos fehl...
    local p1 = curpos
    local p2 = exppos
    local len1 = p1.dirx * p1.dirx + p1.diry * p1.diry + p1.dirz * p1.dirz
    local len2 = p2.dirx * p2.dirx + p2.diry * p2.diry + p2.dirz * p2.dirz
    local snen = p1.dirx * p2.dirx + p1.diry * p2.diry + p1.dirz * p2.dirz
    local ok, szal = pcall(math.sqrt(len1) * math.sqrt(len2))
    if not ok or szal == 0 then szal = 1 end
    local sp = snen / szal
    if (sp > 1) then sp = 1 end     -- rounding errors
    if (sp < -1) then sp = -1 end   -- rounding errors
    local rad = math.acos(sp)
    local deg = 180 * (rad / math.pi)
    return deg
end

-- return inpos, distx, disty, distz, dax, day, daz
M.calc_distance_sphere = function(curpos, exppos)
    -- compare current and learned positions
	local dif_x = curpos.posx - exppos.posx
	local dif_y = curpos.posy - exppos.posy
	local dif_z = curpos.posz - exppos.posz

    -- check, if the current position is within our cylinder
    local distxyz = (dif_x*dif_x) + (dif_y*dif_y) + (dif_z*dif_z)
    local inpos_xyz = (distxyz <= (exppos.r1*exppos.r1))
    -- currently, we don't care about the Z position!

    -- check the angle distance
    local inpos_rad = true
    if exppos.angle and exppos.angle > 0 then
        local distdeg = M.calc_angle_dev(curpos, exppos)        
        inpos_rad = (distdeg <= exppos.angle)
    end
    local inpos = inpos_xyz and inpos_rad

    -- for a sphere, there is no need to check the angle
    return inpos, dif_x, dif_y, dif_z, 0, 0, 0
end

-- return inpos, distx, disty, distz, dax, day, daz
M.calc_distance_cylinder = function(curpos, exppos)
    -- compare current and learned positions
	local dif_x = curpos.posx - exppos.posx
	local dif_y = curpos.posy - exppos.posy
	local dif_z = curpos.posz - exppos.posz
	local dif_rx = curpos.dirx - exppos.dirx
	local dif_ry = curpos.diry - exppos.diry
	local dif_rz = curpos.dirz - exppos.dirz

    -- TODO: implement cylinder orientation, currently
    -- distance is only idicated from the middle point!

    -- check, if the current position is within our cylinder
    local distxy = (dif_x*dif_x) + (dif_y*dif_y)
    -- currently, we don't care about the Z position!
    local inpos_xyz = (distxy <= (exppos.r1*exppos.r1))
    -- check the angle distance
    local inpos_rad = true
    if exppos.angle and exppos.angle > 0 then
        local distdeg = M.calc_angle_dev(curpos, exppos)        
        inpos_rad = (distdeg <= exppos.angle)
    end
    local inpos = inpos_xyz and inpos_rad

    -- TODO: should check the angle!
    return inpos, dif_x, dif_y, dif_z, 0, 0, 0
end

-- return inpos, distx, disty, distz, dax, day, daz
M.calc_distance_frustum = function(curpos, exppos)    -- Kegelstumpf
    -- FIXME: replace with "correct" function
    return M.calc_distance_cylinder(curpos, exppos)
end

-- return inpos, distx, disty, distz, dax, day, daz
M.calc_distance_cylinder_frustum = function(curpos, exppos)
    -- FIXME: replace with "correct" function
    return M.calc_distance_cylinder(curpos, exppos)
end

-- return inpos, distx, disty, distz, dax, day, daz
M.calc_distance = function(curpos, exppos)
    if exppos.tolerance == 0 then
        -- Sphere
        return M.calc_distance_sphere(curpos, exppos)
    elseif exppos.tolerance == 1 then
        -- Cylinder
        return M.calc_distance_cylinder(curpos, exppos)
    elseif exppos.tolerance == 2 then
        -- Frustum
        return M.calc_distance_frustum(curpos, exppos)
    elseif exppos.tolerance == 3 then
        -- Frustum+Cylinder
        return M.calc_distance_cylinder_frustum(curpos, exppos)
    else
        -- assume cylinder
        exppos.tolerance = 1
        return M.calc_distance_cylinder(curpos, exppos)
    end
end

return M
