(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{fmcd:function(t,e,s){"use strict";var a;s.d(e,"a",function(){return a}),function(t){t[t.Multi=0]="Multi",t[t.Single=1]="Single"}(a||(a={}))},o3so:function(t,e,s){"use strict";s.d(e,"a",function(){return a});class a{static preprocessPath(t){return t.replace(a.REPLACE_REGEX,"$1/$4").replace("//","/")}checkArgument(t,e){if(!t)throw Error("IllegalArgumentException: "+(e||""))}getPathItems(t,e){return e.reduce((e,s)=>{const i=a.preprocessPath(t),n=a.preprocessPath(s.path);if(s.children){const a=this.getPathItems(t,s.children);a.length>0?e.push(s,...a):(s.jsFiles||s.htmlFile)&&i.startsWith(n)&&e.push(s)}else i.startsWith(n)&&e.push(s);return e},[])}getSelectedNavigationItem(t,e){const s=this.getPathItems(t,e);return s.length>0?s[s.length-1]:null}setActiveNavigationByPath(t,e){this.checkArgument(t.startsWith("/"),"Path must start with /"),this.deactivateNavigationItems(e);const s=this.getPathItems(t,e);return s.length>0?(s.forEach((t,e)=>{e===s.length-1?t.active=!0:t.expanded=!0}),s[s.length-1]):null}getTranslatedPath(t,e){return this.getPathItems(t,e).map(t=>t.title)}deactivateNavigationItems(t=[]){t.forEach(t=>{t.active=!1,this.deactivateNavigationItems(t.children||[])})}}a.REPLACE_REGEX=/^(((?!\?).)+)(\?.+)?(#((?!\?).)*)(\?.*)?$/}}]);