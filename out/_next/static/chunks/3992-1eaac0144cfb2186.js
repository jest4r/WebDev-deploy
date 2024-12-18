"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3992],{34778:function(e,t,r){r.d(t,{h:function(){return k}});var a=r(57437),l=()=>(0,a.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,a.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[n,o]=(0,r(40280).k)({name:"AvatarGroupContext",strict:!1}),i=r(41351),s=r(12813),c=r(18373),u=(0,s.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...c.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...c.z6,"flex","items-center","justify-center"],name:[...c.z6,"font-normal","text-center","text-inherit"],icon:[...c.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:i.J.solid.default},primary:{base:i.J.solid.primary},secondary:{base:i.J.solid.secondary},success:{base:i.J.solid.success},warning:{base:i.J.solid.warning},danger:{base:i.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}},disableAnimation:{true:{base:"transition-none",img:"transition-none"},false:{}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]});(0,s.tv)({slots:{base:"flex items-center justify-center h-auto w-max",count:"hover:-translate-x-0"},variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}});var d=r(2646),f=r(82457),v=r(88160),m=r(27246),g=r(81945),b=r(46763),p=r(97765),h=r(73709),y=r(2265),w=r(37988),x=r(11323),j=(0,r(72243).Gp)((e,t)=>{let{Component:r,ImgComponent:n,src:i,icon:s=(0,a.jsx)(l,{}),alt:c,classNames:j,slots:k,name:C,showFallback:O,fallback:_,getInitials:z,getAvatarProps:N,getImageProps:S}=function(){var e,t,r,a,l,n,i;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(0,d.w)(),j=o(),k=!!j,{as:C,ref:O,src:_,name:z,icon:N,classNames:S,fallback:P,alt:B=z||"avatar",imgRef:E,color:G=null!=(e=null==j?void 0:j.color)?e:"default",radius:D=null!=(t=null==j?void 0:j.radius)?t:"full",size:I=null!=(r=null==j?void 0:j.size)?r:"md",isBordered:$=null!=(a=null==j?void 0:j.isBordered)&&a,isDisabled:A=null!=(l=null==j?void 0:j.isDisabled)&&l,isFocusable:M=!1,getInitials:J=g.e,ignoreFallback:R=!1,showFallback:T=!1,ImgComponent:W="img",imgProps:L,className:U,onError:V,...F}=s,H=C||"span",X=(0,v.gy)(O),Z=(0,v.gy)(E),{isFocusVisible:K,isFocused:q,focusProps:Q}=(0,h.F)(),{isHovered:Y,hoverProps:ee}=(0,x.X)({isDisabled:A}),et=null!=(i=null!=(n=s.disableAnimation)?n:null==c?void 0:c.disableAnimation)&&i,er="loaded"===(0,w.d)({src:_,onError:V,ignoreFallback:R}),ea="string"==typeof W,el=(!_||!er)&&T,en=(0,y.useMemo)(()=>{var e;return u({color:G,radius:D,size:I,isBordered:$,isDisabled:A,isInGroup:k,disableAnimation:et,isInGridGroup:null!=(e=null==j?void 0:j.isGrid)&&e})},[G,D,I,$,A,et,k,null==j?void 0:j.isGrid]),eo=(0,b.W)(null==S?void 0:S.base,U),ei=(0,y.useMemo)(()=>M||"button"===C,[M,C]),es=(0,y.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:X,tabIndex:ei?0:-1,"data-hover":(0,p.PB)(Y),"data-focus":(0,p.PB)(q),"data-focus-visible":(0,p.PB)(K),className:en.base({class:(0,b.W)(eo,null==e?void 0:e.className)}),...(0,f.d)(F,ee,ei?Q:{})}},[ei,en,eo,Q,F]),ec=(0,y.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:Z,src:_,"data-loaded":(0,p.PB)(er),className:en.img({class:null==S?void 0:S.img}),...(0,f.d)(L,e,(0,m.z)({disableAnimation:et},{enabled:ea}))}},[en,er,L,et,_,Z,ea]);return{Component:H,ImgComponent:W,src:_,alt:B,icon:N,name:z,imgRef:Z,slots:en,classNames:S,fallback:P,isImgLoaded:er,showFallback:el,ignoreFallback:R,getInitials:J,getAvatarProps:es,getImageProps:ec}}({...e,ref:t}),P=(0,y.useMemo)(()=>!O&&i?null:_?(0,a.jsx)("div",{"aria-label":c,className:k.fallback({class:null==j?void 0:j.fallback}),role:"img",children:_}):C?(0,a.jsx)("span",{"aria-label":c,className:k.name({class:null==j?void 0:j.name}),role:"img",children:z(C)}):(0,a.jsx)("span",{"aria-label":c,className:k.icon({class:null==j?void 0:j.icon}),role:"img",children:s}),[O,i,_,C,j]);return(0,a.jsxs)(r,{...N(),children:[i&&(0,a.jsx)(n,{...S(),alt:c}),P]})});j.displayName="NextUI.Avatar";var k=j},65349:function(e,t,r){r.d(t,{i:function(){return c}});var a=r(53921),l=r(72243),n=r(88160),o=r(46763),i=r(57437),s=(0,l.Gp)((e,t)=>{var r;let{as:l,className:s,children:c,...u}=e,d=(0,n.gy)(t),{slots:f,classNames:v}=(0,a.R)(),m=(0,o.W)(null==v?void 0:v.footer,s);return(0,i.jsx)(l||"div",{ref:d,className:null==(r=f.footer)?void 0:r.call(f,{class:m}),...u,children:c})});s.displayName="NextUI.CardFooter";var c=s},86712:function(e,t,r){r.d(t,{j:function(){return c}});var a=r(27246),l=(0,r(12813).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),n=r(2265),o=r(72243),i=r(57437),s=(0,o.Gp)((e,t)=>{let{Component:r,getDividerProps:o}=function(e){var t;let r,o;let{as:i,className:s,orientation:c,...u}=e,d=i||"hr";"hr"===d&&"vertical"===c&&(d="div");let{separatorProps:f}=(t={elementType:"string"==typeof d?d:"hr",orientation:c},o=(0,a.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...o,role:"separator","aria-orientation":r}}:{separatorProps:o}),v=(0,n.useMemo)(()=>l({orientation:c,className:s}),[c,s]);return{Component:d,getDividerProps:(0,n.useCallback)((e={})=>({className:v,role:"separator","data-orientation":c,...f,...u,...e}),[v,c,f,u])}}({...e});return(0,i.jsx)(r,{ref:t,...o()})});s.displayName="NextUI.Divider";var c=s},93361:function(e,t,r){r.d(t,{o:function(){return u}});var a=r(72243),l=(0,r(12813).tv)({base:[],variants:{orientation:{vertical:["overflow-y-auto","data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],horizontal:["overflow-x-auto","data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"]},hideScrollBar:{true:"scrollbar-hide",false:""}},defaultVariants:{orientation:"vertical",hideScrollBar:!1}}),n=r(88160),o=r(68658),i=r(2265),s=r(57437),c=(0,a.Gp)((e,t)=>{let{Component:r,children:c,getBaseProps:u}=function(e){var t;let[r,s]=(0,a.oe)(e,l.variantKeys),{ref:c,as:u,children:d,className:f,style:v,size:m=40,offset:g=0,visibility:b="auto",isEnabled:p=!0,onVisibilityChange:h,...y}=r,w=(0,n.gy)(c);!function(e={}){let{domRef:t,isEnabled:r=!0,overflowCheck:a="vertical",visibility:l="auto",offset:n=0,onVisibilityChange:s,updateDeps:c=[]}=e,u=(0,i.useRef)(l);(0,i.useEffect)(()=>{let e=null==t?void 0:t.current;if(!e||!r)return;let i=(t,r,a,n,i)=>{if("auto"===l){let t=`${n}${(0,o.kC)(i)}Scroll`;r&&a?(e.dataset[t]="true",e.removeAttribute(`data-${n}-scroll`),e.removeAttribute(`data-${i}-scroll`)):(e.dataset[`${n}Scroll`]=r.toString(),e.dataset[`${i}Scroll`]=a.toString(),e.removeAttribute(`data-${n}-${i}-scroll`))}else{let e=r&&a?"both":r?n:a?i:"none";e!==u.current&&(null==s||s(e),u.current=e)}},c=()=>{for(let{type:t,prefix:r,suffix:l}of[{type:"vertical",prefix:"top",suffix:"bottom"},{type:"horizontal",prefix:"left",suffix:"right"}])if(a===t||"both"===a){let a="vertical"===t?e.scrollTop>n:e.scrollLeft>n,o="vertical"===t?e.scrollTop+e.clientHeight+n<e.scrollHeight:e.scrollLeft+e.clientWidth+n<e.scrollWidth;i(t,a,o,r,l)}},d=()=>{["top","bottom","top-bottom","left","right","left-right"].forEach(t=>{e.removeAttribute(`data-${t}-scroll`)})};return c(),e.addEventListener("scroll",c),"auto"!==l&&(d(),"both"===l?(e.dataset.topBottomScroll=String("vertical"===a),e.dataset.leftRightScroll=String("horizontal"===a)):(e.dataset.topBottomScroll="false",e.dataset.leftRightScroll="false",["top","bottom","left","right"].forEach(t=>{e.dataset[`${t}Scroll`]=String(l===t)}))),()=>{e.removeEventListener("scroll",c),d()}},[...c,r,l,a,s,t])}({domRef:w,offset:g,visibility:b,isEnabled:p,onVisibilityChange:h,updateDeps:[d],overflowCheck:null!=(t=e.orientation)?t:"vertical"});let x=(0,i.useMemo)(()=>l({...s,className:f}),[(0,o.Xx)(s),f]);return{Component:u||"div",styles:x,domRef:w,children:d,getBaseProps:function(){var t;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:w,className:x,"data-orientation":null!=(t=e.orientation)?t:"vertical",style:{"--scroll-shadow-size":"".concat(m,"px"),...v,...r.style},...y,...r}}}}({...e,ref:t});return(0,s.jsx)(r,{...u(),children:c})});c.displayName="NextUI.ScrollShadow";var u=c},81945:function(e,t,r){r.d(t,{e:function(){return a},x:function(){return l}});var a=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),l=(...e)=>{let t=" ";for(let r of e)if("string"==typeof r&&r.length>0){t=r;break}return t}},37988:function(e,t,r){r.d(t,{d:function(){return n}});var a=r(2265),l=r(41681);function n(e={}){let{loading:t,src:r,srcSet:n,onLoad:o,onError:i,crossOrigin:s,sizes:c,ignoreFallback:u}=e,[d,f]=(0,a.useState)("pending");(0,a.useEffect)(()=>{f(r?"loading":"pending")},[r]);let v=(0,a.useRef)(),m=(0,a.useCallback)(()=>{if(!r)return;g();let e=new Image;e.src=r,s&&(e.crossOrigin=s),n&&(e.srcset=n),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{g(),f("loaded"),null==o||o(e)},e.onerror=e=>{g(),f("failed"),null==i||i(e)},v.current=e},[r,s,n,c,o,i,t]),g=()=>{v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return(0,l.G)(()=>{if(!u)return"loading"===d&&m(),()=>{g()}},[d,m,u]),u?"loaded":d}},46231:function(e,t,r){r.d(t,{w_:function(){return u}});var a=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(l),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var a,l;a=t,l=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:l,size:n,title:s}=e,u=function(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,o),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(l)}}}]);