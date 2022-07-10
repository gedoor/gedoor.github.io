"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2529],{9058:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(3366),r=a(7294),l=a(6010),i=a(2164),o=a(7524),s=a(9960),c=a(5999),m="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",v="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:f},e.title))})))))}var h=a(3102);function E(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return r.createElement(h.Zo,{component:E,props:e})}function N(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(b,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var _=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,_),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},390:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(7294),r=a(6010),l=a(9460),i=a(4996);function o(e){var t,a=e.children,r=e.className,o=(0,l.C)(),s=o.frontMatter,c=o.assets,m=(0,i.C)().withBaseUrl,u=null!=(t=c.image)?t:s.image;return n.createElement("article",{className:r,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&n.createElement("meta",{itemProp:"image",content:m(u,{absolute:!0})}),a)}var s=a(9960),c="title_f1Hy";function m(e){var t=e.className,a=(0,l.C)(),i=a.metadata,o=a.isBlogPostPage,m=i.permalink,u=i.title,d=o?"h1":"h2";return n.createElement(d,{className:(0,r.Z)(c,t),itemProp:"headline"},o?u:n.createElement(s.Z,{itemProp:"url",to:m},u))}var u=a(5999),d=a(8824),g="container_mt6G";function v(e){var t,a=e.readingTime,r=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return n.createElement(n.Fragment,null,r(a))}function f(e){var t=e.date,a=e.formattedDate;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){var t=e.className,a=(0,l.C)().metadata,i=a.date,o=a.formattedDate,s=a.readingTime;return n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md",t)},n.createElement(f,{date:i,formattedDate:o}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(p,null),n.createElement(v,{readingTime:s})))}function E(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){var t=e.author,a=e.className,l=t.name,i=t.title,o=t.url,s=t.imageURL,c=t.email,m=o||c&&"mailto:"+c||void 0;return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},s&&n.createElement(E,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:l})),l&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},l))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}var N="authorCol_Hf19",_="imageOnlyAuthorRow_pa_O",Z="imageOnlyAuthorCol_G86a";function P(e){var t=e.className,a=(0,l.C)(),i=a.metadata.authors,o=a.assets;if(0===i.length)return null;var s=i.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?_:"row",t)},i.map((function(e,t){var a;return n.createElement("div",{className:(0,r.Z)(!s&&"col col--6",s?Z:N),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL})}))})))}function k(){return n.createElement("header",null,n.createElement(m,null),n.createElement(h,null),n.createElement(P,null))}var T=a(8780),w=a(210);function C(e){var t=e.children,a=e.className,i=(0,l.C)().isBlogPostPage;return n.createElement("div",{id:i?T.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},n.createElement(w.Z,null,t))}var y=a(4881),B=a(1526),F=a(7462),I=a(3366),x=["blogPostTitle"];function L(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function M(e){var t=e.blogPostTitle,a=(0,I.Z)(e,x);return n.createElement(s.Z,(0,F.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(L,null))}var R="blogPostFooterDetailsFull_mRVl";function U(){var e=(0,l.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,o=t.title,s=t.editUrl,c=t.hasTruncateMarker,m=!a&&c,u=i.length>0;return u||m||s?n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",a&&R)},u&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":m})},n.createElement(B.Z,{tags:i})),a&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(y.Z,{editUrl:s})),m&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":u})},n.createElement(M,{blogPostTitle:o,to:t.permalink}))):null}function A(e){var t=e.children,a=e.className,i=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl";return n.createElement(o,{className:(0,r.Z)(i,a)},n.createElement(k,null),n.createElement(C,null,t),n.createElement(U,null))}},4881:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5999),l=a(5281),i=a(7462),o=a(3366),s=a(6010),c="iconEdit_Z9Sw",m=["className"];function u(e){var t=e.className,a=(0,o.Z)(e,m);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},n.createElement(u,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l=a(9960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},3008:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(9960),i="tag_zVej",o="tagRegular_sFm0",s="tagWithCount_h2kH";function c(e){var t=e.permalink,a=e.label,c=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,c?s:o)},a,c&&n.createElement("span",null,c))}},1526:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(5999),i=a(3008),o="tags_jXut",s="tag_QGVx";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{label:t,permalink:a}))}))))}},9460:function(e,t,a){a.d(t,{C:function(){return o},n:function(){return i}});var n=a(7294),r=a(9688),l=n.createContext(null);function i(e){var t=e.children,a=e.content,r=e.isBlogPostPage,i=function(e){var t=e.content,a=e.isBlogPostPage;return(0,n.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==r&&r});return n.createElement(l.Provider,{value:i},t)}function o(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},8824:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(7294),r=a(2263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),o}var t,a}),[e])}function c(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}}}}]);