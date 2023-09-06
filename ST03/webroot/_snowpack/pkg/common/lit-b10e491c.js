import { y as d } from './index-b0c4d8f8.js';

function t(){return (t,r)=>{const i={get(){const i=void 0!==r?r:t.key;return this["__"+i]||(this["__"+i]=d()),this["__"+i]},enumerable:!0,configurable:!0};return void 0!==r?((e,t,r)=>{Object.defineProperty(t,r,e);})(i,t,r):((e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}))(i,t)}}

function o(o){return Promise.all(Array.from(o).map((o=>o.updateComplete)))}function r(o,r,f){o.forEach(((o,t)=>f.filter((o=>o&&void 0!==o[t])).forEach((o=>o[t]=r[t]))));}function f(o,r,f){Object.keys(f).filter((o=>f[o])).forEach((f=>o[f]=r[f]));}

export { f, o, r, t };
