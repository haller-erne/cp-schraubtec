-- TASS special behaviour - overlays an existing tool for TASS analysis
--
-- NOTE: Although this registers a custom tool, it is actually not a "real"
--       tool, but expands the already existing OpenProtocol tool registered
--       for a specified (OpenProtocol) tool/channel
-- NOTE: Define the overly tool number in the [LUA_TASS] section in station.ini
-- NOTE: Do not register this tool type in station.ini as Lua-Tool, only
--       load it in config.lua
-- NOTE: To define the additional behaviour for a tool, do the following:
--       1. Add a copy of the tool definition with a new channel number to
--          station. ini, e.g. if there is an OpenProtocol tool CHANNEL_04,
--          then copy EVERYTHING to CHANNEL_14
--       2. Add an entry to the [LUA_TASS] section with CHANNEL_04=11
--          (left-hand side: original channel, righthand: override tool)
--       3. Add and use the new tool #14 into the heOpCfg and use as usual 
--

package.cpath = package.cpath .. ';./lualib/vclua/?.dll'
local struct = require("struct")    -- see http://www.inf.puc-rio.br/~roberto/struct/
local tass = require ('luatass')
local json = require('cjson')
CurveSeq = 0
tmpcurve = {}
TassUiValues = {
    M1 = 0,
    M2 = 0,
    W3 = 0,
    LA = 0
}
local function format_curve(res,action,angle,torque,par,resultCode,limitCheck)
        local normc =
            {
                a = CloneTable(res.NormalizedCurve.A),
                t = CloneTable(res.NormalizedCurve.T),
                pointCount = res.NormalizedCurve.PointCount
            }


    tmpcurve =

           {
                normOnly = false,
                crv =
                {
                    name = action.tasssn .. '[' .. tostring(CurveSeq) .. ']',
                    state = 'OK',
                    program = 11,
                    channel = 0,
                    curveSeq = CurveSeq,
                    qC1 = 0,
                    qC2 = 0,
                    angle = angle,
                    torque = torque,
                    time = os.date("!%Y-%m-%dT%H:%M:%SZ")
                },
                par =
                {
                    valid = true,
                    m1_cali = par.M1_cali,
                    m1_L = par.M1_L,
                    m1_H = par.M1_H,
                    m2_cali = par.M2_cali,
                    m2_L = par.M2_L,
                    m2_H = par.M2_H,
                    w3_cali = par.W3_cali,
                    w3_L = par.W3_L,
                    w3_H = par.W3_H,
                    lA_T = par.LA_T,
                    aL_Min = par.AL_Min,
                    aR_Min = par.AR_Min,
                    aM_MinR = par.AM_MinR,
                    aL_AR_MinR = par.AL_AR_MinR,
                    sB_RNG = par.SB_RNG,
                    sB_T = par.SB_T,
                    ms = par.MS,
                    me = par.ME,
                    t1 = par.T1,
                    sn = "Valid"
                },
                res =
                {
                    resultCode = resultCode,
                    limitCheck = limitCheck,
                    result =
                    {
                        result = res.Result,
                        m1 = res.M1,
                        m2 = res.M2,
                        la = res.LA,
                        w3 = res.W3,
                        w_Start = res.W_Start,
                        w_End = res.W_End,
                        w1 = res.W1,
                        w2 = res.W2,
                        w_AM_left = res.W_AM_left,
                        w_AM_middle = res.W_AM_middle,
                        w_AM_right = res.W_AM_right,
                        g_AL = res.G_AL,
                        g_AM = res.G_AM,
                        g_AR = res.G_AR,
                        idx_W_Start = res.idx_W_Start,
                        idx_W_End = res.idx_W_End,
                        idx_W_AM_left = res.idx_W_AM_left,
                        idx_W_AM_middle = res.idx_W_AM_middle,
                        idx_W_AM_right = res.idx_W_AM_right,
                        idxNormBeg = res.idxNormBeg,
                        idxNormEnd = res.idxNormEnd,
                        t1 = 0
                    },
                    normalizedCurve = normc,
                    isDirty = false
                },
                viewState = 
                {
                    checked = true,
                    state = 'nOK',
                    result = 1,
                    filtered = false
                }
           }
    if (res.M2 - res.M1) ~= 0 and res.G_AR.dM ~= nil then
        tmpcurve.res.result.t1 = ((res.M2-res.M1)/res.G_AR.dM)
        tmpcurve.viewState.state = string.sub(tostring(((res.M2-res.M1)/res.G_AR.dM)),1,4)
    end
end

local _TOOL = {
	type = 'LUA_TASS',
	channels = {},
    ------------------------------------------------
	-- get_tool_units = function(tool)
	--	return 'Nm','Nm','2', '2'
	-- end,
    ------------------------------------------------
	get_tags = function(tool)
		return 1 ,  'TF Torque', 'MFs RelativeTorqueMax', 'MF TorqueMin', 'MF TorqueMax',  'MF AngleMin', 'MF AngleMax' 
	end,
    ------------------------------------------------
    get_tool_result_string = function (tool)
	    local r = gui_lua_support.ResultValues
	    if tool ~= r.Tool then return '' end
	    return string.format('%sNm %sDeg', number_as_text(r.Param1,'', 2), number_as_text(r.Param2,'',2))
    end,
    ----------------------------------------------------------------------------------------------
    -- post processing of task results before to show in GUI and save into database
    -- @param tool: channel number as configured in station.ini
    -- @output: values ready to show and to save into database
    process_tool_result = function(tool)
	    local r = gui_lua_support.ResultValues
	    local c = r.Curve
	    if c == nil then
            XTRACE(1, '  TASS: no curve available!')
	        return nil
	    end
	    local Version, Label, CurveType, CurveOrd, PointNum = struct.unpack('<Lc8LLL',c)
	    if PointNum == nil then
            XTRACE(1, '  TASS: error decoding curve!')
	        return nil
	    end
        XTRACE(1, string.format('  curve: %d points', PointNum))

	    local StepOfs = {}
	    for i = 25,101,4 do
	        local d = struct.unpack("L",c:sub(i,i+3))
	        table.insert(StepOfs,d)
	    end

	    local ThresholdIdx, ThresholdVal = struct.unpack('<ff',c,105)

	    local time = {}
	    local angle = {}
	    local torque = {}

	    local ofs = 113

	    local mask = '<'
	    for i = 1,CurveOrd do
	        mask = mask.. 'f'
	    end

	    for i=1,PointNum do
	        local bin = c:sub(ofs, ofs+CurveOrd*4-1)
	        local x, y, z = struct.unpack(mask,bin)
	        if CurveType == 9 then
	            table.insert(time,x)
	            table.insert(torque,y)
	        elseif CurveType == 10 then
	            table.insert(time,x)
	            table.insert(angle,y)
	        elseif CurveType == 11 then
	            table.insert(time,x)
	            table.insert(angle,y)
	            table.insert(torque,z)
	        end
	        ofs = ofs + CurveOrd*4
        end
	    local action = get_object_property(3)
	    action = { tasssn = "178000038" }

        local par = ReadIniSection("TASS_" .. tostring(action.tasssn))
        for k,v in pairs(par) do par[k] = tonumber(v) end

        local msg = formatParams(par)
	    msg = json.encode(msg)
	    local command = string.format('window.OgsIpc.addParameters(%s)',msg)
	    Browser.ExecJS_async('ProcessView',command)

        local crv = { PointCount = PointNum, A = angle, T = torque }

        local resultCode,res = tass.calculate(crv, par)
        if resultCode == nil then
            print(res)         -- parameter/lua error
        else
            if resultCode == 0 then  -- calculation OK
                -- caclulation successful, now check if everything is within limits
            local limitCheck = tass.checklimits(res, par)
            if limitCheck == 0 then
                r.QC = 1
               --print("pass, everything in limits")
            else 
                r.QC = 2
                --print("fail! Tass values out of allowed tolerance, state="..ok)
            end
            else 
                --print("Error calculating tass: ")
                r.QC = 2
            end
        end
        --print("done.")


        format_curve(res,action,angle,torque,par,resultCode,limitCheck)


        local msg1 = json.encode(tmpcurve)
        local msg = '{ "items": [ '..msg1..' ]}'

	    local cmd2 = 'window.OgsIpc.addCurveFiles(' .. msg .. ')'

	    Browser.ExecJS_async('ProcessView',cmd2)

	    TassUiValues.M1 = res.M1
	    TassUiValues.M2 = res.M2
	    TassUiValues.W3 = res.W3
	    TassUiValues.LA = res.LA

        r.Param1 		= r.Param1
        r.Param1_min 	= res.M1
        r.Param1_max 	= res.M2
        r.Param2 		= r.Param2
        r.Param2_min 	= res.W3
        r.Param2_max 	= res.LA

        r.Step = '3A'

	    CurveSeq = CurveSeq + 1
        return 1
    end,
    ------------------------------------------------
	get_footer_string = function(tool)

	    local r = gui_lua_support.ResultValues
	    if tool ~= r.Tool then return '' end
--[[
    	CfgValues = {
	    	Param1_target = 0.0,
		    Param1_min 	= 0.0,
    		Param1_max 	= 0.0,
	    	Param2_target = 0.0,
		    Param3_min 	= 0.0,
    		Param3_max 	= 0.0,
	    	Prg 		= 0,
		    Tool 		= 0,
    	},
	    ResultValues 	= {
		    Param1 		= 0.0,
    		Param1_min 	= 0.0,
	    	Param1_max 	= 0.0,
		    Param2 		= 0.0,
    		Param2_min 	= 0.0,
	    	Param2_max 	= 0.0,
		    Prg 		= 0,
    		Tool 		= 0,
	    	QC 			= 1,   -- OK
		    Seq 		= 0,
    		Step 		= 'A1',
	    	Barcode     = '',
	    },
]]
	    return string.format('M1/M2 %s/%sNm W3 %sDeg', number_as_text(TassUiValues.M1,'', 2), number_as_text(TassUiValues.M2,'',2), number_as_text(TassUiValues.W3,'',2))
	end,
}
-- register our new tool type:
lua_known_tool_types.add_type(_TOOL)

-- Register as extension/override for tools
local function overlay_tools()
    -- read the ini section to get the list of tools to be overlayed
    local ini = ReadIniSection(_TOOL.type)
    for k,v in pairs(ini) do
        local tool = tonumber(v)
        if tool and tool ~= 0 then
            lua_known_tool_types.add_tool(tool, _TOOL.type)
            XTRACE(16, string.format('LUA_TASS: Added overlay tool %d for %s...', tool, param_as_str(k)))
        else
            XTRACE(1, string.format('LUA_TASS: No overlay tool %s or not found!', param_as_str(k)))
        end
    end
end

function formatParams(param)
    par = {
        valid = true,
        m1_cali = param.M1_cali,
        m1_L = param.M1_L,
        m1_H = param.M1_H,
        m2_cali = param.M2_cali,
        m2_L = param.M2_L,
        m2_H = param.M2_H,
        w3_cali = param.W3_cali,
        w3_L = param.W3_L,
        w3_H = param.W3_H,
        lA_T = param.LA_T,
        aL_Min = param.AL_Min,
        aR_Min = param.AR_Min,
        aM_MinR = param.AM_MinR,
        aL_AR_MinR = param.AL_AR_MinR,
        sB_RNG = param.SB_RNG,
        sB_T = param.SB_T,
        ms = param.MS,
        me = param.ME,
        t1 = param.T1,
        sn = 'Valid',
        sha1 = ''
    }
    return par
end
overlay_tools()