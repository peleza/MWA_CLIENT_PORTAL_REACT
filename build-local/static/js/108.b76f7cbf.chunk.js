(this["webpackJsonpmwangaza-react"]=this["webpackJsonpmwangaza-react"]||[]).push([[108],{1253:function(e,a,t){"use strict";t.r(a);var c=t(80),s=t(1),n=t(276),r=t(2),i=t(694),l=t(345),o=t(404),d=t(312),j=t(85),b=t(448),u=t(310),h=t(30),m=(t(422),t(0));a.default=function(e){var a=Object(h.c)(),t=Object(h.d)((function(e){return e.auth})),x=Object(h.d)((function(e){return e.auth.loading}));console.log("AdminLoginApiResponse",t);var O=Object(r.useState)(!1),f=Object(n.a)(O,2),p=f[0],v=f[1],g=Object(r.useState)(!1),N=Object(n.a)(g,2),w=N[0],C=N[1],z=Object(r.useState)({org_id:"",email_id:"",password:""}),y=Object(n.a)(z,2),A=y[0],q=y[1],S=function(e){var a=e.target,t=a.name,n=a.value;q((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},t,n))}))};return 1==p&&void 0!==t.login.data&&200==t.login.data.status&&void 0!==t&&1==t.isAuthenticated&&(console.log("admin login called"),e.history.push("/admin/dashboard")),void 0!==t&&1==t.isAuthenticated&&e.history.push("/admin/dashboard"),Object(m.jsx)("div",{className:"auth-section",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)(i.a,{className:"align-items-center",children:[Object(m.jsx)(l.a,{lg:"6",className:"",children:Object(m.jsx)("div",{className:"auth-image text-center",children:Object(m.jsx)("img",{src:"/images/login-image.svg",alt:"Login"})})}),Object(m.jsx)(l.a,{lg:"6",className:"",children:Object(m.jsxs)("div",{className:"auth-wrapper",children:[Object(m.jsx)("div",{className:"auth-head",children:Object(m.jsx)(b.a,{title:"Login to Admin Panel",className:""})}),Object(m.jsx)(o.a,{onSubmit:function(e){v(!0),e.preventDefault(),a(Object(j.a)(A))},autoComplete:"off",children:Object(m.jsxs)("div",{className:"auth-form login-form",children:[Object(m.jsx)(d.b,{type:"email",name:"email_id",placeholder:"Email address",hasLabel:!0,pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",error:"It should be a valid email address!",required:"required",onChange:S}),Object(m.jsx)(d.b,{type:w?"text":"password",name:"password",placeholder:"Password",isPassword:"true",onChange:S,onClick:function(){C(!w)},ChangeClass:w?"show-hide active":"show-hide",pattern:".{1,}",error:"Password is Required!",required:"required"}),Object(m.jsx)("div",{className:"form-submit-btn-row",children:Object(m.jsx)(u.a,{btnName:"Login",type:"submit",className:"btn-secondary w-100",isDisabled:x,isLoading:x})})]})})]})})]})})})}},310:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return d}));var c=t(2),s=t.n(c),n=t(52),r=t(276),i=(t(325),t(0)),l=function(){var e=s.a.useState(!1),a=Object(r.a)(e,2);a[0],a[1];return Object(i.jsxs)(i.Fragment,{children:["\xa0",Object(i.jsx)("span",{className:"spinner-border d-inline-block"})]})},o=(t(311),function(e){var a=e.className,t=e.btnName,c=e.onClick,s=e.id,n=e.type,r=e.isDisabled,o=e.isLoading;return Object(i.jsxs)("button",{className:"btn ".concat(a),onClick:c,id:s,type:n,disabled:r,children:[t,o&&Object(i.jsx)(l,{})]})}),d=function(e){var a=e.className,t=e.text,c=e.id,s=e.to;return Object(i.jsx)(n.b,{to:s,className:"btn ".concat(a),id:c,children:t})}},311:function(e,a,t){},312:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"d",(function(){return i})),t.d(a,"e",(function(){return l})),t.d(a,"a",(function(){return o})),t.d(a,"c",(function(){return d}));var c=t(276),s=t(2),n=(t(329),t(0)),r=function(e){var a=Object(s.useState)(!1),t=Object(c.a)(a,2),r=t[0],i=t[1];return Object(n.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(n.jsx)("label",{children:e.labelText}),Object(n.jsxs)("div",{className:e.isPassword&&"hasIcon",children:[Object(n.jsx)("input",{type:e.type,name:e.name,value:e.value,defaultValue:e.defaultValue,className:"form-control ".concat(e.className),placeholder:e.placeholder,id:e.id,onChange:e.onChange,onFocus:function(){return 1==e.CPassword&&i(!0)},onBlur:function(e){i(!0)},hidden:e.isHidden,disabled:e.isDisabled,required:e.required,autoComplete:"off",min:e.min,max:e.max,maxLength:e.maxLength,pattern:e.pattern,focused:r.toString(),readOnly:e.readOnly}),e.isPassword&&Object(n.jsx)("span",{className:e.ChangeClass,onClick:e.onClick}),e.error&&Object(n.jsxs)("div",{className:"error-text",children:[Object(n.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(n.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(n.jsxs)("span",{children:[" ",e.error," "]})]})]})]})},i=function(e){var a=Object(s.useState)(!1),t=Object(c.a)(a,2),r=t[0],i=t[1];return Object(n.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(n.jsx)("label",{children:e.labelText}),Object(n.jsx)("select",{name:e.name,className:"form-control ".concat(e.className),id:e.id,placeholder:e.placeholder,onChange:e.onChange,onBlur:function(e){i(!0)},required:e.required,focused:r.toString(),disabled:e.disabled,children:e.optionData}),e.error&&Object(n.jsxs)("div",{className:"error-text",children:[Object(n.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(n.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(n.jsxs)("span",{children:[" ",e.error," "]})]})]})},l=function(e){var a=Object(s.useState)(!1),t=Object(c.a)(a,2),r=t[0],i=t[1];return Object(n.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(n.jsx)("label",{children:e.labelText}),Object(n.jsx)("textarea",{name:e.name,id:e.id,className:"form-control ".concat(e.className),placeholder:e.placeholder,onBlur:function(e){i(!0)},required:e.required,focused:r.toString(),pattern:e.pattern,rows:"5",children:e.defaultData}),e.error&&Object(n.jsxs)("div",{className:"error-text",children:[Object(n.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(n.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(n.jsxs)("span",{children:[" ",e.error," "]})]})]})},o=function(e){var a=Object(s.useState)(!1),t=Object(c.a)(a,2),r=t[0],i=t[1];return Object(n.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(n.jsxs)("label",{children:[" ",e.labelText," "]}),Object(n.jsxs)("label",{className:"fileUploader",children:[Object(n.jsx)("input",{type:"file",onChange:e.onChange,required:e.required,focused:r.toString(),onBlur:function(e){i(!0)},accept:e.accept,name:e.name}),Object(n.jsxs)("div",{className:"fileUploader-inner",children:[Object(n.jsxs)("span",{className:"browse",children:["Browse ",Object(n.jsx)("img",{src:"/images/file-upload.svg",alt:"icon"})]}),Object(n.jsx)("span",{className:"fileName",children:e.fileName?e.fileName:"Not file selected yet!"})]}),e.error&&Object(n.jsxs)("div",{className:"error-text",children:[Object(n.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(n.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(n.jsxs)("span",{children:[" ",e.error," "]})]})]})]})},d=function(e){return Object(n.jsx)("div",{className:"form-group ".concat(e.FormGroupClass),children:e.labelText&&Object(n.jsxs)("label",{className:"radiobx-btn ".concat(e.FormLabelClass),children:[Object(n.jsx)("input",{type:"radio",id:e.id,name:e.name,className:"radio-btn ".concat(e.className),value:"",defaultChecked:e.defaultChecked}),Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{}),Object(n.jsxs)("div",{className:"plan-content",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:e.labelText}),Object(n.jsx)("font",{children:e.priceText})]}),Object(n.jsx)("p",{children:e.monthText})]})]})]})})}},325:function(e,a,t){},329:function(e,a,t){},422:function(e,a,t){},448:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t(2),t(452);var c=t(0),s=function(e){var a=e.className,t=e.title,s=e.subHeading,n=e.id;return Object(c.jsxs)("div",{className:"section-title ".concat(a),id:n,children:[Object(c.jsx)("h2",{children:t}),s&&Object(c.jsx)("p",{children:s})]})}},452:function(e,a,t){}}]);
//# sourceMappingURL=108.b76f7cbf.chunk.js.map