--------------------------------------------------------------------------------------------
local json = require('cjson')
--------------------------------------------------------------------------------------------
local device = {
	id = "405497280000000000310967",						-- MANDATORY: The GIAI of the Machine/Station
	additionalData = {										-- OPTIONAL
		adapter = {											-- OPTIONAL Information on the Adapter.
				server = "xyz.de.bosch.com",				-- OPTIONAL: DNS of the server where the adapter is running on
				software = "heOGS",							-- OPTIONAL: Software that is used for the adapter
				version = "3.0",							-- OPTIONAL: Software Version
				program = {									-- OPTIONAL: Details to the program that is doing the conversion
					name = "Operator guidance software",	-- OPTIONAL: Name of the Programm running
					id = "814",								-- OPTIONAL: an Internal ID of the programm 
					lastChangedDate = "2023-07-14T09:30:10.123+02:00" -- Optional: The last cahge of the program.
				},
		},
		deviceName = "eFlip HF300",							-- OPTIONAL: The clear text name of the machine for debugging. Should be only used for testing.
		-- xxx = "xxx"										-- OPTIONAL: Further custom fields related to the device. Please use camelCase to specify field names.	
	}
}
local part = {
	additionalData = {
		sapPlant = "7080",									-- MANDATORY: The SAP Plant number of the Order
		productionOrderNumber = "0",						-- MANDATORY: The SAP Production Order Number
		serialNumber = "249",								-- MANDATORY: The Serial Number of the part
		-- xxx = "xxx"										-- OPTIONAL: Further custom fields related to the part. Please use camelCase to specify field names.					
	},
	id = "R900932121_249",									-- MANDATORY: The Material Number & Serial Number of the part concadinated with "_"
	typeId = "R900932121",									-- MANDATORY: The Material Number  of the part
	code = "xxx",											-- OPTIONAL: Type short code, if required
}
local procdata = {
	additionalData = {
		station = "4",                                       -- OPTIONAL: The number of the station
--		resultDateEnd = "2021-10-11T00:00:00+00:00",         -- OPTIONAL: The message creation date
		area = "-",                                          -- OPTIONAL: The area of the station
--		documents = [                                        -- OPTIONAL: References to documents
--			{
--				documentType = "technical data / serial no", -- OPTIONAL: The type of the document
--				documentName = "11.10.2021"                  -- OPTIONAL: The name of the document
--			},
--			{
--				documentType = "testing program",
--				documentName = "000GF-3X.025"
--			}
--		],
--		repetition = 1,										-- OPTIONAL: indicates how often the process was repeated for the product instance.
--		-- xxx = "xxx"                                     	-- OPTIONAL: Further custom fields related to the process. Please use camelCase to specify field names.
	},
--	program = {												-- OPTIONAL
--		name = "main program",								-- OPTIONAL
--		id = "1",											-- OPTIONAL
--		lastChangedDate = "2002-05-30T09:30:10.123+02:00",	-- OPTIONAL
--	},
	ts = "2022-10-14T07:00:13.868Z",						-- MANDATORY: Start time of the process
	result = "OK",											-- MANDATORY: Result of the process (OK, NOK, UNKNOWN)
--	externalId = "xxx"										-- OPTIONAL: The Nexeed Process ID, if available
}

local mesurement = {
	additionalData = {
		isSingleValue = true							-- MANDATORY in case the measurment is not a time series.
	},
	ts = "2022-10-14T07:01:13.868+01:00",				-- MANDATORY: Start of the measurement
	phase = "Schritt_G_Ein",							-- OPTIONAL: Phase in the process, if not set, measurement belong to process.
	result = "OK",										-- OPTIONAL: Result of the parameter (OK, NOK; defaults to UNKNOWN)
	series = {
		time = {										-- MANDATORY
			0											-- MANDATORY: Offset to ts in ms
		},
		rotationalFrequency = {						-- MANDATORY: name of the parameter that is measured. Must be English and CamelCase.
			1450										-- MANDATORY: Value of the paramter that is measured
		}
	},
	context = {
		rotationalFrequency = {						-- MANDATORY: Contains the Limits and Datatype of the corresponding series.
			limits = {
				lowerWarn = 1445,
				upperWarn = 1455,
				target = 1450
			},
			type = "NUMBER",							-- OPTIONAL, defaults to NUMBER. Datatype of the series/datafield
			unit = "1/s"								-- MANDATORY: Please use the units suggested here: https:-- datatracker.ietf.org/doc/html/rfc8428#section-12.1
		}
	}
}

local result = {
    ['content-spec'] = "urn:spec://eclipse.org/unide/process-message#v3",
	device = device,
	part = part,
	process = procdata,
	measurements = { 
		-- list of mesurement itemd
		measurement, 
		measurement 
	}
}

--------------------------------------------------------------------------------------------
function GetXMLFile(id,type)

	process.version = '1.0'   -- data format version
    process.type   	= nil     -- assambly type
	process.id  	= nil     -- id code/barcode

	t = os.date('*t')
	local t_as_str = string.format('%02d%02d%02dT%02d%02d%02d',t.day,t.month,t.year%100,t.hour,t.min,t.sec)
	local filename = string.format('%s-%s.json',id,t_as_str)

	part.additionalData.serialNumber = id			-- Serial Number of the part
	part.additionalData.productionOrderNumber = '0'	-- Order number - which we currently don't have
	part.id = id .. '_' .. type						-- SFC
	part.typeId = type								-- material number / model code
	part.code = type								-- OPTIONAL: Type short code, if required

	procdata.ts = t_as_str
	procdata.result = 'NOK'

	local measurements = {}
	for st_name , st_res in pairs(station_results) do -- write station results
		for part_num , part_res in pairs(st_res.parts) do  -- write all part results
			if part_res ~= nil  then
				--local txt_part = string.format(xml_part_beg, param_as_str(part_res.name),
				for bolt_num , bolt_res in pairs(part_res.bolts) do   -- write all bolt results
					local m = {
						additionalData = {
							isSingleValue = true							-- MANDATORY in case the measurment is not a time series.
						},
						ts = param_as_str(st_res.time),						-- MANDATORY: Start of the measurement
						phase = param_as_str(part_res.name)..':'..param_as_str(bolt_res.name),	-- OPTIONAL: Phase in the process, if not set, measurement belong to process.
						result = param_as_str(bolt_res.result),				-- OPTIONAL: Result of the parameter (OK, NOK; defaults to UNKNOWN)
						series = {
							time = {										-- MANDATORY
								0											-- MANDATORY: Offset to ts in ms
							},
							torque = {										-- MANDATORY: name of the parameter that is measured. Must be English and CamelCase.
								param_as_str(bolt_res.torque)				-- MANDATORY: Value of the paramter that is measured
							},
							angle = {
								param_as_str(bolt_res.angle)
							}
						},
						context = {
							torque = {										-- MANDATORY: Contains the Limits and Datatype of the corresponding series.
								limits = {
									target = '',
									lower = param_as_str(bolt_res.torque_min),
									upper = param_as_str(bolt_res.torque_max)
								},
								type = "NUMBER",							-- OPTIONAL, defaults to NUMBER. Datatype of the series/datafield
								unit = "Nm"									-- MANDATORY: Please use the units suggested here: https:-- datatracker.ietf.org/doc/html/rfc8428#section-12.1
							},
							angle = {										-- MANDATORY: Contains the Limits and Datatype of the corresponding series.
								limits = {
									target = '',
									lower = param_as_str(bolt_res.angle_min),
									upper = param_as_str(bolt_res.angle_max)
								},
								type = "NUMBER",							-- OPTIONAL, defaults to NUMBER. Datatype of the series/datafield
								unit = "deg"								-- MANDATORY: Please use the units suggested here: https:-- datatracker.ietf.org/doc/html/rfc8428#section-12.1
							}
						}
					}
					measurements[#measurements+1] = m
				end
			end
		end
	end
	local result = {
		['content-spec'] = "urn:spec://eclipse.org/unide/process-message#v3",
		device = device,
		part = part,
		process = procdata,
		measurements = measurements 
	}

	local text = json.encode(result)
    return filename, text
end
