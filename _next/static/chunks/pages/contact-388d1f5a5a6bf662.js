(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8367:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(1956)}])},7127:function(e,t,s){"use strict";var n=s(5893),r=(s(7294),s(1664)),a=s.n(r),l=s(3750);t.Z=function(){return(0,n.jsxs)("div",{className:"border-t-[1px] mt-14 block sm:flex justify-around items-center text-white py-2",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)(a(),{href:"/contact",children:(0,n.jsx)("p",{className:"cursor-pointer hover:text-gray-300 hover:scale-110 ease-out duration-500",children:"Contact"})}),(0,n.jsx)("p",{children:"Email: ondrejhrzan@gmail.com"})]}),(0,n.jsxs)("div",{className:"flex md:flex-row justify-center md:m-auto my-6",children:[(0,n.jsx)(a(),{href:"https://github.com/idkjanevim",children:(0,n.jsx)(l.rFR,{className:"text-3xl cursor-pointer hover:scale-110 ease-out duration-500 mx-2"})}),(0,n.jsx)(a(),{href:"https://www.linkedin.com/in/ond\u0159ej-hrz\xe1n-2aa002240/",children:(0,n.jsx)(l.NQh,{className:"text-3xl cursor-pointer hover:scale-110 ease-out duration-500 mx-2"})})]}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{className:"text-xs italic",children:"Copyright \xa9 2022 - Hrz\xe1n Ond\u0159ej"})})]})}},2787:function(e,t,s){"use strict";var n=s(5893),r=(s(7294),s(1664)),a=s.n(r);t.Z=function(){return(0,n.jsxs)("div",{className:"text-white bg-black top-0 max-w-screen flex justify-end items-center h-14 md:pr-[100px] border-b-[1px]",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("p",{className:"px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none",children:"Home"})}),(0,n.jsx)(a(),{href:"/about",children:(0,n.jsx)("p",{className:"px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none",children:"About"})}),(0,n.jsx)(a(),{href:"/contact",children:(0,n.jsx)("p",{className:"px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none",children:"Contact"})})]})}},1956:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var n=s(5893),r=s(7294),a=s(9008),l=s.n(a),i=s(2787),c=s(7127);const o={_origin:"https://api.emailjs.com"},d=(e,t,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}const m=(e,t,s={})=>new Promise(((n,r)=>{const a=new XMLHttpRequest;a.addEventListener("load",(({target:e})=>{const t=new u(e);200===t.status||"OK"===t.text?n(t):r(t)})),a.addEventListener("error",(({target:e})=>{r(new u(e))})),a.open("POST",o._origin+e,!0),Object.keys(s).forEach((e=>{a.setRequestHeader(e,s[e])})),a.send(t)}));var x=(e,t,s,n)=>{const r=n||o._userID,a=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(s);d(r,e,t);const l=new FormData(a);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",r),m("/api/v1.0/email/send-form",l)};var h=function(){var e=(0,r.useRef)(),t=(0,r.useState)(""),s=t[0],a=t[1],l=(0,r.useState)(""),i=l[0],c=l[1],o=(0,r.useState)(""),d=o[0],u=o[1],m=(0,r.useState)(""),h=m[0],f=m[1];return(0,n.jsx)("div",{className:"flex justify-center ",children:(0,n.jsxs)("div",{className:"mt-20 md:w-auto w-2/3",children:[(0,n.jsx)("h1",{className:"text-center mb-20 font-semibold text-4xl",children:"Contact Me!"}),(0,n.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),""!=s&&""!=i&&""!=d&&""!=h?x("gmail","template_wl8y8qr",e.current,"D_B7KkmYeFwBhGTw3").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})):console.log("You need to fill all of the input")},className:"flex flex-col gap-4 w-full md:grid md:grid-cols-2 md:w-[800px]",children:[(0,n.jsxs)("div",{className:"flex flex-col md:mx-14 h-min w-full md:w-auto",children:[(0,n.jsx)("label",{children:"Name"}),(0,n.jsx)("input",{value:s,onChange:function(e){return a(e.target.value)},type:"text",name:"name",className:"text-black rounded-md"})]}),(0,n.jsxs)("div",{className:"flex flex-col md:mx-14 h-min w-full md:w-auto",children:[(0,n.jsx)("label",{children:"Email"}),(0,n.jsx)("input",{value:i,onChange:function(e){return c(e.target.value)},type:"text",name:"email",className:"text-black rounded-md"})]}),(0,n.jsxs)("div",{className:"flex flex-col md:mx-14 col-span-2 h-min w-full md:w-auto",children:[(0,n.jsx)("label",{children:"Subject"}),(0,n.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)},type:"text",name:"subject",className:"text-black rounded-md"})]}),(0,n.jsxs)("div",{className:"flex flex-col md:mx-14 col-span-2 h-min w-full md:w-auto",children:[(0,n.jsx)("label",{children:"Message"}),(0,n.jsx)("textarea",{value:h,onChange:function(e){return f(e.target.value)},name:"msg",className:"resize-none text-black"}),(0,n.jsx)("input",{type:"submit",value:"Send",className:"w-full mt-14 bg-white text-black hover:bg-slate-700 hover:text-white ease-linear duration-200 h-10 md:w-[30%] cursor-pointer rounded-3xl text-center self-center font-semibold"})]})]})]})})};var f=function(){return(0,n.jsxs)("div",{className:"text-white",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Spejs"}),(0,n.jsx)("meta",{name:"description",content:"About Spejs"}),(0,n.jsx)("link",{rel:"icon",href:"".concat("/spejs-nextjs","/favicon.ico")})]}),(0,n.jsx)(i.Z,{}),(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:"fixed bottom-0 w-full",children:(0,n.jsx)(c.Z,{})})]})}}},function(e){e.O(0,[13,831,774,888,179],(function(){return t=8367,e(e.s=t);var t}));var t=e.O();_N_E=t}]);