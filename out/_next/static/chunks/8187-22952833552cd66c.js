"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8187],{1701:function(e,t,n){n.d(t,{Lj:function(){return r},y7:function(){return o}});var r={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]};r.easeOut,r.easeIn;var o={scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.2}},exit:{transform:"scale(0.85)",opacity:0,transition:{type:"easeOut",duration:.15}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.8)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.96)",transition:{type:"easeOut",bounce:0,duration:.15}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:r.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:r.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:r.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:r.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:r.ease}},exit:{opacity:0,transition:{duration:.3,ease:r.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}}},6396:function(e,t,n){n.d(t,{MT:function(){return u},E7:function(){return R},QL:function(){return y},cW:function(){return h}});var r=n(55691),o=n(18064),a=n(36582),i=n(2265);let c=i.createContext(null),l=null;function u(e){let t,n,{children:r,contain:u,restoreFocus:s,autoFocus:d}=e,f=(0,i.useRef)(null),h=(0,i.useRef)(null),R=(0,i.useRef)([]),{parentNode:T}=(0,i.useContext)(c)||{},x=(0,i.useMemo)(()=>new w({scopeRef:R}),[R]);(0,a.b)(()=>{let e=T||L.root;if(L.getTreeNode(e.scopeRef)&&l&&!g(l,e.scopeRef)){let t=L.getTreeNode(l);t&&(e=t)}e.addChild(x),L.addNode(x)},[x,T]),(0,a.b)(()=>{let e=L.getTreeNode(R);e&&(e.contain=!!u)},[u]),(0,a.b)(()=>{var e;let t=null===(e=f.current)||void 0===e?void 0:e.nextSibling,n=[];for(;t&&t!==h.current;)n.push(t),t=t.nextSibling;R.current=n},[r]),(0,a.b)(()=>{if(s||u)return;let e=R.current,t=(0,o.r)(e?e[0]:void 0),n=e=>{let t=e.target;v(t,R.current)?l=R:m(t)||(l=null)};return t.addEventListener("focusin",n,!1),null==e||e.forEach(e=>e.addEventListener("focusin",n,!1)),()=>{t.removeEventListener("focusin",n,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",n,!1))}},[R,s,u]),t=(0,i.useRef)(),n=(0,i.useRef)(),(0,a.b)(()=>{let e=R.current;if(!u){n.current&&(cancelAnimationFrame(n.current),n.current=void 0);return}let r=(0,o.r)(e?e[0]:void 0),a=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!b(R)||e.isComposing)return;let t=r.activeElement,n=R.current;if(!n||!v(t,n))return;let o=y(p(n),{tabbable:!0},n);if(!t)return;o.currentNode=t;let a=e.shiftKey?o.previousNode():o.nextNode();a||(o.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,a=e.shiftKey?o.previousNode():o.nextNode()),e.preventDefault(),a&&E(a,!0)},i=e=>{(!l||g(l,R))&&v(e.target,R.current)?(l=R,t.current=e.target):b(R)&&!m(e.target,R)?t.current?t.current.focus():l&&l.current&&N(l.current):b(R)&&(t.current=e.target)},c=e=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{if(r.activeElement&&b(R)&&!m(r.activeElement,R)){if(l=R,r.body.contains(e.target)){var n;t.current=e.target,null===(n=t.current)||void 0===n||n.focus()}else l.current&&N(l.current)}})};return r.addEventListener("keydown",a,!1),r.addEventListener("focusin",i,!1),null==e||e.forEach(e=>e.addEventListener("focusin",i,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",c,!1)),()=>{r.removeEventListener("keydown",a,!1),r.removeEventListener("focusin",i,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",i,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",c,!1))}},[R,u]),(0,a.b)(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n]),function(e,t,n){let r=(0,i.useRef)("undefined"!=typeof document?(0,o.r)(e.current?e.current[0]:void 0).activeElement:null);(0,a.b)(()=>{let r=e.current,a=(0,o.r)(r?r[0]:void 0);if(!t||n)return;let i=()=>{(!l||g(l,e))&&v(a.activeElement,e.current)&&(l=e)};return a.addEventListener("focusin",i,!1),null==r||r.forEach(e=>e.addEventListener("focusin",i,!1)),()=>{a.removeEventListener("focusin",i,!1),null==r||r.forEach(e=>e.removeEventListener("focusin",i,!1))}},[e,n]),(0,a.b)(()=>{let r=(0,o.r)(e.current?e.current[0]:void 0);if(!t)return;let a=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!b(e)||t.isComposing)return;let n=r.activeElement;if(!v(n,e.current))return;let o=L.getTreeNode(e);if(!o)return;let a=o.nodeToRestore,i=y(r.body,{tabbable:!0});i.currentNode=n;let c=t.shiftKey?i.previousNode():i.nextNode();if(a&&r.body.contains(a)&&a!==r.body||(a=void 0,o.nodeToRestore=void 0),(!c||!v(c,e.current))&&a){i.currentNode=a;do c=t.shiftKey?i.previousNode():i.nextNode();while(v(c,e.current));(t.preventDefault(),t.stopPropagation(),c)?E(c,!0):m(a)?E(a,!0):n.blur()}};return n||r.addEventListener("keydown",a,!0),()=>{n||r.removeEventListener("keydown",a,!0)}},[e,t,n]),(0,a.b)(()=>{var n;let a=(0,o.r)(e.current?e.current[0]:void 0);if(!t)return;let i=L.getTreeNode(e);if(i)return i.nodeToRestore=null!==(n=r.current)&&void 0!==n?n:void 0,()=>{let n=L.getTreeNode(e);if(!n)return;let r=n.nodeToRestore;if(t&&r&&(v(a.activeElement,e.current)||a.activeElement===a.body&&function(e){let t=L.getTreeNode(l);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=L.clone();requestAnimationFrame(()=>{if(a.activeElement===a.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){E(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&L.getTreeNode(n.scopeRef)){N(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(R,s,u),function(e,t){let n=i.useRef(t);(0,i.useEffect)(()=>{n.current&&(l=e,!v((0,o.r)(e.current?e.current[0]:void 0).activeElement,l.current)&&e.current&&N(e.current)),n.current=!1},[e])}(R,d),(0,i.useEffect)(()=>{let e=(0,o.r)(R.current?R.current[0]:void 0).activeElement,t=null;if(v(e,R.current)){for(let n of L.traverse())n.scopeRef&&v(e,n.scopeRef.current)&&(t=n);t===L.getTreeNode(R)&&(l=t.scopeRef)}},[R]),(0,a.b)(()=>()=>{var e,t,n;let r=null!==(n=null===(t=L.getTreeNode(R))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(R===l||g(R,l))&&(!r||L.getTreeNode(r))&&(l=r),L.removeTreeNode(R)},[R]);let S=(0,i.useMemo)(()=>({focusNext(e={}){let t=R.current,{from:n,tabbable:r,wrap:a,accept:i}=e,c=n||(0,o.r)(t[0]).activeElement,l=t[0].previousElementSibling,u=y(p(t),{tabbable:r,accept:i},t);u.currentNode=v(c,t)?c:l;let s=u.nextNode();return!s&&a&&(u.currentNode=l,s=u.nextNode()),s&&E(s,!0),s},focusPrevious(e={}){let t=R.current,{from:n,tabbable:r,wrap:a,accept:i}=e,c=n||(0,o.r)(t[0]).activeElement,l=t[t.length-1].nextElementSibling,u=y(p(t),{tabbable:r,accept:i},t);u.currentNode=v(c,t)?c:l;let s=u.previousNode();return!s&&a&&(u.currentNode=l,s=u.previousNode()),s&&E(s,!0),s},focusFirst(e={}){let t=R.current,{tabbable:n,accept:r}=e,o=y(p(t),{tabbable:n,accept:r},t);o.currentNode=t[0].previousElementSibling;let a=o.nextNode();return a&&E(a,!0),a},focusLast(e={}){let t=R.current,{tabbable:n,accept:r}=e,o=y(p(t),{tabbable:n,accept:r},t);o.currentNode=t[t.length-1].nextElementSibling;let a=o.previousNode();return a&&E(a,!0),a}}),[]),C=(0,i.useMemo)(()=>({focusManager:S,parentNode:x}),[x,S]);return i.createElement(c.Provider,{value:C},i.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:f}),r,i.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:h}))}let s=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],d=s.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let f=s.join(':not([hidden]):not([tabindex="-1"]),');function p(e){return e[0].parentElement}function b(e){let t=L.getTreeNode(l);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function v(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function m(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of L.traverse(L.getTreeNode(t)))if(n&&v(e,n.current))return!0;return!1}function h(e){return m(e,l)}function g(e,t){var n;let r=null===(n=L.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function E(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{(0,r.e)(e)}catch(e){}}function N(e,t=!0){let n=e[0].previousElementSibling,r=p(e),o=y(r,{tabbable:t},e);o.currentNode=n;let a=o.nextNode();t&&!a&&((o=y(r=p(e),{tabbable:!1},e)).currentNode=n,a=o.nextNode()),E(a)}function y(e,t,n){let r=(null==t?void 0:t.tabbable)?f:d,a=(0,o.r)(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var a;return(null==t?void 0:null===(a=t.from)||void 0===a?void 0:a.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=(0,o.k)(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:r}=e.style,a="none"!==n&&"hidden"!==r&&"collapse"!==r;if(a){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:r}=t(e);a="none"!==n&&"hidden"!==r&&"collapse"!==r}return a}(t)&&!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||v(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(a.currentNode=t.from),a}function R(e,t={}){return{focusNext(n={}){let r=e.current;if(!r)return null;let{from:a,tabbable:i=t.tabbable,wrap:c=t.wrap,accept:l=t.accept}=n,u=a||(0,o.r)(r).activeElement,s=y(r,{tabbable:i,accept:l});r.contains(u)&&(s.currentNode=u);let d=s.nextNode();return!d&&c&&(s.currentNode=r,d=s.nextNode()),d&&E(d,!0),d},focusPrevious(n=t){let r=e.current;if(!r)return null;let{from:a,tabbable:i=t.tabbable,wrap:c=t.wrap,accept:l=t.accept}=n,u=a||(0,o.r)(r).activeElement,s=y(r,{tabbable:i,accept:l});if(r.contains(u))s.currentNode=u;else{let e=T(s);return e&&E(e,!0),null!=e?e:null}let d=s.previousNode();if(!d&&c){s.currentNode=r;let e=T(s);if(!e)return null;d=e}return d&&E(d,!0),null!=d?d:null},focusFirst(n=t){let r=e.current;if(!r)return null;let{tabbable:o=t.tabbable,accept:a=t.accept}=n,i=y(r,{tabbable:o,accept:a}).nextNode();return i&&E(i,!0),i},focusLast(n=t){let r=e.current;if(!r)return null;let{tabbable:o=t.tabbable,accept:a=t.accept}=n,i=T(y(r,{tabbable:o,accept:a}));return i&&E(i,!0),null!=i?i:null}}}function T(e){let t,n;do(t=e.lastChild())&&(n=t);while(t);return n}class x{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new w({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&v(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new x;for(let r of this.traverse())n.addTreeNode(r.scopeRef,null!==(t=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new w({scopeRef:null}),this.fastMap.set(null,this.root)}}class w{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let L=new x},25311:function(e,t,n){n.d(t,{j:function(){return p}});let r=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),o=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);var a=n(2265),i=n(87365);let c=Symbol.for("react-aria.i18n.locale");function l(){let e="undefined"!=typeof window&&window[c]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:!function(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return r.has(t.script)}let t=e.split("-")[0];return o.has(t)}(e)?"ltr":"rtl"}}let u=l(),s=new Set;function d(){for(let e of(u=l(),s))e(u)}let f=a.createContext(null);function p(){let e=function(){let e=(0,i.Av)(),[t,n]=(0,a.useState)(u);return((0,a.useEffect)(()=>(0===s.size&&window.addEventListener("languagechange",d),s.add(n),()=>{s.delete(n),0===s.size&&window.removeEventListener("languagechange",d)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}();return(0,a.useContext)(f)||e}},45614:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(2265);function o(e,t,n){let[o,a]=(0,r.useState)(e||t),i=(0,r.useRef)(void 0!==e),c=void 0!==e;(0,r.useEffect)(()=>{let e=i.current;e!==c&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}.`),i.current=c},[c]);let l=c?e:o,u=(0,r.useCallback)((e,...t)=>{let r=(e,...t)=>{n&&!Object.is(l,e)&&n(e,...t),c||(l=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),a((n,...o)=>{let a=e(c?l:n,...o);return(r(a,...t),c)?n:a})):(c||a(e),r(e,...t))},[c,l,n]);return[l,u]}}}]);