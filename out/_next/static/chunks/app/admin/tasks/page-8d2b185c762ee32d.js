(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9889],{56250:function(e,s,i){Promise.resolve().then(i.bind(i,67338))},67338:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return P}});var t=i(57437);i(2265);var a=i(75265),r=i(3932),n=i(99008),l=i(65807),c=i(79418),d=i(65639),o=i(39450),x=i(29721),h=i(35069),m=i(88139),u=i(10224),p=i(64264),j=i(14903),g=i(17032),f=i(83774),y=i(91723),N=i(71533),v=i(15868),w=i(89345),M=i(27413),k=e=>{let{task:s,onView:i,onModify:k,onDelete:C,onMessage:P}=e,z=e=>{switch(e.toLowerCase()){case"posting":return"warning";case"pending":default:return"default";case"in progress":return"primary";case"completed":return"success";case"cancelled":return"danger"}},{isOpen:D,onOpen:b,onClose:A}=(0,a.q)();return(0,t.jsx)(r.w,{className:"w-full",children:(0,t.jsx)(n.G,{children:(0,t.jsxs)("div",{className:"flex justify-between items-start",children:[(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:s.type}),(0,t.jsx)(l.z,{color:z(s.status),size:"sm",children:s.status})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-500",children:[(0,t.jsx)(f.Z,{size:16}),(0,t.jsx)("span",{children:s.area})]}),(0,t.jsxs)("div",{className:"flex items-center gap-4 text-gray-500",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(y.Z,{size:16}),(0,t.jsx)("span",{children:s.time})]}),(0,t.jsxs)("div",{children:["Duration: ",s.duration]})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(c.A,{onPress:b,variant:"light",onClick:()=>i(s.id),className:"flex",children:"View Details"}),(0,t.jsx)(d.R,{isOpen:D,onClose:A,size:"2xl",children:(0,t.jsxs)(o.A,{children:[(0,t.jsx)(x.k,{className:"flex flex-col gap-1",children:"Task Details"}),(0,t.jsx)(h.I,{children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Task Type"}),(0,t.jsx)("p",{className:"text-lg font-semibold",children:s.type})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Status"}),(0,t.jsx)(l.z,{color:z(s.status),size:"sm",children:s.status})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Area"}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(f.Z,{size:16}),s.area]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Time"}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(y.Z,{size:16}),s.time]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Duration"}),(0,t.jsx)("p",{children:s.duration})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Price"}),(0,t.jsx)("p",{children:s.price})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm text-gray-500",children:"Description"}),(0,t.jsx)("p",{className:"text-gray-700",children:s.description})]})]})}),(0,t.jsx)(m.R,{children:(0,t.jsx)(c.A,{color:"primary",variant:"solid",onPress:A,children:"I got it"})})]})}),(0,t.jsxs)(u.F,{children:[(0,t.jsx)(p.S,{children:(0,t.jsx)(c.A,{isIconOnly:!0,variant:"light",children:(0,t.jsx)(N.Z,{size:20})})}),(0,t.jsxs)(j.a,{children:[(0,t.jsx)(g.W,{startContent:(0,t.jsx)(v.Z,{size:20}),onClick:()=>k(s.id),description:"Modify task details",children:"Modify"}),(0,t.jsx)(g.W,{startContent:(0,t.jsx)(w.Z,{size:20}),onClick:()=>P(s.id),description:"Send message to inform user",children:"Send Message"}),(0,t.jsx)(g.W,{startContent:(0,t.jsx)(M.Z,{size:20}),className:"text-danger",color:"danger",onClick:()=>C(s.id),children:"Delete"})]})]})]})]})})})},C=i(63601);function P(){let e=e=>console.log("View user:",e),s=e=>console.log("Modify user:",e),i=e=>console.log("Delete user:",e),a=e=>console.log("Message user:",e);return(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h1",{className:"text-5xl font-extrabold text-emerald-800 text-center py-8",children:"Task Data Management"}),(0,t.jsx)("div",{className:"mt-12 w-full mx-auto bg-white p-6 rounded-lg shadow-md space-y-2",children:(0,t.jsx)(C.o,{className:"h-[800px] w-full",children:(0,t.jsx)("div",{className:"space-y-4 p-4",children:[{id:1,type:"Cleaning",status:"Pending",area:"Living Room",time:"09:00 AM",duration:"2 hours",price:"$50",description:"Deep cleaning of living room area"},{id:2,type:"Gardening",status:"In Progress",area:"Front Yard",time:"10:30 AM",duration:"3 hours",price:"$75",description:"Lawn mowing and hedge trimming"},{id:3,type:"Plumbing",status:"Completed",area:"Bathroom",time:"02:00 PM",duration:"1 hour",price:"$100",description:"Fix leaking faucet"},{id:4,type:"Painting",status:"Pending",area:"Bedroom",time:"11:00 AM",duration:"4 hours",price:"$200",description:"Paint walls and ceiling"},{id:5,type:"Electrical",status:"In Progress",area:"Kitchen",time:"03:30 PM",duration:"2 hours",price:"$150",description:"Install new light fixtures"},{id:6,type:"Moving",status:"Posting",area:"Whole House",time:"08:00 AM",duration:"6 hours",price:"$300",description:"Help with moving furniture"},{id:7,type:"Carpentry",status:"Cancelled",area:"Garage",time:"01:00 PM",duration:"3 hours",price:"$180",description:"Build custom storage shelves"}].map(r=>(0,t.jsx)("div",{className:"flex items-center gap-4",children:(0,t.jsx)(k,{task:r,onView:e,onModify:s,onMessage:a,onDelete:i})},r.id))})})})]})}}},function(e){e.O(0,[3575,8584,8304,3594,3642,9699,3263,853,628,2971,2117,1744],function(){return e(e.s=56250)}),_N_E=e.O()}]);