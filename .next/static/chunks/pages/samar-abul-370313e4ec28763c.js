(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{5767:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samar-abul",function(){return s(6130)}])},6130:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return h}});var t=s(7568),l=s(1799),n=s(414),r=s(5893),c=s(7294),i=s(6151),o=s(4683),m=s(5675),d=s.n(m),u=(s(1664),s(196)),h=!0;a.default=function(e){var a=e.global,m=e.samarabul,h=e.footerData,p=e.navigation,N=m.attributes.Properties,v=[];N.forEach((function(e){v.push(e)}));var f=function(e){var a=e.src,s=e.width,t=e.quality;return"".concat(a,"?w=").concat(s,"&q=").concat(t||75)},x=(0,c.useState)(!1),g=(x[0],x[1],(0,c.useState)(!1)),j=(g[0],g[1],c.useRef(null)),b=(0,c.useState)(""),_=b[0],y=b[1],w=(0,c.useState)(""),E=w[0],S=w[1],C=(0,c.useState)(""),z=C[0],T=C[1],k=(0,c.useState)(""),A=k[0],P=k[1],R=(0,c.useState)(""),L=R[0],M=R[1],I=(0,c.useState)({}),O=I[0],U=I[1],V=(0,c.useState)(!1),Z=V[0],D=V[1],F=(0,c.useState)(!1),H=F[0],q=F[1],G=function(){var e=(0,t.Z)((function(e){var a;return(0,n.__generator)(this,(function(t){return e.preventDefault(),function(){var e={},a=!0;return _.length<=0&&(e.fullname=!0,a=!1),E.length<=0&&(e.lastName=!0,a=!1),z.length<=0&&(e.email=!0,a=!1),A.length<=0&&(e.phone=!0,a=!1),L.length<=0&&(e.message=!0,a=!1),U((0,l.Z)({},e)),console.log("errors",O),a}()?(u.ZP.post("".concat("https://villazzo-realty-backend-production.up.railway.app","/api/contactforms"),{data:{firstName:_,lastName:E,email:z,phoneNo:A,message:L}}),a=s(129),u.ZP.post("https://webdevfolio.com/Villazzomail/Villazzomail.php",a.stringify({firstName:_,lastName:E,email:z,phoneNo:A,message:L})).then((function(e){console.log("statusCode: ".concat(e.statusCode)),console.log(e),console.log("statusCode: ".concat(e.data))})).catch((function(e){console.error(e)})),D(!0),q(!1),y(""),S(""),T(""),P(""),M(""),[2]):(D(!1),q(!0),y(""),S(""),T(""),P(""),M(""),[2])}))}));return function(a){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bg-img bg-white",children:[(0,r.jsx)(o.Z,{navigation:p,global:a}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"buttons-wrap video-wrapper team-wrapper inside-wrap",children:[(0,r.jsx)("h1",{className:"team-heading",children:"MEET THE TEAM"}),(0,r.jsxs)("div",{className:"meet-wrap",children:[(0,r.jsxs)("div",{className:"meet-left",children:[(0,r.jsx)("p",{className:"meet-left-img",children:(0,r.jsx)(d(),{loader:f,src:"".concat("https://villazzo-realty-backend-production.up.railway.app").concat(m.attributes.memberImageURL),className:"header_image",layout:"fill",alt:"Villazzo"})}),(0,r.jsx)("h3",{className:"meet-left-name",children:m.attributes.memberName}),(0,r.jsx)("p",{className:"broker",children:m.attributes.memberType}),(0,r.jsx)("a",{className:"number",href:"tel:".concat(encodeURIComponent(m.attributes.contactNo)),children:m.attributes.contactNo}),(0,r.jsx)("a",{className:"email",href:"mailto:".concat(encodeURIComponent(m.attributes.memberEmail)),children:m.attributes.memberEmail})]}),(0,r.jsx)("div",{className:"meet-right",children:(0,r.jsx)("p",{children:m.attributes.Content})})]}),(0,r.jsxs)("div",{className:"properties",children:[(0,r.jsx)("h1",{className:"team-heading",children:"FEATURED PROPERTIES"}),(0,r.jsx)("div",{className:"property-wrap",children:v.map((function(e,a){return(0,r.jsxs)("div",{className:"property-box",children:[(0,r.jsx)("p",{className:"img_Wrap",children:(0,r.jsx)(d(),{loader:f,src:"".concat("https://villazzo-realty-backend-production.up.railway.app").concat(e.propertyImageURL),className:"header_image",layout:"fill",alt:"Villazzo"})}),(0,r.jsx)("h4",{className:"pro-name",children:e.heading}),(0,r.jsx)("div",{className:"pro-text",dangerouslySetInnerHTML:{__html:e.subheading}})]},a)}))})]}),(0,r.jsx)("div",{className:"video-btn contact-btn",children:(0,r.jsx)("a",{onClick:function(e){j.current.classList.add("show_popup")},children:"CONTACT US"})}),(0,r.jsx)("div",{className:"find-hotel",children:(0,r.jsx)("a",{href:"https://www.villazzo.com",children:"Find Out More About Our Villa Hotels"})})]})})]}),(0,r.jsx)("div",{ref:j,id:"popover",className:"main_popup hide",children:(0,r.jsx)("div",{className:"custom_model",children:(0,r.jsx)("div",{className:"custom_model_dialog",children:(0,r.jsxs)("div",{className:"custom_model_content",children:[(0,r.jsx)("a",{onClick:function(e){j.current.classList.remove("show_popup"),D(!1),q(!1)},className:"model_close",children:(0,r.jsx)("i",{className:"fa-solid fa-xmark"})}),(0,r.jsx)("div",{className:"Popup_wrap",children:(0,r.jsx)("form",{onSubmit:G,children:(0,r.jsxs)("div",{className:"contact-form",children:[(0,r.jsx)("h2",{children:"CONTACT US"}),(0,r.jsxs)("div",{className:"contact-form-label",children:[(0,r.jsxs)("div",{className:"form-item",children:[(0,r.jsx)("input",{placeholder:"FIRST NAME",type:"text",value:_,onChange:function(e){y(e.target.value)},name:"fullname",className:"input-name contact-lebel"}),(null===O||void 0===O?void 0:O.fullname)&&(0,r.jsx)("p",{className:"error_msg",children:"First name cannot be empty."})]}),(0,r.jsxs)("div",{className:"form-item",children:[(0,r.jsx)("input",{placeholder:"LAST NAME",name:"lastName",type:"text",value:E,onChange:function(e){S(e.target.value)},className:"contact-lebel"}),(null===O||void 0===O?void 0:O.lastName)&&(0,r.jsx)("p",{className:"error_msg",children:"Last name cannot be empty."})]})]}),(0,r.jsxs)("div",{className:"contact-form-label",children:[(0,r.jsxs)("div",{className:"form-item",children:[(0,r.jsx)("input",{placeholder:"EMAIL ADDRESS",type:"email",name:"email",value:z,onChange:function(e){T(e.target.value)},className:"input-name contact-lebel"}),(null===O||void 0===O?void 0:O.email)&&(0,r.jsx)("p",{className:"error_msg",children:"Email cannot be empty."})]}),(0,r.jsxs)("div",{className:"form-item",children:[(0,r.jsx)("input",{placeholder:"PHONE",type:"tel",name:"phone",pattern:"[0-9]*",value:A,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&P(e.target.value)},className:"input-name contact-lebel",maxLength:"12"}),(null===O||void 0===O?void 0:O.email)&&(0,r.jsx)("p",{className:"error_msg",children:"Phone number cannot be empty."})]})]}),(0,r.jsx)("div",{className:"contact-form-label",children:(0,r.jsxs)("div",{className:"form-item full-width",children:[(0,r.jsx)("textarea",{name:"message",value:L,onChange:function(e){M(e.target.value)},className:"form-message contact-lebel",rows:"4",cols:"50",placeholder:"MESSAGE"}),(null===O||void 0===O?void 0:O.message)&&(0,r.jsx)("p",{className:"error_msg",children:"Message cannot be empty."})]})}),(0,r.jsx)("div",{className:"submit_btn_wrap",children:(0,r.jsx)("button",{type:"submit",children:"Submit"})}),(0,r.jsxs)("div",{className:"final_msg_wrap",children:[Z&&(0,r.jsx)("p",{className:"thankyou_msg",children:"Thank you for your message! A team member from Villazzo Realty will get back to you shortly."}),H&&(0,r.jsx)("p",{className:"error_msg",children:"Please fill the form"})]})]})})})]})})})}),(0,r.jsx)(i.Z,{footerProp:h})]})}},1163:function(e,a,s){e.exports=s(387)}},function(e){e.O(0,[706,151,683,774,888,179],(function(){return a=5767,e(e.s=a);var a}));var a=e.O();_N_E=a}]);