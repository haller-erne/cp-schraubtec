import { l as l$3, s as s$2, i as i$1 } from './register-c5e2ae4d.js';
import { n as n$2, r as r$3 } from './icon.service-40281976.js';
import { a as s$1, y as d$1, i, x, s as s$3, t as t$7, _ as __decorate, m as m$1, p as p$2, z as c$3, C as a$3, b, n as n$3, w as w$1 } from './index-b0c4d8f8.js';
import { f as f$1, o as o$3, r as r$2, t as t$9 } from './lit-b10e491c.js';
import { a as o$2, o as o$4, s as s$4, l as l$4 } from './button.base-8353e908.js';
import { t as t$8 } from './event-1932d824.js';

function r(r,a){s$1(r,["aria-describedby",!!a.length&&a.map((i=>i.id=d$1())).join(" ")]);}function a(t){return t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")}

function t(t){return l$3("direction",t)}

function e(e,t){const n=new ResizeObserver((()=>{window.requestAnimationFrame((()=>t()));}));return n.observe(e),n.__testTrigger=t,n}function t$1(e,t){const n=new IntersectionObserver((e=>{!0===e[0].isIntersecting&&t();}),{threshold:[0]});return n.observe(e),n}function n(t,n,o){return e(t,(()=>{t.responsive&&function(e,t){return e.updateComplete.then((()=>{const n=e.layout;return e.layout=t.layouts[0],t.layouts.reduce(((n,o)=>n.then((()=>{if(e.layout===t.initialLayout)return o;{const t=e.layout;return e.layout=o,e.updateComplete.then((()=>(e.layout=e.layoutStable?e.layout:t,o)))}}))),Promise.resolve(t.layouts[0])).then((()=>n!==e.layout))}))}(t,n).then((e=>{e&&o();}));}))}

const e$1=["exclamation-circle",n$2({outline:'<path d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/><path d="M18,20.07a1.3,1.3,0,0,1-1.3-1.3v-6a1.3,1.3,0,1,1,2.6,0v6A1.3,1.3,0,0,1,18,20.07Z"/><circle cx="17.95" cy="23.02" r="1.5"/>',solid:'<path d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"/>'})];

const l=["check-circle",n$2({outline:'<path d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/><path d="M16.34,23.74l-5-5a1,1,0,0,1,1.41-1.41l3.59,3.59,6.78-6.78a1,1,0,0,1,1.41,1.41Z"/>',solid:'<path d="M30,18A12,12,0,1,1,18,6,12,12,0,0,1,30,18Zm-4.77-2.16a1.4,1.4,0,0,0-2-2l-6.77,6.77L13,17.16a1.4,1.4,0,0,0-2,2l5.45,5.45Z"/>'})];

var a$1=i`:host{contain:inherit;display:block;width:100%;--control-width:calc(var(--cds-global-layout-space-xxl, calc(96 / var(--cds-global-base, 20) * 1rem)) * 2)}:host([layout=compact]:not([control-width=shrink])) .input-container{min-width:var(--control-width)}:host(:not([layout*=vertical]):not([control-width=shrink])) .input-message-container{flex-basis:calc(var(--cds-global-layout-space-xxl,calc(96 / var(--cds-global-base,20) * 1rem))*2)}:host([layout=compact]:not([control-width=shrink])) ::slotted(cds-control-message){--max-width:calc(var(--cds-global-layout-space-xxl, calc(96 / var(--cds-global-base, 20) * 1rem)) * 2)}:host([layout*=vertical]) cds-internal-control-label{--label-width:100%}.input-container{line-height:0;max-width:100%}.input-container.with-status-icon{max-width:calc(100% - 1.2rem)}:host([_disabled]) ::slotted([slot=input]){cursor:not-allowed}:host([control-width=shrink]){width:auto}::slotted([cds-control]){width:100%}::slotted(input){margin:0!important;width:100%}::slotted(input[readonly]){cursor:default}cds-control-action.status{height:var(--cds-global-space-7,calc(16 / var(--cds-global-base,20) * 1rem));padding-top:var(--cds-global-space-3,calc(4 / var(--cds-global-base,20) * 1rem))}:host(:not([layout*=vertical])) cds-internal-control-label[action=primary],:host([layout=compact]) .messages,:host([layout=compact][status=error]) .messages,:host([layout=compact][status=success]) .messages{padding-top:var(--cds-global-space-5,calc(8 / var(--cds-global-base,20) * 1rem))}`;

function t$2(t,r){r.filter((t=>t.hasAttribute("error"))).forEach((t=>{t.setAttribute("hidden",""),t.status="error";})),t.inputControl.addEventListener("blur",(()=>t.inputControl.checkValidity())),t.inputControl.addEventListener("invalid",(()=>{var i;r.forEach((t=>t.setAttribute("hidden",""))),null===(i=r.find((r=>t.inputControl.validity[r.error])))||void 0===i||i.removeAttribute("hidden"),t.status="error";})),t.inputControl.addEventListener("input",(()=>{t.status=t.inputControl.validity.valid?"neutral":t.status,r.filter((r=>t.inputControl.validity.valid&&r.error&&!t.inputControl.validity[r.error])).forEach((t=>t.setAttribute("hidden","")));}));}

const e$2=["vertical","vertical-inline","horizontal","horizontal-inline","compact"],o="horizontal",r$1="stretch";function l$1(t,n){t&&n&&(a$2(t),n.setAttribute("for",t.id));}function c(t,n){n&&(a$2(t),n.id=t.id+"-datalist",t.setAttribute("list",n.id));}function a$2(t){t.id.length||(t.id=d$1());}function s(n){return x`${"neutral"!==n?x`<cds-control-action readonly="readonly" class="status" cds-layout="align:shrink"><cds-icon status="${"error"===n?"danger":"success"}" shape="${"error"===n?"exclamation-circle":"check-circle"}" size="16" inner-offset="${4}"></cds-icon></cds-control-action>`:""}`}async function d(t){return Promise.all(t.map((t=>t.updateComplete))).then((()=>{const n=t.filter((t=>{var n;return "primary"===(null===(n=t.controlLabel)||void 0===n?void 0:n.action)}));return s$2(Math.max(...n.map((t=>t.controlLabel.getBoundingClientRect().width))))}))}function h(t,n,i){return "vertical"!==i&&"vertical-inline"!==i&&t.getBoundingClientRect().top>(null==n?void 0:n.getBoundingClientRect().top)+12}function p(t,n){const i=t[0],e=t[t.length-1];return ("vertical-inline"===n||"horizontal-inline"===n)&&e.getBoundingClientRect().top>i.getBoundingClientRect().top}function f(t){return "vertical"===t||"vertical-inline"===t}async function v(t){const n=t.find((t=>"neutral"!==t.status));return await(null==n?void 0:n.updateComplete),n&&!n.hidden?n.status:"neutral"}

var k;!function(t){t.default="default",t.ariaLabel="aria-label",t.inputGroup="input-group",t.hiddenLabel="hidden-label";}(k||(k={}));class w extends s$3{constructor(){super(...arguments);this.status="neutral",this.controlWidth=r$1,this.validate=!1,this.responsive=!0,this._layout=o,this.focused=!1,this.disabled=!1,this.readonly=!1,this.fixedControlWidth=!1,this.supportsPrefixSuffixActions=!0,this.labelLayout=k.default,this.observers=[];}get layout(){return this._layout}set layout(t){const e=this._layout;this._layout=t?t.replace("-inline",""):o,this.requestUpdate("layout",e);}get isRTL(){return "rtl"===t(this)}static get styles(){return [t$7,a$1]}get hasAriaLabelTypeAttr(){return a(this.inputControl)}get hasStatusIcon(){return this.labelLayout!==k.inputGroup&&("error"===this.status||"success"===this.status)}render(){var t;return x`${this.labelLayout===k.hiddenLabel||this.labelLayout===k.inputGroup?x`<span cds-layout="display:screen-reader-only"><slot name="label" @slotchange="${()=>this.associateInputAndLabel()}"></slot></span>`:""}<div cds-layout="${"vertical"===this.layout?"vertical gap:sm":"horizontal gap:lg"} align:stretch" class="private-host ${this.isRTL?"rtl":""}">${this.primaryLabelTemplate}<div class="input-message-container" cds-layout="
          wrap:none
          ${"compact"===this.layout?"horizontal":"vertical"}
          ${"stretch"!==this.controlWidth||this.fixedControlWidth?"":"align:horizontal-stretch"}
          ${(null===(t=this.messages)||void 0===t?void 0:t.length)?"gap:sm":""}"><div cds-layout="horizontal gap:sm wrap:none"><div cds-layout="horizontal align:top wrap:none ${"shrink"===this.controlWidth||this.fixedControlWidth?"align:shrink":"align:horizontal-stretch"}" class="${this.hasStatusIcon?"input-container with-status-icon":"input-container"}">${this.inputTemplate} ${this.prefixTemplate}<slot name="input"></slot>${this.suffixTemplate}</div>${this.hasStatusIcon?s(this.status):""}</div>${this.messagesTemplate}<slot name="datalist" @slotchange="${()=>this.associateInputToDatalist()}"></slot></div></div>`}get inputTemplate(){return x``}get prefixDefaultTemplate(){return null}get suffixDefaultTemplate(){return null}get isGenericControl(){return "cds-control"===this.tagName.toLowerCase()}get hasControlActions(){return this.controlActions.length>0||this.prefixDefaultTemplate||this.suffixDefaultTemplate}get primaryLabelTemplate(){return x`${this.labelLayout===k.default?x`<cds-internal-control-label .disabled="${this.disabled}" cds-layout="align:shrink align:top" action="primary"><slot name="label" @slotchange="${()=>this.associateInputAndLabel()}"></slot></cds-internal-control-label>`:""}`}get messagesTemplate(){return x`<div cds-layout="${"compact"===this.layout?"align:shrink":""}" class="messages"><slot name="message"></slot></div>`}get prefixTemplate(){return x`<div cds-layout="align:shrink align:vertical-center" class="prefix"><div cds-layout="horizontal gap:xs">${this.prefixDefaultTemplate}<slot name="prefix"></slot></div></div>`}get suffixTemplate(){return x`<div cds-layout="align:shrink align:vertical-center" class="suffix"><div cds-layout="horizontal gap:xs"><slot name="suffix"></slot>${this.suffixDefaultTemplate}</div></div>`}connectedCallback(){super.connectedCallback(),this.setAttribute("cds-control","");}firstUpdated(t){super.firstUpdated(t),this.setupHostAttributes(),this.setupHTML5Validation(),this.setActionOffsetPadding(),this.setupResponsive(),this.setupDescribedByUpdates(),this.setupLabelLayout(),this.assignSlotIfInControlGroup();}updated(t){super.updated(t),this.messages.forEach((e=>f$1(e,this,{disabled:t.has("disabled")}))),f$1(this.inputControl,this,{disabled:t.has("disabled")});}disconnectedCallback(){super.disconnectedCallback(),this.observers.forEach((t=>null==t?void 0:t.disconnect()));}associateInputAndLabel(){l$1(this.inputControl,this.label);}associateInputToDatalist(){c(this.inputControl,this.datalistControl);}setupDescribedByUpdates(){var t;null===(t=this.messageSlot)||void 0===t||t.addEventListener("slotchange",(async()=>{r(this.inputControl,Array.from(this.messages)),v(Array.from(this.messages)).then((t=>this.status=t));}));}setupHostAttributes(){this.inputControl.addEventListener("focusin",(()=>this.focused=!0)),this.inputControl.addEventListener("focusout",(()=>this.focused=!1)),this.observers.push(o$2(this.inputControl,"disabled",(t=>this.disabled=""===t||t)),o$2(this.inputControl,"aria-disabled",(t=>this.disabled="true"===t)),o$2(this.inputControl,"readonly",(t=>this.readonly=""===t||t)));}setupHTML5Validation(){var t,e;!(null===(e=null===(t=this.inputControl)||void 0===t?void 0:t.form)||void 0===e?void 0:e.noValidate)&&this.validate&&t$2(this,Array.from(this.messages));}async setActionOffsetPadding(){var t,e;const s=null===(t=this.prefixAction)||void 0===t?void 0:t.updateComplete,i=null===(e=this.suffixAction)||void 0===e?void 0:e.updateComplete;if(await s||Promise.resolve(!0),await i||Promise.resolve(!0),await o$3(this.controlActions),!this.isGenericControl&&this.supportsPrefixSuffixActions&&this.hasControlActions){const t=s$2(this.prefixAction.getBoundingClientRect().width+6),e=s$2(this.suffixAction.getBoundingClientRect().width+6);this.inputControl.style.setProperty("padding-left",this.isRTL?e:t,"important"),this.inputControl.style.setProperty("padding-right",this.isRTL?t:e,"important");}}get layoutStable(){return this.labelLayout!==k.default||!h(this.inputControl,this.controlLabel,this.layout)}setupResponsive(){if(this.responsive&&this.labelLayout===k.default&&this.controlLabel){const t={layouts:e$2,initialLayout:this.layout},e=n(this,t,(()=>this.layoutChange.emit(this.layout,{bubbles:!0})));this.observers.push(e);}}setupLabelLayout(){var t,e;(null===(e=null===(t=this.label)||void 0===t?void 0:t.getAttribute("cds-layout"))||void 0===e?void 0:e.includes("display:screen-reader-only"))&&(this.labelLayout=k.hiddenLabel),this.hasAriaLabelTypeAttr&&(this.labelLayout=k.ariaLabel);}assignSlotIfInControlGroup(){var t;(null===(t=this.parentElement)||void 0===t?void 0:t.hasAttribute("cds-control-group"))&&this.setAttribute("slot","controls");}}__decorate([m$1({type:String})],w.prototype,"status",void 0),__decorate([m$1({type:String})],w.prototype,"controlWidth",void 0),__decorate([m$1({type:Boolean})],w.prototype,"validate",void 0),__decorate([m$1({type:Boolean})],w.prototype,"responsive",void 0),__decorate([m$1({type:String})],w.prototype,"layout",null),__decorate([p$2({type:Boolean,reflect:!0})],w.prototype,"focused",void 0),__decorate([p$2({type:Boolean,reflect:!0})],w.prototype,"disabled",void 0),__decorate([p$2({type:Boolean,reflect:!0})],w.prototype,"readonly",void 0),__decorate([p$2()],w.prototype,"fixedControlWidth",void 0),__decorate([p$2()],w.prototype,"supportsPrefixSuffixActions",void 0),__decorate([p$2()],w.prototype,"isRTL",null),__decorate([p$2()],w.prototype,"labelLayout",void 0),__decorate([o$4("input, select, textarea, [cds-control]",{required:"error",requiredMessage:"input element is missing",assign:"input"})],w.prototype,"inputControl",void 0),__decorate([o$4("label",{required:"error",requiredMessage:"To meet a11y standards either a <label> or input[aria-label] should be provided.",assign:"label",exemptOn:t=>t.hasAriaLabelTypeAttr})],w.prototype,"label",void 0),__decorate([i$1("cds-internal-control-label[action=primary]")],w.prototype,"controlLabel",void 0),__decorate([o$4("datalist",{assign:"datalist"})],w.prototype,"datalistControl",void 0),__decorate([s$4("cds-control-message")],w.prototype,"messages",void 0),__decorate([s$4("cds-control-action")],w.prototype,"controlActions",void 0),__decorate([i$1(".prefix")],w.prototype,"prefixAction",void 0),__decorate([i$1(".suffix")],w.prototype,"suffixAction",void 0),__decorate([i$1(".messages")],w.prototype,"messageSlot",void 0),__decorate([t$8()],w.prototype,"layoutChange",void 0);

var c$1=i`:host{pointer-events:none;display:inline-block}:host([role=button]){cursor:pointer;min-width:var(--cds-global-space-9,calc(24 / var(--cds-global-base,20) * 1rem));pointer-events:initial}.private-host{color:var(--cds-global-typography-color-300,var(--cds-global-color-construction-800,#2d4048));font-size:var(--cds-global-typography-font-size-3,calc(13 / var(--cds-global-base,20) * 1rem));display:flex;justify-content:center;align-items:center;line-height:calc(var(--cds-global-space-9,calc(24 / var(--cds-global-base,20) * 1rem)) - var(--cds-global-space-2,calc(2 / var(--cds-global-base,20) * 1rem)))}::slotted(cds-icon){width:calc(var(--cds-global-space-9,calc(24 / var(--cds-global-base,20) * 1rem)) - var(--cds-global-space-2,calc(2 / var(--cds-global-base,20) * 1rem)));height:calc(var(--cds-global-space-9,calc(24 / var(--cds-global-base,20) * 1rem)) - var(--cds-global-space-2,calc(2 / var(--cds-global-base,20) * 1rem)));margin-bottom:var(--cds-global-space-1,calc(1 / var(--cds-global-base,20) * 1rem));pointer-events:none}::slotted(cds-icon[shape=angle]){height:var(--cds-global-space-8,calc(18 / var(--cds-global-base,20) * 1rem));width:var(--cds-global-space-8,calc(18 / var(--cds-global-base,20) * 1rem));margin-right:var(--cds-global-space-3,calc(4 / var(--cds-global-base,20) * 1rem))}:host(:hover) ::slotted(cds-icon){--color:var(--cds-alias-object-interaction-color-active, var(--cds-global-color-construction-1000, #1b2b32))}:host([_disabled]) ::slotted(cds-icon){--color:var(--cds-alias-object-interaction-color-disabled, var(--cds-global-color-construction-300, #aeb8bc))}`;

class p$1 extends l$4{constructor(){super(...arguments);this.readonly=!1,this.ariaLabel="";}static get styles(){return [t$7,c$1]}render(){return x`<div class="private-host"><slot></slot></div>`}connectedCallback(){super.connectedCallback(),this.syncAria();}syncAria(){const t=this.readonly,i=c$3(this,"aria-label");a$3(this,["aria-hidden","true"],(()=>t&&!i));}updated(t){super.updated(t),t.has("action")&&this.setSlotLocation(),(t.has("readonly")||t.has("ariaLabel"))&&(this.validateAriaLabel(),this.syncAria());}setSlotLocation(){var t;b([this,null!==(t=this.action)&&void 0!==t&&t]);}validateAriaLabel(){var t;this.readonly||(null===(t=this.getAttribute("aria-label"))||void 0===t?void 0:t.length)||n$3.warn("A aria-label is required for interactive cds-control-actions",this);}}__decorate([m$1({type:String})],p$1.prototype,"action",void 0),__decorate([m$1({type:Boolean})],p$1.prototype,"readonly",void 0),__decorate([m$1({type:String})],p$1.prototype,"ariaLabel",void 0),__decorate([o$4("cds-icon")],p$1.prototype,"icon",void 0);

var t$3=i`:host{width:100%}:host([layout=compact]:not([control-width=shrink])) ::slotted(cds-control-message){--max-width:calc(var(--cds-global-layout-space-xxl, calc(96 / var(--cds-global-base, 20) * 1rem)) * 2)}.control-message-container{flex-basis:0}cds-control-action.status{height:var(--cds-global-space-7,calc(16 / var(--cds-global-base,20) * 1rem))}:host([layout=compact]) .messages,:host([layout=compact]) cds-internal-control-label[action=primary],:host([layout=horizontal-inline]) cds-internal-control-label[action=primary],:host([layout=horizontal]) cds-internal-control-label[action=primary],:host([status=error]) .messages,:host([status=success]) .messages{padding-top:var(--cds-global-space-3,calc(4 / var(--cds-global-base,20) * 1rem))}:host([layout*=vertical]) cds-internal-control-label{--label-width:100%}`;

class A extends s$3{constructor(){super(...arguments);this.status="neutral",this.layout=o,this.controlAlign="left",this.disabled=!1,this.controlWidth=r$1,this.responsive=!0,this.isInlineControlGroup=!1,this.isControlGroup=!0,this.observers=[];}get messagesTemplate(){return x`<div ?hidden="${0===this.messages.length}" cds-layout="horizontal align:shrink gap:sm wrap:none" class="messages-container">${this.isInlineControlGroup?"":s(this.status)}<div class="messages"><slot name="message" @slotchange="${this.updateControlMessages}"></slot></div></div>`}get controlsTemplate(){return this.isInlineControlGroup?x`<div cds-layout="horizontal gap:sm align:horizontal-stretch" class="input-container"><div class="controls" cds-layout="horizontal align:horizontal-stretch wrap:none"><slot name="controls"></slot></div>${s(this.status)}</div>`:x`<div cds-layout="horizontal align:shrink" class="input-container"><div class="controls" cds-layout="${this.inlineControlLayout}"><slot name="controls"></slot></div></div>`}get inlineControlLayout(){return `${this.layout.includes("inline")||"compact"===this.layout?"horizontal gap:md":"vertical gap:sm"} ${this.layout.includes("vertical")?"":"wrap:none"}`}get primaryLabelLayout(){return this.layout.includes("vertical")?"vertical gap:sm":"horizontal gap:lg"}get controlMessageLayout(){return ("compact"===this.layout?"horizontal":"vertical")+" gap:sm wrap:none align:stretch"}render(){return x`<div class="private-host" cds-layout="${this.primaryLabelLayout}"><cds-internal-control-label .disabled="${this.disabled}" cds-layout="align:top" action="primary"><slot name="label"></slot></cds-internal-control-label><div class="control-message-container" cds-layout="${this.controlMessageLayout}">${this.controlsTemplate} ${this.messagesTemplate}</div></div>`}connectedCallback(){super.connectedCallback(),s$1(this,["role","group"],["cds-control-group",""]);}firstUpdated(t){super.firstUpdated(t),this.associateLabelAndGroup(),this.setupResponsive();}updated(t){super.updated(t),t.set("isControlGroup",!0),this.controls.forEach((t=>t.isControlGroup=!0)),this.messages.forEach((o=>f$1(o,this,{disabled:t.has("disabled")}))),r$2(t,this,Array.from(this.controls));}disconnectedCallback(){super.disconnectedCallback(),this.observers.forEach((t=>t.disconnect()));}get layoutStable(){return !p(Array.from(this.controls),this.layout)&&!h(this.controlSlot,this.controlLabel,this.layout)}associateLabelAndGroup(){this.setAttribute("aria-labelledby",this.groupLabelId),this.label.setAttribute("id",this.groupLabelId);}async updateControlMessages(){r(this,Array.from(this.messages)),this.status=await v(Array.from(this.messages));}setupResponsive(){if(this.responsive){const t={layouts:e$2,initialLayout:this.layout};this.observers.push(n(this,t,(()=>this.layoutChange.emit(this.layout,{bubbles:!0}))));}}}A.styles=[t$7,t$3],__decorate([m$1({type:String})],A.prototype,"status",void 0),__decorate([m$1({type:String})],A.prototype,"layout",void 0),__decorate([m$1({type:String})],A.prototype,"controlAlign",void 0),__decorate([m$1({type:Boolean})],A.prototype,"disabled",void 0),__decorate([m$1({type:String})],A.prototype,"controlWidth",void 0),__decorate([m$1({type:Boolean})],A.prototype,"responsive",void 0),__decorate([o$4("label",{assign:"label",required:"warning",requiredMessage:"To meet a11y standards a <label> should be provided"})],A.prototype,"label",void 0),__decorate([s$4("cds-control, [cds-control]")],A.prototype,"controls",void 0),__decorate([s$4("cds-control-message")],A.prototype,"messages",void 0),__decorate([i$1("cds-internal-control-label[action=primary]",!0)],A.prototype,"controlLabel",void 0),__decorate([i$1(".controls",!0)],A.prototype,"controlSlot",void 0),__decorate([t$9()],A.prototype,"groupLabelId",void 0),__decorate([t$8()],A.prototype,"layoutChange",void 0);

var t$4=i`:host{width:initial;position:relative;--width:var(--cds-global-space-7, calc(16 / var(--cds-global-base, 20) * 1rem));--height:var(--cds-global-space-7, calc(16 / var(--cds-global-base, 20) * 1rem));--cds-alias-object-interaction-touch-target:var(--cds-global-space-8, calc(18 / var(--cds-global-base, 20) * 1rem))}::slotted(label){white-space:nowrap}cds-internal-control-label{padding-top:var(--cds-global-space-2,calc(2 / var(--cds-global-base,20) * 1rem))}cds-control-action.status{padding-top:0!important}.input{outline:0!important}[focusable]{content:"";position:absolute;top:calc((var(--cds-alias-object-interaction-touch-target,calc(36 / var(--cds-global-base,20) * 1rem)) - var(--height))*-1/2);left:calc((var(--cds-alias-object-interaction-touch-target,calc(36 / var(--cds-global-base,20) * 1rem)) - var(--width))*-1/2);width:var(--cds-alias-object-interaction-touch-target,calc(36 / var(--cds-global-base,20) * 1rem));height:var(--cds-alias-object-interaction-touch-target,calc(36 / var(--cds-global-base,20) * 1rem));cursor:pointer}:host([_disabled]) [focusable]{cursor:not-allowed}`;

class c$2 extends w{constructor(){super(...arguments);this.controlAlign="left",this.checked=!1,this.indeterminate=!1,this.supportsPrefixSuffixActions=!1;}static get styles(){return [...super.styles,t$4]}get internalLabelTemplate(){return x`<cds-internal-control-label action="secondary" .disabled="${this.disabled}" cds-layout="align:vertical-center"><slot name="label" @slotchange="${()=>this.associateInputAndLabel()}"></slot></cds-internal-control-label>`}render(){var e,i;return x`<div class="private-host" cds-layout="${this.isControlGroup?"horizontal align:vertical-center":"vertical"} gap:sm"><div cds-layout="horizontal gap:sm wrap:none align:vertical-center ${"right"===this.controlAlign?"order:reverse":""}"><div role="presentation" class="input" @click="${this.selectInput}"></div><div role="presentation" focusable @click="${this.selectInput}"></div>${this.internalLabelTemplate}</div>${(null===(e=this.messages)||void 0===e?void 0:e.length)?x`<div cds-layout="horizontal wrap:none ${(null===(i=this.messages)||void 0===i?void 0:i.length)?"gap:sm":""}">${s(this.status)}<div cds-layout="align:vertical-center" class="messages"><slot name="message"></slot></div></div>`:""}</div><div cds-layout="display:screen-reader-only"><slot name="input"></slot></div>`}firstUpdated(e){super.firstUpdated(e),this.inputControl.addEventListener("change",(()=>this.checked=this.inputControl.checked)),this.observers.push(o$2(this.inputControl,"checked",(e=>this.checked=""===e||e)),o$2(this.inputControl,"indeterminate",(e=>this.indeterminate=""===e||e)));}updated(e){super.updated(e),e.has("indeterminate")&&e.get("indeterminate")!==this.indeterminate&&this.indeterminate&&(this.checked=!1),e.has("checked")&&e.get("checked")!==this.checked&&this.checked&&(this.indeterminate=!1,this.checkedChange.emit(this.checked,{bubbles:!this.isControlGroup}));}selectInput(e){this.inputControl.click(),e.preventDefault();}}__decorate([m$1({type:String})],c$2.prototype,"controlAlign",void 0),__decorate([p$2()],c$2.prototype,"isControlGroup",void 0),__decorate([p$2({type:Boolean,reflect:!0})],c$2.prototype,"checked",void 0),__decorate([p$2({type:Boolean,reflect:!0})],c$2.prototype,"indeterminate",void 0),__decorate([t$8()],c$2.prototype,"checkedChange",void 0);

var t$5=i`:host{contain:inherit!important;--text-transform:initial}:host([action=primary]){min-width:var(--label-width,var(--internal-label-min-width));max-width:var(--label-width,var(--internal-label-max-width,calc(var(--cds-global-layout-space-xxl,calc(96 / var(--cds-global-base,20) * 1rem)) * 2)))}::slotted([slot=label]){font-family:var(--cds-global-typography-font-family, "Clarity City", "Avenir Next", sans-serif)!important;display:inline-block!important;text-transform:var(--text-transform)!important;cursor:pointer!important;font-size:var(--cds-global-typography-secondary-font-size,calc(13 / var(--cds-global-base,20) * 1rem))!important;font-weight:var(--cds-global-typography-secondary-font-weight,400)!important;color:var(--cds-global-typography-color-400,var(--cds-global-color-construction-900,#21333b))!important;line-height:var(--cds-global-typography-secondary-line-height,1.23077em)!important;letter-spacing:var(--cds-global-typography-secondary-letter-spacing,-.007692em)!important}::slotted([slot=label])::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-secondary-line-height,1.23077em) - 1em)/ 2))*-1) + .037em)}::slotted([slot=label])::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-secondary-line-height,1.23077em) - 1em)/ 2))*-1) - .044em)}:host([disabled]) ::slotted([slot=label]){color:var(--cds-alias-status-disabled,var(--cds-global-color-construction-300,#aeb8bc))!important;cursor:not-allowed!important}:host([action=primary]) ::slotted([slot=label]){font-weight:var(--cds-global-typography-font-weight-semibold,600)!important}::slotted(cds-control-action){padding:var(--cds-global-space-4,calc(6 / var(--cds-global-base,20) * 1rem)) 0 var(--cds-global-space-3,calc(4 / var(--cds-global-base,20) * 1rem)) 0!important;margin-bottom:calc(-1*var(--cds-global-space-5,calc(8 / var(--cds-global-base,20) * 1rem)))!important;margin-top:calc(-1*(var(--cds-global-space-6,calc(12 / var(--cds-global-base,20) * 1rem)) - var(--cds-global-space-2,calc(2 / var(--cds-global-base,20) * 1rem))))!important}`;

class l$2 extends s$3{constructor(){super(...arguments);this.disabled=!1,this.action="primary";}static get styles(){return [t$7,t$5]}render(){return x`<div class="private-host" cds-layout="horizontal gap:sm align:shrink"><slot></slot></div>`}}__decorate([m$1({type:Boolean})],l$2.prototype,"disabled",void 0),__decorate([m$1({type:String})],l$2.prototype,"action",void 0);

var o$1=i`:host{--color:var(--cds-global-typography-color-200, var(--cds-global-color-construction-600, #4f6169));--font-size:var(--cds-global-typography-font-size-1, calc(11 / var(--cds-global-base, 20) * 1rem));--font-weight:var(--cds-global-typography-font-weight-regular, 400);--min-width:var(--cds-global-layout-space-xxl, calc(96 / var(--cds-global-base, 20) * 1rem));--max-width:initial;min-width:var(--min-width);max-width:var(--max-width)}.private-host{color:var(--color);font-size:var(--font-size);font-weight:var(--font-weight);line-height:1em}.private-host::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((.1475em + 0em)*-1) + .037em)}.private-host::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - .1475em - .1703em - .517em) + 0em)*-1) - .044em)}:host([status=error]){--color:var(--cds-alias-status-danger, var(--cds-global-color-red-700, #e02200))}:host([status=success]){--color:var(--cds-alias-status-success, var(--cds-global-color-green-700, #42810e))}:host([_disabled]){--color:var(--cds-alias-status-disabled, var(--cds-global-color-construction-300, #aeb8bc))}::slotted(cds-control-action){margin-bottom:calc(-1*var(--cds-global-space-5,calc(8 / var(--cds-global-base,20) * 1rem)))}`;

class n$1 extends s$3{constructor(){super(...arguments);this.status="neutral",this.disabled=!1;}render(){return x`<div class="private-host"><slot></slot></div>`}static get styles(){return [t$7,o$1]}connectedCallback(){super.connectedCallback(),b([this,"message"]);}}__decorate([m$1({type:String})],n$1.prototype,"status",void 0),__decorate([m$1({type:String})],n$1.prototype,"error",void 0),__decorate([p$2({type:Boolean,reflect:!0})],n$1.prototype,"disabled",void 0);

var t$6=i`:host{--internal-label-min-width:initial;display:block;width:100%}.private-host{width:100%}`;

class m extends s$3{constructor(){super(...arguments);this.layout=o,this.responsive=!0,this.validate=!1,this.observers=[];}get controlsAndGroups(){return [...Array.from(this.groups),...Array.from(this.controls)]}static get styles(){return [t$7,t$6]}render(){return x`<div class="private-host" cds-layout="vertical gap:${"compact"===this.layout?"md":"lg"}"><slot></slot></div>`}firstUpdated(t){super.firstUpdated(t),this.syncLayouts(),this.setControlLabelWidths(),this.observers.push(t$1(this,(()=>this.setControlLabelWidths())));}updated(t){super.updated(t),r$2(t,this,this.controlsAndGroups);}disconnectedCallback(){super.disconnectedCallback(),this.observers.forEach((t=>null==t?void 0:t.disconnect()));}async setControlLabelWidths(){"horizontal"!==this.layout&&"horizontal-inline"!==this.layout&&"compact"!==this.layout||(await o$3(this.controlsAndGroups),this.style.setProperty("--internal-label-min-width",await d(this.controlsAndGroups)),e(this,(()=>this.style.setProperty("--internal-label-max-width",s$2(this.getBoundingClientRect().width)))));}syncLayouts(){this.addEventListener("layoutChange",(t=>{t.preventDefault(),!this.overflowElement&&f(t.detail)&&this.collapseForm(t.target),t.target!==this.overflowElement||f(t.detail)||this.expandForm(t.detail);}));}collapseForm(t){this.overflowElement=t,this.responsive=!1,this.layout="vertical",t.updateComplete.then((()=>t.responsive=!0));}expandForm(t){this.responsive=!0,this.overflowElement=null,this.layout=t;}}__decorate([m$1({type:String})],m.prototype,"layout",void 0),__decorate([m$1({type:String})],m.prototype,"controlWidth",void 0),__decorate([m$1({type:Boolean})],m.prototype,"responsive",void 0),__decorate([m$1({type:Boolean})],m.prototype,"validate",void 0),__decorate([s$4("[cds-control]")],m.prototype,"controls",void 0),__decorate([s$4("[cds-control-group]")],m.prototype,"groups",void 0);

w$1("cds-control",w),w$1("cds-control-action",p$1),w$1("cds-internal-control-group",A),w$1("cds-internal-control-inline",c$2),w$1("cds-internal-control-label",l$2),w$1("cds-control-message",n$1),w$1("cds-form-group",m),r$3.addIcons(e$1,l);

export { A, c$2 as c };
