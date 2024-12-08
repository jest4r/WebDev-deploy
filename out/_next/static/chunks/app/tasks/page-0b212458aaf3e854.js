(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7289],{3991:function(e,t,o){Promise.resolve().then(o.bind(o,30669))},99376:function(e,t,o){"use strict";var i=o(35475);o.o(i,"useRouter")&&o.d(t,{useRouter:function(){return i.useRouter}}),o.o(i,"useSearchParams")&&o.d(t,{useSearchParams:function(){return i.useSearchParams}})},30669:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return g}});var i=o(57437),a=o(2265);function s(e){let{onSearch:t}=e,[o,s]=(0,a.useState)(""),[r,n]=(0,a.useState)(""),c=e=>/^[A-Z]\d{3}$/.test(e),l=()=>{if(!o){n("Please enter a Task ID");return}if(!c(o)){n("Invalid format. Task ID should be 1 letter followed by 3 numbers (e.g., A001)");return}n(""),t(o)};return(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:"relative flex items-center",children:[(0,i.jsx)("input",{type:"text",value:o,onChange:e=>s(e.target.value.toUpperCase()),onKeyPress:e=>{"Enter"===e.key&&l()},placeholder:"Enter Task ID (e.g., A001)",className:"bg-white shadow-xl hover:shadow-lg px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition-shadow focus:outline-none"}),(0,i.jsx)("button",{onClick:l,className:"right-2 absolute p-2 text-gray-500 hover:text-blue-500 transition-colors",children:(0,i.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),r&&(0,i.jsx)("p",{className:"mt-2 text-red-500 text-sm",children:r})]})}var r=o(99376);function n(e){let{task:t}=e,o=(e=>{let t=String.fromCharCode(65+Math.floor((e-1)/9999));return"".concat(t).concat(String((e-1)%9999+1).padStart(4,"0"))})(t.id),a=(0,r.useRouter)();return(0,i.jsxs)("div",{className:"flex flex-col gap-4 bg-zinc-100 shadow-xl hover:shadow-lg p-4 rounded-xl h-64 transition-shadow cursor-pointer",onClick:()=>{a.push("/tasks/"+o)},children:[(0,i.jsx)("div",{className:"bg-gray-200 p-2 rounded-lg w-full",children:(0,i.jsx)("h2",{className:"font-bold text-gray-700",children:o})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"mb-2",children:t.title}),(0,i.jsx)("p",{children:t.description}),(0,i.jsx)("p",{children:t.location}),(0,i.jsx)("p",{children:t.category})]})]})}function c(e){let{selectedCategory:t,onCategoryChange:o,tasks:a}=e,s=["all",...new Set(a.map(e=>e.category))];return(0,i.jsx)("div",{className:"flex justify-end mb-6 w-full",children:(0,i.jsx)("select",{value:t,onChange:e=>o(e.target.value),className:"bg-white shadow-md hover:shadow-lg px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition-shadow focus:outline-none",children:s.map(e=>(0,i.jsx)("option",{value:e,children:"all"===e?"All Categories":e},e))})})}let l=[{id:1,title:"Task 1",description:"Description 1",category:"Category 1",location:"Location 1"},{id:2,title:"Task 2",description:"Description 2",category:"Category 3",location:"Location 2"},{id:3,title:"Task 3",description:"Description 3",category:"Category 2",location:"Location 3"},{id:4,title:"Task 4",description:"Description 4",category:"Category 4",location:"Location 4"},{id:5,title:"Task 5",description:"Description 5",category:"Category 1",location:"Location 5"},{id:6,title:"Task 6",description:"Description 6",category:"Category 5",location:"Location 6"},{id:7,title:"Task 7",description:"Description 7",category:"Category 3",location:"Location 7"},{id:8,title:"Task 8",description:"Description 8",category:"Category 6",location:"Location 8"},{id:9,title:"Task 9",description:"Description 9",category:"Category 2",location:"Location 9"},{id:10,title:"Task 10",description:"Description 10",category:"Category 4",location:"Location 10"},{id:11,title:"Task 11",description:"Description 11",category:"Category 5",location:"Location 11"},{id:12,title:"Task 12",description:"Description 12",category:"Category 1",location:"Location 12"},{id:13,title:"Task 13",description:"Description 13",category:"Category 6",location:"Location 13"},{id:14,title:"Task 14",description:"Description 14",category:"Category 3",location:"Location 14"},{id:15,title:"Task 15",description:"Description 15",category:"Category 2",location:"Location 15"},{id:16,title:"Task 16",description:"Description 16",category:"Category 6",location:"Location 16"},{id:17,title:"Task 17",description:"Description 17",category:"Category 4",location:"Location 17"},{id:18,title:"Task 18",description:"Description 18",category:"Category 1",location:"Location 18"},{id:19,title:"Task 19",description:"Description 19",category:"Category 5",location:"Location 19"},{id:20,title:"Task 20",description:"Description 20",category:"Category 3",location:"Location 20"},{id:21,title:"Task 21",description:"Description 21",category:"Category 2",location:"Location 21"},{id:22,title:"Task 22",description:"Description 22",category:"Category 4",location:"Location 22"},{id:23,title:"Task 23",description:"Description 23",category:"Category 6",location:"Location 23"},{id:24,title:"Task 24",description:"Description 24",category:"Category 1",location:"Location 24"},{id:25,title:"Task 25",description:"Description 25",category:"Category 5",location:"Location 25"}];function d(){let[e,t]=(0,a.useState)(1),[o,s]=(0,a.useState)("all"),r="all"===o?l:l.filter(e=>e.category===o),d=24*e,g=r.slice(d-24,d),u=Math.ceil(r.length/24),p=Array.from({length:u},(e,t)=>t+1);return(0,i.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,i.jsx)(c,{selectedCategory:o,onCategoryChange:e=>{s(e),t(1)},tasks:l}),(0,i.jsx)("div",{className:"flex justify-center items-center my-8 w-full",children:(0,i.jsx)("div",{className:"gap-4 grid grid-cols-6 laptop:grid-cols-4 mini-laptop:grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-2 w-full",children:g.map(e=>(0,i.jsx)(n,{task:e},e.id))})}),u>1&&(0,i.jsxs)("div",{className:"flex items-center gap-2 my-4",children:[(0,i.jsx)("button",{onClick:()=>t(e=>Math.max(e-1,1)),disabled:1===e,className:"bg-white disabled:opacity-50 shadow-md hover:shadow-lg px-4 py-2 rounded-lg transition-shadow disabled:cursor-not-allowed",children:"Previous"}),(0,i.jsx)("div",{className:"flex gap-2",children:p.map(o=>(0,i.jsx)("button",{onClick:()=>t(o),className:"w-10 h-10 rounded-lg flex items-center justify-center transition-all ".concat(e===o?"bg-blue-500 text-white shadow-md":"bg-white hover:bg-gray-100 shadow-md hover:shadow-lg"),children:o},o))}),(0,i.jsx)("button",{onClick:()=>t(e=>Math.min(e+1,u)),disabled:e===u,className:"bg-white disabled:opacity-50 shadow-md hover:shadow-lg px-4 py-2 rounded-lg transition-shadow disabled:cursor-not-allowed",children:"Next"})]}),0===r.length&&(0,i.jsx)("div",{className:"my-8 text-gray-500",children:"No tasks found for the selected category."})]})}function g(){return(0,i.jsxs)("div",{className:"flex flex-col p-4 w-full",children:[(0,i.jsx)("div",{className:"flex justify-end mx-auto mb-8 w-5/6",children:(0,i.jsx)("div",{className:"w-80",children:(0,i.jsx)(s,{onSearch:e=>{console.log("Searching for task:",e)}})})}),(0,i.jsx)("div",{className:"desktop:w-5/6 laptop:w-5/6 mx-auto w-full",children:(0,i.jsx)(d,{})})]})}}},function(e){e.O(0,[2971,2117,1744],function(){return e(e.s=3991)}),_N_E=e.O()}]);