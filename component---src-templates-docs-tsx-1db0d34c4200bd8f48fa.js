(self.webpackChunkucloud_design_site=self.webpackChunkucloud_design_site||[]).push([[501],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,s){return o()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),l=r(379),s=r(8206);e.exports=function(e){return n(e)||o(e)||l(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},8887:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),o=r(9671),l=function(){return n.createElement("footer",{className:"styles-module--w--H1HBA"},n.createElement("div",{className:"styles-module--c--KNFgU"},n.createElement("div",{className:"styles-module--top--eTjLM"},n.createElement("div",{className:"styles-module--logo--vm1Bk"},n.createElement("img",{src:o.Z,alt:"logo"})),n.createElement("ul",{className:"styles-module--links--PkqkH"},n.createElement("li",null,n.createElement("a",{href:"https://github.com/UCloud-FE/react-components",target:"_blank"},"Github")))),n.createElement("div",{className:"styles-module--bottom--avO1O"},"Copyright © 2021-",(new Date).getFullYear()," UCloud 优刻得科技股份有限公司")))}},7425:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),o=["headings","currentHash","originalHash","className","location"],l=function(e){var t=e.headings,r=e.currentHash,l=e.originalHash,s=e.className,u=(e.location,function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,o));return null!=t&&t.length?n.createElement("div",Object.assign({},u,{className:"styles-module--wrapper--uyc1R "+(s||"")}),n.createElement("h2",null,"目录"),n.createElement("div",{className:"styles-module--innerScroll--+bO7O"},t.map((function(e,t){var o=l?e.id:e.value.replace(/\s+/g,"-").toLowerCase(),s="#"+o===r;if(2===e.depth||3===e.depth)return n.createElement("div",{className:"styles-module--to--V9muq "+(s?"styles-module--current--MLay0":""),key:e.value+t},n.createElement("a",{style:{paddingLeft:3===e.depth?16:0},href:"#"+o},e.value))})))):null}},2345:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1955),l=r(9376),s=r(7425),u=r(8887),c=r(4044);t.default=function(e){var t,r=e.data,a=e.location,i=(0,n.useState)(""),d=i[0],f=i[1],p=r.mdx,m=p.headings,y=p.fields,v=function(){for(var e,t=document.querySelector("#docs_s_w"),r=t.scrollTop,n=t.querySelectorAll("[aria-label]"),o=0;o<n.length;o++)if("H4"!==n[o].parentElement.tagName){var l=n[o].parentElement.offsetTop;if(console.log(n[o].hash),!(r>l-120))break;e=decodeURIComponent(n[o].hash)}f(e)};(0,n.useEffect)((function(){var e=document.querySelector("#docs_s_w");return e.addEventListener("scroll",v),function(){return e.removeEventListener("scroll",v)}}),[]);return n.createElement("div",{className:c.YS},n.createElement(l.Z,{title:null===(t=m[0])||void 0===t?void 0:t.value}),n.createElement("div",{className:c.Fh,id:"docs_s_w"},"/docs/changelog/"===y.slug?null:n.createElement(s.Z,{currentHash:d,headings:p.headings||[],location:a}),n.createElement("div",{className:c.kQ},n.createElement("section",{className:"u-markdown-docs-styles"},n.createElement(o.MDXRenderer,null,p.body))),n.createElement(u.Z,null)))}},1955:function(e,t,r){var n=r(4206);e.exports={MDXRenderer:n}},4206:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),s=r(7316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),d=r(3497).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=s(e,u),c=f(t),p=i.useMemo((function(){if(!r)return null;var e=a({React:i,mdx:d},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return i.createElement(p,a({},l))}},4044:function(e,t,r){"use strict";r.d(t,{Fh:function(){return o},Kw:function(){return c},V8:function(){return s},Vk:function(){return l},YS:function(){return d},dX:function(){return u},eA:function(){return a},kQ:function(){return n},we:function(){return i}});var n="styles-module--content--2T7OC",o="styles-module--content-wrapper--WvK+Z",l="styles-module--current--e4L8z",s="styles-module--design-icon--52uUk",u="styles-module--devIcon--dN5Ql",c="styles-module--dtIcon--dcmI3",a="styles-module--tabs--8CB5O",i="styles-module--top--5+Am6",d="styles-module--wrapper--iQTjf"}}]);
//# sourceMappingURL=component---src-templates-docs-tsx-1db0d34c4200bd8f48fa.js.map