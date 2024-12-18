(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9474],{80433:function(e,t,r){Promise.resolve().then(r.bind(r,99925))},99925:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(57437),s=r(93361),i=r(2265),l=r(4922),a=r(99008),o=r(99394),c=r(49961),u=r(64264),d=r(99141),h=r(17032),f=r(33374),g=r(97717),m=r(29721),p=r(35069),x=r(42228),v=r(9182),k=r(88139),y=r(41258),j=r(75265),S=r(99376),b=e=>{let{skills:t,onAdd:r,onModify:s,onDelete:b}=e,w=(0,S.useRouter)(),{isOpen:T,onOpen:A,onClose:P}=(0,j.q)(),[N,z]=(0,i.useState)({name:"",description:""}),[R,Z]=(0,i.useState)(null),C=async()=>{try{await y.m.addSkill(N),r(N),M(),w.refresh()}catch(e){console.error(e)}},E=async e=>{try{await y.m.updateSkill(e),s(e),w.refresh()}catch(e){console.error(e)}},I=async e=>{try{await y.m.deleteSkill(e),b(e),w.refresh()}catch(e){console.error(e)}},M=()=>{z({name:"",description:""}),Z(null),P()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.w,{className:"w-full",children:(0,n.jsxs)(a.G,{className:"p-4",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold",children:"Skills"}),(0,n.jsx)(o.A,{color:"primary",size:"sm",onPress:A,children:"Add Skill"})]}),(0,n.jsx)("div",{className:"space-y-2",children:t.map(e=>(0,n.jsxs)("div",{className:"flex justify-between items-center p-2 bg-gray-50 rounded-lg",children:[(0,n.jsxs)("span",{children:[e.name,": ",e.description]}),(0,n.jsxs)(c.F,{children:[(0,n.jsx)(u.S,{children:(0,n.jsx)(o.A,{size:"sm",variant:"light",children:"Actions"})}),(0,n.jsxs)(d.a,{children:[(0,n.jsx)(h.W,{onPress:()=>{Z(e),A()},children:"Modify"},"modify"),(0,n.jsx)(h.W,{className:"text-danger",color:"danger",onPress:()=>I(e),children:"Delete"},"delete")]})]})]},e.id))})]})}),(0,n.jsx)(f.R,{isOpen:T,onClose:M,children:(0,n.jsxs)(g.A,{children:[(0,n.jsx)(m.k,{children:R?"Modify Skill":"Add New Skill"}),(0,n.jsxs)(p.I,{children:[(0,n.jsx)(x.Y,{label:"Skill Name",value:R?R.name:N.name,onChange:e=>{R?Z({...R,name:e.target.value}):z({...N,name:e.target.value})},required:!0}),(0,n.jsx)(v.Y,{label:"Description",value:R?R.description:N.description,onChange:e=>{R?Z({...R,description:e.target.value}):z({...N,description:e.target.value})},required:!0})]}),(0,n.jsxs)(k.R,{children:[(0,n.jsx)(o.A,{color:"danger",variant:"light",onPress:M,children:"Cancel"}),(0,n.jsx)(o.A,{color:"primary",onPress:()=>{R?E(R):C()},children:R?"Modify":"Add"})]})]})})]})},w=r(47043),T=r(61915),A=r(63861);function P(){let{data:e,isLoading:t,error:r,mutate:i}=(0,A.ZP)("/skills",y.m.getAllSkills),l=async e=>{await i(),console.log("Added skill:",e)},a=async e=>{await i(),console.log("Modified skill:",e)},o=async e=>{await i(),console.log("Deleted skill:",e)};return t?(0,n.jsx)(w.Z,{}):r?(0,n.jsxs)("div",{children:["Error: ",r]}):(0,n.jsx)(T.ProtectedRoute,{children:(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("h1",{className:"text-5xl font-extrabold text-emerald-800 text-center py-8",children:"Skills Management"}),(0,n.jsx)("div",{className:"mt-12 w-full mx-auto bg-white p-6 rounded-lg shadow-md space-y-2",children:(0,n.jsx)(s.o,{className:"h-[800px] w-full",children:(0,n.jsx)("div",{className:"space-y-4 p-4",children:(0,n.jsx)(b,{skills:[...e||[]].reverse(),onAdd:l,onModify:a,onDelete:o})})})})]})})}},47043:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(57437),s=r(1377);function i(){return(0,n.jsx)("div",{className:"fixed inset-0 bg-white flex items-center justify-center z-50",children:(0,n.jsx)(s.c,{size:"lg",color:"success",label:"Loading..."})})}},61915:function(e,t,r){"use strict";r.d(t,{ProtectedRoute:function(){return o}});var n=r(57437),s=r(50835),i=r(99376),l=r(2265),a=r(47043);function o(e){let{children:t}=e,{isAuthenticated:r,user:o}=(0,s.CG)(e=>e.auth),c=(0,i.useRouter)(),u=(0,i.usePathname)(),d=["/admin","/admin/users","/admin/tasks","/admin/monitor"],{isTasker:h}=(0,s.CG)(e=>e.auth);return((0,l.useEffect)(()=>{if(r){let e=window.location.pathname;!h&&["/tasks","/taskmanage"].includes(e)&&c.replace("/becometasker")}else c.replace("/login");if(d.some(e=>u.startsWith(e))&&(null==o?void 0:o.role)!=="ADMIN"){c.replace("/");return}if((null==o?void 0:o.role)==="ADMIN"&&"/"===u){c.replace("/admin");return}},[r,o,u,c]),!r||d.some(e=>u.startsWith(e))&&(null==o?void 0:o.role)!=="ADMIN")?(0,n.jsx)(a.Z,{}):t}},11002:function(e,t,r){"use strict";r.d(t,{Dj:function(){return s},UR:function(){return a},YA:function(){return o},kS:function(){return i},uJ:function(){return l}});let n=(0,r(1455).oM)({name:"auth",initialState:{user:null,accessToken:null,refreshToken:null,isAuthenticated:!1,isTasker:!1},reducers:{setCredentials:(e,t)=>{let{user:r,token:n}=t.payload;e.user=r,e.accessToken=n.access_token,e.refreshToken=n.refresh_token,e.isAuthenticated=!0,r.tasker&&(e.isTasker=!0),localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("isTasker",e.isTasker.toString()),localStorage.setItem("accessToken",n.access_token),localStorage.setItem("refreshToken",n.refresh_token)},setisTaskers:(e,t)=>{e.isTasker=t.payload,localStorage.setItem("isTasker","true")},logout:e=>{e.user=null,e.accessToken=null,e.refreshToken=null,e.isTasker=!1,e.isAuthenticated=!1,localStorage.removeItem("user"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("isTasker")},loginFailure:e=>{console.log("Login failed"),e.isAuthenticated=!1},initializeAuth:e=>{try{let t=localStorage.getItem("user"),r=localStorage.getItem("accessToken"),n=localStorage.getItem("refreshToken"),s=localStorage.getItem("isTasker");t&&r&&n?(e.user=JSON.parse(t),e.accessToken=r,e.refreshToken=n,e.isAuthenticated=!0):e.isAuthenticated=!1,(null==s?void 0:s.toString())==="true"&&(e.isTasker="true"===s)}catch(t){console.error("Error initializing auth from localStorage:",t),e.isAuthenticated=!1}}}}),{setCredentials:s,logout:i,initializeAuth:l,loginFailure:a,setisTaskers:o}=n.actions;t.ZP=n.reducer},50835:function(e,t,r){"use strict";r.d(t,{CG:function(){return o},TL:function(){return a},h:function(){return l}});var n=r(1455),s=r(68575),i=r(11002);let l=(0,n.xC)({reducer:{auth:i.ZP},middleware:e=>e({serializableCheck:!1})}),a=s.I0,o=s.v9},82479:function(e,t,r){"use strict";r.d(t,{O:function(){return c}});var n=r(11002),s=r(50835),i=r(83464),l=r(42321),a=r(46175);class o{async register(e){try{let t=await l.Z.post("/auth/register",JSON.stringify(e));return a.ZP.success("Đăng k\xfd th\xe0nh c\xf4ng"),t.data}catch(e){throw a.ZP.error("Đăng k\xfd thất bại"),console.log(e),e}}async login(e){try{console.log("http://localhost:5000/api/auth/login");let t=await l.Z.post("/auth/login",JSON.stringify(e)),r=t.data;return s.h.dispatch((0,n.Dj)(r)),a.ZP.success("Đăng nhập th\xe0nh c\xf4ng"),t.data}catch(t){throw console.log(t),a.ZP.error("Đăng nhập thất bại"),this.handleAuthError(e),t}}async refreshToken(){if(this.refreshPromise)return this.refreshPromise;let e=this.getRefreshToken();if(!e)throw Error("No refresh token available");return this.refreshPromise=l.Z.post("/auth/refresh",{refreshToken:e}).then(e=>{let{access_token:t,refresh_token:r}=e.data;return s.h.dispatch((0,n.Dj)({user:s.h.getState().auth.user,token:{access_token:t,refresh_token:r}})),e.data}).catch(e=>{throw this.logout(),e}).finally(()=>{this.refreshPromise=null}),this.refreshPromise}async logout(){s.h.dispatch((0,n.kS)())}handleAuthError(e){if(i.Z.isAxiosError(e)){var t,r;let i=(null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||"Authentication failed";s.h.dispatch((0,n.UR)(i))}else s.h.dispatch((0,n.UR)())}getAccessToken(){return s.h.getState().auth.accessToken}getRefreshToken(){return s.h.getState().auth.refreshToken}isTokenExpired(e){if(!e)return!0;try{let t=e.split(".");if(3!==t.length)return!0;let r=JSON.parse(atob(t[1]));return Date.now()>=1e3*r.exp-3e4}catch(e){return!0}}constructor(){this.refreshPromise=null}}let c=new o},42321:function(e,t,r){"use strict";var n=r(83464),s=r(82479);let i=n.Z.create({baseURL:"http://localhost:5000/api",headers:{"Content-Type":"application/json",Accept:"application/json"},timeout:1e4});i.interceptors.request.use(async e=>{var t,r,n;let i=s.O.getAccessToken();if((null===(t=e.url)||void 0===t?void 0:t.includes("/auth/login"))||(null===(r=e.url)||void 0===r?void 0:r.includes("/auth/refresh"))||(null===(n=e.url)||void 0===n?void 0:n.includes("/auth/register")))return console.log(e),e;try{if(!i)throw Error("No access token available");if(s.O.isTokenExpired(i)){let t=await s.O.refreshToken();e.headers.Authorization="Bearer ".concat(t.access_token)}else e.headers.Authorization="Bearer ".concat(i)}catch(e){s.O.logout(),console.log(e)}return e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e,async e=>{var t;let r=e.config;if(!r||r._retry)return Promise.reject(e);if((null===(t=e.response)||void 0===t?void 0:t.status)===401&&r.url&&!r.url.includes("/auth/login")&&!r.url.includes("/auth/refresh"))try{r._retry=!0;let e=await s.O.refreshToken();return r.headers&&(r.headers.Authorization="Bearer ".concat(e.access_token)),i(r)}catch(e){return s.O.logout(),Promise.reject(e)}return Promise.reject(e)}),t.Z=i},41258:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(42321),s=r(46175);let i={async addSkill(e){try{let t=await n.Z.post("/skills",e);return s.ZP.success("Skill added successfully"),t.data}catch(e){throw s.ZP.error("Failed to add skill"),e}},async getAllSkills(){try{return(await n.Z.get("/skills")).data}catch(e){throw s.ZP.error("Failed to fetch skills"),e}},async deleteSkill(e){try{let t=await n.Z.delete("/skills/".concat(e.id));return s.ZP.success("Skill deleted successfully"),t.data}catch(e){throw s.ZP.error("Failed to delete skill"),e}},async updateSkill(e){try{let t=await n.Z.patch("/skills/".concat(e.id),e);return s.ZP.success("Skill updated successfully"),t.data}catch(e){throw s.ZP.error("Failed to update skill"),e}}}},9182:function(e,t,r){"use strict";r.d(t,{Y:function(){return N}});var n=r(79897),s=r(97765),i=r(72243),l=r(82457),a=r(2265);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var c=a.useLayoutEffect,u=function(e){var t=a.useRef(e);return c(function(){t.current=e}),t},d=function(e,t){if("function"==typeof e){e(t);return}e.current=t},h=function(e,t){var r=(0,a.useRef)();return(0,a.useCallback)(function(n){e.current=n,r.current&&d(r.current,null),r.current=t,t&&d(t,n)},[t])},f={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},g=function(e){Object.keys(f).forEach(function(t){e.style.setProperty(t,f[t],"important")})},m=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},x=function(){},v=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],k=!!document.documentElement.currentStyle,y=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=v.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;k&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var s=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:s,borderSize:i}};function j(e,t,r){var n=u(r);a.useLayoutEffect(function(){var r=function(e){return n.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var S=function(e){j(window,"resize",e)},b=function(e){j(document.fonts,"loadingdone",e)},w=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],T=a.forwardRef(function(e,t){var r=e.cacheMeasurements,n=e.maxRows,s=e.minRows,i=e.onChange,l=void 0===i?x:i,c=e.onHeightChange,u=void 0===c?x:c,d=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,w),f=void 0!==d.value,v=a.useRef(null),k=h(v,t),j=a.useRef(0),T=a.useRef(),A=function(){var e,t,i,l,a,o,c,d,h,f,x,k=v.current,S=r&&T.current?T.current:y(k);if(S){T.current=S;var b=(e=k.value||k.placeholder||"x",void 0===(t=s)&&(t=1),void 0===(i=n)&&(i=1/0),m||((m=document.createElement("textarea")).setAttribute("tabindex","-1"),m.setAttribute("aria-hidden","true"),g(m)),null===m.parentNode&&document.body.appendChild(m),l=S.paddingSize,a=S.borderSize,c=(o=S.sizingStyle).boxSizing,Object.keys(o).forEach(function(e){m.style[e]=o[e]}),g(m),m.value=e,d=p(m,S),m.value=e,d=p(m,S),m.value="x",f=(h=m.scrollHeight-l)*t,"border-box"===c&&(f=f+l+a),d=Math.max(f,d),x=h*i,"border-box"===c&&(x=x+l+a),[d=Math.min(x,d),h]),w=b[0],A=b[1];j.current!==w&&(j.current=w,k.style.setProperty("height",w+"px","important"),u(w,{rowHeight:A}))}};return a.useLayoutEffect(A),S(A),b(A),a.createElement("textarea",o({},d,{onChange:function(e){f||A(),l(e)},ref:k}))}),A=r(57437),P=(0,i.Gp)((e,t)=>{let{style:r,minRows:i=3,maxRows:o=8,cacheMeasurements:c=!1,disableAutosize:u=!1,onHeightChange:d,...h}=e,{Component:f,label:g,description:m,startContent:p,endContent:x,hasHelper:v,shouldLabelBeOutside:k,shouldLabelBeInside:y,isInvalid:j,errorMessage:S,getBaseProps:b,getLabelProps:w,getInputProps:P,getInnerWrapperProps:N,getInputWrapperProps:z,getHelperWrapperProps:R,getDescriptionProps:Z,getErrorMessageProps:C}=(0,n.G)({...h,ref:t,isMultiline:!0}),[E,I]=(0,a.useState)(i>1),[M,O]=(0,a.useState)(!1),F=g?(0,A.jsx)("label",{...w(),children:g}):null,_=P(),L=u?(0,A.jsx)("textarea",{..._,style:(0,l.d)(_.style,null!=r?r:{})}):(0,A.jsx)(T,{..._,cacheMeasurements:c,"data-hide-scroll":(0,s.PB)(!M),maxRows:o,minRows:i,style:(0,l.d)(_.style,null!=r?r:{}),onHeightChange:(e,t)=>{1===i&&I(e>=2*t.rowHeight),o>i&&O(e>=o*t.rowHeight),null==d||d(e,t)}}),W=(0,a.useMemo)(()=>p||x?(0,A.jsxs)("div",{...N(),children:[p,L,x]}):(0,A.jsx)("div",{...N(),children:L}),[p,_,x,N]);return(0,A.jsxs)(f,{...b(),children:[k?F:null,(0,A.jsxs)("div",{...z(),"data-has-multiple-rows":(0,s.PB)(E),children:[y?F:null,W]}),v?(0,A.jsx)("div",{...R(),children:j&&S?(0,A.jsx)("div",{...C(),children:S}):m?(0,A.jsx)("div",{...Z(),children:m}):null}):null]})});P.displayName="NextUI.Textarea";var N=P},42228:function(e,t,r){"use strict";r.d(t,{Y:function(){return c}});var n=r(79897),s=r(93253),i=r(2265),l=r(72243),a=r(57437),o=(0,l.Gp)((e,t)=>{let{Component:r,label:l,description:o,isClearable:c,startContent:u,endContent:d,labelPlacement:h,hasHelper:f,isOutsideLeft:g,shouldLabelBeOutside:m,errorMessage:p,isInvalid:x,getBaseProps:v,getLabelProps:k,getInputProps:y,getInnerWrapperProps:j,getInputWrapperProps:S,getMainWrapperProps:b,getHelperWrapperProps:w,getDescriptionProps:T,getErrorMessageProps:A,getClearButtonProps:P}=(0,n.G)({...e,ref:t}),N=l?(0,a.jsx)("label",{...k(),children:l}):null,z=(0,i.useMemo)(()=>c?(0,a.jsx)("span",{...P(),children:d||(0,a.jsx)(s.f,{})}):d,[c,P]),R=(0,i.useMemo)(()=>f?(0,a.jsx)("div",{...w(),children:x&&p?(0,a.jsx)("div",{...A(),children:p}):o?(0,a.jsx)("div",{...T(),children:o}):null}):null,[f,x,p,o,w,A,T]),Z=(0,i.useMemo)(()=>(0,a.jsxs)("div",{...j(),children:[u,(0,a.jsx)("input",{...y()}),z]}),[u,z,y,j]),C=(0,i.useMemo)(()=>m?(0,a.jsxs)("div",{...b(),children:[(0,a.jsxs)("div",{...S(),children:[g?null:N,Z]}),R]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{...S(),children:[N,Z]}),R]}),[h,R,m,N,Z,p,o,b,S,A,T]);return(0,a.jsxs)(r,{...v(),children:[g?N:null,C]})});o.displayName="NextUI.Input";var c=o},93253:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var n=r(57437),s=e=>(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,n.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})})}},function(e){e.O(0,[707,7405,4218,8187,2952,1554,8083,6175,3464,9897,9863,4721,4958,9136,9062,3343,1708,2971,2117,1744],function(){return e(e.s=80433)}),_N_E=e.O()}]);