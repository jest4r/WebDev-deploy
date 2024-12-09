"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6690],{81050:function(e,t,n){let o;n.d(t,{J:function(){return l}});let r=Symbol.for("react-aria.i18n.locale"),i=Symbol.for("react-aria.i18n.strings");class l{getStringForLocale(e,t){let n=this.getStringsForLocale(t)[e];if(!n)throw Error(`Could not find intl message ${e} in ${t} locale`);return n}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,n="en-US"){if(t[e])return t[e];let o=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[o])return t[o];for(let e in t)if(e.startsWith(o+"-"))return t[e];return t[n]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[r];if(void 0===o){let e=window[i];if(!e)return null;for(let n in o={},e)o[n]=new l({[t]:e[n]},t)}let n=null==o?void 0:o[e];if(!n)throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return n}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,e])=>e)),this.defaultLocale=t}}},90695:function(e,t,n){n.d(t,{E:function(){return i}});let o=new Map,r=new Map;class i{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let r=t["="+e];if(r)return"function"==typeof r?r():r;let i=this.locale+":"+n,l=o.get(i);return l||(l=new Intl.PluralRules(this.locale,{type:n}),o.set(i,l)),"function"==typeof(r=t[l.select(e)]||t.other)?r():r}number(e){let t=r.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),r.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}},455:function(e,t,n){n.d(t,{VS:function(){return o},Yv:function(){return i},Yx:function(){return r},sK:function(){return l}});var o=e=>{let t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},r=e=>({top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"})[e],i=(e,t)=>{if(t.includes("-")){let[n]=t.split("-");if(n.includes(e))return!1}return!0},l=(e,t)=>{if(t.includes("-")){let[,n]=t.split("-");return"".concat(e,"-").concat(n)}return e}},99008:function(e,t,n){n.d(t,{G:function(){return d}});var o=n(53921),r=n(72243),i=n(88160),l=n(46763),a=n(57437),s=(0,r.Gp)((e,t)=>{var n;let{as:r,className:s,children:d,...u}=e,c=(0,i.gy)(t),{slots:f,classNames:p}=(0,o.R)(),m=(0,l.W)(null==p?void 0:p.body,s);return(0,a.jsx)(r||"div",{ref:c,className:null==(n=f.body)?void 0:n.call(f,{class:m}),...u,children:d})});s.displayName="NextUI.CardBody";var d=s},4922:function(e,t,n){n.d(t,{w:function(){return L}});var o=n(53921),r=n(12813),i=n(18373),l=(0,r.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...i.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}}),a=n(2265),s=n(62319),d=n(82457),u=n(73709),c=n(11323),f=n(6422),p=n(2646),m=n(72243),b=n(46763),g=n(68658),h=n(97765),v=n(27246),w=n(88160),y=n(62577),x=n(78974),E=n(57437),k=(0,m.Gp)((e,t)=>{let{children:n,context:r,Component:i,isPressable:k,disableAnimation:L,disableRipple:P,getCardProps:C,getRippleProps:O}=function(e){var t,n,o,r;let i=(0,p.w)(),[x,E]=(0,m.oe)(e,l.variantKeys),{ref:k,as:L,children:P,onClick:C,onPress:O,autoFocus:D,className:S,classNames:z,allowTextSelectionOnPress:T=!0,..._}=x,H=(0,w.gy)(k),M=L||(e.isPressable?"button":"div"),B="string"==typeof M,I=null!=(n=null!=(t=e.disableAnimation)?t:null==i?void 0:i.disableAnimation)&&n,F=null!=(r=null!=(o=e.disableRipple)?o:null==i?void 0:i.disableRipple)&&r,N=(0,b.W)(null==z?void 0:z.base,S),{onClick:W,onClear:R,ripples:Y}=(0,y.i)(),j=e=>{I||F||!H.current||W(e)},{buttonProps:X,isPressed:J}=(0,f.j)({onPress:O,elementType:L,isDisabled:!e.isPressable,onClick:(0,s.t)(C,j),allowTextSelectionOnPress:T,..._},H),{hoverProps:A,isHovered:V}=(0,c.X)({isDisabled:!e.isHoverable,..._}),{isFocusVisible:$,isFocused:G,focusProps:K}=(0,u.F)({autoFocus:D}),U=(0,a.useMemo)(()=>l({...E,disableAnimation:I}),[(0,g.Xx)(E),I]),Z=(0,a.useMemo)(()=>({slots:U,classNames:z,disableAnimation:I,isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,fullWidth:e.fullWidth}),[U,z,e.isDisabled,e.isFooterBlurred,I,e.fullWidth]),q=(0,a.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:H,className:U.base({class:N}),tabIndex:e.isPressable?0:-1,"data-hover":(0,h.PB)(V),"data-pressed":(0,h.PB)(J),"data-focus":(0,h.PB)(G),"data-focus-visible":(0,h.PB)($),"data-disabled":(0,h.PB)(e.isDisabled),...(0,d.d)(e.isPressable?{...X,...K,role:"button"}:{},e.isHoverable?A:{},(0,v.z)(_,{enabled:B}),(0,v.z)(t))}},[H,U,N,B,e.isPressable,e.isHoverable,e.isDisabled,V,J,$,X,K,A,_]),Q=(0,a.useCallback)(()=>({ripples:Y,onClear:R}),[Y,R]);return{context:Z,domRef:H,Component:M,classNames:z,children:P,isHovered:V,isPressed:J,disableAnimation:I,isPressable:e.isPressable,isHoverable:e.isHoverable,disableRipple:F,handleClick:j,isFocusVisible:$,getCardProps:q,getRippleProps:Q}}({...e,ref:t});return(0,E.jsxs)(i,{...C(),children:[(0,E.jsx)(o.k,{value:r,children:n}),k&&!L&&!P&&(0,E.jsx)(x.L,{...O()})]})});k.displayName="NextUI.Card";var L=k},53921:function(e,t,n){n.d(t,{R:function(){return r},k:function(){return o}});var[o,r]=(0,n(40280).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},4267:function(e,t,n){n.d(t,{v:function(){return l}});var o=n(41351),r=n(12813),i=n(18373),l=(0,r.tv)({slots:{base:["z-0","relative","bg-transparent","before:content-['']","before:hidden","before:z-[-1]","before:absolute","before:rotate-45","before:w-2.5","before:h-2.5","before:rounded-sm","data-[arrow=true]:before:block","data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top]:before:left-1/2","data-[placement=top]:before:-translate-x-1/2","data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-start]:before:left-3","data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-end]:before:right-3","data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom]:before:left-1/2","data-[placement=bottom]:before:-translate-x-1/2","data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-start]:before:left-3","data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-end]:before:right-3","data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=left]:before:top-1/2","data-[placement=left]:before:-translate-y-1/2","data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-start]:before:top-1/4","data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-end]:before:bottom-1/4","data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=right]:before:top-1/2","data-[placement=right]:before:-translate-y-1/2","data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-start]:before:top-1/4","data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-end]:before:bottom-1/4",...i.Dh],content:["z-10","px-2.5","py-1","w-full","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","outline-none","box-border"],trigger:["z-10"],backdrop:["hidden"],arrow:[]},variants:{size:{sm:{content:"text-tiny"},md:{content:"text-small"},lg:{content:"text-medium"}},color:{default:{base:"before:bg-content1 before:shadow-small",content:"bg-content1"},foreground:{base:"before:bg-foreground",content:o.J.solid.foreground},primary:{base:"before:bg-primary",content:o.J.solid.primary},secondary:{base:"before:bg-secondary",content:o.J.solid.secondary},success:{base:"before:bg-success",content:o.J.solid.success},warning:{base:"before:bg-warning",content:o.J.solid.warning},danger:{base:"before:bg-danger",content:o.J.solid.danger}},radius:{none:{content:"rounded-none"},sm:{content:"rounded-small"},md:{content:"rounded-medium"},lg:{content:"rounded-large"},full:{content:"rounded-full"}},shadow:{sm:{content:"shadow-small"},md:{content:"shadow-medium"},lg:{content:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}},isTriggerDisabled:{true:{trigger:"opacity-disabled pointer-events-none"},false:{}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]})},25814:function(e,t,n){n.d(t,{K:function(){return s},q:function(){return d}});var o=n(25311),r=n(81050),i=n(90695),l=n(2265);let a=new WeakMap;function s(e,t){let n;return t&&(0,r.J).getGlobalDictionaryForPackage(t)||((n=a.get(e))||(n=new r.J(e),a.set(e,n)),n)}function d(e,t){let{locale:n}=(0,o.j)(),r=s(e,t);return(0,l.useMemo)(()=>new i.E(n,r),[n,r])}},49308:function(e,t,n){n.d(t,{O:function(){return i},v:function(){return r}});var o=n(2265);let r=new WeakMap;function i(e){let{triggerRef:t,isOpen:n,onClose:i}=e;(0,o.useEffect)(()=>{if(!n||null===i)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let o=i||r.get(t.current);o&&o()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[n,i,t])}},37879:function(e,t,n){n.d(t,{I:function(){return u}});var o=n(6396),r=n(2265),i=n(21809),l=n(18064);function a(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}var s=n(36665);let d=[];function u(e,t){let{onClose:n,shouldCloseOnBlur:u,isOpen:c,isDismissable:f=!1,isKeyboardDismissDisabled:p=!1,shouldCloseOnInteractOutside:m}=e;(0,r.useEffect)(()=>(c&&d.push(t),()=>{let e=d.indexOf(t);e>=0&&d.splice(e,1)}),[c,t]);let b=()=>{d[d.length-1]===t&&n&&n()};!function(e){let{ref:t,onInteractOutside:n,isDisabled:o,onInteractOutsideStart:s}=e,d=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),u=(0,i.i)(e=>{n&&a(e,t)&&(s&&s(e),d.current.isPointerDown=!0)}),c=(0,i.i)(e=>{n&&n(e)});(0,r.useEffect)(()=>{let e=d.current;if(o)return;let n=t.current,r=(0,l.r)(n);if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&a(n,t)&&c(n),e.isPointerDown=!1};return r.addEventListener("pointerdown",u,!0),r.addEventListener("pointerup",n,!0),()=>{r.removeEventListener("pointerdown",u,!0),r.removeEventListener("pointerup",n,!0)}}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&a(n,t)&&c(n),e.isPointerDown=!1},o=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&a(n,t)&&c(n),e.isPointerDown=!1};return r.addEventListener("mousedown",u,!0),r.addEventListener("mouseup",n,!0),r.addEventListener("touchstart",u,!0),r.addEventListener("touchend",o,!0),()=>{r.removeEventListener("mousedown",u,!0),r.removeEventListener("mouseup",n,!0),r.removeEventListener("touchstart",u,!0),r.removeEventListener("touchend",o,!0)}}},[t,o,u,c])}({ref:t,onInteractOutside:f&&c?e=>{(!m||m(e.target))&&(d[d.length-1]===t&&(e.stopPropagation(),e.preventDefault()),b())}:null,onInteractOutsideStart:e=>{(!m||m(e.target))&&d[d.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:g}=(0,s.L)({isDisabled:!u,onBlurWithin:e=>{!(!e.relatedTarget||(0,o.cW)(e.relatedTarget))&&(!m||m(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||p||e.nativeEvent.isComposing||(e.stopPropagation(),e.preventDefault(),b())},...g},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}},12873:function(e,t,n){n.d(t,{t:function(){return P}});var o=n(65463),r=n(1433);let i={top:"top",bottom:"top",left:"left",right:"left"},l={top:"bottom",bottom:"top",left:"right",right:"left"},a={top:"left",left:"top"},s={top:"height",left:"width"},d={width:"totalWidth",height:"totalHeight"},u={},c="undefined"!=typeof document&&window.visualViewport;function f(e){let t=0,n=0,r=0,i=0,l=0,a=0,s={},d=(null==c?void 0:c.scale)>1;if("BODY"===e.tagName){var u,f;let o=document.documentElement;r=o.clientWidth,i=o.clientHeight,t=null!==(u=null==c?void 0:c.width)&&void 0!==u?u:r,n=null!==(f=null==c?void 0:c.height)&&void 0!==f?f:i,s.top=o.scrollTop||e.scrollTop,s.left=o.scrollLeft||e.scrollLeft,c&&(l=c.offsetTop,a=c.offsetLeft)}else({width:t,height:n,top:l,left:a}=h(e)),s.top=e.scrollTop,s.left=e.scrollLeft,r=t,i=n;return(0,o.Pf)()&&("BODY"===e.tagName||"HTML"===e.tagName)&&d&&(s.top=0,s.left=0,l=c.pageTop,a=c.pageLeft),{width:t,height:n,totalWidth:r,totalHeight:i,scroll:s,top:l,left:a}}function p(e,t,n,o,r,l,a){let d=r.scroll[e],u=o[s[e]],c=o.scroll[i[e]]+l,f=u+o.scroll[i[e]]-l,p=t-d+a[e]-o[i[e]],m=t-d+n+a[e]-o[i[e]];return p<c?c-p:m>f?Math.max(f-m,c-p):0}function m(e){if(u[e])return u[e];let[t,n]=e.split(" "),o=i[t]||"right",r=a[o];i[n]||(n="center");let l=s[o],d=s[r];return u[e]={placement:t,crossPlacement:n,axis:o,crossAxis:r,size:l,crossSize:d},u[e]}function b(e,t,n,o,i,a,s,u,c,f){let{placement:p,crossPlacement:m,axis:b,crossAxis:g,size:h,crossSize:v}=o,w={};w[g]=e[g],"center"===m?w[g]+=(e[v]-n[v])/2:m!==g&&(w[g]+=e[v]-n[v]),w[g]+=a;let y=e[g]-n[v]+c+f,x=e[g]+e[v]-c-f;if(w[g]=(0,r.uZ)(w[g],y,x),p===b){let n=u?s[h]:t[d[h]];w[l[b]]=Math.floor(n-e[b]+i)}else w[b]=Math.floor(e[b]+e[h]+i);return w}function g(e,t,n,o,r,i){let{placement:a,axis:s,size:d}=i;return a===s?Math.max(0,n[s]-e[s]-e.scroll[s]+t[s]-o[s]-o[l[s]]-r):Math.max(0,e[d]+e[s]+e.scroll[s]-t[s]-n[s]-n[d]-o[s]-o[l[s]]-r)}function h(e){let{top:t,left:n,width:o,height:r}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:l,clientTop:a,clientLeft:s}=document.documentElement;return{top:t+i-a,left:n+l-s,width:o,height:r}}function v(e,t){let n,o=window.getComputedStyle(e);if("fixed"===o.position){let{top:t,left:o,width:r,height:i}=e.getBoundingClientRect();n={top:t,left:o,width:r,height:i}}else{n=h(e);let o=h(t),r=window.getComputedStyle(t);o.top+=(parseInt(r.borderTopWidth,10)||0)-t.scrollTop,o.left+=(parseInt(r.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=o.top,n.left-=o.left}return n.top-=parseInt(o.marginTop,10)||0,n.left-=parseInt(o.marginLeft,10)||0,n}function w(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}var y=n(49308),x=n(2265),E=n(36582),k=n(25311);let L="undefined"!=typeof document&&window.visualViewport;function P(e){let{direction:t}=(0,k.j)(),{arrowSize:n=0,targetRef:o,overlayRef:i,scrollRef:a=i,placement:s="bottom",containerPadding:u=12,shouldFlip:c=!0,boundaryElement:P="undefined"!=typeof document?document.body:null,offset:C=0,crossOffset:O=0,shouldUpdatePosition:D=!0,isOpen:S=!0,onClose:z,maxHeight:T,arrowBoundaryOffset:_=0}=e,[H,M]=(0,x.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),B=[D,s,i.current,o.current,a.current,u,c,P,C,O,S,t,T,_,n],I=(0,x.useRef)(null==L?void 0:L.scale);(0,x.useEffect)(()=>{S&&(I.current=null==L?void 0:L.scale)},[S]);let F=(0,x.useCallback)(()=>{var e,y;if(!1===D||!S||!i.current||!o.current||!a.current||!P||(null==L?void 0:L.scale)!==I.current)return;let x=i.current;!T&&i.current&&(x.style.top="0px",x.style.bottom="",x.style.maxHeight=(null!==(y=null===(e=window.visualViewport)||void 0===e?void 0:e.height)&&void 0!==y?y:window.innerHeight)+"px");let E=function(e){let t,{placement:n,targetNode:o,overlayNode:i,scrollNode:a,padding:s,shouldFlip:u,boundaryElement:c,offset:y,crossOffset:x,maxHeight:E,arrowSize:k=0,arrowBoundaryOffset:L=0}=e,P=i instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!w(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!w(t);)t=t.parentElement;return t||document.documentElement}(i):document.documentElement,C=P===document.documentElement,O=window.getComputedStyle(P).position,D=C?h(o):v(o,P);if(!C){let{marginTop:e,marginLeft:t}=window.getComputedStyle(o);D.top+=parseInt(e,10)||0,D.left+=parseInt(t,10)||0}let S=h(i),z={top:parseInt((t=window.getComputedStyle(i)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};S.width+=z.left+z.right,S.height+=z.top+z.bottom;let T={top:a.scrollTop,left:a.scrollLeft,width:a.scrollWidth,height:a.scrollHeight},_=f(c),H=f(P),M="BODY"===c.tagName?h(P):v(P,c);return"HTML"===P.tagName&&"BODY"===c.tagName&&(H.scroll.top=0,H.scroll.left=0),function(e,t,n,o,i,a,s,u,c,f,h,v,w,y,x,E){let k=m(e),{size:L,crossAxis:P,crossSize:C,placement:O,crossPlacement:D}=k,S=b(t,u,n,k,h,v,f,w,x,E),z=h,T=g(u,f,t,i,a+h,k);if(s&&o[L]>T){let e=m(`${l[O]} ${D}`),o=b(t,u,n,e,h,v,f,w,x,E);g(u,f,t,i,a+h,e)>T&&(k=e,S=o,z=h)}let _="bottom";"top"===k.axis?"top"===k.placement?_="top":"bottom"===k.placement&&(_="bottom"):"top"===k.crossAxis&&("top"===k.crossPlacement?_="bottom":"bottom"===k.crossPlacement&&(_="top"));let H=p(P,S[P],n[C],u,c,a,f);S[P]+=H;let M=function(e,t,n,o,r,i,l,a){let s=o?n.height:t[d.height],u=null!=e.top?n.top+e.top:n.top+(s-e.bottom-l),c="top"!==a?Math.max(0,t.height+t.top+t.scroll.top-u-(r.top+r.bottom+i)):Math.max(0,u+l-(t.top+t.scroll.top)-(r.top+r.bottom+i));return Math.min(t.height-2*i,c)}(S,u,f,w,i,a,n.height,_);y&&y<M&&(M=y),n.height=Math.min(n.height,M),H=p(P,(S=b(t,u,n,k,z,v,f,w,x,E))[P],n[C],u,c,a,f),S[P]+=H;let B={},I=t[P]+.5*t[C]-S[P],F=x/2+E,N=n[C]-x/2-E,W=t[P]-S[P]+x/2,R=t[P]+t[C]-S[P]-x/2,Y=(0,r.uZ)(I,W,R);return B[P]=(0,r.uZ)(Y,F,N),{position:S,maxHeight:M,arrowOffsetLeft:B.left,arrowOffsetTop:B.top,placement:k.placement}}(n,D,S,T,z,s,u,_,H,M,y,x,!!O&&"static"!==O,E,k,L)}({placement:"rtl"===t?s.replace("start","right").replace("end","left"):s.replace("start","left").replace("end","right"),overlayNode:i.current,targetNode:o.current,scrollNode:a.current,padding:u,shouldFlip:c,boundaryElement:P,offset:C,crossOffset:O,maxHeight:T,arrowSize:n,arrowBoundaryOffset:_});x.style.top="",x.style.bottom="",Object.keys(E.position).forEach(e=>x.style[e]=E.position[e]+"px"),x.style.maxHeight=null!=E.maxHeight?E.maxHeight+"px":void 0,M(E)},B);(0,E.b)(F,B),(0,E.b)(()=>(window.addEventListener("resize",F,!1),()=>{window.removeEventListener("resize",F,!1)}),[F]),function(e){let{ref:t,onResize:n}=e;(0,x.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{let t=new window.ResizeObserver(e=>{e.length&&n()});return t.observe(e),()=>{e&&t.unobserve(e)}}}},[n,t])}({ref:i,onResize:F});let N=(0,x.useRef)(!1);(0,E.b)(()=>{let e;let t=()=>{N.current=!0,clearTimeout(e),e=setTimeout(()=>{N.current=!1},500),F()},n=()=>{N.current&&t()};return null==L||L.addEventListener("resize",t),null==L||L.addEventListener("scroll",n),()=>{null==L||L.removeEventListener("resize",t),null==L||L.removeEventListener("scroll",n)}},[F]);let W=(0,x.useCallback)(()=>{N.current||z()},[z,N]);return(0,y.O)({triggerRef:o,isOpen:S,onClose:z&&W}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...H.position,maxHeight:H.maxHeight}},placement:H.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:H.arrowOffsetLeft,top:H.arrowOffsetTop}},updatePosition:F}}},43147:function(e,t,n){n.d(t,{P:function(){return a}});var o=n(36582),r=n(2265);let i=0,l=new Map;function a(e){let[t,n]=(0,r.useState)();return(0,o.b)(()=>{if(!e)return;let t=l.get(e);if(t)n(t.element.id);else{let o=`react-aria-description-${i++}`;n(o);let r=document.createElement("div");r.id=o,r.style.display="none",r.textContent=e,document.body.appendChild(r),t={refCount:0,element:r},l.set(e,t)}return t.refCount++,()=>{t&&0==--t.refCount&&(t.element.remove(),l.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}},63937:function(e,t,n){n.d(t,{S:function(){return a},T:function(){return s}});var o=n(82457),r=n(2265),i=n(36665);let l={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function a(e={}){let{style:t,isFocusable:n}=e,[o,a]=(0,r.useState)(!1),{focusWithinProps:s}=(0,i.L)({isDisabled:!n,onFocusWithinChange:e=>a(e)}),d=(0,r.useMemo)(()=>o?t:t?{...l,...t}:l,[o]);return{visuallyHiddenProps:{...s,style:d}}}function s(e){let{children:t,elementType:n="div",isFocusable:i,style:l,...s}=e,{visuallyHiddenProps:d}=a(e);return r.createElement(n,(0,o.d)(s,d),t)}},63259:function(e,t,n){function o(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function r(e){return i(e,0)}function i(e,t){if(t<0)return;let n=0;for(let o of e){if(n===t)return o;n++}}function l(e){let t;for(let n of e)t=n;return t}n.d(t,{Em:function(){return i},_P:function(){return o},l8:function(){return r},s:function(){return l}})},64508:function(e,t,n){n.d(t,{d:function(){return i}});var o=n(2265),r=n(45614);function i(e){let[t,n]=(0,r.z)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),i=(0,o.useCallback)(()=>{n(!0)},[n]),l=(0,o.useCallback)(()=>{n(!1)},[n]),a=(0,o.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:i,close:l,toggle:a}}},1433:function(e,t,n){n.d(t,{uZ:function(){return o}});function o(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}}}]);