(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6071:function(e,t,r){"use strict";var n=r(3848),o=r(9448);t.default=void 0;var c=o(r(7294)),i=r(1689),a=r(2441),s=r(5749),u={};function l(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,a.useRouter)(),o=r&&r.asPath||"/",f=c.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),r=n(t,2),c=r[0],a=r[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,j=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var O=c.Children.only(v),m=O&&"object"===typeof O&&O.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),w=n(g,2),_=w[0],P=w[1],x=c.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);(0,c.useEffect)((function(){var e=P&&t&&(0,i.isLocalURL)(p),n="undefined"!==typeof j?j:r&&r.locale,o=u[p+"%"+d+(n?"%"+n:"")];e&&!o&&l(r,p,d,{locale:n})}),[d,p,P,j,t,r]);var E={ref:x,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:c,locale:s,scroll:a}))}(e,r,p,d,h,b,y,j)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(r,p,d,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var S="undefined"!==typeof j?j:r&&r.locale,k=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(d,S,r&&r.locales,r&&r.domainLocales);E.href=k||(0,i.addBasePath)((0,i.addLocale)(d,S,r&&r.defaultLocale))}return c.default.cloneElement(O,E)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=n(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,i=n.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=r(7294),c=r(8391),i="undefined"!==typeof IntersectionObserver;var a=new Map},7578:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var n=r(5893),o=r(7294),c={state:{search:""},setState:function(){}},i=(0,o.createContext)(c),a=function(e){var t=e.children,r=(0,o.useState)(c.state),a=r[0],s=r[1];return(0,n.jsx)(i.Provider,{value:{state:a,setState:s},children:t})};t.Z=i},5891:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(355);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,c=s}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(7294);function i(){var e=o(c.useState(!1),2),t=e[0],r=e[1];function n(){if(window){var e=window.innerWidth<=1024;r(e)}}return c.useEffect((function(){return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),{isMobile:t}}},8701:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),o=r(6265),c=r(1163),i=r(7294),a=r(7578),s=r(5891);function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=r(1664);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t=e.children,r=e.activeClassName,o=u(e,["children","activeClassName"]),a=(0,c.useRouter)().asPath===o.href?r:"";return(0,n.jsx)(l.default,p(p({},o),{},{children:(0,i.cloneElement)(t,{className:a})}))}var v=r(1409),h=r.n(v);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(){var e=(0,c.useRouter)(),t=(0,s.Z)().isMobile,r=(0,i.useState)(!1),o=r[0],u=r[1],l=(0,i.useContext)(a.Z),f=l.state,p=l.setState;function v(){t&&(document.querySelector("body").style.overflowY=o?"auto":"hidden",u(!o)),p(y(y({},f),{},{search:""}))}return(0,n.jsx)("header",{className:h().container,children:(0,n.jsxs)("div",{className:h().content,children:[t&&(0,n.jsxs)("div",{className:h().menuIcon,children:[(0,n.jsx)("input",{type:"checkbox",id:"icon_menu",className:h().icon_menu,checked:o,onChange:v}),(0,n.jsxs)("label",{htmlFor:"icon_menu",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})]}),e.asPath.includes("posts")&&(0,n.jsx)("input",{className:h().input,type:"text",placeholder:"Pesquisar pelo post",onChange:function(e){p(y(y({},f),{},{search:e.target.value}))},value:f.search}),(!t||o)&&(0,n.jsxs)("nav",{className:t?h().navbar:null,children:[(0,n.jsx)(d,{href:"/",activeClassName:h().active,children:(0,n.jsx)("a",{onClick:v,children:"Inicio"})}),(0,n.jsx)(d,{href:"/posts",activeClassName:h().active,children:(0,n.jsx)("a",{onClick:v,children:"Posts"})}),(0,n.jsx)("a",{href:"https://jhonatan-dev-rios.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:" Sobre mim "}),(0,n.jsx)("a",{href:"https://jhonatan-dev-rios.herokuapp.com/projetos",target:"_blank",rel:"noopener noreferrer",children:" Portf\xf3lio "})]})]})})}var O=function(e){var t=e.children;return(0,n.jsxs)(a.U,{children:[" ",t," "]})};r(935);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(O,{children:[(0,n.jsx)(j,{}),(0,n.jsx)(t,g({},r))]})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8701)}])},1409:function(e){e.exports={container:"styles_container__Mj-k-",content:"styles_content__3RWSF",input:"styles_input__3z_3t",active:"styles_active__24Ijt",menuIcon:"styles_menuIcon__9y31a",icon_menu:"styles_icon_menu__AASqU",navbar:"styles_navbar__2tiQv"}},935:function(){},1664:function(e,t,r){e.exports=r(6071)},5093:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},6265:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},355:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5093);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}},1163:function(e,t,r){e.exports=r(2441)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(2441)}));var r=e.O();_N_E=r}]);