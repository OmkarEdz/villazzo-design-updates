(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{886:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sell",function(){return s(6694)}])},6694:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return u}});var t=s(7568),l=s(1799),n=s(414),o=s(5893),c=s(7294),i=s(6151),r=s(4683),m=(s(5675),s(6017),s(1664),s(196)),u=!0;a.default=function(e){var a=e.global,u=(e.homepage,e.footerData),d=e.navigation,h=(0,c.useState)(!1),p=(h[0],h[1],(0,c.useState)(!1)),v=(p[0],p[1],c.useRef(null)),f=(0,c.useState)(""),x=f[0],N=f[1],g=(0,c.useState)(""),j=g[0],b=g[1],_=(0,c.useState)(""),y=_[0],S=_[1],w=(0,c.useState)(""),C=w[0],E=w[1],z=(0,c.useState)(""),k=z[0],P=z[1],L=(0,c.useState)({}),A=L[0],R=L[1],T=(0,c.useState)(!1),O=T[0],Z=T[1],D=(0,c.useState)(!1),U=D[0],F=D[1],M=function(){var e=(0,t.Z)((function(e){var a;return(0,n.__generator)(this,(function(t){return e.preventDefault(),function(){var e={},a=!0;return x.length<=0&&(e.fullname=!0,a=!1),j.length<=0&&(e.lastName=!0,a=!1),y.length<=0&&(e.email=!0,a=!1),C.length<=0&&(e.phone=!0,a=!1),R((0,l.Z)({},e)),console.log("errors",A),a}()?(m.ZP.post("".concat("https://admin.villazzorealty.com","/api/contactforms"),{data:{firstName:x,lastName:j,email:y,phoneNo:C,message:k}}),a=s(129),m.ZP.post("https://webdevfolio.com/Villazzomail/Villazzomail.php",a.stringify({firstName:x,lastName:j,email:y,phoneNo:C,message:k})).then((function(e){console.log("statusCode: ".concat(e.statusCode)),console.log(e),console.log("statusCode: ".concat(e.data))})).catch((function(e){console.error(e)})),Z(!0),F(!1),N(""),b(""),S(""),E(""),P(""),[2]):(Z(!1),F(!0),N(""),b(""),S(""),E(""),P(""),[2])}))}));return function(a){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"bg-img",children:[(0,o.jsxs)("div",{className:"homepage-image",children:[(0,o.jsx)("div",{className:"blankDiv"}),(0,o.jsxs)("video",{loop:!0,muted:!0,autoPlay:"autoplay",playsinline:!0,children:[(0,o.jsx)("source",{src:"".concat("https://admin.villazzorealty.com").concat(a.attributes.videoURL),type:"video/mp4"}),(0,o.jsx)("source",{src:"".concat("https://admin.villazzorealty.com").concat(a.attributes.videoURL),type:"video/webm"})]})]}),(0,o.jsx)(r.Z,{navigation:d,global:a}),(0,o.jsxs)("div",{className:"buttons-wrap",children:[(0,o.jsxs)("div",{className:"sell-search-container",children:[(0,o.jsxs)("div",{className:"selltxt",children:[(0,o.jsx)("h3",{className:"propertytxt",children:"SELL YOUR PROPERTY"}),(0,o.jsx)("p",{children:"We have represented many sellers in South Florida successfully sell their homes at the best prices. Allow us the opportunity to give you a property presentation to see what your condo or home can sell for and what we have to offer for you as a seller. Villazzo  has represented several record breaking sales."})]}),(0,o.jsx)("div",{className:"sell-search-box",children:(0,o.jsx)("div",{className:"video-btn contact-btn",children:(0,o.jsx)("a",{onClick:function(e){v.current.classList.add("show_popup")},children:"Contact Us"})})})]}),(0,o.jsx)("div",{ref:v,id:"popover",className:"main_popup hide",children:(0,o.jsx)("div",{className:"custom_model",children:(0,o.jsx)("div",{className:"custom_model_dialog",children:(0,o.jsxs)("div",{className:"custom_model_content",children:[(0,o.jsx)("a",{onClick:function(e){v.current.classList.remove("show_popup"),Z(!1),F(!1)},className:"model_close",children:(0,o.jsx)("i",{className:"fa-solid fa-xmark"})}),(0,o.jsx)("div",{className:"Popup_wrap",children:(0,o.jsx)("form",{onSubmit:M,children:(0,o.jsxs)("div",{className:"contact-form",children:[(0,o.jsx)("h2",{children:"CONTACT US"}),(0,o.jsxs)("div",{className:"contact-form-label",children:[(0,o.jsxs)("div",{className:"form-item",children:[(0,o.jsx)("input",{placeholder:"FIRST NAME",type:"text",value:x,onChange:function(e){N(e.target.value)},name:"fullname",className:"input-name contact-lebel"}),(null===A||void 0===A?void 0:A.fullname)&&(0,o.jsx)("p",{className:"error_msg",children:"First name cannot be empty."})]}),(0,o.jsxs)("div",{className:"form-item",children:[(0,o.jsx)("input",{placeholder:"LAST NAME",name:"lastName",type:"text",value:j,onChange:function(e){b(e.target.value)},className:"contact-lebel"}),(null===A||void 0===A?void 0:A.lastName)&&(0,o.jsx)("p",{className:"error_msg",children:"Last name cannot be empty."})]})]}),(0,o.jsxs)("div",{className:"contact-form-label",children:[(0,o.jsxs)("div",{className:"form-item",children:[(0,o.jsx)("input",{placeholder:"EMAIL ADDRESS",type:"email",name:"email",value:y,onChange:function(e){S(e.target.value)},className:"input-name contact-lebel"}),(null===A||void 0===A?void 0:A.email)&&(0,o.jsx)("p",{className:"error_msg",children:"Email cannot be empty."})]}),(0,o.jsxs)("div",{className:"form-item",children:[(0,o.jsx)("input",{placeholder:"PHONE",type:"tel",name:"phone",pattern:"[0-9]*",value:C,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&E(e.target.value)},className:"input-name contact-lebel",maxLength:"12"}),(null===A||void 0===A?void 0:A.email)&&(0,o.jsx)("p",{className:"error_msg",children:"Phone number cannot be empty."})]})]}),(0,o.jsx)("div",{className:"contact-form-label",children:(0,o.jsx)("div",{className:"form-item full-width",children:(0,o.jsx)("textarea",{name:"message",value:k,onChange:function(e){P(e.target.value)},className:"form-message contact-lebel",rows:"4",cols:"50",placeholder:"MESSAGE"})})}),(0,o.jsx)("div",{className:"submit_btn_wrap",children:(0,o.jsx)("button",{type:"submit",children:"Submit"})}),(0,o.jsxs)("div",{className:"final_msg_wrap",children:[O&&(0,o.jsx)("p",{className:"thankyou_msg",children:"Thank you for your message! A team member from Villazzo Realty will get back to you shortly."}),U&&(0,o.jsx)("p",{className:"error_msg",children:"Please fill the form"})]})]})})})]})})})})]})]}),(0,o.jsx)(i.Z,{footerProp:u})]})}},1163:function(e,a,s){e.exports=s(387)}},function(e){e.O(0,[61,196,151,683,774,888,179],(function(){return a=886,e(e.s=a);var a}));var a=e.O();_N_E=a}]);