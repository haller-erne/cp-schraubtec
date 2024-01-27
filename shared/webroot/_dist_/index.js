import '../_snowpack/pkg/@cds/core/button/register.js';
import '../_snowpack/pkg/@cds/core/alert/register.js';
import '../_snowpack/pkg/@cds/core/toggle/register.js';
import '../_snowpack/pkg/@cds/core/forms/register.js';
import '../_snowpack/pkg/@cds/core/divider/register.js';
import '../_snowpack/pkg/@cds/core/icon/register.js';
import '../_snowpack/pkg/@cds/core/tag/register.js';
import '../_snowpack/pkg/@cds/core/badge/register.js';

// --------- OGS callbacks ---------------------
window.OGS = {};
OGS.UpdateTimer = null;
OGS.TaskEnabled = 0;
OGS.onInit = function(url) {
	console.log("OGS.onInit called: ", url, OGS);
	//OGS.SendCmd('{ "cmd":"get-version" }');
}
OGS.onShow = function OGS_onShow() {
	console.log("OGS.onShow called!");
	RequestParams();
	OGS.UpdateTimer = setTimeout(OGS.UpdatePositions, 500);
}
OGS.onHide = function() {
	console.log("OGS.onHide called!");
	clearTimeout(OGS.UpdateTimer);
	OGS.UpdateTimer = null;
}
// interface functions to be called from LUA code
OGS.onJobOrTaskChanged = function(enable) {
	console.log("OGS.onJobOrTaskChanged called!", enable);
	OGS.TaskEnabled = enable;
	if (enable == null || enable == 1) {
		// Position changed (1) or params updated (null)
		EnableHMI(true)
		RequestParams();
	}
	if (enable == 0) {
		// Position changed to non-position enabled task
		EnableHMI(false)
	}
}
// internal function to request new position data
OGS.UpdatePositions = function() {
	RequestPosition();
}
// tests:
OGS.testParams = function() { RequestParams(true); }
OGS.testPosition = function() { RequestPosition(true); }


// Request Params from OGS - usually called once after page load or onShow()
// or also (in)directly from OGS when the Job/Task is changed
var RequestParams = function(test)
{
	if (!test) {
		return OGS.SendCmd('{ "cmd":"get-params" }');
	}
	// debug: simulate data
	let sampleParams = {
		Job: 'MyWorkspace',
		Task: 'Bolt A',
		Tool: 1,		
		Pos: {
			id: 'MyWorkSpaceBolt A',
			posx: 101, posy: 102, posz: 103,
			dirx: 201, diry: 202, dirz: 203,
			tolerance: 0,		// sphere
			radius: 20,
			height: 30
		}
	}
	globalThis.UpdateParams(JSON.stringify(sampleParams));
}

// Request updated position info - called cyclically while the page is shown
var RequestPosition = function(test)
{
	if (!test) {
		return OGS.SendCmd('{ "cmd":"get-position" }');
	}
	// debug: simulate data
	let samplePosition = {
		State: 0,		// ART state (0 = ok, < 0 error)
		Error: '',		// possible error text (for State != 0)
		InPos: false,
		Pos: {
			id: 'MyWorkSpaceBolt A',
			posx: 101+Math.random()*10, posy: 102, posz: 103,
			dirx: 201+Math.random()*10, diry: 202, dirz: 203
		}
	}
	globalThis.UpdatePosition(JSON.stringify(samplePosition));
}

// -------------------

//const button = document.querySelector('cds-button');
const alertGroup = document.querySelector('cds-alert-group');
const alert = document.querySelector('cds-alert');
var btnTol = [
	{ btn: document.querySelector('#btnTol1'), file: 'positioning_sphere.png' },
	{ btn: document.querySelector('#btnTol2'), file: 'positioning_cylinder.png' },
	{ btn: document.querySelector('#btnTol3'), file: 'positioning_frustum.png' },
	{ btn: document.querySelector('#btnTol4'), file: 'positioning_fruscyl.png' }
];
var btnTolSave = document.querySelector('#btnTolSave');
var inpTol = [
	{ inp: document.querySelector('#inpRadius') },
	{ inp: document.querySelector('#inpHeight') },
	{ inp: document.querySelector('#inpRadius2') },
	{ inp: document.querySelector('#inpHeight2') },
	{ inp: document.querySelector('#inpOffset') },
	{ inp: document.querySelector('#inpAngle') },
];
var inpVis = [
	// r1,   h1,    r2,    h2,    offs,  angle
	[  true, false, false, false,  true,  true ],	// sphere
	[  true,  true, false,  true,  true,  true ],	// cylinder
	[  true,  true,  true,  true,  true,  true ],	// frustum
	[  true,  true,  true,  true,  true,  true ],	// frustum cylinder
];
const imgTol = document.querySelector('#imgTol');
const btnRef = document.querySelector('#btnRef');
var isAdmin = -1;

var domParam = {
	job: document.querySelector('#inpWorkspace'),
	task: document.querySelector('#inpPosName'),
	driver : document.querySelector('#txtDriver'),
	tool : document.querySelector('#txtTool'),
	posnum : document.querySelector('#txtPosNum'),
	posx : document.querySelector('#txtCfgPosX'),
	posy : document.querySelector('#txtCfgPosY'),
	posz : document.querySelector('#txtCfgPosZ'),
	dirx : document.querySelector('#txtCfgRadX'),
	diry : document.querySelector('#txtCfgRadY'),
	dirz : document.querySelector('#txtCfgRadZ'),
};
var domPos = {
	posx : document.querySelector('#txtActPosX'),
	posy : document.querySelector('#txtActPosY'),
	posz : document.querySelector('#txtActPosZ'),
	dirx : document.querySelector('#txtActRadX'),
	diry : document.querySelector('#txtActRadY'),
	dirz : document.querySelector('#txtActRadZ'),
	dPosx : document.querySelector('#txtDeltaPosX'),
	dPosy : document.querySelector('#txtDeltaPosY'),
	dPosz : document.querySelector('#txtDeltaPosZ'),
	dDir : document.querySelector('#txtDeltaRad'),
	//dDirx : document.querySelector('#txtDeltaRadX'),
	//dDiry : document.querySelector('#txtDeltaRadY'),
	//dDirz : document.querySelector('#txtDeltaRadZ'),
	inpos : document.querySelector('#txtInPos'),
	inposa : document.querySelector('#txtInPosA'),
	inposp : document.querySelector('#txtInPosP'),
	state : document.querySelector('#txtStatus'),
};
var angleDigits = 0;

function fmt(fVal)
{
	if (fVal == '') return '';
	return Math.round(fVal);	// Math.round(fVal*10)/10;
}
function fmtAngle(fVal)
{
	if (fVal == '') return '';
	if (angleDigits == 0)
		//return Math.round(fVal);	// Math.round(fVal*10)/10;
		return Math.round(fVal*1000)/1000;	
	else
	//return Math.round(fVal*100)/100;	// Math.round(fVal*10)/10;
	return Math.round(fVal*10000)/10000;
}
// Called as a response to OGS.SendCmd('{ "cmd":"get-position" }')
// update the DOM accordingly
globalThis.UpdatePosition = function(posStr)
{
	let pos = JSON.parse(posStr);
	if (pos.user_level && pos.user_level > 1) {
		if (!isAdmin) globalThis.UpdateUser(true);
		isAdmin = true;
	} 
	if (pos.user_level == null || pos.user_level <= 1) {
		if (!isAdmin) globalThis.UpdateUser(false);
		isAdmin = false;
	}
	if (pos.State == 0) {
		domPos.state.value = "OK";
		domPos.inpos.value = (pos.InPos == true) ? 'Ja' : 'Nein';
		domPos.inpos.style.backgroundColor 	= (pos.InPos == true) ? "green" : "red";
		domPos.posx.value = fmt(pos.Pos.posx);
		domPos.posy.value = fmt(pos.Pos.posy);
		domPos.posz.value = fmt(pos.Pos.posz);
		domPos.dirx.value = fmtAngle(pos.Pos.dirx);
		domPos.diry.value = fmtAngle(pos.Pos.diry);
		domPos.dirz.value = fmtAngle(pos.Pos.dirz);
		domPos.dPosx.value = fmt(pos.Delta.posx);
		domPos.dPosy.value = fmt(pos.Delta.posy);
		domPos.dPosz.value = fmt(pos.Delta.posz);
		//domPos.dDirx.value = fmt(pos.Delta.dirx);
		//domPos.dDiry.value = fmt(pos.Delta.diry);
		//domPos.dDirz.value = fmt(pos.Delta.dirz);
		domPos.dDir.value = fmtAngle(pos.Delta.dir);
		domPos.inposp.style.visibility 		= (pos.Pos.in_location != null) ? "visible" : "hidden";
		domPos.inposp.style.backgroundColor = (pos.Pos.in_location == 1) ? "green" : "red";
		domPos.inposa.style.visibility 		= (pos.Pos.in_angle != null) ? "visible" : "hidden";
		domPos.inposa.style.backgroundColor = (pos.Pos.in_angle == 1) ? "green" : "red";
	} else {
		domPos.state.value = pos.Error;
		domPos.inpos.value = '';
		domPos.inpos.style.backgroundColor 	= "";
		domPos.posx.value = '';
		domPos.posy.value = '';
		domPos.posz.value = '';
		domPos.dirx.value = '';
		domPos.diry.value = '';
		domPos.dirz.value = '';
		domPos.dPosx.value = '';
		domPos.dPosy.value = '';
		domPos.dPosz.value = '';
		//domPos.dDirx.value = '';
		//domPos.dDiry.value = '';
		//domPos.dDirz.value = '';
		domPos.dDir.value = '';
		domPos.inposp.style.visibility 		= "hidden";
		domPos.inposa.style.visibility 		= "hidden";
	}		
	// Schedule the next update, if the window is still visible
	if (OGS.UpdateTimer != null) {
		OGS.UpdateTimer = setTimeout(OGS.UpdatePositions, 500);
	}
}

globalThis.UpdateUser = function(enableAdmin)
{
	// param.Tool;
	inpTol[0].inp.readOnly = !enableAdmin;
	inpTol[1].inp.readOnly = !enableAdmin;
	inpTol[2].inp.readOnly = !enableAdmin;
	inpTol[3].inp.readOnly = !enableAdmin;
	inpTol[4].inp.readOnly = !enableAdmin;
	inpTol[5].inp.readOnly = !enableAdmin;

	btnTol[0].btn.disabled = !enableAdmin;
	btnTol[1].btn.disabled = !enableAdmin;
	btnTol[2].btn.disabled = !enableAdmin;
	btnTol[3].btn.disabled = !enableAdmin;
	btnRef.disabled = !enableAdmin;
}

globalThis.EnableHMI = function(enable)
{
	if (enable == false) {
		domPos.state.value = ' - task not tracked - ';
	} else {
		btnTolSave.action = 'outline';
		domPos.state.value = '';	
	}
}

// Handle events
var selectTol = function(e, idx) {	// click event
	btnTol.forEach((item, i) => {
		item.btn.action = (idx == i) ? "solid" : "outline";
	});
	inpTol.forEach((item, i) => {
		item.inp.style.visibility = (inpVis[idx][i] == true) ? "visible" : "hidden";
	});
	imgTol.src = btnTol[idx].file;
	btnTolSave.action = 'solid';
	// update the visible/invisible state of the input fields
	saveChanges();
}
btnTol[0].btn.addEventListener('click', (e) => selectTol(e, 0));
btnTol[1].btn.addEventListener('click', (e) => selectTol(e, 1));
btnTol[2].btn.addEventListener('click', (e) => selectTol(e, 2));
btnTol[3].btn.addEventListener('click', (e) => selectTol(e, 3));

var referenceTol = function(e) {	// click event
	saveReference();
}
btnRef.addEventListener('click', (e) => referenceTol(e));

var inputTol = function(e, idx) {	// click event
	var fChanged = false;
	inpTol.forEach((item, i) => {
		if (item.inp.value != item.cfgval) {
			// value was changed			
			fChanged = true;
		}
	});
	if (fChanged) {
		btnTolSave.action = 'solid';
		saveChanges();
	}
}
inpTol[0].inp.addEventListener('blur', (e) => inputTol(e, 0));
inpTol[1].inp.addEventListener('blur', (e) => inputTol(e, 1));
inpTol[2].inp.addEventListener('blur', (e) => inputTol(e, 2));
inpTol[3].inp.addEventListener('blur', (e) => inputTol(e, 3));
inpTol[4].inp.addEventListener('blur', (e) => inputTol(e, 4));
inpTol[5].inp.addEventListener('blur', (e) => inputTol(e, 5));

var saveChanges = function(e) {
	var tolerance = 0;
	btnTol.forEach((item, i) => {
		if (item.btn.action == "solid") {
			tolerance = i;
		}
	});

	let cmd = {
		cmd: "set-params",
		params: {
			Job: domParam.job.value,
			Task: domParam.task.value,
			Pos: {
				tolerance: tolerance,
				r1: inpTol[0].inp.value,
				h1: inpTol[1].inp.value,
				r2: inpTol[2].inp.value,
				h2: inpTol[3].inp.value,
				offset: inpTol[4].inp.value,
				angle: inpTol[5].inp.value,
				//domParam.posx.value
				//domParam.posy.value
				//domParam.posz.value
				//domParam.dirx.value
				//domParam.diry.value
				//domParam.dirz.value
			}
		}
	}
	if (OGS.SendCmd) {
		OGS.SendCmd(JSON.stringify(cmd));
	} else {
		console.error('OGS.SendCmd is nil:', cmd);
	}
}
btnTolSave.addEventListener('click', (e) => saveChanges(e));
var toggleAngleView = function(e) {
	if (0 == angleDigits) angleDigits = 2;
	else angleDigits = 0;
}
domPos.dDir.addEventListener('click', (e) => toggleAngleView(e));

var saveReference = function(e) {
	let cmd = {
		cmd: "save-ref",
		params: {
			Job: domParam.job.value,
			Task: domParam.task.value,
		}
	}
	if (OGS.SendCmd) {
		OGS.SendCmd(JSON.stringify(cmd));
	} else {
		console.error('OGS.SendCmd is nil:', cmd);
	}
}


var data = {
    'radio': false,
    'light': false,
    'fan' : 0
};

var initialized = false;
globalThis.UpdateState = function(light, fan, agv) {
	light_set(light);
	fan_set(fan);
	agv_set(agv);
	if (!initialized) {
		// this is the first time this is called, so show the current state
		setButton(fan_on, fan_off, InputState.fan, fan);
		setButton(light_on, light_off, InputState.light, light);
	}
};


// Called as a response to OGS.SendCmd('{ "cmd":"get-params" }')
// update the DOM accordingly
globalThis.UpdateParams = function(paramStr)
{
	let param = JSON.parse(paramStr);
	domParam.job.value = param.Job;
	domParam.task.value = param.Task;
	domParam.driver.value = param.Driver;
	domParam.tool.value = param.Tool;
	domParam.posnum.value = param.Pos.PosCtrl;
	domParam.posx.value = param.Pos.posx;
	domParam.posy.value = param.Pos.posy;
	domParam.posz.value = param.Pos.posz;
	domParam.dirx.value = fmtAngle(param.Pos.dirx);
	domParam.diry.value = fmtAngle(param.Pos.diry);
	domParam.dirz.value = fmtAngle(param.Pos.dirz);

	inpTol[0].inp.value = param.Pos.r1;
	inpTol[1].inp.value = param.Pos.h1;
	inpTol[2].inp.value = param.Pos.r2;
	inpTol[3].inp.value = param.Pos.h2;
	inpTol[4].inp.value = param.Pos.offset;
	inpTol[5].inp.value = param.Pos.angle;
	inpTol[0].cfgval = param.Pos.r1;
	inpTol[1].cfgval = param.Pos.h1;
	inpTol[2].cfgval = param.Pos.r2;
	inpTol[3].cfgval = param.Pos.h2;
	inpTol[4].cfgval = param.Pos.offset;
	inpTol[5].cfgval = param.Pos.angle;

	btnRef.style.visibility = (param.Driver == 'ART') ? "hidden" : "visible";

	//selectTol(e, param.Pos.tolerance)
	btnTol.forEach((item, i) => {
		item.btn.action = (param.Pos.tolerance == i) ? "solid" : "outline";
	});
	inpTol.forEach((item, i) => {
		item.inp.style.visibility = (inpVis[param.Pos.tolerance][i] == true) ? "visible" : "hidden";
	});
	imgTol.src = btnTol[param.Pos.tolerance].file;
	btnTolSave.action = 'solid';
}

var InputState = {
	light: {
		state: "off"
	},
	fan: {
		state: "off"
	},
	agv: {
		state: "idle",
		station: 0
	}
};


var sendState = function() 
{
	var msg = {
		"cmd": "statechange",
		"data": InputState
	}
	sendOGSOM(JSON.stringify(msg));
};
var light_set = function(on)
{
	if (on) {
		light_icon.on.style.display = "inline-block";
		light_icon.off.style.display = "none";
	}
	else {
		light_icon.on.style.display = "none";
		light_icon.off.style.display = "inline-block";
	}
};
var fan_set = function(on)
{
	if (on) {
		fan_icon_path.style.fill = "green";
	}
	else {
		fan_icon_path.style.fill = "red";
	}
};

// if station = 0, then no movement
var agv_set = function(station)
{
	if (station != 0) {
		alertGroup.removeAttribute('hidden');
		alert.innerHTML = "Sending AGV to station   !";
		InputState.agv.state = "moving";
	}
	else {
		alertGroup.setAttribute('hidden', '');
		InputState.agv.state = "idle";
	}
};


alert.addEventListener('closeChange', () => {
//	alertGroup.setAttribute('hidden', '');
//	sendState();
});


