"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3343],{24369:function(e,t,r){var n=r(2265),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,o=n.useEffect,l=n.useLayoutEffect,s=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!a(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),a=n[0].inst,c=n[1];return l(function(){a.value=r,a.getSnapshot=t,u(a)&&c({inst:a})},[e,r,t]),o(function(){return u(a)&&c({inst:a}),e(function(){u(a)&&c({inst:a})})},[e]),s(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},82558:function(e,t,r){e.exports=r(24369)},93361:function(e,t,r){r.d(t,{o:function(){return c}});var n=r(72243),a=(0,r(12813).tv)({base:[],variants:{orientation:{vertical:["overflow-y-auto","data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],horizontal:["overflow-x-auto","data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"]},hideScrollBar:{true:"scrollbar-hide",false:""}},defaultVariants:{orientation:"vertical",hideScrollBar:!1}}),i=r(88160),o=r(68658),l=r(2265),s=r(57437),u=(0,n.Gp)((e,t)=>{let{Component:r,children:u,getBaseProps:c}=function(e){var t;let[r,s]=(0,n.oe)(e,a.variantKeys),{ref:u,as:c,children:d,className:f,style:g,size:v=40,offset:h=0,visibility:p="auto",isEnabled:E=!0,onVisibilityChange:m,..._}=r,w=(0,i.gy)(u);!function(e={}){let{domRef:t,isEnabled:r=!0,overflowCheck:n="vertical",visibility:a="auto",offset:i=0,onVisibilityChange:s,updateDeps:u=[]}=e,c=(0,l.useRef)(a);(0,l.useEffect)(()=>{let e=null==t?void 0:t.current;if(!e||!r)return;let l=(t,r,n,i,l)=>{if("auto"===a){let t=`${i}${(0,o.kC)(l)}Scroll`;r&&n?(e.dataset[t]="true",e.removeAttribute(`data-${i}-scroll`),e.removeAttribute(`data-${l}-scroll`)):(e.dataset[`${i}Scroll`]=r.toString(),e.dataset[`${l}Scroll`]=n.toString(),e.removeAttribute(`data-${i}-${l}-scroll`))}else{let e=r&&n?"both":r?i:n?l:"none";e!==c.current&&(null==s||s(e),c.current=e)}},u=()=>{for(let{type:t,prefix:r,suffix:a}of[{type:"vertical",prefix:"top",suffix:"bottom"},{type:"horizontal",prefix:"left",suffix:"right"}])if(n===t||"both"===n){let n="vertical"===t?e.scrollTop>i:e.scrollLeft>i,o="vertical"===t?e.scrollTop+e.clientHeight+i<e.scrollHeight:e.scrollLeft+e.clientWidth+i<e.scrollWidth;l(t,n,o,r,a)}},d=()=>{["top","bottom","top-bottom","left","right","left-right"].forEach(t=>{e.removeAttribute(`data-${t}-scroll`)})};return u(),e.addEventListener("scroll",u),"auto"!==a&&(d(),"both"===a?(e.dataset.topBottomScroll=String("vertical"===n),e.dataset.leftRightScroll=String("horizontal"===n)):(e.dataset.topBottomScroll="false",e.dataset.leftRightScroll="false",["top","bottom","left","right"].forEach(t=>{e.dataset[`${t}Scroll`]=String(a===t)}))),()=>{e.removeEventListener("scroll",u),d()}},[...u,r,a,n,s,t])}({domRef:w,offset:h,visibility:p,isEnabled:E,onVisibilityChange:m,updateDeps:[d],overflowCheck:null!=(t=e.orientation)?t:"vertical"});let y=(0,l.useMemo)(()=>a({...s,className:f}),[(0,o.Xx)(s),f]);return{Component:c||"div",styles:y,domRef:w,children:d,getBaseProps:function(){var t;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:w,className:y,"data-orientation":null!=(t=e.orientation)?t:"vertical",style:{"--scroll-shadow-size":"".concat(v,"px"),...g,...r.style},..._,...r}}}}({...e,ref:t});return(0,s.jsx)(r,{...c(),children:u})});u.displayName="NextUI.ScrollShadow";var c=u},63861:function(e,t,r){let n;r.d(t,{ZP:function(){return ee}});var a=r(2265),i=r(82558);let o=()=>{},l=o(),s=Object,u=e=>e===l,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),g=new WeakMap,v=0,h=e=>{let t,r;let n=typeof e,a=e&&e.constructor,i=a==Date;if(s(e)!==e||i||a==RegExp)t=i?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=g.get(e))return t;if(t=++v+"~",g.set(e,t),a==Array){for(r=0,t="@";r<e.length;r++)t+=h(e[r])+",";g.set(e,t)}if(a==s){t="#";let n=s.keys(e).sort();for(;!u(r=n.pop());)u(e[r])||(t+=r+":"+h(e[r])+",");g.set(e,t)}}return t},p=new WeakMap,E={},m={},_="undefined",w=typeof window!=_,y=typeof document!=_,S=()=>w&&typeof window.requestAnimationFrame!=_,b=(e,t)=>{let r=p.get(e);return[()=>!u(t)&&e.get(t)||E,n=>{if(!u(t)){let a=e.get(t);t in m||(m[t]=a),r[5](t,d(a,n),a||E)}},r[6],()=>!u(t)&&t in m?m[t]:!u(t)&&e.get(t)||E]},R=!0,[T,O]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[o,o],V={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),T("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{R=!0,e()},r=()=>{R=!1};return T("online",t),T("offline",r),()=>{O("online",t),O("offline",r)}}},k=!a.useId,L=!w||"Deno"in window,C=e=>S()?window.requestAnimationFrame(e):setTimeout(e,1),x=L?a.useEffect:a.useLayoutEffect,N="undefined"!=typeof navigator&&navigator.connection,A=!L&&N&&(["slow-2g","2g"].includes(N.effectiveType)||N.saveData),D=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?h(e):"",t]},$=0,z=()=>++$;var I={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function P(...e){let[t,r,n,a]=e,i=d({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{}),o=i.populateCache,s=i.rollbackOnError,g=i.optimisticData,v=e=>"function"==typeof s?s(e):!1!==s,h=i.throwOnError;if(c(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(E))}return E(r);async function E(r){let a;let[s]=D(r);if(!s)return;let[d,E]=b(t,s),[m,_,w,y]=p.get(t),S=()=>{let e=m[s];return(c(i.revalidate)?i.revalidate(d().data,r):!1!==i.revalidate)&&(delete w[s],delete y[s],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return S();let R=n,T=z();_[s]=[T,0];let O=!u(g),V=d(),k=V.data,L=V._c,C=u(L)?k:L;if(O&&E({data:g=c(g)?g(C,k):g,_c:C}),c(R))try{R=R(C)}catch(e){a=e}if(R&&f(R)){if(R=await R.catch(e=>{a=e}),T!==_[s][0]){if(a)throw a;return R}a&&O&&v(a)&&(o=!0,E({data:C,_c:l}))}if(o&&!a&&(c(o)?E({data:o(R,C),error:l,_c:l}):E({data:R,error:l,_c:l})),_[s][1]=z(),Promise.resolve(S()).then(()=>{E({_c:l})}),a){if(h)throw a;return}return R}}let F=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},M=(e,t)=>{if(!p.has(e)){let r=d(V,t),n={},a=P.bind(l,e),i=o,s={},u=(e,t)=>{let r=s[e]||[];return s[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let a=s[t];if(a)for(let e of a)e(r,n)},f=()=>{if(!p.has(e)&&(p.set(e,[n,{},{},{},a,c,u]),!L)){let t=r.initFocus(setTimeout.bind(l,F.bind(l,n,0))),a=r.initReconnect(setTimeout.bind(l,F.bind(l,n,1)));i=()=>{t&&t(),a&&a(),p.delete(e)}}};return f(),[e,a,f,i]}return[e,p.get(e)[4]]},[W,U]=M(new Map),j=d({onLoadingSlow:o,onSuccess:o,onError:o,onErrorRetry:(e,t,r,n,a)=>{let i=r.errorRetryCount,o=a.retryCount,l=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;(u(i)||!(o>i))&&setTimeout(n,l,a)},onDiscarded:o,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:(e,t)=>h(e)==h(t),isPaused:()=>!1,cache:W,mutate:U,fallback:{}},{isOnline:()=>R,isVisible:()=>{let e=y&&document.visibilityState;return u(e)||"hidden"!==e}}),B=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:a}=e,{use:i,fallback:o}=t;n&&i&&(r.use=n.concat(i)),a&&o&&(r.fallback=d(a,o))}return r},q=(0,a.createContext)({}),H=w&&window.__SWR_DEVTOOLS_USE__,J=H?window.__SWR_DEVTOOLS_USE__:[],G=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],K=()=>d(j,(0,a.useContext)(q)),X=J.concat(e=>(t,r,n)=>{let a=r&&((...e)=>{let[n]=D(t),[,,,a]=p.get(W);if(n.startsWith("$inf$"))return r(...e);let i=a[n];return u(i)?r(...e):(delete a[n],i)});return e(t,a,n)}),Z=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};H&&(window.__SWR_DEVTOOLS_REACT__=a);let Q=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};s.defineProperty(e=>{let{value:t}=e,r=(0,a.useContext)(q),n=c(t),i=(0,a.useMemo)(()=>n?t(r):t,[n,r,t]),o=(0,a.useMemo)(()=>n?i:B(r,i),[n,r,i]),s=i&&i.provider,u=(0,a.useRef)(l);s&&!u.current&&(u.current=M(s(o.cache||W),i));let f=u.current;return f&&(o.cache=f[0],o.mutate=f[1]),x(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,a.createElement)(q.Provider,d(e,{value:o}))},"defaultValue",{value:j});let ee=(n=(e,t,r)=>{let{cache:n,compare:o,suspense:s,fallbackData:f,revalidateOnMount:g,revalidateIfStale:v,refreshInterval:h,refreshWhenHidden:E,refreshWhenOffline:m,keepPreviousData:_}=r,[w,y,S,R]=p.get(n),[T,O]=D(e),V=(0,a.useRef)(!1),N=(0,a.useRef)(!1),A=(0,a.useRef)(T),$=(0,a.useRef)(t),F=(0,a.useRef)(r),M=()=>F.current,W=()=>M().isVisible()&&M().isOnline(),[U,j,B,q]=b(n,T),H=(0,a.useRef)({}).current,J=u(f)?r.fallback[T]:f,G=(e,t)=>{for(let r in H)if("data"===r){if(!o(e[r],t[r])&&(!u(e[r])||!o(eo,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},K=(0,a.useMemo)(()=>{let e=!!T&&!!t&&(u(g)?!M().isPaused()&&!s&&(!!u(v)||v):g),r=t=>{let r=d(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=U(),a=q(),i=r(n),o=n===a?i:r(a),l=i;return[()=>{let e=r(U());return G(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>o]},[n,T]),X=(0,i.useSyncExternalStore)((0,a.useCallback)(e=>B(T,(t,r)=>{G(r,t)||e()}),[n,T]),K[0],K[1]),ee=!V.current,et=w[T]&&w[T].length>0,er=X.data,en=u(er)?J:er,ea=X.error,ei=(0,a.useRef)(en),eo=_?u(er)?ei.current:er:en,el=(!et||!!u(ea))&&(ee&&!u(g)?g:!M().isPaused()&&(s?!u(en)&&v:u(en)||v)),es=!!(T&&t&&ee&&el),eu=u(X.isValidating)?es:X.isValidating,ec=u(X.isLoading)?es:X.isLoading,ed=(0,a.useCallback)(async e=>{let t,n;let a=$.current;if(!T||!a||N.current||M().isPaused())return!1;let i=!0,s=e||{},d=!S[T]||!s.dedupe,f=()=>k?!N.current&&T===A.current&&V.current:T===A.current,g={isValidating:!1,isLoading:!1},v=()=>{j(g)},h=()=>{let e=S[T];e&&e[1]===n&&delete S[T]},p={isValidating:!0};u(U().data)&&(p.isLoading=!0);try{if(d&&(j(p),r.loadingTimeout&&u(U().data)&&setTimeout(()=>{i&&f()&&M().onLoadingSlow(T,r)},r.loadingTimeout),S[T]=[a(O),z()]),[t,n]=S[T],t=await t,d&&setTimeout(h,r.dedupingInterval),!S[T]||S[T][1]!==n)return d&&f()&&M().onDiscarded(T),!1;g.error=l;let e=y[T];if(!u(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return v(),d&&f()&&M().onDiscarded(T),!1;let s=U().data;g.data=o(s,t)?s:t,d&&f()&&M().onSuccess(t,T,r)}catch(r){h();let e=M(),{shouldRetryOnError:t}=e;!e.isPaused()&&(g.error=r,d&&f()&&(e.onError(r,T,e),(!0===t||c(t)&&t(r))&&(!M().revalidateOnFocus||!M().revalidateOnReconnect||W())&&e.onErrorRetry(r,T,e,e=>{let t=w[T];t&&t[0]&&t[0](I.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return i=!1,v(),!0},[T,n]),ef=(0,a.useCallback)((...e)=>P(n,A.current,...e),[]);if(x(()=>{$.current=t,F.current=r,u(er)||(ei.current=er)}),x(()=>{if(!T)return;let e=ed.bind(l,Y),t=0,r=Z(T,w,(r,n={})=>{if(r==I.FOCUS_EVENT){let r=Date.now();M().revalidateOnFocus&&r>t&&W()&&(t=r+M().focusThrottleInterval,e())}else if(r==I.RECONNECT_EVENT)M().revalidateOnReconnect&&W()&&e();else if(r==I.MUTATE_EVENT)return ed();else if(r==I.ERROR_REVALIDATE_EVENT)return ed(n)});return N.current=!1,A.current=T,V.current=!0,j({_k:O}),el&&(u(en)||L?e():C(e)),()=>{N.current=!0,r()}},[T]),x(()=>{let e;function t(){let t=c(h)?h(U().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!U().error&&(E||M().isVisible())&&(m||M().isOnline())?ed(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,E,m,T]),(0,a.useDebugValue)(eo),s&&u(en)&&T){if(!k&&L)throw Error("Fallback data is required when using suspense in SSR.");$.current=t,F.current=r,N.current=!1;let e=R[T];if(u(e)||Q(ef(e)),u(ea)){let e=ed(Y);u(eo)||(e.status="fulfilled",e.value=!0),Q(e)}else throw ea}return{mutate:ef,get data(){return H.data=!0,eo},get error(){return H.error=!0,ea},get isValidating(){return H.isValidating=!0,eu},get isLoading(){return H.isLoading=!0,ec}}},function(...e){let t=K(),[r,a,i]=G(e),o=B(t,i),l=n,{use:s}=o,u=(s||[]).concat(X);for(let e=u.length;e--;)l=u[e](l);return l(r,a||o.fetcher||null,o)})}}]);