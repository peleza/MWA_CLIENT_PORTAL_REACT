(this["webpackJsonpmwangaza-react"]=this["webpackJsonpmwangaza-react"]||[]).push([[4],{305:function(e,t,n){"use strict";var a=n(304);function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var c=/^ms-/;function i(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(c,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(i(t))||r(e).getPropertyValue(i(t));Object.keys(t).forEach((function(r){var o=t[r];o||0===o?!function(e){return!(!e||!s.test(e))}(r)?n+=i(r)+": "+o+";":a+=r+"("+o+") ":e.style.removeProperty(i(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2),r=n(303),o=Object(a.createContext)(r.a?window:void 0);o.Provider;function c(){return Object(a.useContext)(o)}},326:function(e,t,n){"use strict";function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return a}))},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(305),r=n(327);function o(e,t,n){void 0===n&&(n=5);var a=!1,o=setTimeout((function(){a||function(e,t,n,a){if(void 0===n&&(n=!1),void 0===a&&(a=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,a),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),c=Object(r.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(o),c()}}function c(e,t,n,c){null==n&&(n=function(e){var t=Object(a.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var i=o(e,n,c),s=Object(r.a)(e,"transitionend",t);return function(){i(),s()}}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2);function r(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},357:function(e,t,n){"use strict";var a=n(1),r=n(79),o=n(80),c=n(275),i=n.n(c),s=n(2),l=n.n(s),u=n(366),d=n(305),f=n(336);function b(e,t){var n=Object(d.a)(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function j(e,t){var n=b(e,"transitionDuration"),a=b(e,"transitionDelay"),r=Object(f.a)(e,(function(n){n.target===e&&(r(),t(n))}),n+a)}var O=n(296),v=n(29),h=n.n(v);var m,p=n(0),g=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],y=l.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,c=e.onEntered,i=e.onExit,d=e.onExiting,f=e.onExited,b=e.addEndListener,j=e.children,v=e.childRef,m=Object(r.a)(e,g),y=Object(s.useRef)(null),E=Object(O.a)(y,v),x=function(e){var t;E((t=e)&&"setState"in t?h.a.findDOMNode(t):null!=t?t:null)},k=function(e){return function(t){e&&y.current&&e(y.current,t)}},w=Object(s.useCallback)(k(n),[n]),C=Object(s.useCallback)(k(o),[o]),R=Object(s.useCallback)(k(c),[c]),N=Object(s.useCallback)(k(i),[i]),T=Object(s.useCallback)(k(d),[d]),F=Object(s.useCallback)(k(f),[f]),D=Object(s.useCallback)(k(b),[b]);return Object(p.jsx)(u.c,Object(a.a)(Object(a.a)({ref:t},m),{},{onEnter:w,onEntered:R,onEntering:C,onExit:N,onExited:F,onExiting:T,addEndListener:D,nodeRef:y,children:"function"===typeof j?function(e,t){return j(e,Object(a.a)(Object(a.a)({},t),{},{ref:x}))}:l.a.cloneElement(j,{ref:x})}))})),E=["className","children","transitionClasses"],x=(m={},Object(o.a)(m,u.b,"show"),Object(o.a)(m,u.a,"show"),m),k=s.forwardRef((function(e,t){var n=e.className,o=e.children,c=e.transitionClasses,l=void 0===c?{}:c,u=Object(r.a)(e,E),d=Object(s.useCallback)((function(e,t){!function(e){e.offsetHeight}(e),null==u.onEnter||u.onEnter(e,t)}),[u]);return Object(p.jsx)(y,Object(a.a)(Object(a.a)({ref:t,addEndListener:j},u),{},{onEnter:d,childRef:o.ref,children:function(e,t){return s.cloneElement(o,Object(a.a)(Object(a.a)({},t),{},{className:i()("fade",n,o.props.className,x[e],l[e])}))}}))}));k.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},k.displayName="Fade";t.a=k},371:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(322),r=n(392),o=n(382);function c(e){var t=Object(r.a)();return function(){var n,r=Object(a.a)(e);if(t){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}},373:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(322);function r(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var a=r(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},o.apply(this,arguments)}},451:function(e,t,n){"use strict";var a,r=n(276),o=n(79),c=n(1),i=n(275),s=n.n(i),l=n(359),u=n(303),d=n(304),f=n(410);function b(e){if((!a&&0!==a||e)&&u.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var j=n(361),O=n(288),v=n(296),h=n(354),m=n(336),p=n(2);function g(e){void 0===e&&(e=Object(d.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var y=n(326),E=n(327),x=n(29),k=n.n(x),w=n(362),C=n(363),R=n(307),N=n(80),T=n(356),F=n(352),D=n(305),S=n(308);var L=Object(S.a)("modal-open"),P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ownerDocument,a=t.handleContainerOverflow,r=void 0===a||a,o=t.isRTL,c=void 0!==o&&o;Object(T.a)(this,e),this.handleContainerOverflow=r,this.isRTL=c,this.modals=[],this.ownerDocument=n}return Object(F.a)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();e.style=Object(N.a)({overflow:a.style.overflow},n,a.style[n]),e.scrollBarWidth&&(t[n]="".concat(parseInt(Object(D.a)(a,n)||"0",10)+e.scrollBarWidth,"px")),a.setAttribute(L,""),Object(D.a)(a,t)}},{key:"reset",value:function(){var e=this;Object(R.a)(this.modals).forEach((function(t){return e.remove(t)}))}},{key:"removeContainerStyle",value:function(e){var t=this.getElement();t.removeAttribute(L),Object.assign(t.style,e.style)}},{key:"add",value:function(e){var t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),B=P,M=n(309),A=function(e,t){var n;return u.a?null==e?(t||Object(d.a)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};var H,W=n(0),I=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function z(e){var t=Object(M.a)(),n=e||function(e){return H||(H=new B({ownerDocument:null==e?void 0:e.document})),H}(t),a=Object(p.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(){return n.add(a.current)},remove:function(){return n.remove(a.current)},isTopModal:function(){return n.isTopModal(a.current)},setDialogRef:Object(p.useCallback)((function(e){a.current.dialog=e}),[]),setBackdropRef:Object(p.useCallback)((function(e){a.current.backdrop=e}),[])})}var K=Object(p.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,o=e.role,c=void 0===o?"dialog":o,i=e.className,s=e.style,l=e.children,d=e.backdrop,f=void 0===d||d,b=e.keyboard,j=void 0===b||b,v=e.onBackdropClick,m=e.onEscapeKeyDown,x=e.transition,R=e.backdropTransition,N=e.autoFocus,T=void 0===N||N,F=e.enforceFocus,D=void 0===F||F,S=e.restoreFocus,L=void 0===S||S,P=e.restoreFocusOptions,B=e.renderDialog,H=e.renderBackdrop,K=void 0===H?function(e){return Object(W.jsx)("div",Object.assign({},e))}:H,V=e.manager,U=e.container,_=e.onShow,J=e.onHide,X=void 0===J?function(){}:J,Y=e.onExit,Z=e.onExited,$=e.onExiting,q=e.onEnter,G=e.onEntering,Q=e.onEntered,ee=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,I),te=function(e,t){var n=Object(M.a)(),a=Object(p.useState)((function(){return A(e,null==n?void 0:n.document)})),o=Object(r.a)(a,2),c=o[0],i=o[1];if(!c){var s=A(e);s&&i(s)}return Object(p.useEffect)((function(){t&&c&&t(c)}),[t,c]),Object(p.useEffect)((function(){var t=A(e);t!==c&&i(t)}),[e,c]),c}(U),ne=z(V),ae=Object(w.a)(),re=Object(C.a)(a),oe=Object(p.useState)(!a),ce=Object(r.a)(oe,2),ie=ce[0],se=ce[1],le=Object(p.useRef)(null);Object(p.useImperativeHandle)(t,(function(){return ne}),[ne]),u.a&&!re&&a&&(le.current=g()),x||a||ie?a&&ie&&se(!1):se(!0);var ue=Object(O.a)((function(){if(ne.add(),ve.current=Object(E.a)(document,"keydown",je),Oe.current=Object(E.a)(document,"focus",(function(){return setTimeout(fe)}),!0),_&&_(),T){var e=g(document);ne.dialog&&e&&!Object(y.a)(ne.dialog,e)&&(le.current=e,ne.dialog.focus())}})),de=Object(O.a)((function(){var e;(ne.remove(),null==ve.current||ve.current(),null==Oe.current||Oe.current(),L)&&(null==(e=le.current)||null==e.focus||e.focus(P),le.current=null)}));Object(p.useEffect)((function(){a&&te&&ue()}),[a,te,ue]),Object(p.useEffect)((function(){ie&&de()}),[ie,de]),Object(h.a)((function(){de()}));var fe=Object(O.a)((function(){if(D&&ae()&&ne.isTopModal()){var e=g();ne.dialog&&e&&!Object(y.a)(ne.dialog,e)&&ne.dialog.focus()}})),be=Object(O.a)((function(e){e.target===e.currentTarget&&(null==v||v(e),!0===f&&X())})),je=Object(O.a)((function(e){j&&27===e.keyCode&&ne.isTopModal()&&(null==m||m(e),e.defaultPrevented||X())})),Oe=Object(p.useRef)(),ve=Object(p.useRef)(),he=x;if(!te||!(a||he&&!ie))return null;var me=Object.assign({role:c,ref:ne.setDialogRef,"aria-modal":"dialog"===c||void 0},ee,{style:s,className:i,tabIndex:-1}),pe=B?B(me):Object(W.jsx)("div",Object.assign({},me,{children:p.cloneElement(l,{role:"document"})}));he&&(pe=Object(W.jsx)(he,{appear:!0,unmountOnExit:!0,in:!!a,onExit:Y,onExiting:$,onExited:function(){se(!0),null==Z||Z.apply(void 0,arguments)},onEnter:q,onEntering:G,onEntered:Q,children:pe}));var ge=null;if(f){var ye=R;ge=K({ref:ne.setBackdropRef,onClick:be}),ye&&(ge=Object(W.jsx)(ye,{appear:!0,in:!!a,children:ge}))}return Object(W.jsx)(W.Fragment,{children:k.a.createPortal(Object(W.jsxs)(W.Fragment,{children:[ge,pe]}),te)})}));K.displayName="Modal";var V,U=Object.assign(K,{Manager:B}),_=n(373),J=n(322),X=n(390),Y=n(371),Z=n(419),$=n(344),q=n(415),G=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Q=".sticky-top",ee=".navbar-toggler",te=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"adjustAndStore",value:function(e,t,n){var a=t.style[e];t.dataset[e]=a,Object(D.a)(t,Object(N.a)({},e,"".concat(parseFloat(Object(D.a)(t,e))+n,"px")))}},{key:"restore",value:function(e,t){var n=t.dataset[e];void 0!==n&&(delete t.dataset[e],Object(D.a)(t,Object(N.a)({},e,n)))}},{key:"setContainerStyle",value:function(e){var t=this;Object(_.a)(Object(J.a)(n.prototype),"setContainerStyle",this).call(this,e);var a=this.getElement();if(Object(Z.a)(a,"modal-open"),e.scrollBarWidth){var r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";Object($.a)(a,G).forEach((function(n){return t.adjustAndStore(r,n,e.scrollBarWidth)})),Object($.a)(a,Q).forEach((function(n){return t.adjustAndStore(o,n,-e.scrollBarWidth)})),Object($.a)(a,ee).forEach((function(n){return t.adjustAndStore(o,n,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var t=this;Object(_.a)(Object(J.a)(n.prototype),"removeContainerStyle",this).call(this,e);var a=this.getElement();Object(q.a)(a,"modal-open");var r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";Object($.a)(a,G).forEach((function(e){return t.restore(r,e)})),Object($.a)(a,Q).forEach((function(e){return t.restore(o,e)})),Object($.a)(a,ee).forEach((function(e){return t.restore(o,e)}))}}]),n}(B);var ne=n(357),ae=n(295),re=Object(ae.a)("modal-body"),oe=p.createContext({onHide:function(){}}),ce=n(277),ie=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],se=p.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.contentClassName,i=e.centered,l=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,b=Object(o.a)(e,ie);n=Object(ce.b)(n,"modal");var j="".concat(n,"-dialog"),O="string"===typeof u?"".concat(n,"-fullscreen-").concat(u):"".concat(n,"-fullscreen");return Object(W.jsx)("div",Object(c.a)(Object(c.a)({},b),{},{ref:t,className:s()(j,a,l&&"".concat(n,"-").concat(l),i&&"".concat(j,"-centered"),f&&"".concat(j,"-scrollable"),u&&O),children:Object(W.jsx)("div",{className:s()("".concat(n,"-content"),r),children:d})}))}));se.displayName="ModalDialog";var le=se,ue=Object(ae.a)("modal-footer"),de=n(28),fe=n.n(de),be=["className","variant"],je={"aria-label":fe.a.string,onClick:fe.a.func,variant:fe.a.oneOf(["white"])},Oe=p.forwardRef((function(e,t){var n=e.className,a=e.variant,r=Object(o.a)(e,be);return Object(W.jsx)("button",Object(c.a)({ref:t,type:"button",className:s()("btn-close",a&&"btn-close-".concat(a),n)},r))}));Oe.displayName="CloseButton",Oe.propTypes=je,Oe.defaultProps={"aria-label":"Close"};var ve=Oe,he=["closeLabel","closeVariant","closeButton","onHide","children"],me=p.forwardRef((function(e,t){var n=e.closeLabel,a=e.closeVariant,r=e.closeButton,i=e.onHide,s=e.children,l=Object(o.a)(e,he),u=Object(p.useContext)(oe),d=Object(O.a)((function(){null==u||u.onHide(),null==i||i()}));return Object(W.jsxs)("div",Object(c.a)(Object(c.a)({ref:t},l),{},{children:[s,r&&Object(W.jsx)(ve,{"aria-label":n,variant:a,onClick:d})]}))}));me.defaultProps={closeLabel:"Close",closeButton:!1};var pe=me,ge=["bsPrefix","className"],ye=p.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=Object(o.a)(e,ge);return n=Object(ce.b)(n,"modal-header"),Object(W.jsx)(pe,Object(c.a)(Object(c.a)({ref:t},r),{},{className:s()(a,n)}))}));ye.displayName="ModalHeader",ye.defaultProps={closeLabel:"Close",closeButton:!1};var Ee,xe=ye,ke=(Ee="h4",p.forwardRef((function(e,t){return Object(W.jsx)("div",Object(c.a)(Object(c.a)({},e),{},{ref:t,className:s()(e.className,Ee)}))}))),we=Object(ae.a)("modal-title",{Component:ke}),Ce=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],Re={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:le};function Ne(e){return Object(W.jsx)(ne.a,Object(c.a)(Object(c.a)({},e),{},{timeout:null}))}function Te(e){return Object(W.jsx)(ne.a,Object(c.a)(Object(c.a)({},e),{},{timeout:null}))}var Fe=p.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.style,g=e.dialogClassName,y=e.contentClassName,E=e.children,x=e.dialogAs,k=e["aria-labelledby"],w=e["aria-describedby"],C=e["aria-label"],R=e.show,N=e.animation,T=e.backdrop,F=e.keyboard,D=e.onEscapeKeyDown,S=e.onShow,L=e.onHide,P=e.container,B=e.autoFocus,M=e.enforceFocus,A=e.restoreFocus,H=e.restoreFocusOptions,I=e.onEntered,z=e.onExit,K=e.onExiting,_=e.onEnter,J=e.onEntering,X=e.onExited,Y=e.backdropClassName,Z=e.manager,$=Object(o.a)(e,Ce),q=Object(p.useState)({}),G=Object(r.a)(q,2),Q=G[0],ee=G[1],ne=Object(p.useState)(!1),ae=Object(r.a)(ne,2),re=ae[0],ie=ae[1],se=Object(p.useRef)(!1),le=Object(p.useRef)(!1),ue=Object(p.useRef)(null),de=Object(j.a)(),fe=Object(r.a)(de,2),be=fe[0],je=fe[1],Oe=Object(v.a)(t,je),ve=Object(O.a)(L),he=Object(ce.c)();n=Object(ce.b)(n,"modal");var me=Object(p.useMemo)((function(){return{onHide:ve}}),[ve]);function pe(){return Z||(e={isRTL:he},V||(V=new te(e)),V);var e}function ge(e){if(u.a){var t=pe().getScrollbarWidth()>0,n=e.scrollHeight>Object(d.a)(e).documentElement.clientHeight;ee({paddingRight:t&&!n?b():void 0,paddingLeft:!t&&n?b():void 0})}}var ye=Object(O.a)((function(){be&&ge(be.dialog)}));Object(h.a)((function(){Object(f.a)(window,"resize",ye),null==ue.current||ue.current()}));var Ee=function(){se.current=!0},xe=function(e){se.current&&be&&e.target===be.dialog&&(le.current=!0),se.current=!1},ke=function(){ie(!0),ue.current=Object(m.a)(be.dialog,(function(){ie(!1)}))},we=function(e){"static"!==T?le.current||e.target!==e.currentTarget?le.current=!1:null==L||L():function(e){e.target===e.currentTarget&&ke()}(e)},Re=Object(p.useCallback)((function(e){return Object(W.jsx)("div",Object(c.a)(Object(c.a)({},e),{},{className:s()("".concat(n,"-backdrop"),Y,!N&&"show")}))}),[N,Y,n]),Fe=Object(c.a)(Object(c.a)({},i),Q);Fe.display="block";return Object(W.jsx)(oe.Provider,{value:me,children:Object(W.jsx)(U,{show:R,ref:Oe,backdrop:T,container:P,keyboard:!0,autoFocus:B,enforceFocus:M,restoreFocus:A,restoreFocusOptions:H,onEscapeKeyDown:function(e){F||"static"!==T?F&&D&&D(e):(e.preventDefault(),ke())},onShow:S,onHide:L,onEnter:function(e,t){e&&ge(e),null==_||_(e,t)},onEntering:function(e,t){null==J||J(e,t),Object(l.a)(window,"resize",ye)},onEntered:I,onExit:function(e){null==ue.current||ue.current(),null==z||z(e)},onExiting:K,onExited:function(e){e&&(e.style.display=""),null==X||X(e),Object(f.a)(window,"resize",ye)},manager:pe(),transition:N?Ne:void 0,backdropTransition:N?Te:void 0,renderBackdrop:Re,renderDialog:function(e){return Object(W.jsx)("div",Object(c.a)(Object(c.a)({role:"dialog"},e),{},{style:Fe,className:s()(a,n,re&&"".concat(n,"-static")),onClick:T?we:void 0,onMouseUp:xe,"aria-label":C,"aria-labelledby":k,"aria-describedby":w,children:Object(W.jsx)(x,Object(c.a)(Object(c.a)({},$),{},{onMouseDown:Ee,className:g,contentClassName:y,children:E}))}))}})})}));Fe.displayName="Modal",Fe.defaultProps=Re;t.a=Object.assign(Fe,{Body:re,Header:xe,Title:we,Footer:ue,Dialog:le,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=4.68bca329.chunk.js.map