import { i, s, x, t, _ as __decorate, m, w } from '../../../common/index-b0c4d8f8.js';

var r=i`:host{--color:var(--cds-alias-object-border-color, var(--cds-global-color-construction-200, #cbd4d8));--size:var(--cds-alias-object-border-width-100, calc(1 / var(--cds-global-base, 20) * 1rem));--padding:0;display:block;width:100%;padding:var(--padding)}.private-host{height:var(--size);background:var(--color)}:host([orientation=vertical]){align-self:stretch;height:inherit;width:var(--size)}:host([orientation*=vertical]) .private-host{height:100%;width:var(--size)}`;

class n extends s{constructor(){super(...arguments);this.orientation="horizontal";}render(){return x`<div class="private-host" role="separator" aria-orientation="${this.orientation}"></div>`}static get styles(){return [t,r]}}__decorate([m({type:String})],n.prototype,"orientation",void 0);

w("cds-divider",n);
