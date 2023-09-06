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

return M
