/*! For license information please see 1c56b476.04b67720.js.LICENSE.txt */
"use strict";(self.webpackChunkheziyouyi=self.webpackChunkheziyouyi||[]).push([[1713],{7870:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(5893),a=r(7294);function l({id:e,host:t,repo:l,repoId:o,category:i,categoryId:s,mapping:u,term:c,strict:p,reactionsEnabled:d,emitMetadata:m,inputPosition:f,theme:b,lang:y,loading:v}){const[g,h]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{g||(r.e(2891).then(r.bind(r,2891)),h(!0))}),[]),g?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:l,repoid:o,category:i,categoryid:s,mapping:u,term:c,strict:p,reactionsenabled:d,emitmetadata:m,inputposition:f,theme:b,lang:y,loading:v}):null}},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>T,default:()=>I,frontMatter:()=>E,metadata:()=>_,toc:()=>x});var n=r(7462),a=r(7294),l=r(3905),o=r(7870),i=r(6010),s=r(2389),u=r(7392),c=r(7094),p=r(2466);const d="tabList__CuJ",m="tabItem_LNqP";function f(e){var t,r;const{lazy:l,block:o,defaultValue:s,values:f,groupId:b,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,u.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===s?s:null!=(t=null!=s?s:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,c.U)(),[E,T]=(0,a.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=b){const e=w[b];null!=e&&e!==E&&g.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,r=_.indexOf(t),n=g[r].value;n!==E&&(j(t),T(n),null!=b&&O(b,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=_.indexOf(e.currentTarget)+1;r=null!=(n=_[t])?n:_[0];break}case"ArrowLeft":{var a;const t=_.indexOf(e.currentTarget)-1;r=null!=(a=_[t])?a:_[_.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},y)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>_.push(e),onKeyDown:P,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,s.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}const y="tabItem_Ymn6";function v(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(y,n),hidden:r},t)}const g=r.p+"assets/images/GroupBuy-cd97567cbd8d4e728ca96f179162f72b.jpg",h=r.p+"assets/images/zfbhbrwm-6dfbcd1d680cfd831b93490a91052656.png",k=r.p+"assets/images/zfbskrwm-66379bdee8214093872696e413f6dda9.jpg",w=r.p+"assets/images/wxskrwm-d8e6963d6ae122a3c2e818f3c4bc09cf.jpg",O=r.p+"assets/images/qqskrwm-2c10b25f67f4354eec5ab5bd6080285f.jpg",E={title:"\u6350\u52a9",sidebar_position:9},T=void 0,_={unversionedId:"donate",id:"donate",title:"\u6350\u52a9",description:"\u9996\u5148\u8fd8\u662f\u8bf4\u4e00\u4e0b\uff0c\u8fd9\u4e2a\u56e2\u8d2d\u662f\u6211\u4eec\u81ea\u5df1\u6478\u7d22\u51fa\u6765\u81ea\u529b\u66f4\u751f\u7684\u4e00\u6761\u8def\uff0c\u539f\u56e0\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u786e\u5b9e\u63a5\u4e0d\u5230\u4ec0\u4e48\u4f18\u8d28\u5e7f\u544a\u4e86\uff0c\u4f46\u4e5f\u575a\u51b3\u4e0d\u4f1a\u8003\u8651\u53bb\u5728APP\u4e0a\u52a0\u4efb\u4f55\u4e1c\u897f\uff0c\u6240\u4ee5\u5c31\u53ea\u80fd\u9760\u56e2\u8d2d\u4e86\u3002",source:"@site/docs/donate.md",sourceDirName:".",slug:"/donate",permalink:"/docs/donate",draft:!1,editUrl:"https://github.com/gedoor/gedoor.github.io/tree/master/docs/donate.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u6350\u52a9",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u641c\u7d22\u4e00\u672c\u4e66",permalink:"/docs/get-started-quickly/search-book"}},j={},x=[],P={toc:x};function I(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},P,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(b,{mdxType:"Tabs"},(0,l.kt)(v,{value:"GroupBuy",label:"\u56e2\u8d2d",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u9996\u5148\u8fd8\u662f\u8bf4\u4e00\u4e0b\uff0c\u8fd9\u4e2a\u56e2\u8d2d\u662f\u6211\u4eec\u81ea\u5df1\u6478\u7d22\u51fa\u6765\u81ea\u529b\u66f4\u751f\u7684\u4e00\u6761\u8def\uff0c\u539f\u56e0\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u786e\u5b9e\u63a5\u4e0d\u5230\u4ec0\u4e48\u4f18\u8d28\u5e7f\u544a\u4e86\uff0c\u4f46\u4e5f\u575a\u51b3\u4e0d\u4f1a\u8003\u8651\u53bb\u5728APP\u4e0a\u52a0\u4efb\u4f55\u4e1c\u897f\uff0c\u6240\u4ee5\u5c31\u53ea\u80fd\u9760\u56e2\u8d2d\u4e86\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u6765\u770b\uff0c\u6211\u4eec\u7684\u9009\u62e9\u548c\u575a\u6301\u662f\u6b63\u786e\u7684\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u662f\u76ee\u524d\u6211\u4eec\u6211\u4eec\u7684\u56e2\u8d2d\u5df2\u7ecf\u7a33\u5b9a\u8fd0\u4f5c10\u591a\u4e2a\u6708\u4e86\uff0c\u4e0d\u8bba\u662f\u9009\u54c1\u8fd8\u662f\u552e\u540e\u90fd\u975e\u5e38\u9760\u8c31\u3002\u800c\u4e14\u90fd\u662f\u6211\u4eec\u81ea\u5df1\u5728\u505a\uff0c\u5c3d\u53ef\u80fd\u7684\u4f1a\u8003\u8651\u5927\u5bb6\u7684\u9700\u6c42\u548c\u5229\u76ca\u3002"),(0,l.kt)("p",null,"\u518d\u5c31\u662f\u4e5f\u6709\u4e0d\u5c11\u4eba\u4f9d\u7136\u4fdd\u6301\u7740\u8d28\u7591\uff0c\u4f46\u6709\u66f4\u591a\u7684\u4eba\u613f\u610f\u76f8\u4fe1\u6211\u4eec\uff0c\u5e76\u4e14\u7ed9\u4e88\u4e86\u6211\u4eec\u8db3\u591f\u7684\u652f\u6301\uff0c\u6709\u4e0d\u5c11\u5927\u4f6c\u751a\u81f3\u5df2\u7ecf\u53c2\u56e2200\u591a\u6b21\u4e86\uff0c\u8bf4\u5b9e\u8bdd\u771f\u7684\u5f88\u611f\u52a8\u3002"),(0,l.kt)("h3",null,"\u4f7f\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u8ba2\u9605"),(0,l.kt)("img",{src:g,alt:"\u652f\u4ed8\u5b9d\u7ea2\u5305"}),(0,l.kt)("h3",null,"\u6700\u540e\u8bf4\u4e00\u4e0b\u51e0\u70b9\u91cd\u8981\u7684"),(0,l.kt)("ol",null,(0,l.kt)("li",null,"\u8fd9\u4e2a\u56e2\u8d2d\u662f\u9605\u8bfb\u81ea\u8425\uff0c\u5382\u5bb6\u76f4\u53d1\u7684\uff0c\u8bf7\u76f8\u4fe1\u6211\u4eec\u7684\u4eba\u54c1\u3002"),(0,l.kt)("li",null,"\u56e2\u8d2d\u4ea7\u54c1\u90fd\u662f\u6211\u4eec\u81ea\u5df1\u8bd5\u7528\u6216\u8005\u6709\u5b98\u65b9\u4fdd\u969c\u7684\u4ea7\u54c1\u3002"),(0,l.kt)("li",null,"\u4efb\u4f55\u552e\u540e\u95ee\u9898\u90fd\u53ef\u4ee5\u6765\u627e\u6211\u4eec\uff0c\u7edd\u5bf9\u6bd4\u6dd8\u5b9d\u9760\u8c31\u3002"),(0,l.kt)("li",null,"\u5e97\u94fa\u5c0f\u4e8c\u662f\u5341\u4e00\uff0c\u5927\u5bb6\u591a\u8010\u5fc3\u4e00\u70b9\uff0c\u6709\u65f6\u5019\u4f1a\u6bd4\u8f83\u5fd9\uff0c\u6ca1\u6cd5\u53ca\u65f6\u56de\u590d\u5927\u5bb6\u3002"),(0,l.kt)("li",null,"\u6700\u540e\u611f\u8c22\u6240\u6709\u4e0b\u5355\u652f\u6301\u6211\u4eec\u7684\u4eba\uff0c\u6211\u4eec\u4e00\u5b9a\u4f1a\u7ee7\u7eed\u52a0\u6cb9\uff01"))),(0,l.kt)(v,{value:"zfbhbrwm",label:"\u7ea2\u5305",default:!0,mdxType:"TabItem"},(0,l.kt)("img",{src:h,alt:"\u652f\u4ed8\u5b9d\u7ea2\u5305"})),(0,l.kt)(v,{value:"zfbskrwm",label:"\u652f\u4ed8\u5b9d",default:!0,mdxType:"TabItem"},(0,l.kt)("img",{src:k,alt:"\u652f\u4ed8\u5b9d"})),(0,l.kt)(v,{value:"wxskrwm",label:"\u5fae\u4fe1",default:!0,mdxType:"TabItem"},(0,l.kt)("img",{src:w,alt:"\u5fae\u4fe1"})),(0,l.kt)(v,{value:"qqskrwm",label:"QQ",default:!0,mdxType:"TabItem"},(0,l.kt)("img",{src:O,alt:"QQ"}))),(0,l.kt)("h1",{id:"\u8ba8\u8bba"},"\u8ba8\u8bba"),(0,l.kt)(o.Z,{id:"comments",repo:"gedoor/gedoor.github.io",repoId:"MDEwOlJlcG9zaXRvcnkxNjExMjczMjM",category:"General",categoryId:"DIC_kwDOCZqbm84CQvbE",mapping:"title",term:"Comments",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"zh-CN",loading:"lazy",mdxType:"Giscus"}))}I.isMDXComponent=!0},5251:(e,t,r)=>{r(7418);var n=r(7294),a=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;a=l("react.element"),l("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,l={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:c,props:l,_owner:o.current}}t.jsx=u},5893:(e,t,r)=>{e.exports=r(5251)}}]);