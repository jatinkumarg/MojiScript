(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./combinators/W.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components;m(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"w-combinator"}},"W Combinator"),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"W :: Function -> Any -> Any")),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"W")," x y duplicates the argument y."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import W from 'mojiscript/combinators/W'\nimport pipe from 'mojiscript/core/pipe'\n\nconst func = W (v1 => pipe ([\n  v2 => console.log (v1 === v2) //=> true\n]))\n\nfunc (888)\n")))}}}]);