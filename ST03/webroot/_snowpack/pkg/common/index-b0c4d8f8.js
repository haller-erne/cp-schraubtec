let e=!1,t=!1;function o(e,t,o){Object.defineProperty(e,o,{configurable:!0,enumerable:!0,get:function(){return this.hasAttribute(t)?this.getAttribute(t):null},set:function(e){null!==e?this.setAttribute(t,e):this.removeAttribute(t);}});}e||Element.prototype.hasOwnProperty("role")||(o(Element.prototype,"role","role"),e=!0),t||Element.prototype.hasOwnProperty("ariaLabel")||(t=!0,["ActiveDescendant","Atomic","AutoComplete","Busy","Checked","ColCount","ColIndex","ColSpan","Controls","Current","DescribedBy","Details","Disabled","ErrorMessage","Expanded","FlowTo","HasPopup","Hidden","Invalid","KeyShortcuts","Label","LabelledBy","Level","Live","Modal","MultiLine","MultiSelectable","Orientation","Owns","Placeholder","PosInSet","Pressed","ReadOnly","Relevant","Required","RoleDescription","RowCount","RowIndex","RowSpan","Selected","SetSize","Sort","ValueMax","ValueMin","ValueNow","ValueText"].forEach((e=>o(Element.prototype,"aria-"+e.toLowerCase(),"aria"+e))));

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$1=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o$1{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$1&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t));}return t}toString(){return this.cssText}}const r=t=>new o$1("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$1(n,t,s)},S=(s,n)=>{e$1?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c=e$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$1;const e$2=window,r$1=e$2.trustedTypes,h=r$1?r$1.emptyScript:"",o$2=e$2.reactiveElementPolyfillSupport,n$1={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:n$1,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i));}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$1).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$1;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d}),(null!==(s$1=e$2.reactiveElementVersions)&&void 0!==s$1?s$1:e$2.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$1=window,s$2=i$1.trustedTypes,e$3=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$2=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$2,h$1=`<${l$1}>`,r$2=document,d$1=()=>r$2.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$1=Array.isArray,v=t=>c$1(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$2.createTreeWalker(r$2,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h$1:v>=0?(l.push(e),s.slice(0,v)+o$3+s.slice(v)+n$2+w):s+n$2+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$3?e$3.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$2)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$2),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$2),i=t.length-1;if(i>0){h.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d$1()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d$1());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$2,t+1));)v.push({type:7,index:r}),t+=n$2.length-1;}r++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S$1{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$2).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$2.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S$1(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d$1()),this.k(d$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$2?s$2.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$2=i$1.litHtmlVersions)&&void 0!==t$2?t$2:i$1.litHtmlVersions=[]).push("2.7.2");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$4;class s$3 extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$3.finalized=!0,s$3._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$3});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$3});(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.3.1");

var a$2=i`@charset "UTF-8";:host,:root{--δ2:var(--cds-global-layout-space-xs, calc(4 / var(--cds-global-base, 20) * 1rem));--δ3:var(--cds-global-layout-space-sm, calc(6 / var(--cds-global-base, 20) * 1rem));--δ4:var(--cds-global-layout-space-md, calc(12 / var(--cds-global-base, 20) * 1rem));--δ5:var(--cds-global-layout-space-lg, calc(24 / var(--cds-global-base, 20) * 1rem));--δ6:var(--cds-global-layout-space-xl, calc(48 / var(--cds-global-base, 20) * 1rem))}[cds-layout~="wrap:none"]{flex-wrap:nowrap!important}[cds-layout*="align:stretch"]{flex-grow:1!important}[cds-layout*="align:shrink"]{flex-shrink:1!important;flex-grow:0!important}[cds-layout~=horizontal]{display:flex;flex-direction:row;flex-wrap:wrap;justify-items:flex-start;align-items:flex-start;width:100%;margin:0;min-height:0}[cds-layout~=horizontal]>[cds-layout~=horizontal],[cds-layout~=horizontal]>[cds-layout~=vertical],[cds-layout~=horizontal]>[cds-text]{width:initial!important}[cds-layout~=horizontal][cds-layout*="align:top"]{align-items:flex-start}[cds-layout~=horizontal][cds-layout*="align:left"]{justify-content:flex-start}[cds-layout~=horizontal][cds-layout*="align:right"]{justify-content:flex-end}[cds-layout~=horizontal][cds-layout*="align:vertical-center"]{align-items:center;align-content:center}[cds-layout~=horizontal][cds-layout*="align:horizontal-center"]{justify-content:center}[cds-layout~=horizontal][cds-layout*="align:center"]{align-items:center;align-content:center;justify-content:center}[cds-layout~=horizontal][cds-layout*="order:reverse"]{flex-direction:row-reverse}[cds-layout~=horizontal][cds-layout*="align:horizontal-stretch"]{justify-content:stretch;flex-grow:1}[cds-layout~=horizontal][cds-layout*="align:horizontal-stretch"]>*{flex-grow:1}[cds-layout~=horizontal][cds-layout*="align:stretch"]{align-items:stretch;align-content:stretch;flex-grow:1}[cds-layout~=horizontal][cds-layout*="align:stretch"]>*{flex-grow:1}[cds-layout~=horizontal]>[cds-layout*="align:center"],[cds-layout~=horizontal]>[cds-layout*="align:vertical-center"]{align-self:center}[cds-layout~=horizontal]>[cds-layout*="align:center"],[cds-layout~=horizontal]>[cds-layout*="align:horizontal-center"]{margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal]>[cds-layout*="align:top"]{align-self:flex-start}[cds-layout~=horizontal]>[cds-layout*="align:right"]{margin-left:auto!important}[cds-layout~=horizontal]>[cds-layout*="align:left"]{margin-right:auto!important}[cds-layout~=vertical]{width:100%;display:flex;flex-direction:column;align-items:flex-start}[cds-layout~=vertical],[cds-layout~=vertical][cds-layout*="align:top"]{justify-content:flex-start}[cds-layout~=vertical][cds-layout*="align:left"]{align-items:flex-start}[cds-layout~=vertical][cds-layout*="align:right"]{align-items:flex-end}[cds-layout~=vertical][cds-layout*="align:vertical-center"]{justify-content:center}[cds-layout~=vertical][cds-layout*="align:horizontal-center"]{align-items:center}[cds-layout~=vertical][cds-layout*="align:center"]{align-items:center;justify-content:center}[cds-layout~=vertical][cds-layout*="order:reverse"]{flex-direction:column-reverse}[cds-layout~=vertical][cds-layout*="align:horizontal-stretch"]{align-items:stretch}[cds-layout~=vertical][cds-layout*="align:stretch"]{align-items:stretch;justify-content:stretch}[cds-layout~=vertical][cds-layout*="align:stretch"]>*{flex-grow:1}[cds-layout~=vertical]>[cds-layout*="align:center"],[cds-layout~=vertical]>[cds-layout*="align:vertical-center"]{margin-top:auto;margin-bottom:auto}[cds-layout~=vertical]>[cds-layout*="align:center"],[cds-layout~=vertical]>[cds-layout*="align:horizontal-center"]{align-self:center}[cds-layout~=vertical]>[cds-layout*="align:top"]{margin-bottom:auto!important}[cds-layout~=vertical]>[cds-layout*="align:right"]{margin-left:auto}[cds-layout~=vertical]>[cds-layout*="align:left"]{margin-right:auto}[cds-layout~=grid]{display:grid;align-items:start;align-content:start;grid-template-columns:repeat(var(--cds-global-layout-grid-cols,12),1fr);width:100%}[cds-layout~=grid][cds-layout*=rows]{grid-template-rows:repeat(12,auto)}[cds-layout~=grid]>[cds-layout*=row]{align-self:stretch}[cds-layout~=grid][cds-layout*="align:top"]{align-content:start}[cds-layout~=grid][cds-layout*="align:right"]{justify-content:end}[cds-layout~=grid][cds-layout*="align:left"]{justify-content:start}[cds-layout~=grid][cds-layout*="align:horizontal-stretch"]{justify-items:stretch;justify-content:stretch}[cds-layout~=grid][cds-layout*="align:stretch"]{align-items:stretch;align-content:stretch;justify-items:stretch;justify-content:stretch}[cds-layout~=grid][cds-layout*="align:vertical-center"]{align-items:center;align-content:center}[cds-layout~=grid][cds-layout*="align:horizontal-center"]{justify-items:center;justify-content:center}[cds-layout~=grid][cds-layout*="align:center"]{align-items:center;align-content:center;justify-items:center;justify-content:center}[cds-layout~="display:screen-reader-only"]{position:absolute!important;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);padding:0;border:0;height:1px;width:1px;overflow:hidden;white-space:nowrap;top:0;left:0;display:block!important}[cds-layout*="gap:none"]{gap:0}[cds-layout*="gap:xs"]{gap:var(--δ2)}[cds-layout*="gap:sm"]{gap:var(--δ3)}[cds-layout*="gap:md"]{gap:var(--δ4)}[cds-layout*="gap:lg"]{gap:var(--δ5)}[cds-layout~="p:none"]{padding:0!important}[cds-layout~="p:xs"]{padding:var(--δ2)!important}[cds-layout~="p:sm"]{padding:var(--δ3)!important}[cds-layout~="p:md"]{padding:var(--δ4)!important}[cds-layout~="m:md"]{margin:var(--δ4)!important}[cds-layout~="p:lg"]{padding:var(--δ5)!important}[cds-layout~="p-y:xs"]{padding-top:var(--δ2)!important;padding-bottom:var(--δ2)!important}[cds-layout~="p-x:sm"]{padding-left:var(--δ3)!important;padding-right:var(--δ3)!important}[cds-layout~="p-y:sm"]{padding-top:var(--δ3)!important;padding-bottom:var(--δ3)!important}[cds-layout~="p-x:md"]{padding-left:var(--δ4)!important;padding-right:var(--δ4)!important}[cds-layout~="p-y:md"]{padding-top:var(--δ4)!important;padding-bottom:var(--δ4)!important}[cds-layout~="p-x:lg"]{padding-left:var(--δ5)!important;padding-right:var(--δ5)!important}[cds-layout~="p-l:md"]{padding-left:var(--δ4)!important}[cds-layout~="p-t:lg"]{padding-top:var(--δ5)!important}[cds-layout~="p-b:lg"]{padding-bottom:var(--δ5)!important}@media (min-width:992px){[cds-layout*="gap@md:lg"]{gap:var(--δ5)}[cds-layout~="p@md:lg"]{padding:var(--δ5)!important}[cds-layout~="m@md:xl"]{margin:var(--δ6)!important}}[cds-layout~=fill]{width:100%!important}*,:after,:before{box-sizing:border-box}[cds-layout~=horizontal][cds-layout*="align:horizontal-stretch"]>::slotted(*),[cds-layout~=horizontal][cds-layout*="align:stretch"]>::slotted(*),[cds-layout~=vertical][cds-layout*="align:stretch"]>::slotted(*){flex-grow:1}[cds-layout~=vertical] ::slotted([cds-layout*="align:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align:vertical-center"]){margin-top:auto;margin-bottom:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align:horizontal-center"]){align-self:center}[cds-layout~=vertical] ::slotted([cds-layout*="align:top"]){margin-bottom:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align:bottom"]){margin-top:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align:right"]){margin-left:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align:left"]),[cds-layout~=vertical]>[cds-layout*="align:left"]{margin-right:auto}@media (min-width:576px){[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:vertical-center"]){margin-top:auto;margin-bottom:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:horizontal-center"]){align-self:center}[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:top"]){margin-bottom:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:bottom"]){margin-top:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:right"]){margin-left:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@xs:left"]){margin-right:auto}}@media (min-width:768px){[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:vertical-center"]){margin-top:auto;margin-bottom:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:horizontal-center"]){align-self:center}[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:top"]){margin-bottom:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:bottom"]){margin-top:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:right"]){margin-left:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@sm:left"]){margin-right:auto}}@media (min-width:992px){[cds-layout~=vertical] ::slotted([cds-layout*="align@md:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@md:vertical-center"]){margin-top:auto;margin-bottom:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@md:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@md:horizontal-center"]){align-self:center}[cds-layout~=vertical] ::slotted([cds-layout*="align@md:top"]){margin-bottom:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@md:bottom"]){margin-top:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@md:right"]){margin-left:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@md:left"]){margin-right:auto}}@media (min-width:1200px){[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:vertical-center"]){margin-top:auto;margin-bottom:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:horizontal-center"]){align-self:center}[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:top"]){margin-bottom:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:bottom"]){margin-top:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:right"]){margin-left:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@lg:left"]){margin-right:auto}}@media (min-width:1440px){[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:vertical-center"]){margin-top:auto;margin-bottom:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:center"]),[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:horizontal-center"]){align-self:center}[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:top"]){margin-bottom:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:bottom"]){margin-top:auto!important}[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:right"]){margin-left:auto}[cds-layout~=vertical] ::slotted([cds-layout*="align@xl:left"]){margin-right:auto}}[cds-layout~=horizontal] ::slotted([cds-layout*="align:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align:vertical-center"]){align-self:center}[cds-layout~=horizontal] ::slotted([cds-layout*="align:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align:horizontal-center"]){margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align:top"]){align-self:flex-start}[cds-layout~=horizontal] ::slotted([cds-layout*="align:bottom"]){align-self:flex-end}[cds-layout~=horizontal] ::slotted([cds-layout*="align:right"]){margin-left:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align:left"]){margin-right:auto!important}@media (min-width:576px){[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:vertical-center"]){align-self:center}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:horizontal-center"]){margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:top"]){align-self:flex-start}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:bottom"]){align-self:flex-end}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:right"]){margin-left:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xs:left"]){margin-right:auto!important}}@media (min-width:768px){[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:vertical-center"]){align-self:center}[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:horizontal-center"]){margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:top"]){align-self:flex-start}[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:bottom"]){align-self:flex-end}[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:right"]){margin-left:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@sm:left"]){margin-right:auto!important}}@media (min-width:992px){[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:vertical-center"]){align-self:center}[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:horizontal-center"]){margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:top"]){align-self:flex-start}[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:bottom"]){align-self:flex-end}[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:right"]){margin-left:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@md:left"]){margin-right:auto!important}}@media (min-width:1200px){[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:vertical-center"]){align-self:center}[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:horizontal-center"]){margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:top"]){align-self:flex-start}[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:bottom"]){align-self:flex-end}[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:right"]){margin-left:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@lg:left"]){margin-right:auto!important}}@media (min-width:1440px){[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:vertical-center"]){align-self:center}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:center"]),[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:horizontal-center"]){margin-left:auto!important;margin-right:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:top"]){align-self:flex-start}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:bottom"]){align-self:flex-end}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:right"]){margin-left:auto!important}[cds-layout~=horizontal] ::slotted([cds-layout*="align@xl:left"]){margin-right:auto!important}}[cds-text]{font-family:var(--cds-global-typography-font-family, "Clarity City", "Avenir Next", sans-serif);margin-top:0;margin-bottom:0}[cds-text][cds-layout~=grid]::after,[cds-text][cds-layout~=grid]::before,[cds-text][cds-layout~=horizontal]::after,[cds-text][cds-layout~=horizontal]::before,[cds-text][cds-layout~=vertical]::after,[cds-text][cds-layout~=vertical]::before{display:none}[cds-text*=display],[cds-text*=section],[cds-text*=title]{font-family:var(--cds-global-typography-header-font-family, "Clarity City", "Avenir Next", sans-serif);color:var(--cds-global-typography-color-400,var(--cds-global-color-construction-900,#21333b))}[cds-text*=body],[cds-text*=message],[cds-text*=secondary]{color:var(--cds-global-typography-color-500,var(--cds-global-color-black,#000))}[cds-text*=inline]{width:auto!important;display:inline-block!important}[cds-text*=display]{font-size:var(--cds-global-typography-display-font-size,calc(40 / var(--cds-global-base,20) * 1rem));font-weight:var(--cds-global-typography-display-font-weight,400);line-height:var(--cds-global-typography-display-line-height,1.1em);letter-spacing:var(--cds-global-typography-display-letter-spacing,-.0125em)}[cds-text*=display]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-display-line-height,1.1em) - 1em)/ 2))*-1) + .037em)}[cds-text*=display]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-display-line-height,1.1em) - 1em)/ 2))*-1) - .044em)}[cds-text*=title]{font-size:var(--cds-global-typography-title-font-size,calc(24 / var(--cds-global-base,20) * 1rem));font-weight:var(--cds-global-typography-title-font-weight,400);line-height:var(--cds-global-typography-title-line-height,1.16667em);letter-spacing:var(--cds-global-typography-title-letter-spacing,-.008333em)}[cds-text*=title]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-title-line-height,1.16667em) - 1em)/ 2))*-1) + .037em)}[cds-text*=title]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-title-line-height,1.16667em) - 1em)/ 2))*-1) - .044em)}[cds-text*=section]{font-size:var(--cds-global-typography-section-font-size,calc(20 / var(--cds-global-base,20) * 1rem));font-weight:var(--cds-global-typography-section-font-weight,400);line-height:var(--cds-global-typography-section-line-height,1.2em);letter-spacing:var(--cds-global-typography-section-letter-spacing,-.01em)}[cds-text*=section]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-section-line-height,1.2em) - 1em)/ 2))*-1) + .037em)}[cds-text*=section]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-section-line-height,1.2em) - 1em)/ 2))*-1) - .044em)}[cds-text*=body]{font-weight:var(--cds-global-typography-body-font-weight,400);font-size:var(--cds-global-typography-body-font-size,calc(14 / var(--cds-global-base,20) * 1rem));letter-spacing:var(--cds-global-typography-body-letter-spacing,-.014286em);line-height:var(--cds-global-typography-body-line-height,1.42857em)}[cds-text*=body]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-body-line-height,1.42857em) - 1em)/ 2))*-1) + .1em)}[cds-text*=body]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-body-line-height,1.42857em) - 1em)/ 2))*-1) - .044em)}[cds-text*=message]{font-size:var(--cds-global-typography-message-font-size,calc(16 / var(--cds-global-base,20) * 1rem));font-weight:var(--cds-global-typography-message-font-weight,calc(400 / var(--cds-global-base,20) * 1rem));line-height:var(--cds-global-typography-message-line-height,1.25em);letter-spacing:var(--cds-global-typography-message-letter-spacing,-.0125em)}[cds-text*=message]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-message-line-height,1.25em) - 1em)/ 2))*-1) + .037em)}[cds-text*=message]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-message-line-height,1.25em) - 1em)/ 2))*-1) - .044em)}[cds-text*=secondary]{font-size:var(--cds-global-typography-secondary-font-size,calc(13 / var(--cds-global-base,20) * 1rem));font-weight:var(--cds-global-typography-secondary-font-weight,400);line-height:var(--cds-global-typography-secondary-line-height,1.23077em);letter-spacing:var(--cds-global-typography-secondary-letter-spacing,-.007692em)}[cds-text*=secondary]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((var(--cds-global-typography-secondary-line-height,1.23077em) - 1em)/ 2))*-1) + .037em)}[cds-text*=secondary]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((var(--cds-global-typography-secondary-line-height,1.23077em) - 1em)/ 2))*-1) - .044em)}[cds-text~=link]{color:var(--cds-global-typography-link-color,var(--cds-global-color-blue-800,#00608a))!important;text-decoration:underline!important;line-height:inherit!important;font-size:inherit!important}[cds-text~=link]:hover{color:var(--cds-global-typography-link-color-hover,var(--cds-global-color-blue-900,#004b6b))!important}[cds-text~=link]:visited:not([cds-text~=static]){color:var(--cds-global-typography-link-color-visited,var(--cds-global-color-lavender-600,#3b40ce))!important}[cds-text~=link]:visited:not([cds-text~=static]):hover{color:var(--cds-global-typography-link-color-visited-hover,var(--cds-global-color-lavender-700,#2429c2))!important}[cds-divider]{display:block;height:var(--cds-alias-object-border-width-100,calc(1 / var(--cds-global-base,20) * 1rem));overflow:hidden;box-shadow:var(--cds-alias-object-border-color,var(--cds-global-color-construction-200,#cbd4d8)) 0 0 0 var(--cds-alias-object-border-width-100,calc(1 / var(--cds-global-base,20) * 1rem)) inset}[cds-text~=light]{font-weight:var(--cds-global-typography-font-weight-light,300)!important}[cds-text~=left]{text-align:left!important}[cds-text~=right]{text-align:right!important}[cds-text~=center]{text-align:center!important}[cds-text~=lhe]{padding:.05px 0}[cds-text~=lhe]::before{content:"";margin-top:-.124em;display:block;height:0}[cds-text~=lhe]::after{content:"";margin-bottom:-.221em;display:block;height:0}[cds-text*=h2],[cds-text*=h3]{font-family:var(--cds-global-typography-header-font-family, "Clarity City", "Avenir Next", sans-serif);font-size:1.4rem;font-weight:200;color:#333;line-height:1.7143em;letter-spacing:-.017857em}[cds-text*=h2]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((1.7143em - 1em)/ 2))*-1) + .037em)}[cds-text*=h2]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((1.7143em - 1em)/ 2))*-1) - .044em)}[cds-text*=h3]{font-size:1.1rem;line-height:1.0909em;letter-spacing:-.013636em}[cds-text*=h3]::before{content:"";display:block;height:0;width:0;margin-bottom:calc(((var(--cds-global-typography-top-gap-height,.1475em) + calc((1.0909em - 1em)/ 2))*-1) + .037em)}[cds-text*=h3]::after{content:"";display:block;height:0;width:0;margin-top:calc((((1em - var(--cds-global-typography-top-gap-height,.1475em) - var(--cds-global-typography-ascender-height,.1703em) - var(--cds-global-typography-x-height,.517em)) + calc((1.0909em - 1em)/ 2))*-1) - .044em)}:host{all:initial;display:block;visibility:inherit;font-family:var(--cds-global-typography-font-family, "Clarity City", "Avenir Next", sans-serif);contain:layout;box-sizing:border-box!important;-webkit-appearance:none!important}*,:after,:before{box-sizing:inherit!important}slot{font-family:var(--cds-global-typography-font-family, "Clarity City", "Avenir Next", sans-serif);display:contents!important}::slotted(*){font-family:inherit;box-sizing:inherit}::slotted(*)::placeholder{color:var(--cds-global-typography-color-200,var(--cds-global-color-construction-600,#4f6169))}:host([_is-anchor]),:host([role=button]){cursor:pointer!important}:host([_is-anchor]) ::slotted(*),:host([role=button]) ::slotted(*){cursor:pointer!important}:host([role=button][disabled]){cursor:not-allowed!important}:host([role=button][disabled]) ::slotted(*){cursor:not-allowed!important;pointer-events:none}:host([hidden]),[hidden]{display:none!important}:host([hidden*=false]){display:block!important}:host([_focused]) .input,:host([_focused]) [focusable],:host([tabindex="0"]:focus),:host([tabindex="0"]:focus) [focusable],[tabindex="0"][focusable]:focus{outline:var(--cds-alias-object-interaction-outline,Highlight solid 2px);outline-offset:var(--cds-alias-object-interaction-outline-offset,1px)}@media (-webkit-min-device-pixel-ratio:0){:host([_focused]) .input,:host([_focused]) [focusable],:host([tabindex="0"]:focus),:host([tabindex="0"]:focus) [focusable],[tabindex="0"][focusable]:focus{outline:var(--cds-alias-object-interaction-outline-webkit,5px auto -webkit-focus-ring-color)}}`;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$2(e,n)}

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/**
 * See if an object (i.e. `val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If `val` was created using `Object.create`, `R.is(Object, val) === true`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */

var is =
/*#__PURE__*/
_curry2(function is(Ctor, val) {
  return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === 'Object' && typeof val === 'object');
});

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/**
 * Tests whether or not an object is a typed array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is a typed array, `false` otherwise.
 * @example
 *
 *      _isTypedArray(new Uint8Array([])); //=> true
 *      _isTypedArray(new Float32Array([])); //=> true
 *      _isTypedArray([]); //=> false
 *      _isTypedArray(null); //=> false
 *      _isTypedArray({}); //=> false
 */
function _isTypedArray(val) {
  var type = Object.prototype.toString.call(val);
  return type === '[object Uint8ClampedArray]' || type === '[object Int8Array]' || type === '[object Uint8Array]' || type === '[object Int16Array]' || type === '[object Uint16Array]' || type === '[object Int32Array]' || type === '[object Uint32Array]' || type === '[object Float32Array]' || type === '[object Float64Array]' || type === '[object BigInt64Array]' || type === '[object BigUint64Array]';
}

/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`),
 * TypedArray (`Uint8Array []`, `Float32Array []`, etc), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));               //=> Nothing()
 *      R.empty([1, 2, 3]);              //=> []
 *      R.empty('unicorns');             //=> ''
 *      R.empty({x: 1, y: 2});           //=> {}
 *      R.empty(Uint8Array.from('123')); //=> Uint8Array []
 */

var empty =
/*#__PURE__*/
_curry1(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
    return arguments;
  }() : _isTypedArray(x) ? x.constructor.from('') : void 0 // else
  ;
});

function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparison of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);

  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs$1(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!_objectIs$1(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);

  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals =
/*#__PURE__*/
_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);           //=> false
 *      R.isEmpty([]);                  //=> true
 *      R.isEmpty('');                  //=> true
 *      R.isEmpty(null);                //=> false
 *      R.isEmpty({});                  //=> true
 *      R.isEmpty({length: 0});         //=> false
 *      R.isEmpty(Uint8Array.from('')); //=> true
 */

var isEmpty =
/*#__PURE__*/
_curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */

var isNil =
/*#__PURE__*/
_curry1(function isNil(x) {
  return x == null;
});

function u$1(n){return isNil(n)||isEmpty(n)}function e$5(t){return is(String,t)}function i$3(n){return e$5(n)&&!isEmpty(n.trim())&&+n==+n}function o$5(t){return is(String,t)||isNil(t)}function f$1(n){return e$5(n)&&!isNil(n)&&!isEmpty(n)}function s$4(t){return is(Map,t)}function l$3(n,t){return n!==t}function m$1(n,t){return o$5(n)&&l$3(n,t)}function p$1(n,t){return !u$1(n)&&l$3(n,t)}function d$2(n="_"){return `${n}${Math.random().toString(36).substr(2,9)}`}function h$2(n){const t=new Map;for(const[r,u]of n)s$4(u)?t.set(r,h$2(u)):t.set(r,u);return t}function j$1(n){return s$4(n)?h$2(n):JSON.parse(JSON.stringify(n))}

function i$4(t){return t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()))}function f$2(t){return t.split("-").map(((t,r)=>r?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t)).join("")}function o$6(t){return a$3(f$2(t))}function a$3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function $$1(t,r,n=""){const e=t.split(" "),u=""===n?e.filter((t=>t!==r)):e.map((t=>t===r?n:t));return u.length>0?u.join(" "):""}

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
var _isInteger = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */

var nth =
/*#__PURE__*/
_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int | Symbol]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */

var paths =
/*#__PURE__*/
_curry2(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;

    while (idx < paths.length) {
      if (val == null) {
        return;
      }

      p = paths[idx];
      val = _isInteger(p) ? nth(p, val) : val[p];
      idx += 1;
    }

    return val;
  });
});

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 */

var path =
/*#__PURE__*/
_curry2(function path(pathAr, obj) {
  return paths([pathAr], obj)[0];
});

var a$4={"@@functional/placeholder":!0};

const m$2=curryN(2,((o,t)=>void 0!==path(o,t)));function n$4(o,r){return r||(r=window&&window.customElements),!r||!!r.get(o)}const s$5=m$2(a$4,window);

class n$5{static log(...o){t$3()&&r$3()&&console.log(...o);}static warn(...o){t$3()&&r$3()&&console.warn(...o);}static error(...o){t$3()&&r$3()&&console.error(...o);}}function r$3(){return !s$5(["jasmine"])}function t$3(){return !window.CDS.environment.production}

let o$7,n$6,i$5,e$6;function r$4(n=!0){if(!n||!o$7){const n=document&&document.querySelector("[ng-version]");o$7=n?""+n.getAttribute("ng-version"):void 0;}return o$7}function t$4(i=!0){var e,r,t;return i&&o$7||(n$6=null===(t=null===(r=null===(e=window)||void 0===e?void 0:e.angular)||void 0===r?void 0:r.version)||void 0===t?void 0:t.full),n$6}function d$3(o=!0){var n,e,r;return o&&i$5||(i$5=(null===(r=null===(e=null===(n=window)||void 0===n?void 0:n.CDS)||void 0===e?void 0:e._react)||void 0===r?void 0:r.version)?window.CDS._react.version:document.querySelector("[data-reactroot], [data-reactid]")?"unknown version":void 0),i$5}function l$4(o=!0){if(!o||!e$6){const o=document.querySelectorAll("*");let n;for(let i=0;i<o.length;i++)if(o[i].__vue__){n=o[i];break}e$6=n?"unknown version":void 0;}return e$6}function u$2(){var o,n;return null===(n=null===(o=null===window||void 0===window?void 0:window.location)||void 0===o?void 0:o.href)||void 0===n?void 0:n.includes("localhost:6006")}

function i$6(t,e="px"){return t&&t.getBoundingClientRect?t.getBoundingClientRect().width+e:""}function c$2(t,e){return !!t&&t.hasAttribute(e)&&f$1(t.getAttribute(e))}function a$5(t,e,n){const[r,i]=e;n()?s$6(t,[r,i]):f$3(t,r);}function s$6(t,...e){t&&e.forEach((([e,n])=>{!1===n||null===n?t.removeAttribute(e):t.setAttribute(e,n+"");}));}function f$3(t,...e){t&&e.forEach((e=>{t.removeAttribute(e);}));}function b$1(...t){t.forEach((t=>{const[e,n]=t;e&&s$6(e,["slot",n]);}));}function m$3(t,e,n){const r=new MutationObserver((r=>{r.find((t=>t.attributeName===e))&&n(t.getAttribute(e));}));return r.observe(t,{attributes:!0}),r}function v$1(t){return null!=t&&""+t!="false"}

function f$4(t,e){switch(e?e.type:e){case Array:case Object:return {reflect:!1,...e};case String:return {reflect:!0,attribute:i$4(t),converter:{toAttribute:t=>t||null},...e};case Number:return {reflect:!0,attribute:i$4(t),...e};case Boolean:return {reflect:!0,attribute:i$4(t),converter:{toAttribute:t=>t?"":null,fromAttribute:t=>v$1(t)},...e};case Date:return {reflect:!1,converter:{fromAttribute:t=>new Date(t)},...e};default:return {...e}}}function l$5(t,a,f){const l=t.firstUpdated;t.firstUpdated=function(t){if(f&&f.required&&u$1(this[a])){const t=f.requiredMessage||function(t="warning",i,s){const a=s.toLocaleLowerCase();return `${a$3(t)}: ${i} is required to use ${a} component. Set the JS Property or HTML Attribute.\n\n`+(r$4()?`Angular: <${a} [${i}]="..."></${a}>\n`:"")+(l$4()?`Vue: <${a} :${i}="..."></${a}>\n`:"")+(d$3()?`React: <${o$6(a)} ${function(t){return t.startsWith("aria")?i$4(t):t}(i)}={...} />\n`:"")+`HTML: <${a} ${i$4(i)}="..."></${a}>\n`+`JavaScript: document.querySelector('${a}').${i} = '...';\n\n`}(f.required,a,this.tagName);if("error"===f.required)throw Error(t);n$5.warn(t,this);}l&&l.call(this,t);};}function m$4(r){return (e,n)=>(l$5(e,n,r),e$4(f$4(n,r))(e,n))}function p$2(e){return (n,i)=>{const o=f$4(i,e);return o&&(o.reflect=!!(null==e?void 0:e.reflect)&&e.reflect,o.reflect&&!(null==e?void 0:e.attribute)&&(o.attribute="_"+i$4(i))),e$4(o)(n,i)}}

function i$7(i=window){return !isNil(i)}function n$7(){var o,i,n;return void 0!==(null===(n=null===(i=null===(o=globalThis)||void 0===o?void 0:o.process)||void 0===i?void 0:i.env)||void 0===n?void 0:n.JEST_WORKER_ID)}

const e$7=new class{constructor(){if(this.supports={js:!0,flexGap:s$7()},!document.body.hasAttribute("cds-supports")||"no-js"===document.body.getAttribute("cds-supports")){const e=i$4(Object.keys(this.supports).reduce(((t,e)=>`${t} ${this.supports[e]?e:"no-"+e}`),"")).trim();document.body.setAttribute("cds-supports",e);}}};function s$7(){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const e=1===t.scrollHeight;return t.parentNode.removeChild(t),e}

function w$1(){i$7()&&(window.CDS=window.CDS||{_version:[],_react:{version:void 0},_supports:e$7.supports,_isStateProxied:!1,_state:{focusTrapItems:[],i18nRegistry:{},elementRegistry:{},iconRegistry:{},motionRegistry:{}},environment:{production:!1},getDetails:a$6,logDetails:d$4},function(){var e;const n="5.8.4";window.CDS._version.indexOf(n)<0&&(window.CDS._version.push(n),null===(e=document.querySelector("body"))||void 0===e||e.setAttribute("cds-version",window.CDS._version.join(" "))),window.CDS._version.length>1&&n$5.warn("Running more than one version of Clarity can cause unexpected issues. Please ensure only one version is loaded.");}(),window.CDS._isStateProxied||(window.CDS._isStateProxied=!0,window.CDS._state=new Proxy(window.CDS._state,{set:(e,n,o)=>{const t={key:n,prev:window.CDS._state[n],current:o};return e[n]=o,document.dispatchEvent(new CustomEvent("CDS_STATE_UPDATE",{detail:t})),!0}})));}function a$6(){return {versions:window.CDS._version,environment:window.CDS.environment,userAgent:navigator.userAgent,supports:window.CDS._supports,angularVersion:r$4(!1),angularJSVersion:t$4(!1),reactVersion:d$3(!1),vueVersion:l$4(!1),state:{...window.CDS._state,iconRegistry:Object.keys(window.CDS._state.iconRegistry),motionRegistry:Object.keys(window.CDS._state.motionRegistry),focusTrapRegistry:Object.keys(window.CDS._state.focusTrapItems.map((e=>e.focusTrapId)))}}}function d$4(){n$5.log(JSON.stringify(a$6(),null,2));}

function e$8(e){return e$7.supports.flexGap?e:class extends e{connectedCallback(){super.connectedCallback(),this.setAttribute("_nfg","");}}}

const a$7=curryN(3,((e,s,t)=>{n$4(e)&&!u$2()?n$5.warn(e+" has already been registered"):(t.define(e,e$8(s)),w$1(),window&&!Object.keys(window.CDS._state.elementRegistry).some((s=>s===e))&&(window.CDS._state.elementRegistry={...window.CDS._state.elementRegistry,[e]:{}}));}));function w$2(e,r){i$7()&&s$5(["customElements"])&&a$7(e,r,window.customElements);}

const t$5=a$2;

export { $$1 as $, A, B, a$5 as C, __decorate as _, s$6 as a, b$1 as b, isNil as c, m$1 as d, e$4 as e, m$3 as f, i$6 as g, e$5 as h, i, i$3 as j, p$1 as k, b as l, m$4 as m, n$5 as n, w$1 as o, p$2 as p, t$3 as q, j$1 as r, s$3 as s, t$5 as t, u$1 as u, n$7 as v, w$2 as w, x, d$2 as y, c$2 as z };
