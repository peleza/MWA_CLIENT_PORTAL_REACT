(this["webpackJsonpmwangaza-react"]=this["webpackJsonpmwangaza-react"]||[]).push([[132],{1074:function(e,a,t){},1286:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t(404),s=t(312),n=t(961),l=t.n(n),i=(t(1074),t(0));window.jQuery=l.a,window.$=l.a,t(1075),t(1076);a.default=function(){var e=Object(c.useRef)(),a=[];return Object(c.useEffect)((function(){l()(e.current).formBuilder({formData:a})}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("section",{className:"dashboard-section pidvaDashboard",children:[Object(i.jsx)("h1",{className:"dashboard-title",children:"Verified Data Entry From creator"}),Object(i.jsx)("div",{className:"repeat-white-bx",children:Object(i.jsxs)(r.a,{children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsx)(s.b,{type:"text",name:"form_name",placeholder:"Enter Form Name",pattern:".{1,}",error:"Form Name Required!",required:"required",labelText:"Form Name"})}),Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsx)(s.d,{name:"services_ind",required:"required",labelText:"Sub Service",error:"Please Select Sub Service!",optionData:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("option",{value:"",hidden:!0,children:"Select Industry"}),Object(i.jsx)("option",{value:"",children:"Degree Education"}),Object(i.jsx)("option",{value:"",children:"Employment"}),Object(i.jsx)("option",{value:"",children:"Kenya Criminal History"})]})})})]}),Object(i.jsx)("div",{id:"fb-editor",ref:e})]})})]})})}},312:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"d",(function(){return l})),t.d(a,"e",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"c",(function(){return d}));var c=t(276),r=t(2),s=(t(329),t(0)),n=function(e){var a=Object(r.useState)(!1),t=Object(c.a)(a,2),n=t[0],l=t[1];return Object(s.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(s.jsx)("label",{children:e.labelText}),Object(s.jsxs)("div",{className:e.isPassword&&"hasIcon",children:[Object(s.jsx)("input",{type:e.type,name:e.name,value:e.value,defaultValue:e.defaultValue,className:"form-control ".concat(e.className),placeholder:e.placeholder,id:e.id,onChange:e.onChange,onFocus:function(){return 1==e.CPassword&&l(!0)},onBlur:function(e){l(!0)},hidden:e.isHidden,disabled:e.isDisabled,required:e.required,autoComplete:"off",min:e.min,max:e.max,maxLength:e.maxLength,pattern:e.pattern,focused:n.toString(),readOnly:e.readOnly}),e.isPassword&&Object(s.jsx)("span",{className:e.ChangeClass,onClick:e.onClick}),e.error&&Object(s.jsxs)("div",{className:"error-text",children:[Object(s.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(s.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(s.jsxs)("span",{children:[" ",e.error," "]})]})]})]})},l=function(e){var a=Object(r.useState)(!1),t=Object(c.a)(a,2),n=t[0],l=t[1];return Object(s.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(s.jsx)("label",{children:e.labelText}),Object(s.jsx)("select",{name:e.name,className:"form-control ".concat(e.className),id:e.id,placeholder:e.placeholder,onChange:e.onChange,onBlur:function(e){l(!0)},required:e.required,focused:n.toString(),disabled:e.disabled,children:e.optionData}),e.error&&Object(s.jsxs)("div",{className:"error-text",children:[Object(s.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(s.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(s.jsxs)("span",{children:[" ",e.error," "]})]})]})},i=function(e){var a=Object(r.useState)(!1),t=Object(c.a)(a,2),n=t[0],l=t[1];return Object(s.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(s.jsx)("label",{children:e.labelText}),Object(s.jsx)("textarea",{name:e.name,id:e.id,className:"form-control ".concat(e.className),placeholder:e.placeholder,onBlur:function(e){l(!0)},required:e.required,focused:n.toString(),pattern:e.pattern,rows:"5",children:e.defaultData}),e.error&&Object(s.jsxs)("div",{className:"error-text",children:[Object(s.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(s.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(s.jsxs)("span",{children:[" ",e.error," "]})]})]})},o=function(e){var a=Object(r.useState)(!1),t=Object(c.a)(a,2),n=t[0],l=t[1];return Object(s.jsxs)("div",{className:"form-group ".concat(e.FormGroupClass),children:[e.labelText&&Object(s.jsxs)("label",{children:[" ",e.labelText," "]}),Object(s.jsxs)("label",{className:"fileUploader",children:[Object(s.jsx)("input",{type:"file",onChange:e.onChange,required:e.required,focused:n.toString(),onBlur:function(e){l(!0)},accept:e.accept,name:e.name}),Object(s.jsxs)("div",{className:"fileUploader-inner",children:[Object(s.jsxs)("span",{className:"browse",children:["Browse ",Object(s.jsx)("img",{src:"/images/file-upload.svg",alt:"icon"})]}),Object(s.jsx)("span",{className:"fileName",children:e.fileName?e.fileName:"Not file selected yet!"})]}),e.error&&Object(s.jsxs)("div",{className:"error-text",children:[Object(s.jsx)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"#e74c3c",children:Object(s.jsx)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})}),Object(s.jsxs)("span",{children:[" ",e.error," "]})]})]})]})},d=function(e){return Object(s.jsx)("div",{className:"form-group ".concat(e.FormGroupClass),children:e.labelText&&Object(s.jsxs)("label",{className:"radiobx-btn ".concat(e.FormLabelClass),children:[Object(s.jsx)("input",{type:"radio",id:e.id,name:e.name,className:"radio-btn ".concat(e.className),value:"",defaultChecked:e.defaultChecked}),Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{}),Object(s.jsxs)("div",{className:"plan-content",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:e.labelText}),Object(s.jsx)("font",{children:e.priceText})]}),Object(s.jsx)("p",{children:e.monthText})]})]})]})})}},329:function(e,a,t){}}]);
//# sourceMappingURL=132.b9baa88e.chunk.js.map