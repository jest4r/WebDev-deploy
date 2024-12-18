(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7881],{36931:function(e,t,r){Promise.resolve().then(r.bind(r,63294)),Promise.resolve().then(r.bind(r,61915))},47043:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(57437),a=r(1377);function s(){return(0,n.jsx)("div",{className:"fixed inset-0 bg-white flex items-center justify-center z-50",children:(0,n.jsx)(a.c,{size:"lg",color:"success",label:"Loading..."})})}},63294:function(e,t,r){"use strict";r.d(t,{default:function(){return S}});var n=r(57437),a=r(2265),s=r(99376),i=r(4922),o=r(49365),l=r(86712),c=r(99008),u=r(20847),d=r(19409),h=r(9182),f=r(65349),g=r(99394),p=r(13595),m=r(46175),v=r(42321),k=r(11002),x=r(50835);let y={async create(e){try{let t=await v.Z.post("/taskers",e);return x.h.dispatch((0,k.YA)(!0)),m.ZP.success("Bạn đ\xe3 trở th\xe0nh Tasker"),t.data}catch(e){throw console.log(e),m.ZP.error("Đăng k\xed Tasker thất bại"),e}}};var b=r(41258),S=()=>{let[e]=(0,a.useState)({skillIds:[],work_area:[],experience:""}),t=(0,s.useRouter)(),r=e=>{A(e.split(",").map(Number))},m=e=>{j(e.split(",").map(Number))},v=async e=>{e.preventDefault();let r=await y.create({skillIds:z,work_area:w,experience:Z});t.push("/taskmanage"),console.log(r)},[k,S]=(0,a.useState)([]),[w,j]=(0,a.useState)([]),[T,P]=(0,a.useState)(!0),[N,R]=(0,a.useState)([]),[z,A]=(0,a.useState)([]),[Z,C]=(0,a.useState)(""),{isTasker:I}=(0,x.CG)(e=>e.auth);(0,a.useEffect)(()=>(E(),O(),I&&t.push("/taskmanage"),P(!1),console.log(I),()=>{P(!1)}),[I,t]);let E=async()=>{try{let e=await fetch("https://provinces.open-api.vn/api/p/01?depth=2"),t=await e.json();S(t.districts)}catch(e){console.error(e)}},O=async()=>{R(await b.m.getAllSkills())};return(0,n.jsxs)("div",{className:"relative flex justify-center items-center min-h-screen",children:[(0,n.jsx)(p.Z,{imageUrl:"./img/becometasker.jpg"}),(0,n.jsxs)(i.w,{className:"top-1/2 left-1/2 z-10 absolute p-8 w-full max-w-2xl transform -translate-x-1/2 -translate-y-1/2",children:[(0,n.jsxs)(o.u,{className:"flex flex-col gap-3 pt-2 pb-2",children:[(0,n.jsx)("h1",{className:"font-extrabold text-4xl",children:"Become a Tasker"}),(0,n.jsx)("p",{className:"text-gray-600 text-sm",children:"Be flexible, Be helpful"}),(0,n.jsx)(l.j,{orientation:"horizontal",className:"rounded-t-lg"})]}),(0,n.jsxs)("form",{onSubmit:v,children:[(0,n.jsxs)(c.G,{className:"gap-4",children:[(0,n.jsx)(u.g,{label:"Choose your job",placeholder:"Select your skill",value:Array.from(new Set(e.skillIds.map(String))),isRequired:!0,selectionMode:"multiple",onChange:e=>r(e.target.value),className:"text-lg",children:N.map(e=>(0,n.jsx)(d.R,{value:e.id,children:e.name},e.id))}),(0,n.jsx)(u.g,{label:"Choose your work area",placeholder:"Choose district",value:Array.from(new Set(e.work_area.map(String))),isRequired:!0,selectionMode:"multiple",variant:"faded",isLoading:T,onChange:e=>m(e.target.value),children:k.map(e=>(0,n.jsx)(d.R,{value:e.code,children:e.name},e.code))}),(0,n.jsx)(h.Y,{label:"Experience",placeholder:"Describe your experience",value:Z,onChange:e=>C(e.target.value),className:"text-lg"})]}),(0,n.jsx)(f.i,{children:(0,n.jsx)(g.A,{type:"submit",color:"primary",variant:"solid",fullWidth:!0,size:"lg",children:"Submit"})})]})]})]})}},13595:function(e,t,r){"use strict";var n=r(57437);r(2265),t.Z=e=>{let{imageUrl:t="/img/back.png"}=e;return(0,n.jsx)("div",{className:"flex inset-2 z-0 w-full min-h-screen",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:.5}})}},61915:function(e,t,r){"use strict";r.d(t,{ProtectedRoute:function(){return l}});var n=r(57437),a=r(50835),s=r(99376),i=r(2265),o=r(47043);function l(e){let{children:t}=e,{isAuthenticated:r,user:l}=(0,a.CG)(e=>e.auth),c=(0,s.useRouter)(),u=(0,s.usePathname)(),d=["/admin","/admin/users","/admin/tasks","/admin/monitor"],{isTasker:h}=(0,a.CG)(e=>e.auth);return((0,i.useEffect)(()=>{if(r){let e=window.location.pathname;!h&&["/tasks","/taskmanage"].includes(e)&&c.replace("/becometasker")}else c.replace("/login");if(d.some(e=>u.startsWith(e))&&(null==l?void 0:l.role)!=="ADMIN"){c.replace("/");return}if((null==l?void 0:l.role)==="ADMIN"&&"/"===u){c.replace("/admin");return}},[r,l,u,c]),!r||d.some(e=>u.startsWith(e))&&(null==l?void 0:l.role)!=="ADMIN")?(0,n.jsx)(o.Z,{}):t}},11002:function(e,t,r){"use strict";r.d(t,{Dj:function(){return a},UR:function(){return o},YA:function(){return l},kS:function(){return s},uJ:function(){return i}});let n=(0,r(1455).oM)({name:"auth",initialState:{user:null,accessToken:null,refreshToken:null,isAuthenticated:!1,isTasker:!1},reducers:{setCredentials:(e,t)=>{let{user:r,token:n}=t.payload;e.user=r,e.accessToken=n.access_token,e.refreshToken=n.refresh_token,e.isAuthenticated=!0,r.tasker&&(e.isTasker=!0),localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("isTasker",e.isTasker.toString()),localStorage.setItem("accessToken",n.access_token),localStorage.setItem("refreshToken",n.refresh_token)},setisTaskers:(e,t)=>{e.isTasker=t.payload,localStorage.setItem("isTasker","true")},logout:e=>{e.user=null,e.accessToken=null,e.refreshToken=null,e.isTasker=!1,e.isAuthenticated=!1,localStorage.removeItem("user"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("isTasker")},loginFailure:e=>{console.log("Login failed"),e.isAuthenticated=!1},initializeAuth:e=>{try{let t=localStorage.getItem("user"),r=localStorage.getItem("accessToken"),n=localStorage.getItem("refreshToken"),a=localStorage.getItem("isTasker");t&&r&&n?(e.user=JSON.parse(t),e.accessToken=r,e.refreshToken=n,e.isAuthenticated=!0):e.isAuthenticated=!1,(null==a?void 0:a.toString())==="true"&&(e.isTasker="true"===a)}catch(t){console.error("Error initializing auth from localStorage:",t),e.isAuthenticated=!1}}}}),{setCredentials:a,logout:s,initializeAuth:i,loginFailure:o,setisTaskers:l}=n.actions;t.ZP=n.reducer},50835:function(e,t,r){"use strict";r.d(t,{CG:function(){return l},TL:function(){return o},h:function(){return i}});var n=r(1455),a=r(68575),s=r(11002);let i=(0,n.xC)({reducer:{auth:s.ZP},middleware:e=>e({serializableCheck:!1})}),o=a.I0,l=a.v9},82479:function(e,t,r){"use strict";r.d(t,{O:function(){return c}});var n=r(11002),a=r(50835),s=r(83464),i=r(42321),o=r(46175);class l{async register(e){try{let t=await i.Z.post("/auth/register",JSON.stringify(e));return o.ZP.success("Đăng k\xfd th\xe0nh c\xf4ng"),t.data}catch(e){throw o.ZP.error("Đăng k\xfd thất bại"),console.log(e),e}}async login(e){try{console.log("http://localhost:5000/api/auth/login");let t=await i.Z.post("/auth/login",JSON.stringify(e)),r=t.data;return a.h.dispatch((0,n.Dj)(r)),o.ZP.success("Đăng nhập th\xe0nh c\xf4ng"),t.data}catch(t){throw console.log(t),o.ZP.error("Đăng nhập thất bại"),this.handleAuthError(e),t}}async refreshToken(){if(this.refreshPromise)return this.refreshPromise;let e=this.getRefreshToken();if(!e)throw Error("No refresh token available");return this.refreshPromise=i.Z.post("/auth/refresh",{refreshToken:e}).then(e=>{let{access_token:t,refresh_token:r}=e.data;return a.h.dispatch((0,n.Dj)({user:a.h.getState().auth.user,token:{access_token:t,refresh_token:r}})),e.data}).catch(e=>{throw this.logout(),e}).finally(()=>{this.refreshPromise=null}),this.refreshPromise}async logout(){a.h.dispatch((0,n.kS)())}handleAuthError(e){if(s.Z.isAxiosError(e)){var t,r;let s=(null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||"Authentication failed";a.h.dispatch((0,n.UR)(s))}else a.h.dispatch((0,n.UR)())}getAccessToken(){return a.h.getState().auth.accessToken}getRefreshToken(){return a.h.getState().auth.refreshToken}isTokenExpired(e){if(!e)return!0;try{let t=e.split(".");if(3!==t.length)return!0;let r=JSON.parse(atob(t[1]));return Date.now()>=1e3*r.exp-3e4}catch(e){return!0}}constructor(){this.refreshPromise=null}}let c=new l},42321:function(e,t,r){"use strict";var n=r(83464),a=r(82479);let s=n.Z.create({baseURL:"http://localhost:5000/api",headers:{"Content-Type":"application/json",Accept:"application/json"},timeout:1e4});s.interceptors.request.use(async e=>{var t,r,n;let s=a.O.getAccessToken();if((null===(t=e.url)||void 0===t?void 0:t.includes("/auth/login"))||(null===(r=e.url)||void 0===r?void 0:r.includes("/auth/refresh"))||(null===(n=e.url)||void 0===n?void 0:n.includes("/auth/register")))return console.log(e),e;try{if(!s)throw Error("No access token available");if(a.O.isTokenExpired(s)){let t=await a.O.refreshToken();e.headers.Authorization="Bearer ".concat(t.access_token)}else e.headers.Authorization="Bearer ".concat(s)}catch(e){a.O.logout(),console.log(e)}return e},e=>Promise.reject(e)),s.interceptors.response.use(e=>e,async e=>{var t;let r=e.config;if(!r||r._retry)return Promise.reject(e);if((null===(t=e.response)||void 0===t?void 0:t.status)===401&&r.url&&!r.url.includes("/auth/login")&&!r.url.includes("/auth/refresh"))try{r._retry=!0;let e=await a.O.refreshToken();return r.headers&&(r.headers.Authorization="Bearer ".concat(e.access_token)),s(r)}catch(e){return a.O.logout(),Promise.reject(e)}return Promise.reject(e)}),t.Z=s},41258:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});var n=r(42321),a=r(46175);let s={async addSkill(e){try{let t=await n.Z.post("/skills",e);return a.ZP.success("Skill added successfully"),t.data}catch(e){throw a.ZP.error("Failed to add skill"),e}},async getAllSkills(){try{return(await n.Z.get("/skills")).data}catch(e){throw a.ZP.error("Failed to fetch skills"),e}},async deleteSkill(e){try{let t=await n.Z.delete("/skills/".concat(e.id));return a.ZP.success("Skill deleted successfully"),t.data}catch(e){throw a.ZP.error("Failed to delete skill"),e}},async updateSkill(e){try{let t=await n.Z.patch("/skills/".concat(e.id),e);return a.ZP.success("Skill updated successfully"),t.data}catch(e){throw a.ZP.error("Failed to update skill"),e}}}},49365:function(e,t,r){"use strict";r.d(t,{u:function(){return c}});var n=r(53921),a=r(72243),s=r(88160),i=r(46763),o=r(57437),l=(0,a.Gp)((e,t)=>{var r;let{as:a,className:l,children:c,...u}=e,d=(0,s.gy)(t),{slots:h,classNames:f}=(0,n.R)(),g=(0,i.W)(null==f?void 0:f.header,l);return(0,o.jsx)(a||"div",{ref:d,className:null==(r=h.header)?void 0:r.call(h,{class:g}),...u,children:c})});l.displayName="NextUI.CardHeader";var c=l},65349:function(e,t,r){"use strict";r.d(t,{i:function(){return c}});var n=r(53921),a=r(72243),s=r(88160),i=r(46763),o=r(57437),l=(0,a.Gp)((e,t)=>{var r;let{as:a,className:l,children:c,...u}=e,d=(0,s.gy)(t),{slots:h,classNames:f}=(0,n.R)(),g=(0,i.W)(null==f?void 0:f.footer,l);return(0,o.jsx)(a||"div",{ref:d,className:null==(r=h.footer)?void 0:r.call(h,{class:g}),...u,children:c})});l.displayName="NextUI.CardFooter";var c=l},9182:function(e,t,r){"use strict";r.d(t,{Y:function(){return R}});var n=r(79897),a=r(97765),s=r(72243),i=r(82457),o=r(2265);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var c=o.useLayoutEffect,u=function(e){var t=o.useRef(e);return c(function(){t.current=e}),t},d=function(e,t){if("function"==typeof e){e(t);return}e.current=t},h=function(e,t){var r=(0,o.useRef)();return(0,o.useCallback)(function(n){e.current=n,r.current&&d(r.current,null),r.current=t,t&&d(t,n)},[t])},f={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},g=function(e){Object.keys(f).forEach(function(t){e.style.setProperty(t,f[t],"important")})},p=null,m=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},v=function(){},k=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],x=!!document.documentElement.currentStyle,y=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=k.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;x&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),s=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:s}};function b(e,t,r){var n=u(r);o.useLayoutEffect(function(){var r=function(e){return n.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var S=function(e){b(window,"resize",e)},w=function(e){b(document.fonts,"loadingdone",e)},j=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],T=o.forwardRef(function(e,t){var r=e.cacheMeasurements,n=e.maxRows,a=e.minRows,s=e.onChange,i=void 0===s?v:s,c=e.onHeightChange,u=void 0===c?v:c,d=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,j),f=void 0!==d.value,k=o.useRef(null),x=h(k,t),b=o.useRef(0),T=o.useRef(),P=function(){var e,t,s,i,o,l,c,d,h,f,v,x=k.current,S=r&&T.current?T.current:y(x);if(S){T.current=S;var w=(e=x.value||x.placeholder||"x",void 0===(t=a)&&(t=1),void 0===(s=n)&&(s=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),g(p)),null===p.parentNode&&document.body.appendChild(p),i=S.paddingSize,o=S.borderSize,c=(l=S.sizingStyle).boxSizing,Object.keys(l).forEach(function(e){p.style[e]=l[e]}),g(p),p.value=e,d=m(p,S),p.value=e,d=m(p,S),p.value="x",f=(h=p.scrollHeight-i)*t,"border-box"===c&&(f=f+i+o),d=Math.max(f,d),v=h*s,"border-box"===c&&(v=v+i+o),[d=Math.min(v,d),h]),j=w[0],P=w[1];b.current!==j&&(b.current=j,x.style.setProperty("height",j+"px","important"),u(j,{rowHeight:P}))}};return o.useLayoutEffect(P),S(P),w(P),o.createElement("textarea",l({},d,{onChange:function(e){f||P(),i(e)},ref:x}))}),P=r(57437),N=(0,s.Gp)((e,t)=>{let{style:r,minRows:s=3,maxRows:l=8,cacheMeasurements:c=!1,disableAutosize:u=!1,onHeightChange:d,...h}=e,{Component:f,label:g,description:p,startContent:m,endContent:v,hasHelper:k,shouldLabelBeOutside:x,shouldLabelBeInside:y,isInvalid:b,errorMessage:S,getBaseProps:w,getLabelProps:j,getInputProps:N,getInnerWrapperProps:R,getInputWrapperProps:z,getHelperWrapperProps:A,getDescriptionProps:Z,getErrorMessageProps:C}=(0,n.G)({...h,ref:t,isMultiline:!0}),[I,E]=(0,o.useState)(s>1),[O,_]=(0,o.useState)(!1),F=g?(0,P.jsx)("label",{...j(),children:g}):null,B=N(),L=u?(0,P.jsx)("textarea",{...B,style:(0,i.d)(B.style,null!=r?r:{})}):(0,P.jsx)(T,{...B,cacheMeasurements:c,"data-hide-scroll":(0,a.PB)(!O),maxRows:l,minRows:s,style:(0,i.d)(B.style,null!=r?r:{}),onHeightChange:(e,t)=>{1===s&&E(e>=2*t.rowHeight),l>s&&_(e>=l*t.rowHeight),null==d||d(e,t)}}),W=(0,o.useMemo)(()=>m||v?(0,P.jsxs)("div",{...R(),children:[m,L,v]}):(0,P.jsx)("div",{...R(),children:L}),[m,B,v,R]);return(0,P.jsxs)(f,{...w(),children:[x?F:null,(0,P.jsxs)("div",{...z(),"data-has-multiple-rows":(0,a.PB)(I),children:[y?F:null,W]}),k?(0,P.jsx)("div",{...A(),children:b&&S?(0,P.jsx)("div",{...C(),children:S}):p?(0,P.jsx)("div",{...Z(),children:p}):null}):null]})});N.displayName="NextUI.Textarea";var R=N}},function(e){e.O(0,[707,7405,4218,8187,2952,1554,8083,6175,3464,9897,9863,4721,4958,3522,2971,2117,1744],function(){return e(e.s=36931)}),_N_E=e.O()}]);