(this["webpackJsonpmwangaza-react"]=this["webpackJsonpmwangaza-react"]||[]).push([[7],{278:function(t,e,n){"use strict";n.d(e,"m",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"k",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"l",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"o",(function(){return p})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return b})),n.d(e,"n",(function(){return O})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return h}));var r="top",i="bottom",o="right",a="left",c="auto",f=[r,i,o,a],s="start",u="end",d="clippingParents",p="viewport",l="popper",b="reference",O=f.reduce((function(t,e){return t.concat([e+"-"+s,e+"-"+u])}),[]),m=[].concat(f,[c]).reduce((function(t,e){return t.concat([e,e+"-"+s,e+"-"+u])}),[]),h=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},279:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}));var r=n(280);function i(t){return t instanceof Object(r.a)(t).Element||t instanceof Element}function o(t){return t instanceof Object(r.a)(t).HTMLElement||t instanceof HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof Object(r.a)(t).ShadowRoot||t instanceof ShadowRoot)}},280:function(t,e,n){"use strict";function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,"a",(function(){return r}))},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(279);function i(t){return((Object(r.a)(t)?t.ownerDocument:t.document)||window.document).documentElement}},283:function(t,e,n){"use strict";function r(t){return t.split("-")[0]}n.d(e,"a",(function(){return r}))},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));var r=Math.max,i=Math.min,o=Math.round},285:function(t,e,n){"use strict";function r(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,"a",(function(){return r}))},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(280);function i(t){return Object(r.a)(t).getComputedStyle(t)}},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n(278),i=n(280),o=n(282),a=n(300);var c=n(286),f=n(299),s=n(284);var u=n(320),d=n(291),p=n(279),l=n(289),b=n(294),O=n(317),m=n(285);function h(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function v(t,e){return e===r.o?h(function(t){var e=Object(i.a)(t),n=Object(o.a)(t),r=e.visualViewport,c=n.clientWidth,f=n.clientHeight,s=0,u=0;return r&&(c=r.width,f=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,u=r.offsetTop)),{width:c,height:f,x:s+Object(a.a)(t),y:u}}(t)):Object(p.a)(e)?function(t){var e=Object(l.a)(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):h(function(t){var e,n=Object(o.a)(t),r=Object(f.a)(t),i=null==(e=t.ownerDocument)?void 0:e.body,u=Object(s.a)(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),d=Object(s.a)(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),p=-r.scrollLeft+Object(a.a)(t),l=-r.scrollTop;return"rtl"===Object(c.a)(i||n).direction&&(p+=Object(s.a)(n.clientWidth,i?i.clientWidth:0)-u),{width:u,height:d,x:p,y:l}}(Object(o.a)(t)))}function j(t,e,n){var r="clippingParents"===e?function(t){var e=Object(u.a)(Object(b.a)(t)),n=["absolute","fixed"].indexOf(Object(c.a)(t).position)>=0&&Object(p.b)(t)?Object(d.a)(t):t;return Object(p.a)(n)?e.filter((function(t){return Object(p.a)(t)&&Object(O.a)(t,n)&&"body"!==Object(m.a)(t)})):[]}(t):[].concat(e),i=[].concat(r,[n]),o=i[0],a=i.reduce((function(e,n){var r=v(t,n);return e.top=Object(s.a)(r.top,e.top),e.right=Object(s.b)(r.right,e.right),e.bottom=Object(s.b)(r.bottom,e.bottom),e.left=Object(s.a)(r.left,e.left),e}),v(t,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}var g=n(318),y=n(314),x=n(316);function w(t,e){void 0===e&&(e={});var n=e,i=n.placement,a=void 0===i?t.placement:i,c=n.boundary,f=void 0===c?r.d:c,s=n.rootBoundary,u=void 0===s?r.o:s,d=n.elementContext,b=void 0===d?r.i:d,O=n.altBoundary,m=void 0!==O&&O,v=n.padding,w=void 0===v?0:v,k=Object(y.a)("number"!==typeof w?w:Object(x.a)(w,r.b)),D=b===r.i?r.j:r.i,E=t.rects.popper,A=t.elements[m?D:b],L=j(Object(p.a)(A)?A:A.contextElement||Object(o.a)(t.elements.popper),f,u),W=Object(l.a)(t.elements.reference),M=Object(g.a)({reference:W,element:E,strategy:"absolute",placement:a}),P=h(Object.assign({},E,M)),B=b===r.i?P:W,H={top:L.top-B.top+k.top,bottom:B.bottom-L.bottom+k.bottom,left:L.left-B.left+k.left,right:B.right-L.right+k.right},R=t.modifiersData.offset;if(b===r.i&&R){var T=R[a];Object.keys(H).forEach((function(t){var e=[r.k,r.c].indexOf(t)>=0?1:-1,n=[r.m,r.c].indexOf(t)>=0?"y":"x";H[t]+=T[n]*e}))}return H}},289:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(279),i=n(284);function o(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),o=1,a=1;if(Object(r.b)(t)&&e){var c=t.offsetHeight,f=t.offsetWidth;f>0&&(o=Object(i.c)(n.width)/f||1),c>0&&(a=Object(i.c)(n.height)/c||1)}return{width:n.width/o,height:n.height/a,top:n.top/a,right:n.right/o,bottom:n.bottom/a,left:n.left/o,x:n.left/o,y:n.top/a}}},290:function(t,e,n){"use strict";function r(t){return t.split("-")[1]}n.d(e,"a",(function(){return r}))},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(280),i=n(285),o=n(286),a=n(279);function c(t){return["table","td","th"].indexOf(Object(i.a)(t))>=0}var f=n(294);function s(t){return Object(a.b)(t)&&"fixed"!==Object(o.a)(t).position?t.offsetParent:null}function u(t){for(var e=Object(r.a)(t),n=s(t);n&&c(n)&&"static"===Object(o.a)(n).position;)n=s(n);return n&&("html"===Object(i.a)(n)||"body"===Object(i.a)(n)&&"static"===Object(o.a)(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Object(a.b)(t)&&"fixed"===Object(o.a)(t).position)return null;var n=Object(f.a)(t);for(Object(a.c)(n)&&(n=n.host);Object(a.b)(n)&&["html","body"].indexOf(Object(i.a)(n))<0;){var r=Object(o.a)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}},292:function(t,e,n){"use strict";var r=function(){};t.exports=r},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(285),i=n(282),o=n(279);function a(t){return"html"===Object(r.a)(t)?t:t.assignedSlot||t.parentNode||(Object(o.c)(t)?t.host:null)||Object(i.a)(t)}},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(286);function i(t){var e=Object(r.a)(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}},299:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(280);function i(t){var e=Object(r.a)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},300:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(289),i=n(282),o=n(299);function a(t){return Object(r.a)(Object(i.a)(t)).left+Object(o.a)(t).scrollLeft}},301:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(289);function i(t){var e=Object(r.a)(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}},302:function(t,e,n){"use strict";function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}n.d(e,"a",(function(){return r}))},314:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(315);function i(t){return Object.assign({},Object(r.a)(),t)}},315:function(t,e,n){"use strict";function r(){return{top:0,right:0,bottom:0,left:0}}n.d(e,"a",(function(){return r}))},316:function(t,e,n){"use strict";function r(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}n.d(e,"a",(function(){return r}))},317:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(279);function i(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Object(r.c)(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}},318:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(283),i=n(290),o=n(302),a=n(278);function c(t){var e,n=t.reference,c=t.element,f=t.placement,s=f?Object(r.a)(f):null,u=f?Object(i.a)(f):null,d=n.x+n.width/2-c.width/2,p=n.y+n.height/2-c.height/2;switch(s){case a.m:e={x:d,y:n.y-c.height};break;case a.c:e={x:d,y:n.y+n.height};break;case a.k:e={x:n.x+n.width,y:p};break;case a.f:e={x:n.x-c.width,y:p};break;default:e={x:n.x,y:n.y}}var l=s?Object(o.a)(s):null;if(null!=l){var b="y"===l?"height":"width";switch(u){case a.l:e[l]=e[l]-(n[b]/2-c[b]/2);break;case a.e:e[l]=e[l]+(n[b]/2-c[b]/2)}}return e}},319:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n(284);function i(t,e,n){return Object(r.a)(t,Object(r.b)(e,n))}function o(t,e,n){var r=i(t,e,n);return r>n?n:r}},320:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(294),i=n(298),o=n(285),a=n(279);function c(t){return["html","body","#document"].indexOf(Object(o.a)(t))>=0?t.ownerDocument.body:Object(a.b)(t)&&Object(i.a)(t)?t:c(Object(r.a)(t))}var f=n(280);function s(t,e){var n;void 0===e&&(e=[]);var o=c(t),a=o===(null==(n=t.ownerDocument)?void 0:n.body),u=Object(f.a)(o),d=a?[u].concat(u.visualViewport||[],Object(i.a)(o)?o:[]):o,p=e.concat(d);return a?p:p.concat(s(Object(r.a)(d)))}},346:function(t,e,n){"use strict";var r=n(278),i=n(287);function o(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.m,r.k,r.c,r.f].some((function(e){return t[e]>=0}))}e.a={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,c=e.rects.popper,f=e.modifiersData.preventOverflow,s=Object(i.a)(e,{elementContext:"reference"}),u=Object(i.a)(e,{altBoundary:!0}),d=o(s,r),p=o(u,c,f),l=a(d),b=a(p);e.modifiersData[n]={referenceClippingOffsets:d,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:b},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":b})}}},347:function(t,e,n){"use strict";var r=n(318);e.a={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=Object(r.a)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},348:function(t,e,n){"use strict";var r=n(278),i=n(291),o=n(280),a=n(282),c=n(286),f=n(283),s=n(290),u=n(284),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};function p(t){var e,n=t.popper,f=t.popperRect,s=t.placement,p=t.variation,l=t.offsets,b=t.position,O=t.gpuAcceleration,m=t.adaptive,h=t.roundOffsets,v=t.isFixed,j=l.x,g=void 0===j?0:j,y=l.y,x=void 0===y?0:y,w="function"===typeof h?h({x:g,y:x}):{x:g,y:x};g=w.x,x=w.y;var k=l.hasOwnProperty("x"),D=l.hasOwnProperty("y"),E=r.f,A=r.m,L=window;if(m){var W=Object(i.a)(n),M="clientHeight",P="clientWidth";if(W===Object(o.a)(n)&&(W=Object(a.a)(n),"static"!==Object(c.a)(W).position&&"absolute"===b&&(M="scrollHeight",P="scrollWidth")),s===r.m||(s===r.f||s===r.k)&&p===r.e)A=r.c,x-=(v&&W===L&&L.visualViewport?L.visualViewport.height:W[M])-f.height,x*=O?1:-1;if(s===r.f||(s===r.m||s===r.c)&&p===r.e)E=r.k,g-=(v&&W===L&&L.visualViewport?L.visualViewport.width:W[P])-f.width,g*=O?1:-1}var B,H=Object.assign({position:b},m&&d),R=!0===h?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:Object(u.c)(e*r)/r||0,y:Object(u.c)(n*r)/r||0}}({x:g,y:x}):{x:g,y:x};return g=R.x,x=R.y,O?Object.assign({},H,((B={})[A]=D?"0":"",B[E]=k?"0":"",B.transform=(L.devicePixelRatio||1)<=1?"translate("+g+"px, "+x+"px)":"translate3d("+g+"px, "+x+"px, 0)",B)):Object.assign({},H,((e={})[A]=D?x+"px":"",e[E]=k?g+"px":"",e.transform="",e))}e.a={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,c=n.roundOffsets,u=void 0===c||c,d={placement:Object(f.a)(e.placement),variation:Object(s.a)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,p(Object.assign({},d,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:u})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,p(Object.assign({},d,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},349:function(t,e,n){"use strict";var r=n(280),i={passive:!0};e.a={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,a=o.scroll,c=void 0===a||a,f=o.resize,s=void 0===f||f,u=Object(r.a)(e.elements.popper),d=[].concat(e.scrollParents.reference,e.scrollParents.popper);return c&&d.forEach((function(t){t.addEventListener("scroll",n.update,i)})),s&&u.addEventListener("resize",n.update,i),function(){c&&d.forEach((function(t){t.removeEventListener("scroll",n.update,i)})),s&&u.removeEventListener("resize",n.update,i)}},data:{}}},350:function(t,e,n){"use strict";var r=n(283),i=n(278);e.a={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,a=n.offset,c=void 0===a?[0,0]:a,f=i.h.reduce((function(t,n){return t[n]=function(t,e,n){var o=Object(r.a)(t),a=[i.f,i.m].indexOf(o)>=0?-1:1,c="function"===typeof n?n(Object.assign({},e,{placement:t})):n,f=c[0],s=c[1];return f=f||0,s=(s||0)*a,[i.f,i.k].indexOf(o)>=0?{x:s,y:f}:{x:f,y:s}}(n,e.rects,c),t}),{}),s=f[e.placement],u=s.x,d=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=d),e.modifiersData[o]=f}}},351:function(t,e,n){"use strict";var r=n(283),i=n(301),o=n(317),a=n(291),c=n(302),f=n(319),s=n(314),u=n(316),d=n(278);e.a={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,p=t.options,l=n.elements.arrow,b=n.modifiersData.popperOffsets,O=Object(r.a)(n.placement),m=Object(c.a)(O),h=[d.f,d.k].indexOf(O)>=0?"height":"width";if(l&&b){var v=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,Object(s.a)("number"!==typeof t?t:Object(u.a)(t,d.b))}(p.padding,n),j=Object(i.a)(l),g="y"===m?d.m:d.f,y="y"===m?d.c:d.k,x=n.rects.reference[h]+n.rects.reference[m]-b[m]-n.rects.popper[h],w=b[m]-n.rects.reference[m],k=Object(a.a)(l),D=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0,E=x/2-w/2,A=v[g],L=D-j[h]-v[y],W=D/2-j[h]/2+E,M=Object(f.a)(A,W,L),P=m;n.modifiersData[o]=((e={})[P]=M,e.centerOffset=M-W,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r)))&&Object(o.a)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},353:function(t,e,n){"use strict";var r={left:"right",right:"left",bottom:"top",top:"bottom"};function i(t){return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}var o=n(283),a={start:"end",end:"start"};function c(t){return t.replace(/start|end/g,(function(t){return a[t]}))}var f=n(287),s=n(290),u=n(278);e.a={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,d=void 0===a||a,p=n.altAxis,l=void 0===p||p,b=n.fallbackPlacements,O=n.padding,m=n.boundary,h=n.rootBoundary,v=n.altBoundary,j=n.flipVariations,g=void 0===j||j,y=n.allowedAutoPlacements,x=e.options.placement,w=Object(o.a)(x),k=b||(w===x||!g?[i(x)]:function(t){if(Object(o.a)(t)===u.a)return[];var e=i(t);return[c(t),e,c(e)]}(x)),D=[x].concat(k).reduce((function(t,n){return t.concat(Object(o.a)(n)===u.a?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=n.boundary,a=n.rootBoundary,c=n.padding,d=n.flipVariations,p=n.allowedAutoPlacements,l=void 0===p?u.h:p,b=Object(s.a)(r),O=b?d?u.n:u.n.filter((function(t){return Object(s.a)(t)===b})):u.b,m=O.filter((function(t){return l.indexOf(t)>=0}));0===m.length&&(m=O);var h=m.reduce((function(e,n){return e[n]=Object(f.a)(t,{placement:n,boundary:i,rootBoundary:a,padding:c})[Object(o.a)(n)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}(e,{placement:n,boundary:m,rootBoundary:h,padding:O,flipVariations:g,allowedAutoPlacements:y}):n)}),[]),E=e.rects.reference,A=e.rects.popper,L=new Map,W=!0,M=D[0],P=0;P<D.length;P++){var B=D[P],H=Object(o.a)(B),R=Object(s.a)(B)===u.l,T=[u.m,u.c].indexOf(H)>=0,C=T?"width":"height",S=Object(f.a)(e,{placement:B,boundary:m,rootBoundary:h,altBoundary:v,padding:O}),V=T?R?u.k:u.f:R?u.c:u.m;E[C]>A[C]&&(V=i(V));var q=i(V),N=[];if(d&&N.push(S[H]<=0),l&&N.push(S[V]<=0,S[q]<=0),N.every((function(t){return t}))){M=B,W=!1;break}L.set(B,N)}if(W)for(var z=function(t){var e=D.find((function(e){var n=L.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return M=e,"break"},I=g?3:1;I>0;I--){if("break"===z(I))break}e.placement!==M&&(e.modifiersData[r]._skip=!0,e.placement=M,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},355:function(t,e,n){"use strict";var r=n(278),i=n(283),o=n(302);var a=n(319),c=n(301),f=n(291),s=n(287),u=n(290),d=n(315),p=n(284);e.a={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,l=t.name,b=n.mainAxis,O=void 0===b||b,m=n.altAxis,h=void 0!==m&&m,v=n.boundary,j=n.rootBoundary,g=n.altBoundary,y=n.padding,x=n.tether,w=void 0===x||x,k=n.tetherOffset,D=void 0===k?0:k,E=Object(s.a)(e,{boundary:v,rootBoundary:j,padding:y,altBoundary:g}),A=Object(i.a)(e.placement),L=Object(u.a)(e.placement),W=!L,M=Object(o.a)(A),P="x"===M?"y":"x",B=e.modifiersData.popperOffsets,H=e.rects.reference,R=e.rects.popper,T="function"===typeof D?D(Object.assign({},e.rects,{placement:e.placement})):D,C="number"===typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,V={x:0,y:0};if(B){if(O){var q,N="y"===M?r.m:r.f,z="y"===M?r.c:r.k,I="y"===M?"height":"width",F=B[M],U=F+E[N],_=F-E[z],J=w?-R[I]/2:0,X=L===r.l?H[I]:R[I],Y=L===r.l?-R[I]:-H[I],G=e.elements.arrow,K=w&&G?Object(c.a)(G):{width:0,height:0},Q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Object(d.a)(),Z=Q[N],$=Q[z],tt=Object(a.a)(0,H[I],K[I]),et=W?H[I]/2-J-tt-Z-C.mainAxis:X-tt-Z-C.mainAxis,nt=W?-H[I]/2+J+tt+$+C.mainAxis:Y+tt+$+C.mainAxis,rt=e.elements.arrow&&Object(f.a)(e.elements.arrow),it=rt?"y"===M?rt.clientTop||0:rt.clientLeft||0:0,ot=null!=(q=null==S?void 0:S[M])?q:0,at=F+et-ot-it,ct=F+nt-ot,ft=Object(a.a)(w?Object(p.b)(U,at):U,F,w?Object(p.a)(_,ct):_);B[M]=ft,V[M]=ft-F}if(h){var st,ut="x"===M?r.m:r.f,dt="x"===M?r.c:r.k,pt=B[P],lt="y"===P?"height":"width",bt=pt+E[ut],Ot=pt-E[dt],mt=-1!==[r.m,r.f].indexOf(A),ht=null!=(st=null==S?void 0:S[P])?st:0,vt=mt?bt:pt-H[lt]-R[lt]-ht+C.altAxis,jt=mt?pt+H[lt]+R[lt]-ht-C.altAxis:Ot,gt=w&&mt?Object(a.b)(vt,pt,jt):Object(a.a)(w?vt:bt,pt,w?jt:Ot);B[P]=gt,V[P]=gt-pt}e.modifiersData[l]=V}},requiresIfExists:["offset"]}},395:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n(289),i=n(299),o=n(280),a=n(279);var c=n(285),f=n(300),s=n(282),u=n(298),d=n(284);function p(t,e,n){void 0===n&&(n=!1);var p=Object(a.b)(e),l=Object(a.b)(e)&&function(t){var e=t.getBoundingClientRect(),n=Object(d.c)(e.width)/t.offsetWidth||1,r=Object(d.c)(e.height)/t.offsetHeight||1;return 1!==n||1!==r}(e),b=Object(s.a)(e),O=Object(r.a)(t,l),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(p||!p&&!n)&&(("body"!==Object(c.a)(e)||Object(u.a)(b))&&(m=function(t){return t!==Object(o.a)(t)&&Object(a.b)(t)?{scrollLeft:(e=t).scrollLeft,scrollTop:e.scrollTop}:Object(i.a)(t);var e}(e)),Object(a.b)(e)?((h=Object(r.a)(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):b&&(h.x=Object(f.a)(b))),{x:O.left+m.scrollLeft-h.x,y:O.top+m.scrollTop-h.y,width:O.width,height:O.height}}var l=n(301),b=n(320),O=n(291),m=n(278);function h(t){var e=new Map,n=new Set,r=[];function i(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&i(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),r}function v(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}var j={placement:"bottom",modifiers:[],strategy:"absolute"};function g(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function y(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,i=e.defaultOptions,o=void 0===i?j:i;return function(t,e,n){void 0===n&&(n=o);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},j,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],f=!1,s={state:i,setOptions:function(n){var f="function"===typeof n?n(i.options):n;u(),i.options=Object.assign({},o,i.options,f),i.scrollParents={reference:Object(a.a)(t)?Object(b.a)(t):t.contextElement?Object(b.a)(t.contextElement):[],popper:Object(b.a)(e)};var d=function(t){var e=h(t);return m.g.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,i.options.modifiers)));return i.orderedModifiers=d.filter((function(t){return t.enabled})),i.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,o=t.effect;if("function"===typeof o){var a=o({state:i,name:e,instance:s,options:r}),f=function(){};c.push(a||f)}})),s.update()},forceUpdate:function(){if(!f){var t=i.elements,e=t.reference,n=t.popper;if(g(e,n)){i.rects={reference:p(e,Object(O.a)(n),"fixed"===i.options.strategy),popper:Object(l.a)(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(t){return i.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],a=o.fn,c=o.options,u=void 0===c?{}:c,d=o.name;"function"===typeof a&&(i=a({state:i,options:u,name:d,instance:s})||i)}else i.reset=!1,r=-1}}},update:v((function(){return new Promise((function(t){s.forceUpdate(),t(i)}))})),destroy:function(){u(),f=!0}};if(!g(t,e))return s;function u(){c.forEach((function(t){return t()})),c=[]}return s.setOptions(n).then((function(t){!f&&n.onFirstUpdate&&n.onFirstUpdate(t)})),s}}}}]);
//# sourceMappingURL=7.84a17d1a.chunk.js.map