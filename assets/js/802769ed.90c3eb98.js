/*! For license information please see 802769ed.90c3eb98.js.LICENSE.txt */
"use strict";(self.webpackChunkheziyouyi=self.webpackChunkheziyouyi||[]).push([[1985],{7870:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5893),o=r(7294);function a({id:e,host:t,repo:a,repoId:i,category:c,categoryId:p,mapping:l,term:u,strict:f,reactionsEnabled:s,emitMetadata:m,inputPosition:y,theme:d,lang:g,loading:b}){const[O,v]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{O||(r.e(2891).then(r.bind(r,2891)),v(!0))}),[]),O?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:i,category:c,categoryid:p,mapping:l,term:u,strict:f,reactionsenabled:s,emitmetadata:m,inputposition:y,theme:d,lang:g,loading:b}):null}},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,y=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3564:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905)),a=r(7870);const i={},c=void 0,p={type:"mdx",permalink:"/CommentCodeTemplate",source:"@site/src/pages/CommentCodeTemplate.md",description:"\u8ba8\u8bba",frontMatter:{}},l=[{value:"\u8ba8\u8bba",id:"\u8ba8\u8bba",level:2}],u={toc:l};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8ba8\u8bba"},"\u8ba8\u8bba"),(0,o.kt)(a.Z,{id:"comments",repo:"gedoor/gedoor.github.io",repoId:"MDEwOlJlcG9zaXRvcnkxNjExMjczMjM",category:"General",categoryId:"DIC_kwDOCZqbm84CQvbE",mapping:"title",term:"Comments",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"zh-CN",mdxType:"Giscus"}))}f.isMDXComponent=!0},5251:(e,t,r)=>{r(7418);var n=r(7294),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!p.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l},5893:(e,t,r)=>{e.exports=r(5251)}}]);