(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{29189:function(e,t,r){Promise.resolve().then(r.bind(r,25890))},19829:function(e,t,r){"use strict";let s=r(83464).Z.create({baseURL:"https://booking-labor-be.onrender.com/",timeout:1e4,headers:{"Content-Type":"application/json"}});s.interceptors.request.use(e=>{let t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),s.interceptors.response.use(e=>e,e=>(e.response?console.error("API Error:",e.response.data):console.error("Network Error:",e.message),Promise.reject(e))),t.Z=s},22099:function(e,t,r){"use strict";t.Z={USERS:"".concat("","/users"),AUTH_LOGIN:"".concat("","/auth/login"),AUTH_REGISTER:"".concat("","/auth/register")}},25890:function(e,t,r){"use strict";var s=r(57437),a=r(2265),o=r(99376),n=r(3932),l=r(49365),i=r(86712),u=r(99008),c=r(42228),d=r(65349),b=r(79418),m=r(42208),h=r(87769),f=r(13595),p=r(19829),g=r(22099),x=r(50835),v=r(11002);t.default=()=>{let e=(0,x.TL)(),[t,r]=(0,a.useState)({email:"",password:"",rememberMe:!1}),[k,w]=(0,a.useState)(!1),y=(0,o.useRouter)(),j=async r=>{r.preventDefault();try{let r=t.email,s=t.password,a=await p.Z.post(g.Z.AUTH_LOGIN,{email:r,password:s}),{user:o,token:n}=a.data;console.log(a.data);let l={id:o.id,email:o.email,fullname:o.fullname,gender:o.gender,date_of_birth:o.date_of_birth};e((0,v.Dj)({user:l,accessToken:n.access_token,refreshToken:n.refresh_token})),alert("Đăng nhập th\xe0nh c\xf4ng"),y.push("/")}catch(e){console.error("Error logging in:",e)}};return(0,s.jsxs)("div",{className:"relative flex min-h-screen items-center justify-center",children:[(0,s.jsx)(f.Z,{}),(0,s.jsxs)(n.w,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-8 z-10",children:[(0,s.jsxs)(l.u,{className:"flex flex-col gap-3 pb-2 pt-2",children:[(0,s.jsx)("h1",{className:"text-4xl font-extrabold",children:"Login"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Welcome back! Please enter your details."}),(0,s.jsx)(i.j,{orientation:"horizontal",className:"rounded-t-lg"})]}),(0,s.jsxs)("form",{onSubmit:j,children:[(0,s.jsxs)(u.G,{className:"gap-4",children:[(0,s.jsx)(c.Y,{label:"Email",type:"email",placeholder:"Enter your email",value:t.email,onChange:e=>r({...t,email:e.target.value}),required:!0}),(0,s.jsx)(c.Y,{label:"Password",placeholder:"Enter your password",endContent:(0,s.jsx)("button",{type:"button",onClick:()=>{w(!k)},children:k?(0,s.jsx)(m.Z,{className:"w-5 h-5 text-gray-400"}):(0,s.jsx)(h.Z,{className:"w-5 h-5 text-gray-400"})}),type:k?"text":"password",value:t.password,onChange:e=>r({...t,password:e.target.value}),required:!0}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:t.rememberMe,onChange:e=>r({...t,rememberMe:e.target.checked}),className:"rounded border-gray-300"}),(0,s.jsx)("span",{className:"text-sm",children:"Remember me"})]}),(0,s.jsx)("p",{onClick:()=>y.push("/forgotpassword"),className:"text-blue-500 hover:text-blue-700 cursor-pointer",children:"Forgot password?"})]})]}),(0,s.jsxs)(d.i,{className:"flex flex-col gap-4",children:[(0,s.jsx)(b.A,{type:"submit",color:"primary",variant:"solid",fullWidth:!0,size:"lg",children:"Login"}),(0,s.jsxs)("p",{onClick:()=>y.push("/"),className:"flex items-center gap-2 text-sm text-gray-600 cursor-pointer",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),"Back to Home"]}),(0,s.jsxs)("p",{className:"text-center text-sm text-gray-600",children:["Don't have an account?"," ",(0,s.jsx)("span",{onClick:()=>y.push("/register"),className:"text-blue-500 hover:text-blue-700 cursor-pointer",children:"Register here"})]})]})]})]})]})}},13595:function(e,t,r){"use strict";var s=r(57437);r(2265),t.Z=e=>{let{imageUrl:t="/img/back.png"}=e;return(0,s.jsx)("div",{className:"flex inset-2 z-0 w-full min-h-screen",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:.5}})}},11002:function(e,t,r){"use strict";r.d(t,{Dj:function(){return a},kS:function(){return o},uJ:function(){return n}});let s=(0,r(1455).oM)({name:"auth",initialState:{user:null,accessToken:null,refreshToken:null,isAuthenticated:!1},reducers:{setCredentials:(e,t)=>{let{user:r,accessToken:s,refreshToken:a}=t.payload;e.user=r,e.accessToken=s,e.refreshToken=a,e.isAuthenticated=!0,localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("accessToken",s),localStorage.setItem("refreshToken",a)},logout:e=>{e.user=null,e.accessToken=null,e.refreshToken=null,e.isAuthenticated=!1,localStorage.removeItem("user"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")},initializeAuth:e=>{let t=localStorage.getItem("user"),r=localStorage.getItem("accessToken"),s=localStorage.getItem("refreshToken");t&&r&&s&&(e.user=JSON.parse(t),e.accessToken=r,e.refreshToken=s,e.isAuthenticated=!0)}}}),{setCredentials:a,logout:o,initializeAuth:n}=s.actions;t.ZP=s.reducer},50835:function(e,t,r){"use strict";r.d(t,{CG:function(){return i},TL:function(){return l},h:function(){return n}});var s=r(1455),a=r(68575),o=r(11002);let n=(0,s.xC)({reducer:{auth:o.ZP},middleware:e=>e({serializableCheck:!1})}),l=a.I0,i=a.v9},99008:function(e,t,r){"use strict";r.d(t,{G:function(){return u}});var s=r(53921),a=r(72243),o=r(88160),n=r(46763),l=r(57437),i=(0,a.Gp)((e,t)=>{var r;let{as:a,className:i,children:u,...c}=e,d=(0,o.gy)(t),{slots:b,classNames:m}=(0,s.R)(),h=(0,n.W)(null==m?void 0:m.body,i);return(0,l.jsx)(a||"div",{ref:d,className:null==(r=b.body)?void 0:r.call(b,{class:h}),...c,children:u})});i.displayName="NextUI.CardBody";var u=i},3932:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var s=r(53921),a=r(74101),o=r(72243),n=r(78974),l=r(57437),i=(0,o.Gp)((e,t)=>{let{children:r,context:o,Component:i,isPressable:u,disableAnimation:c,disableRipple:d,getCardProps:b,getRippleProps:m}=(0,a.n)({...e,ref:t});return(0,l.jsxs)(i,{...b(),children:[(0,l.jsx)(s.k,{value:o,children:r}),u&&!c&&!d&&(0,l.jsx)(n.L,{...m()})]})});i.displayName="NextUI.Card";var u=i},74101:function(e,t,r){"use strict";r.d(t,{n:function(){return k}});var s=r(12813),a=r(18373),o=(0,s.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...a.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}}),n=r(2265),l=r(62319),i=r(82457),u=r(73709),c=r(11323),d=r(6422),b=r(2646),m=r(72243),h=r(46763),f=r(68658),p=r(97765),g=r(27246),x=r(88160),v=r(62577);function k(e){var t,r,s,a;let k=(0,b.w)(),[w,y]=(0,m.oe)(e,o.variantKeys),{ref:j,as:N,children:C,onClick:P,onPress:T,autoFocus:S,className:I,classNames:A,allowTextSelectionOnPress:D=!0,...z}=w,B=(0,x.gy)(j),_=N||(e.isPressable?"button":"div"),R="string"==typeof _,E=null!=(r=null!=(t=e.disableAnimation)?t:null==k?void 0:k.disableAnimation)&&r,W=null!=(a=null!=(s=e.disableRipple)?s:null==k?void 0:k.disableRipple)&&a,Z=(0,h.W)(null==A?void 0:A.base,I),{onClick:H,onClear:G,ripples:L}=(0,v.i)(),M=e=>{E||W||!B.current||H(e)},{buttonProps:U,isPressed:F}=(0,d.j)({onPress:T,elementType:N,isDisabled:!e.isPressable,onClick:(0,l.t)(P,M),allowTextSelectionOnPress:D,...z},B),{hoverProps:O,isHovered:q}=(0,c.X)({isDisabled:!e.isHoverable,...z}),{isFocusVisible:J,isFocused:V,focusProps:X}=(0,u.F)({autoFocus:S}),Y=(0,n.useMemo)(()=>o({...y,disableAnimation:E}),[(0,f.Xx)(y),E]),$=(0,n.useMemo)(()=>({slots:Y,classNames:A,disableAnimation:E,isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,fullWidth:e.fullWidth}),[Y,A,e.isDisabled,e.isFooterBlurred,E,e.fullWidth]),K=(0,n.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:B,className:Y.base({class:Z}),tabIndex:e.isPressable?0:-1,"data-hover":(0,p.PB)(q),"data-pressed":(0,p.PB)(F),"data-focus":(0,p.PB)(V),"data-focus-visible":(0,p.PB)(J),"data-disabled":(0,p.PB)(e.isDisabled),...(0,i.d)(e.isPressable?{...U,...X,role:"button"}:{},e.isHoverable?O:{},(0,g.z)(z,{enabled:R}),(0,g.z)(t))}},[B,Y,Z,R,e.isPressable,e.isHoverable,e.isDisabled,q,F,J,U,X,O,z]),Q=(0,n.useCallback)(()=>({ripples:L,onClear:G}),[L,G]);return{context:$,domRef:B,Component:_,classNames:A,children:C,isHovered:q,isPressed:F,disableAnimation:E,isPressable:e.isPressable,isHoverable:e.isHoverable,disableRipple:W,handleClick:M,isFocusVisible:J,getCardProps:K,getRippleProps:Q}}},53921:function(e,t,r){"use strict";r.d(t,{R:function(){return a},k:function(){return s}});var[s,a]=(0,r(40280).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},86712:function(e,t,r){"use strict";r.d(t,{j:function(){return u}});var s=r(27246),a=(0,r(12813).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),o=r(2265),n=r(72243),l=r(57437),i=(0,n.Gp)((e,t)=>{let{Component:r,getDividerProps:n}=function(e){var t;let r,n;let{as:l,className:i,orientation:u,...c}=e,d=l||"hr";"hr"===d&&"vertical"===u&&(d="div");let{separatorProps:b}=(t={elementType:"string"==typeof d?d:"hr",orientation:u},n=(0,s.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...n,role:"separator","aria-orientation":r}}:{separatorProps:n}),m=(0,o.useMemo)(()=>a({orientation:u,className:i}),[u,i]);return{Component:d,getDividerProps:(0,o.useCallback)((e={})=>({className:m,role:"separator","data-orientation":u,...b,...c,...e}),[m,u,b,c])}}({...e});return(0,l.jsx)(r,{ref:t,...n()})});i.displayName="NextUI.Divider";var u=i},45614:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var s=r(2265);function a(e,t,r){let[a,o]=(0,s.useState)(e||t),n=(0,s.useRef)(void 0!==e),l=void 0!==e;(0,s.useEffect)(()=>{let e=n.current;e!==l&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}.`),n.current=l},[l]);let i=l?e:a,u=(0,s.useCallback)((e,...t)=>{let s=(e,...t)=>{r&&!Object.is(i,e)&&r(e,...t),l||(i=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),o((r,...a)=>{let o=e(l?i:r,...a);return(s(o,...t),l)?r:o})):(l||o(e),s(e,...t))},[l,i,r]);return[i,u]}}},function(e){e.O(0,[3575,8584,231,2228,1932,9081,2971,2117,1744],function(){return e(e.s=29189)}),_N_E=e.O()}]);