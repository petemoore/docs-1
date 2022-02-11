"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8933:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],i={},c="\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb How to apply to run a Calamari collator?",p={unversionedId:"collator/HowToApply",id:"collator/HowToApply",isDocsHomePage:!1,title:"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb How to apply to run a Calamari collator?",description:"Hardware requirement",source:"@site/docs/collator/HowToApply.md",sourceDirName:"collator",slug:"/collator/HowToApply",permalink:"/docs/collator/HowToApply",editUrl:"https://github.com/Manta-Network/docs/edit/main/docs/collator/HowToApply.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ud83e\udde9  Community Collator Program",permalink:"/docs/collator/CommunityCollatorProgram"},next:{title:"\ud83d\ude84 Setup and run a Calamari collator",permalink:"/docs/collator/SetupAndRun"}},u=[{value:"Hardware requirement",id:"hardware-requirement",children:[],level:2},{value:"Bonding requirement",id:"bonding-requirement",children:[],level:2},{value:"File an application",id:"file-an-application",children:[],level:2}],s={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-how-to-apply-to-run-a-calamari-collator"},"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb How to apply to run a Calamari collator?"),(0,o.kt)("h2",{id:"hardware-requirement"},"Hardware requirement"),(0,o.kt)("p",null,"a. If running on your own machine, hardware requirement, internet bandwidth (we prefer collators with private node for better decentralization)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"    cpu:8 cores\n    memory: 32 GB of ram\n    disk space: 500 GB of disk space dedicated to the blockchain basepath\n    bandwidth: 100 Mbps+\n    internet-accessible ports: 30333 30334\n")),(0,o.kt)("p",null,"b. If running on AWS/Azure/GCP (or other cloud provider), please use an instance type with similar configuration to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"    AWS instance: Ubuntu 20.04 (use the latest ubuntu server ami from canonical)\n    recommended instance type: r5ad.xlarge\n")),(0,o.kt)("p",null,"Note: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A calamari collator utilizes up to 27gb of ram on a 32gb system."),(0,o.kt)("li",{parentName:"ul"},"A calamari collator utilizes up to 25% of cpu on a 24 core system."),(0,o.kt)("li",{parentName:"ul"},"A reliable internet connection as well as uninterruptible power supply which should keep the machine and network ",(0,o.kt)("strong",{parentName:"li"},"permanently online"),".")),(0,o.kt)("h2",{id:"bonding-requirement"},"Bonding requirement"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"400_000"),"KMA at least. Make sure your account has more than ",(0,o.kt)("inlineCode",{parentName:"p"},"400_000"),"KMA in your free balance."),(0,o.kt)("p",null,"You can check candidacy bond on ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws.calamari.systems%2F#/chainstate"},"calamari mainnet"),".\n",(0,o.kt)("img",{alt:"Candidacy Bond",src:r(4169).Z})),(0,o.kt)("h2",{id:"file-an-application"},"File an application"),(0,o.kt)("p",null," Please fill this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLScizDDMq7jWeOPVVEMr3EY_Z6N6ugdkL8aKgAbZ9lAJX6DEOQ/viewform"},"collator application")," form."))}m.isMDXComponent=!0},4169:function(e,t){t.Z="data:image/png;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6MmFkZTY0YzgwN2RlYTVjMGJiMWM3MGM2ZDNjYjllMWE3Njg1MDdiMzkxNmRiNTUxY2ZiMDljMTNhMzM0N2U1MwpzaXplIDEwMzM2Cg=="}}]);