(self.webpackChunkucloud_design_site=self.webpackChunkucloud_design_site||[]).push([[799],{9085:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7294),r=function(){return l.createElement("footer",{className:"styles-module--footer--22w0l"},l.createElement("div",{className:"styles-module--links--1jnGp"},l.createElement("div",null,l.createElement("h2",null,"UCloud"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://www.ucloud.cn",target:"_blank"},"UCloud 官网")),l.createElement("li",null,l.createElement("a",{href:"https://docs.ucloud.cn",target:"_blank"},"UCloud 文档中心")),l.createElement("li",null,l.createElement("a",{href:"https://console.ucloud.cn",target:"_blank"},"UCloud 控制台")))),l.createElement("div",null,l.createElement("h2",null,"社区"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://github.com/UCloud-FE/react-components",target:"_blank"},"GitHub"))))),l.createElement("div",{className:"styles-module--bottom--3XmqH"},"© ",(new Date).getFullYear(),", UCloud"))}},6715:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var l=n(7294),r=["headings","currentHash","originalHash","className","location"],a=function(e){var t=e.headings,n=e.currentHash,a=e.originalHash,c=e.className,o=(e.location,function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,r));return null!=t&&t.length?l.createElement("div",Object.assign({},o,{className:"styles-module--wrapper--1fEI_ "+(c||"")}),l.createElement("h2",null,"目录"),l.createElement("div",{className:"styles-module--innerScroll--3dHAL"},t.map((function(e,t){var r=a?e.id:e.value.replace(/\s+/g,"-").toLowerCase(),c="#"+r===n;if(2===e.depth||3===e.depth)return l.createElement("div",{className:"styles-module--to--1wgum "+(c?"styles-module--current--el52f":""),key:e.value+t},l.createElement("a",{style:{paddingLeft:3===e.depth?16:0},href:"#"+r},e.value))})))):null}},8772:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var l=n(7294),r=n(7487),a=n(9085),c=n(6715),o=n(5444),u=n(6802),s=n(5126),i=n(5361),m=function(e){var t=e.markdownRemark,n=e.thumbs,r=t.fields.slug,a=(0,i.z)(r.split("/component/category/")[1],"/"),c=[];return c="all"===a?s:s.filter((function(e){var t;return null===(t=e.category)||void 0===t?void 0:t.includes(a)})),l.createElement("div",{className:"styles-module--wrapper--3RqGl"},l.createElement("ul",null,c.map((function(e){var t=(0,u.d)(n.nodes.find((function(t){return t.relativePath==="component/list/"+e.name+"/thumb.png"})));return l.createElement("li",{key:e.name},l.createElement(o.Link,{to:"/component/"+e.name},l.createElement("span",null,e.name," ",e.zh_cn),l.createElement("div",{className:"styles-module--thumb--31xuk"},t&&l.createElement(u.G,{alt:e.name,image:t}))))}))),l.createElement("div",{className:"styles-module--clear--1CvfJ"}))},d=n(4044),f=n(2742),h=n.n(f),p=function(){},E="component_tab_i",v=["design","docs","dt"],g=function(e){var t,n,o,u,f=e.data,g=e.location,y=f.markdownRemark,k=f.thumbs,w=function(e){return(0,i.z)(e.split("/component/list/")[1],"/")}(y.fields.slug),b=(0,l.useState)(v[0]),N=b[0],_=b[1],C=(0,l.useState)([]),x=C[0],H=C[1],S=(0,l.useState)(""),L=S[0],U=S[1],I=function(){for(var e,t=document.querySelector("#component_s_w"),n=t.scrollTop,l=N===v[0]?t.querySelectorAll("[aria-label]"):t.getElementsByClassName("recodo-anchor"),r=0;r<l.length;r++)if("H4"!==l[r].parentElement.tagName){if(!(n>(N===v[0]?l[r].parentElement.offsetTop:l[r].offsetTop)-120))break;e=decodeURIComponent(l[r].hash)}U(e)};(0,l.useEffect)((function(){var e,t,n=document.querySelector("#component_s_w");(n.addEventListener("scroll",I),null!==(e=localStorage)&&void 0!==e&&e.getItem(E))&&_(null===(t=localStorage)||void 0===t?void 0:t.getItem(E));return function(){return n.removeEventListener("scroll",I)}}),[N]),(0,l.useEffect)((function(){p(),window["react-components-docs"]&&N===v[1]&&(p=window["react-components-docs"].renderDoc(w,document.querySelector("#u-component-doc"),{reportAnchorList:function(e){var t,n=[];null===(t=e.children)||void 0===t||t.forEach((function(e){var t;n.push({value:e.text,id:e.id,depth:2}),null!=e&&null!==(t=e.children)&&void 0!==t&&t.length&&e.children.forEach((function(e){var t;"说明"!==e.text&&("演示"===e.text&&null!=e&&null!==(t=e.children)&&void 0!==t&&t.length?e.children.forEach((function(e){n.push({value:e.text,id:e.id,depth:3})})):n.push({value:e.text,id:e.id,depth:3}))}))})),H(n)}}))}),[N]);var z=function(e){var t;null===(t=localStorage)||void 0===t||t.setItem(E,e),_(e)};return l.createElement("div",{className:d.YS},l.createElement(r.Z,{title:y.frontmatter.title}),l.createElement("div",{className:d.Fh,id:"component_s_w"},N===v[0]&&l.createElement(c.Z,{currentHash:L,headings:y.headings||[],location:g}),N===v[1]&&l.createElement(c.Z,{currentHash:L,originalHash:!0,headings:x,location:g}),l.createElement("div",{className:d.kQ},l.createElement("div",{className:d.we},l.createElement("h1",null,y.frontmatter.title?y.frontmatter.title:function(e){var t=s.find((function(t){return t.name===e}));return((null==t?void 0:t.name)||"")+" "+((null==t?void 0:t.zh_cn)||"")}(w),w&&l.createElement("a",{href:"https://github.com/UCloud-FE/u-design/blob/main/content/component/list/"+w+"/index.md",target:"_blank"},l.createElement(h(),null))),y.frontmatter.description&&l.createElement("p",null,y.frontmatter.description)),!(null!=y&&null!==(t=y.fields)&&void 0!==t&&null!==(n=t.slug)&&void 0!==n&&n.includes("/component/category/"))&&l.createElement("div",{className:d.eA},l.createElement("ul",null,l.createElement("li",{className:""+(N===v[0]&&d.Vk),onClick:function(){z(v[0])}},l.createElement("i",{className:d.V8}),l.createElement("span",null,"设计")),l.createElement("li",{className:""+(N===v[1]&&d.Vk),onClick:function(){z(v[1])}},l.createElement("i",{className:d.dX}),"文档"),l.createElement("li",{className:""+(N===v[2]&&d.Vk),onClick:function(){z(v[2])}},l.createElement("i",{className:d.Kw}),l.createElement("span",null,"Design Token")))),N===v[0]?l.createElement(l.Fragment,null,l.createElement("div",{className:d.JH},l.createElement("section",{dangerouslySetInnerHTML:{__html:y.html}}))):N===v[2]?l.createElement("div",null,"Design Token"):null,N===v[1]&&l.createElement("div",{id:"u-component-doc",style:{minHeight:500}}),null!=y&&null!==(o=y.fields)&&void 0!==o&&null!==(u=o.slug)&&void 0!==u&&u.includes("/component/category/")?l.createElement(m,{markdownRemark:y,thumbs:k}):null),l.createElement(a.Z,null)))}},5361:function(e,t,n){"use strict";function l(e,t){if("string"!=typeof e)return e;var n=e.lastIndexOf(t);return e.substring(0,n)+e.substring(n+1,e.length)}n.d(t,{z:function(){return l}})},4044:function(e,t,n){"use strict";n.d(t,{YS:function(){return l},Fh:function(){return r},kQ:function(){return a},we:function(){return c},JH:function(){return o},eA:function(){return u},Vk:function(){return s},V8:function(){return i},dX:function(){return m},Kw:function(){return d}});var l="styles-module--wrapper--1ngeQ",r="styles-module--content-wrapper--23mbo",a="styles-module--content--3UXj2",c="styles-module--top--14Xp8",o="styles-module--markdown--8jodr",u="styles-module--tabs--2351a",s="styles-module--current--2oNGU",i="styles-module--design-icon--1yNrb",m="styles-module--devIcon--2YMwg",d="styles-module--dtIcon--1Lz32"},2742:function(e,t,n){var l=n(7294);function r(e){return l.createElement("svg",e,l.createElement("g",null,[l.createElement("path",{d:"M87,29c-2.209,0-4,1.791-4,4v44c0,2.21-1.79,4-4,4H15c-2.21,0-4-1.79-4-4V13c0-2.21,1.79-4,4-4h44c2.209,0,4-1.791,4-4\n\t\ts-1.791-4-4-4H15C8.373,1,3,6.373,3,13v64c0,6.627,5.373,12,12,12h64c6.627,0,12-5.373,12-12V33C91,30.791,89.209,29,87,29z",key:0}),l.createElement("path",{d:"M52.172,39.829C52.952,40.609,53.977,41,55,41s2.048-0.391,2.828-1.171l32-32c1.562-1.562,1.562-4.095,0-5.657\n\t\tc-1.561-1.562-4.096-1.562-5.656,0l-32,32C50.609,35.734,50.609,38.266,52.172,39.829z",key:1})]))}r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"96px",height:"96px",viewBox:"0 0 96 96",enableBackground:"new 0 0 96 96",xmlSpace:"preserve"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-templates-component-tsx-173debb180eb7801a05e.js.map