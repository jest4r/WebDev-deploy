(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4178],{90910:function(e,s,t){Promise.resolve().then(t.bind(t,1380))},1380:function(e,s,t){"use strict";t.r(s);var a=t(57437),l=t(3586),i=t.n(l),n=t(79418),c=t(26436),r=t(2265),d=t(99376),o=t(3803),x=t(70273),m=t(44941),u=t(1077);s.default=()=>{let[e,s]=(0,r.useState)(null),t=(0,d.useRouter)();return(0,a.jsxs)("div",{className:"flex flex-col items-center p-4 min-h-screen bg-gray-100",children:[(0,a.jsxs)("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-md p-12 w-full bg-white shadow-sm",children:[(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h1",{className:"".concat(i().className," text-4xl text-green-500 font-semibold"),children:"MY PROFILE"}),(0,a.jsx)(n.A,{radius:"md",color:"success",variant:"solid",className:"".concat(i().className," text-lg text-white flex items-center space-x-4 justify-between gap-x-2"),onClick:()=>t.push("./profile/tasker"),children:"Change to Tasker Profile"})]}),(0,a.jsx)("div",{className:"flex justify-center mb-8",children:(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)(c.Z,{avatarUrl:e,onFileSelect:e=>{s(URL.createObjectURL(e))}})})}),(0,a.jsx)(x.Z,{type:"text",label:"Name",defaultValue:"Jeremy Truong"}),(0,a.jsx)(x.Z,{type:"email",label:"Email",defaultValue:"jeremytruong0204@gmail.com"}),(0,a.jsx)(x.Z,{type:"password",label:"Password",defaultValue:"mypassword"}),(0,a.jsx)(x.Z,{type:"mobile",label:"Phone"}),(0,a.jsx)(x.Z,{type:"text",label:"Address"}),(0,a.jsx)(x.Z,{type:"text",label:"Country"})]}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-end mb-6 space-x-4",children:[(0,a.jsx)(n.A,{radius:"md",color:"danger",variant:"bordered",className:"".concat(i().className," text-lg text-red-600 flex items-center space-x-4 justify-between gap-x-2"),children:"Delete Profile"}),(0,a.jsx)(n.A,{radius:"md",color:"success",variant:"solid",className:"".concat(i().className," text-lg text-white flex items-center space-x-4 justify-between gap-x-2"),onClick:()=>{t.push("./")},children:"Save Changes"})]}),(0,a.jsx)(x.Z,{type:"text",label:"Gender"}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4",children:(0,a.jsx)(x.Z,{type:"date",label:"Date"})}),(0,a.jsx)(x.Z,{type:"link",label:"Social Media"}),(0,a.jsx)(u.Z,{type:"text",label:"Description"}),(0,a.jsx)(u.Z,{type:"text",label:"Requirements"}),(0,a.jsx)(x.Z,{type:"money",label:"Expected Fee"}),(0,a.jsx)(m.Z,{label:"Payment method",options:[{value:"credit_card",label:"Credit Card"},{value:"pay_pal",label:"PayPal"},{value:"bank_transfer",label:"Bank Transfer"},{value:"cash",label:"Cash"}],defaultValue:""})]})]}),(0,a.jsxs)("div",{className:"mt-12 w-full mx-auto bg-white p-6 rounded-lg shadow-md",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4 text-center text-black",children:"TASKER REVIEWS"}),(0,a.jsx)(o.Z,{})]})]})}},26436:function(e,s,t){"use strict";var a=t(57437),l=t(23179),i=t(53581),n=t(2265);s.Z=e=>{let{avatarUrl:s,onFileSelect:t}=e,c=(0,n.useRef)(null);return(0,a.jsxs)("div",{className:"relative group",children:[(0,a.jsx)(l.h,{className:"w-32 h-32",showFallback:!0,src:s||void 0}),(0,a.jsx)("button",{onClick:()=>{var e;null===(e=c.current)||void 0===e||e.click()},className:"absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full",type:"button",children:(0,a.jsx)(i.Z,{className:"w-8 h-8 text-white"})}),(0,a.jsx)("input",{ref:c,type:"file",accept:"image/*",onChange:e=>{var s;let a=null===(s=e.target.files)||void 0===s?void 0:s[0];a&&t(a)},className:"hidden"})]})}},70273:function(e,s,t){"use strict";var a=t(57437),l=t(2265),i=t(42228),n=t(79418),c=t(80572),r=t(2694);s.Z=e=>{let{label:s,type:t,defaultValue:d}=e,[o,x]=(0,l.useState)(!1),[m,u]=(0,l.useState)(d||"");return(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.Y,{label:s,type:t,value:m,onChange:e=>{u(e.target.value)},isDisabled:!o,fullWidth:!0}),(0,a.jsx)(n.A,{isIconOnly:!0,startContent:o?(0,a.jsx)(c.Z,{size:16}):(0,a.jsx)(r.Z,{size:16}),onClick:()=>{x(!o)},"aria-label":o?"Save":"Edit"})]})}},44941:function(e,s,t){"use strict";var a=t(57437),l=t(2265),i=t(28515),n=t(19409),c=t(79418),r=t(80572),d=t(2694);s.Z=e=>{let{label:s,options:t,defaultValue:o}=e,[x,m]=(0,l.useState)(!1),[u,j]=(0,l.useState)(o||"");return(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.g,{label:s,selectionMode:"multiple",defaultSelectedKeys:u,onChange:e=>{j(e.target.value)},isDisabled:!x,fullWidth:!0,children:t.map(e=>(0,a.jsx)(n.R,{value:e.value,children:e.label},e.value))}),(0,a.jsx)(c.A,{isIconOnly:!0,startContent:x?(0,a.jsx)(r.Z,{size:16}):(0,a.jsx)(d.Z,{size:16}),onPress:()=>{m(!x)},"aria-label":x?"Save":"Edit"})]})}},1077:function(e,s,t){"use strict";var a=t(57437),l=t(2265),i=t(9182),n=t(79418),c=t(80572),r=t(2694);s.Z=e=>{let{label:s,type:t,defaultValue:d}=e,[o,x]=(0,l.useState)(!1),[m,u]=(0,l.useState)(d||"");return(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.Y,{label:s,type:t,value:m,onChange:e=>{u(e.target.value)},isDisabled:!o,fullWidth:!0}),(0,a.jsx)(n.A,{isIconOnly:!0,startContent:o?(0,a.jsx)(c.Z,{size:16}):(0,a.jsx)(r.Z,{size:16}),onClick:()=>{x(!o)},"aria-label":o?"Save":"Edit"})]})}},3803:function(e,s,t){"use strict";var a=t(57437);t(2265);var l=t(8627),i=t(3932),n=t(99008),c=t(49089);let r=[{id:1,name:"John Doe",rating:5,comment:"Excellent behavior! Great!",date:"September 15, 2023"},{id:2,name:"Jane Smith",rating:4,comment:"Very professional.",date:"September 10, 2023"},{id:3,name:"Michael Brown",rating:5,comment:"Highly recommended!",date:"September 5, 2023"}];s.Z=()=>(0,a.jsxs)("div",{className:"text-black",children:[(0,a.jsx)(l.q,{x:4}),r.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(i.w,{className:"text-black",children:(0,a.jsxs)(n.G,{children:[(0,a.jsx)("strong",{children:e.name}),(0,a.jsx)("p",{children:e.date}),(0,a.jsx)(l.q,{y:.5}),(0,a.jsx)("div",{className:"flex items-center text-black",children:[void 0,void 0,void 0,void 0,void 0].map((s,t)=>(0,a.jsx)(c.QJe,{size:20,color:t<e.rating?"#f5a623":"#e4e4e4"},t))}),(0,a.jsx)(l.q,{y:.5}),(0,a.jsx)("p",{children:e.comment})]})}),(0,a.jsx)(l.q,{x:4})]},e.id))]})},3586:function(e){e.exports={style:{fontFamily:"'__Kanit_d85618', '__Kanit_Fallback_d85618'",fontStyle:"normal"},className:"__className_d85618"}}},function(e){e.O(0,[6298,7699,3575,8584,8304,4703,3642,231,9699,5743,9168,2905,2971,2117,1744],function(){return e(e.s=90910)}),_N_E=e.O()}]);