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
	{ btn: document.querySelector('#btnTol1'), file: 'cylinder.png' },
	{ btn: document.querySelector('#btnTol2'), file: 'sphere.png' },
	{ btn: document.querySelector('#btnTol3'), file: 'frustum.png' }
];
var btnTolSave = document.querySelector('#btnTolSave');
var inpTol = [
	{ inp: document.querySelector('#inpRadius') },
	{ inp: document.querySelector('#inpHeight') },
	{ inp: document.querySelector('#inpOffset') },
	{ inp: document.querySelector('#inpAngle') },
]
const imgTol = document.querySelector('#imgTol');
const btnRef = document.querySelector('#btnRef');
var isAdmin = -1;

var domParam = {
	job: document.querySelector('#inpWorkspace'),
	task: document.querySelector('#inpPosName'),
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
	dDirx : document.querySelector('#txtDeltaRadX'),
	dDiry : document.querySelector('#txtDeltaRadY'),
	dDirz : document.querySelector('#txtDeltaRadZ'),
	inpos : document.querySelector('#txtInPos'),
	state : document.querySelector('#txtStatus'),
};

// Called as a response to OGS.SendCmd('{ "cmd":"get-params" }')
// update the DOM accordingly
globalThis.UpdateParams = function(paramStr)
{
	let param = JSON.parse(paramStr);
	domParam.job.value = param.Job;
	domParam.task.value = param.Task;
	// param.Tool;
	domParam.posx.value = param.Pos.posx;
	domParam.posy.value = param.Pos.posy;
	domParam.posz.value = param.Pos.posz;
	domParam.dirx.value = param.Pos.dirx;
	domParam.diry.value = param.Pos.diry;
	domParam.dirz.value = param.Pos.dirz;

	inpTol[0].inp.value = param.Pos.radius;
	inpTol[1].inp.value = param.Pos.height;
	inpTol[2].inp.value = param.Pos.offset;
	inpTol[3].inp.value = param.Pos.angle;
	inpTol[0].cfgval = param.Pos.radius;
	inpTol[1].cfgval = param.Pos.height;
	inpTol[2].cfgval = param.Pos.offset;
	inpTol[3].cfgval = param.Pos.angle;

	selectTol(e, param.Pos.tolerance)
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
		domPos.posx.value = pos.Pos.posx;
		domPos.posy.value = pos.Pos.posy;
		domPos.posz.value = pos.Pos.posz;
		domPos.dirx.value = pos.Pos.dirx;
		domPos.diry.value = pos.Pos.diry;
		domPos.dirz.value = pos.Pos.dirz;
		domPos.dPosx.value = pos.Delta.posx;
		domPos.dPosy.value = pos.Delta.posy;
		domPos.dPosz.value = pos.Delta.posz;
		domPos.dDirx.value = pos.Delta.dirx;
		domPos.dDiry.value = pos.Delta.diry;
		domPos.dDirz.value = pos.Delta.dirz;
	} else {
		domPos.state.value = pos.Error;
		domPos.inpos.value = '';
		domPos.posx.value = '';
		domPos.posy.value = '';
		domPos.posz.value = '';
		domPos.dirx.value = '';
		domPos.diry.value = '';
		domPos.dirz.value = '';
		domPos.dPosx.value = '';
		domPos.dPosy.value = '';
		domPos.dPosz.value = '';
		domPos.dDirx.value = '';
		domPos.dDiry.value = '';
		domPos.dDirz.value = '';
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
	btnTol[0].btn.disabled = !enableAdmin;
	btnTol[1].btn.disabled = !enableAdmin;
	btnTol[2].btn.disabled = !enableAdmin;
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
	imgTol.src = btnTol[idx].file;
	btnTolSave.action = 'solid';
	saveChanges();
}
btnTol[0].btn.addEventListener('click', (e) => selectTol(e, 0));
btnTol[1].btn.addEventListener('click', (e) => selectTol(e, 1));
btnTol[2].btn.addEventListener('click', (e) => selectTol(e, 2));

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
				radius: inpTol[0].inp.value,
				height: inpTol[1].inp.value,
				offset: inpTol[2].inp.value,
				angle: inpTol[3].inp.value,
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


