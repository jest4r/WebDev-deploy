(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{40257:function(t,e,i){"use strict";var n,r;t.exports=(null==(n=i.g.process)?void 0:n.env)&&"object"==typeof(null==(r=i.g.process)?void 0:r.env)?i.g.process:i(44227)},44227:function(t){!function(){var e={229:function(t){var e,i,n,r=t.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(t){if(e===setTimeout)return setTimeout(t,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:a}catch(t){e=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var u=[],s=!1,d=-1;function c(){s&&n&&(s=!1,n.length?u=n.concat(u):d=-1,u.length&&v())}function v(){if(!s){var t=l(c);s=!0;for(var e=u.length;e;){for(n=u,u=[];++d<e;)n&&n[d].run();d=-1,e=u.length}n=null,s=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new f(t,e)),1!==u.length||s||l(v)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},i={};function n(t){var r=i[t];if(void 0!==r)return r.exports;var a=i[t]={exports:{}},o=!0;try{e[t](a,a.exports,n),o=!1}finally{o&&delete i[t]}return a.exports}n.ab="//";var r=n(229);t.exports=r}()},93253:function(t,e,i){"use strict";i.d(e,{f:function(){return r}});var n=i(57437),r=t=>(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...t,children:(0,n.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})})},81945:function(t,e,i){"use strict";i.d(e,{e:function(){return n},x:function(){return r}});var n=t=>(null==t?void 0:t.length)<=4?t:null==t?void 0:t.slice(0,3),r=(...t)=>{let e=" ";for(let i of t)if("string"==typeof i&&i.length>0){e=i;break}return e}},20411:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var n=i(40257),r={};function a(t,e,...i){var o;let l=e?` [${e}]`:" ",u=`[Next UI]${l}: ${t}`;if("undefined"!=typeof console&&!r[u]&&(r[u]=!0,(null==(o=null==n?void 0:n.env)?void 0:o.NODE_ENV)!=="production"))return console.warn(u,i)}},91296:function(t,e,i){"use strict";i.d(e,{Q:function(){return l}});var n=i(2265),r=i(45246),a=i(36582),o=i(21809);function l(t,e,i){let{validationBehavior:l,focus:u}=t;(0,a.b)(()=>{if("native"===l&&(null==i?void 0:i.current)){var t;let n,r=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(r),i.current.hasAttribute("title")||(i.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation({isInvalid:!(t=i.current).validity.valid,validationDetails:{badInput:(n=t.validity).badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing,valid:n.valid},validationErrors:t.validationMessage?[t.validationMessage]:[]})}});let s=(0,o.i)(()=>{e.resetValidation()}),d=(0,o.i)(t=>{var n,a;e.displayValidation.isInvalid||e.commitValidation();let o=null==i?void 0:null===(n=i.current)||void 0===n?void 0:n.form;!t.defaultPrevented&&i&&o&&function(t){for(let e=0;e<t.elements.length;e++){let i=t.elements[e];if(!i.validity.valid)return i}return null}(o)===i.current&&(u?u():null===(a=i.current)||void 0===a||a.focus(),(0,r._w)("keyboard")),t.preventDefault()}),c=(0,o.i)(()=>{e.commitValidation()});(0,n.useEffect)(()=>{let t=null==i?void 0:i.current;if(!t)return;let e=t.form;return t.addEventListener("invalid",d),t.addEventListener("change",c),null==e||e.addEventListener("reset",s),()=>{t.removeEventListener("invalid",d),t.removeEventListener("change",c),null==e||e.removeEventListener("reset",s)}},[i,d,c,s,l])}},78383:function(t,e,i){"use strict";i.d(e,{N:function(){return a}});var n=i(40641),r=i(95278);function a(t){let{id:e,label:i,"aria-labelledby":a,"aria-label":o,labelElementType:l="label"}=t;e=(0,n.Me)(e);let u=(0,n.Me)(),s={};return i?(a=a?`${u} ${a}`:u,s={id:u,htmlFor:"label"===l?e:void 0}):a||o||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:s,fieldProps:(0,r.b)({id:e,"aria-label":o,"aria-labelledby":a})}}},95278:function(t,e,i){"use strict";i.d(e,{b:function(){return r}});var n=i(40641);function r(t,e){let{id:i,"aria-label":r,"aria-labelledby":a}=t;return i=(0,n.Me)(i),a&&r?a=[...new Set([i,...a.trim().split(/\s+/)])].join(" "):a&&(a=a.trim().split(/\s+/).join(" ")),r||a||!e||(r=e),{id:i,"aria-label":r,"aria-labelledby":a}}},37932:function(t,e,i){"use strict";i.d(e,{PS:function(){return o},Q3:function(){return s},W0:function(){return f},tL:function(){return u},zl:function(){return r}});var n=i(2265);let r={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},a={...r,customError:!0,valid:!1},o={isInvalid:!1,validationDetails:r,validationErrors:[]},l=(0,n.createContext)({}),u="__formValidationState"+Date.now();function s(t){if(t[u]){let{realtimeValidation:e,displayValidation:i,updateValidation:n,resetValidation:r,commitValidation:a}=t[u];return{realtimeValidation:e,displayValidation:i,updateValidation:n,resetValidation:r,commitValidation:a}}return function(t){let{isInvalid:e,validationState:i,name:r,value:u,builtinValidation:s,validate:f,validationBehavior:m="aria"}=t;i&&(e||(e="invalid"===i));let p=void 0!==e?{isInvalid:e,validationErrors:[],validationDetails:a}:null,h=(0,n.useMemo)(()=>c(function(t,e){if("function"==typeof t){let i=t(e);if(i&&"boolean"!=typeof i)return d(i)}return[]}(f,u)),[f,u]);(null==s?void 0:s.validationDetails.valid)&&(s=null);let y=(0,n.useContext)(l),b=(0,n.useMemo)(()=>r?Array.isArray(r)?r.flatMap(t=>d(y[t])):d(y[r]):[],[y,r]),[g,E]=(0,n.useState)(y),[V,w]=(0,n.useState)(!1);y!==g&&(E(y),w(!1));let M=(0,n.useMemo)(()=>c(V?[]:b),[V,b]),I=(0,n.useRef)(o),[T,x]=(0,n.useState)(o),L=(0,n.useRef)(o),[D,S]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!D)return;S(!1);let t=h||s||I.current;v(t,L.current)||(L.current=t,x(t))}),{realtimeValidation:p||M||h||s||o,displayValidation:"native"===m?p||M||T:p||M||h||s||T,updateValidation(t){"aria"!==m||v(T,t)?I.current=t:x(t)},resetValidation(){v(o,L.current)||(L.current=o,x(o)),"native"===m&&S(!1),w(!0)},commitValidation(){"native"===m&&S(!0),w(!0)}}}(t)}function d(t){return t?Array.isArray(t)?t:[t]:[]}function c(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:a}:null}function v(t,e){return t===e||t&&e&&t.isInvalid===e.isInvalid&&t.validationErrors.length===e.validationErrors.length&&t.validationErrors.every((t,i)=>t===e.validationErrors[i])&&Object.entries(t.validationDetails).every(([t,i])=>e.validationDetails[t]===i)}function f(...t){let e=new Set,i=!1,n={...r};for(let r of t){for(let t of r.validationErrors)e.add(t);for(let t in i||(i=r.isInvalid),n)n[t]||(n[t]=r.validationDetails[t])}return n.valid=!i,{isInvalid:i,validationErrors:[...e],validationDetails:n}}}}]);