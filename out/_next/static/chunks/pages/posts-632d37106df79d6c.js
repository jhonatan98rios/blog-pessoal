(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{4314:function(e,t,r){"use strict";r.d(t,{R:function(){return d}});var s=r(9499),n=r(1664),c=r.n(n),o=r(7294),a=r(6093),i=r(7028),l=r.n(i),u=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t=e.categories,r=(0,o.useState)(""),s=r[0],n=r[1],i=(0,o.useContext)(a.Z),p=i.state,d=i.setState;return(0,u.jsxs)("section",{className:l().container,children:[(0,u.jsx)("h3",{className:l().header,children:"Categorias"}),(0,u.jsx)("nav",{children:(0,u.jsx)("ul",{className:l().categories,children:t.map((function(e,t){return(0,u.jsx)("li",{children:(0,u.jsx)(c(),{href:"/posts/".concat(e.path),children:(0,u.jsx)("a",{className:l().category,onClick:function(){return function(e){n(e.label),d(f(f({},p),{},{search:""}))}(e)},style:{color:s==e.label?"#8b96ff":"#fff"},children:(0,u.jsx)("span",{className:l().name,children:e.label})})})},t)}))})})]})}},5516:function(e,t,r){"use strict";r.d(t,{R:function(){return b}});var s=r(9499),n=r(1114),c=r.n(n),o=r(1664),a=r.n(o),i=r(9589),l=r.n(i),u=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t=e.post,r=e.customStyle;return(0,u.jsx)(a(),{href:"/post/".concat(t.slug),children:(0,u.jsx)("a",{className:l().card,style:f(f({},r),{},{backgroundImage:"url(".concat(t.banner.src,")")}),children:(0,u.jsxs)("article",{children:[(0,u.jsx)("span",{className:"likes"}),(0,u.jsxs)("h3",{className:l().title,children:[" ",t.title," "]}),(0,u.jsxs)("time",{children:[t.updateAt," "]}),(0,u.jsx)("div",{className:l().categories,children:t.categories.map((function(e){return(0,u.jsx)("span",{className:l().category,children:e.label},e.label)}))})]})})})}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t=e.posts;return(0,u.jsx)("div",{className:c().posts,children:t&&t.map((function(e){return(0,u.jsx)(d,{post:e,customStyle:y({},e.style)},e.slug)}))})}},5949:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d},default:function(){return j}});var s=r(7294),n=r(6308),c=r(4314),o=r(5516),a=r(9571),i=r(7258),l=r(6093),u=r(1098),p=r.n(u),f=r(5893),d=!0;function j(e){var t=e.posts,r=e.categories,u=(0,i.Z)().isMobile,d=(0,s.useContext)(l.Z).state,j=(0,s.useState)([]),y=j[0],b=j[1];return(0,s.useEffect)((function(){b((0,a.O2)(d.search,t))}),[d.search]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n.Z,{title:"Posts",description:"Quer saber como ser um programador? Confira nossos posts e seja bem vindo ao mundo da programa\xe7\xe3o!",keywords:"".concat(d.search,", programa\xe7\xe3o, estudos, tecnologia, computa\xe7\xe3o, games, web, aplicativos, carreira em ti, desenvolvimento profissional, mercado de ti")}),(0,f.jsxs)("main",{children:[u&&(0,f.jsx)(c.R,{categories:r}),(0,f.jsxs)("section",{className:p().container,children:[!u&&(0,f.jsx)(c.R,{categories:r}),(0,f.jsx)(o.R,{posts:y}),!u&&(0,f.jsx)("ins",{className:"adsbygoogle "+p().fake_col,style:{display:"block"},"data-ad-client":"ca-pub-1739197497968733","data-ad-slot":"7846772608","data-ad-format":"auto","data-full-width-responsive":"true"})]})]})]})}},5794:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return r(5949)}])},7028:function(e){e.exports={container:"styles_container__mjGya",header:"styles_header__VKiKJ",categories:"styles_categories__m2QRU",category:"styles_category__SRhri"}},9589:function(e){e.exports={card:"styles_card__t3a2c",title:"styles_title__5Gtf1",categories:"styles_categories__nWqf2",category:"styles_category__PmL6u"}},1114:function(e){e.exports={posts:"styles_posts__aF1rE"}},1098:function(e){e.exports={container:"styles_container__h2EFI",fake_col:"styles_fake_col__kU_QY"}}},function(e){e.O(0,[308,774,888,179],(function(){return t=5794,e(e.s=t);var t}));var t=e.O();_N_E=t}]);