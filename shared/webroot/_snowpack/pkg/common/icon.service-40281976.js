import { o as w, n as n$1 } from './index-b0c4d8f8.js';

class s{constructor(s,i){this.fn=s,this.subscriptions=i;}unsubscribe(){const s=this.subscriptions.indexOf(this);-1!==s&&this.subscriptions.splice(s,1);}}class i{constructor(){this.subscriptions=[];}subscribe(i){const t=new s(i,this.subscriptions);return this.subscriptions.push(t),t}emit(s){this.subscriptions.forEach((i=>i.fn(s)));}toEventObservable(){return this}}

const a=new i;a.listener=document.addEventListener("CDS_STATE_UPDATE",(t=>a.emit(t.detail)));class i$1{static get state(){return w(),window.CDS._state}static getValue(t){return i$1.state[t]}static setValue(t,e){i$1.state[t]=e;}static log(){n$1.log(JSON.stringify(i$1.state,null,2));}}i$1.stateUpdates=a.toEventObservable();

function n(n){return n}

const r=["unknown",n({outline:'<circle class="cds-internal-dot-3" cx="31.1" cy="18" r="2.9"/><circle class="cds-internal-dot-2" cx="18" cy="18" r="2.9"/><circle class="cds-internal-dot-1" cx="4.9" cy="18" r="2.9"/>'})];

class r$1{static get registry(){return {unknown:r[1],...i$1.state.iconRegistry}}static addIcons(...e){i$1.state.iconRegistry={...i$1.state.iconRegistry,...Object.fromEntries(e.filter((([t])=>!r$1.registry[t])))};}static addAliases(...e){const s=e.filter((([t])=>r$1.registry[t])).flatMap((([t,e])=>e.map((e=>[e,r$1.registry[t]]))));i$1.state.iconRegistry={...i$1.state.iconRegistry,...Object.fromEntries(s)};}static getIconNameFromShape(t){return t[0]}}

export { i$1 as i, n, r$1 as r };
