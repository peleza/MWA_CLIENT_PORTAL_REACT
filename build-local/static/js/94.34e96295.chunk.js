/*! For license information please see 94.34e96295.chunk.js.LICENSE.txt */
(this["webpackJsonpmwangaza-react"]=this["webpackJsonpmwangaza-react"]||[]).push([[94],{1162:function(t,e,n){"use strict";n.r(e);n(2);var a=n(694),r=n(345),c=n(448),s=n(310),i=(n(422),n(0));e.default=function(){return Object(i.jsx)("div",{className:"auth-section",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)(a.a,{className:"",children:[Object(i.jsx)(r.a,{lg:"6",className:"",children:Object(i.jsx)("div",{className:"auth-image text-center",children:Object(i.jsx)("img",{src:"/images/verify-image.svg",alt:"Verify"})})}),Object(i.jsx)(r.a,{lg:"5 offset-lg-1",className:"",children:Object(i.jsxs)("div",{className:"auth-wrapper w-100",children:[Object(i.jsx)("div",{className:"auth-head",children:Object(i.jsx)(c.a,{title:"Thank You For Your Payment! Your Company Information Is Being Verified.",subHeading:"Almost there... an email will be sent to you as soon as your account is active.",className:""})}),Object(i.jsx)("div",{className:"auth-form",children:Object(i.jsx)("div",{className:"form-submit-btn-row",children:Object(i.jsx)(s.b,{to:"/login",className:"btn btn-secondary",text:"View Profile "})})})]})})]})})})}},275:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&t.push(s)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(396);var r=n(367),c=n(397);function s(t,e){return Object(a.a)(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,c=[],s=!0,i=!1;try{for(n=n.call(t);!(s=(a=n.next()).done)&&(c.push(a.value),!e||c.length!==e);s=!0);}catch(o){i=!0,r=o}finally{try{s||null==n.return||n.return()}finally{if(i)throw r}}return c}}(t,e)||Object(r.a)(t,e)||Object(c.a)()}},277:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));n(1);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),c=a.createContext({prefixes:{},breakpoints:r});c.Consumer,c.Provider;function s(t,e){var n=Object(a.useContext)(c).prefixes;return t||n[e]||e}function i(){return Object(a.useContext)(c).breakpoints}function o(){return"rtl"===Object(a.useContext)(c).dir}},310:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));var a=n(2),r=n.n(a),c=n(52),s=n(276),i=(n(325),n(0)),o=function(){var t=r.a.useState(!1),e=Object(s.a)(t,2);e[0],e[1];return Object(i.jsxs)(i.Fragment,{children:["\xa0",Object(i.jsx)("span",{className:"spinner-border d-inline-block"})]})},u=(n(311),function(t){var e=t.className,n=t.btnName,a=t.onClick,r=t.id,c=t.type,s=t.isDisabled,u=t.isLoading;return Object(i.jsxs)("button",{className:"btn ".concat(e),onClick:a,id:r,type:c,disabled:s,children:[n,u&&Object(i.jsx)(o,{})]})}),l=function(t){var e=t.className,n=t.text,a=t.id,r=t.to;return Object(i.jsx)(c.b,{to:r,className:"btn ".concat(e),id:a,children:n})}},311:function(t,e,n){},325:function(t,e,n){},345:function(t,e,n){"use strict";var a=n(276),r=n(1),c=n(79),s=n(275),i=n.n(s),o=n(2),u=n(277),l=n(0),f=["as","bsPrefix","className"],b=["className"];var d=o.forwardRef((function(t,e){var n=function(t){var e=t.as,n=t.bsPrefix,a=t.className,s=Object(c.a)(t,f);n=Object(u.b)(n,"col");var o=Object(u.a)(),l=[],b=[];return o.forEach((function(t){var e,a,r,c=s[t];delete s[t],"object"===typeof c&&null!=c?(e=c.span,a=c.offset,r=c.order):e=c;var i="xs"!==t?"-".concat(t):"";e&&l.push(!0===e?"".concat(n).concat(i):"".concat(n).concat(i,"-").concat(e)),null!=r&&b.push("order".concat(i,"-").concat(r)),null!=a&&b.push("offset".concat(i,"-").concat(a))})),[Object(r.a)(Object(r.a)({},s),{},{className:i.a.apply(void 0,[a].concat(l,b))}),{as:e,bsPrefix:n,spans:l}]}(t),s=Object(a.a)(n,2),o=s[0],d=o.className,j=Object(c.a)(o,b),m=s[1],v=m.as,p=void 0===v?"div":v,h=m.bsPrefix,O=m.spans;return Object(l.jsx)(p,Object(r.a)(Object(r.a)({},j),{},{ref:e,className:i()(d,!O.length&&h)}))}));d.displayName="Col",e.a=d},367:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(384);function r(t,e){if(t){if("string"===typeof t)return Object(a.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(t,e):void 0}}},384:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},396:function(t,e,n){"use strict";function a(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return a}))},397:function(t,e,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return a}))},422:function(t,e,n){},448:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(2),n(452);var a=n(0),r=function(t){var e=t.className,n=t.title,r=t.subHeading,c=t.id;return Object(a.jsxs)("div",{className:"section-title ".concat(e),id:c,children:[Object(a.jsx)("h2",{children:n}),r&&Object(a.jsx)("p",{children:r})]})}},452:function(t,e,n){},694:function(t,e,n){"use strict";var a=n(1),r=n(79),c=n(275),s=n.n(c),i=n(2),o=n(277),u=n(0),l=["bsPrefix","className","as"],f=i.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,i=t.as,f=void 0===i?"div":i,b=Object(r.a)(t,l),d=Object(o.b)(n,"row"),j=Object(o.a)(),m="".concat(d,"-cols"),v=[];return j.forEach((function(t){var e,n=b[t];delete b[t],e=null!=n&&"object"===typeof n?n.cols:n;var a="xs"!==t?"-".concat(t):"";null!=e&&v.push("".concat(m).concat(a,"-").concat(e))})),Object(u.jsx)(f,Object(a.a)(Object(a.a)({ref:e},b),{},{className:s.a.apply(void 0,[c,d].concat(v))}))}));f.displayName="Row",e.a=f}}]);
//# sourceMappingURL=94.34e96295.chunk.js.map