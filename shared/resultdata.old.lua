--------------------------------------------------------------------------------------------
--[[**********************************************************************************]]
local xml_text_beg =
	'<?xml version="1.0" encoding="ISO-8859-1"?>\n'
..	'<process  id="%s" typ="%s" version="%s">\n'
local xml_text_end =
	'</prozess>\n'
--[[**********************************************************************************]]
local xml_station_beg =
	'\t<station name ="%s" host="%s" timestamp="%s" kundeninfo="%s" werker="%s" meister="%s" ergebnis="%s">\n'
local xml_station_end =
	'\t</station>\n'
--[[**********************************************************************************]]
local xml_part_beg =
	'\t\t<bauteil name ="%s" zeitstempel="%s" ergebnis="%s">\n'
..	'\t\t\t<schrauben>\n'
local xml_part_end =
	'\t\t\t</schrauben>\n'
..  '\t\t</bauteil>\n'
--[[**********************************************************************************]]
local xml_bolt =
	'\t\t\t\t<schraube num="%s" name="%s" werkzeug="%s" prg="%s" moment="%s" mommin="%s" mommax="%s" winkel="%s" winmin="%s" winmax="%s" ergebnis="%s" comment="%s"/>\n'
--[[**********************************************************************************]]
--------------------------------------------------------------------------------------------
function GetXMLFile(id,type)

	process.version = '1.0'   -- data format version
    process.type   	= nil     -- assambly type
	process.id  	= nil     -- id code/barcode

	t = os.date('*t')
	local t_as_str = string.format('%02d%02d%02d-%02d%02d%02d',t.day,t.month,t.year%100,t.hour,t.min,t.sec)
	local filename = string.format('%s-%s.xml',id,t_as_str)
	local text     = string.format(xml_text_beg,param_as_str(id),param_as_str(type), param_as_str(version))
	for st_name , st_res in pairs(station_results) do -- write station results
		local txt_station = string.format(xml_station_beg, 	param_as_str(st_name),
									param_as_str(st_res.host),
									param_as_str(st_res.time),
									param_as_str(st_res.info),
									param_as_str(st_res.worker),
									param_as_str(st_res.master),
									param_as_str( st_res.result))

		for part_num , part_res in pairs(st_res.parts) do  -- write all part results
			if part_res ~= nil  then
				local txt_part = string.format(xml_part_beg, param_as_str(part_res.name),
									param_as_str(part_res.time),
									param_as_str(part_res.result))

				for bolt_num , bolt_res in pairs(part_res.bolts) do   -- write all bolt results
					if bolt_res ~= nil  then
						txt_part = txt_part .. string.format(xml_bolt,  bolt_num,
									param_as_str(bolt_res.name),
									param_as_str(bolt_res.tool),
									param_as_str(bolt_res.prg),
									param_as_str(bolt_res.torque),
									param_as_str(bolt_res.torque_min),
									param_as_str(bolt_res.torque_max),
									param_as_str(bolt_res.angle),
									param_as_str(bolt_res.angle_min),
									param_as_str(bolt_res.angle_max),
									param_as_str(bolt_res.result),
									param_as_str(bolt_res.barcode))
					end
				end
				txt_station = txt_station .. txt_part .. xml_part_end
			end
		end
		text = text .. txt_station .. xml_station_end
	end
	text = text ..xml_text_end
    return filename , text
end
