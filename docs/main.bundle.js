(()=>{"use strict";var n,r,e,t,a,i,o,A,c,s,d,l,p,f,h={539:(n,r,e)=>{e.d(r,{Z:()=>h});var t=e(537),a=e.n(t),i=e(645),o=e.n(i),A=e(667),c=e.n(A),s=new URL(e(925),e.b),d=new URL(e(364),e.b),l=o()(a());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Kaisei+Opti&display=swap);"]);var p=c()(s),f=c()(d);l.push([n.id,'@font-face{font-family:"Makinas-4-Flat";src:url('+p+') format("ttf"),url('+f+') format("woff")}body{margin:0;padding-top:50px;background-color:#fff}@media screen and (max-width: 786px){body{font-size:14px;line-height:1.5em}}@media screen and (min-width: 786px){body{font-size:20px}}header{position:fixed;top:0;width:100%;height:40px;background-color:#fff;margin:0;box-shadow:0px 0px 5px #494b55}header a{color:#53cbcf}header>nav{height:100%}header>nav>ul{height:100%;display:flex;list-style:none;margin:0;padding:0 1em;align-items:center;font-family:"Makinas-4-Flat";font-size:.8em}header>nav>ul li{width:100px;text-align:center}header>nav>ul li+li{border-left:1px solid #b0b0b0}h1{text-align:center;font-family:"Makinas-4-Flat"}h1::after{margin-top:.25em;display:block;width:100%;height:1px;content:"";background:linear-gradient(to right, #53cbcf 0%, #a9e7ff 100%)}body>main{margin:8px;color:#494b55}body>main a{color:#53cbcf}body>main a:visited{color:#a9e7ff}body>main>section{border-radius:6px;box-shadow:0px 0px 5px #494b55;padding:1em;padding:.5em 24px 1em;background-color:#fff;font-family:"Kaisei Opti",serif;margin:0 auto;background-color:transparent;text-align:center}body>main>section+section{margin-top:1em}@media screen and (max-width: 786px){body>main>section{max-width:100%}}@media screen and (min-width: 786px)and (max-width: 1600px){body>main>section{width:80%;max-width:960px}}@media screen and (min-width: 1600px){body>main>section{width:960px}}body>main>section h2,body>main>section h3{font-family:"Makinas-4-Flat"}body>main>section h2::after,body>main>section h3::after{display:block;width:100%;height:1px;content:"";background:linear-gradient(to right, #53cbcf 0%, #a9e7ff 100%)}body>main>section h2{font-size:1.5em;margin-top:.3em}body>main>section h3{font-size:1.2em}div.link-block{display:block;padding:.25em;text-align:center;font-family:"Makinas-4-Flat";border:1px solid #aeb4b6;border-radius:6px}div.link-block>a{display:block;width:100%;height:100%}div.link-block>a span.name,div.link-block>a span.description{display:block}div.link-block>a span.description{color:#494b55;text-decoration:none}div.link-block:hover{background-color:#fafafa}div.link-block:active{background-color:#f5f5f5}',"",{version:3,sources:["webpack://./src/font.scss","webpack://./src/common.scss","webpack://./src/defs.scss"],names:[],mappings:"AAAA,WACE,4BAAA,CACA,gHAAA,CCEF,KACE,QAAA,CACA,gBAAA,CACA,qBAAA,CAEA,qCALF,KAMI,cAAA,CACA,iBAAA,CAAA,CAEF,qCATF,KAUI,cAAA,CAAA,CAIJ,OACE,cAAA,CACA,KAAA,CACA,UAAA,CACA,WApBc,CAqBd,qBAAA,CACA,QAAA,CACA,8BCTc,CDWd,SACE,aC5Bc,CD+BhB,WACE,WAAA,CAEA,cACE,WAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA,CACA,aAAA,CACA,kBAAA,CACA,4BAAA,CACA,cAAA,CAEA,iBACE,WAAA,CAEA,iBAAA,CADA,oBAAA,6BAAA,CAOR,GACE,iBAAA,CACA,4BAAA,CC9BA,UDiCE,gBAAA,CC/BA,aAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CACA,8DAda,CD6CjB,UACE,UAAA,CACA,aC7DY,CD+DZ,YACE,aCnEc,CDqEd,oBACE,aCrEa,CDyEjB,kBCtCA,iBArBO,CAsBP,8BArBc,CAsBd,WAAA,CDwCE,qBAAA,CACA,qBAAA,CACA,+BAAA,CACA,aAAA,CACA,4BAAA,CACA,iBAAA,CARA,0BAAA,cAAA,CAYA,qCAbF,kBAcI,cAAA,CAAA,CAGF,4DAjBF,kBAkBI,SAAA,CACA,eAAA,CAAA,CAEF,sCArBF,kBAsBI,WAAA,CAAA,CAGF,0CACE,4BAAA,CC3EJ,wDAEE,aAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CACA,8DAda,CDsFb,qBACE,eAAA,CACA,eAAA,CAEF,qBACE,eAAA,CAKN,eACE,aAAA,CACA,aAAA,CACA,iBAAA,CACA,4BAAA,CACA,wBAAA,CACA,iBCxGO,CD0GP,iBACE,aAAA,CACA,UAAA,CACA,WAAA,CAEA,6DACE,aAAA,CAGF,kCACE,aChIQ,CDiIR,oBAAA,CAIJ,qBACE,wBCjIS,CDmIX,sBACE,wBCnIU",sourcesContent:["@font-face {\r\n  font-family: 'Makinas-4-Flat';\r\n  src: url('./resources/Makinas-4-Flat.ttf') format('ttf'),\r\n       url('./resources/Makinas-4-Flat.woff') format('woff');\r\n}\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Kaisei+Opti&display=swap');","@import \"./defs.scss\";\r\n\r\n$header-height: 40px;\r\n\r\nbody {\r\n  margin: 0;\r\n  padding-top: $header-height * 1.25;\r\n  background-color: #FFFFFF;\r\n\r\n  @media screen and (max-width: $screen-width-small) {\r\n    font-size: 14px;\r\n    line-height: 1.5em;\r\n  }\r\n  @media screen and (min-width: $screen-width-small) {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: $header-height;\r\n  background-color: #FFFFFF;\r\n  margin: 0;\r\n  box-shadow: $shadow-normal;\r\n\r\n  a {\r\n    color: $c-link-text;\r\n  }\r\n\r\n  > nav {\r\n    height: 100%;\r\n\r\n    > ul {\r\n      height: 100%;\r\n      display: flex;\r\n      list-style: none;\r\n      margin: 0;\r\n      padding: 0 1em;\r\n      align-items: center;\r\n      font-family: 'Makinas-4-Flat';\r\n      font-size: 0.8em;\r\n\r\n      li {\r\n        width: 100px;\r\n        +li { border-left: 1px solid #B0B0B0; }\r\n        text-align: center;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-family: 'Makinas-4-Flat';\r\n\r\n  @include bottomSeparator {\r\n    margin-top: 0.25em;\r\n  };\r\n}\r\n\r\nbody > main {\r\n  margin: 8px;\r\n  color: $c-text;\r\n\r\n  a {\r\n    color: $c-link-text;\r\n\r\n    &:visited {\r\n      color: $c-link-text-visited;\r\n    }\r\n  }\r\n\r\n  > section {\r\n    +section { margin-top: 1em; }\r\n    @include normalShadowBoxRounded;\r\n\r\n    padding: 0.5em 24px 1em;\r\n    background-color: #FFFFFF;\r\n    font-family: 'Kaisei Opti', serif;\r\n    margin: 0 auto;\r\n    background-color: transparent;\r\n    text-align: center;\r\n\r\n    $small-width-ratio: 0.8;\r\n    $large-width-ratio: 0.6;\r\n    @media screen and (max-width: $screen-width-small) {\r\n      max-width: 100%;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-width-small) and (max-width: $screen-width-large) {\r\n      width: 100% * $small-width-ratio;\r\n      max-width: $screen-width-large * $large-width-ratio;\r\n    }\r\n    @media screen and (min-width: $screen-width-large) {\r\n      width: $screen-width-large * $large-width-ratio;\r\n    }\r\n\r\n    h2, h3 {\r\n      font-family: 'Makinas-4-Flat';\r\n      @include bottomSeparator;\r\n    }\r\n    h2 {\r\n      font-size: 1.5em;\r\n      margin-top: 0.3em;\r\n    }\r\n    h3 {\r\n      font-size: 1.2em;\r\n    }\r\n  }\r\n}\r\n\r\ndiv.link-block {\r\n  display: block;\r\n  padding: 0.25em;\r\n  text-align: center;\r\n  font-family: 'Makinas-4-Flat';\r\n  border: 1px solid $c-border;\r\n  border-radius: $radius;\r\n\r\n  > a {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    span.name, span.description {\r\n      display: block;\r\n    }\r\n\r\n    span.description {\r\n      color: $c-text;\r\n      text-decoration: none;\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    background-color: $c-bg-hover;\r\n  }\r\n  &:active {\r\n    background-color: $c-bg-active;\r\n  }\r\n}",'$c-def-highlight: #53cbcf;\r\n$c-def-highlight2: #a9e7ff;\r\n$c-def-white: #FFFFFF;\r\n$c-def-black: #494b55;\r\n$c-def-gray: #aeb4b6;\r\n\r\n\r\n$c-bg: $c-def-white;\r\n$c-bg-hover: darken($c-def-white, 2%);\r\n$c-bg-active: darken($c-def-white, 4%);\r\n$c-text: $c-def-black;\r\n$c-link-text: $c-def-highlight;\r\n$c-link-text-visited: $c-def-highlight2;\r\n$c-border: $c-def-gray;\r\n\r\n$radius: 6px;\r\n$shadow-normal: 0px 0px 5px $c-def-black;\r\n$gradient-basic: linear-gradient(to right, $c-def-highlight 0%, $c-def-highlight2 100%);\r\n\r\n$screen-width-mobile: 425px;\r\n$screen-width-small: 786px;\r\n$screen-width-midium: 1024px;\r\n$screen-width-large: 1600px;\r\n\r\n@mixin bottomSeparator {\r\n  &::after {\r\n    @content;\r\n    display: block;\r\n    width: 100%;\r\n    height: 1px;\r\n    content: "";\r\n    background: $gradient-basic;\r\n  }\r\n}\r\n\r\n@mixin normalShadowBoxRounded {\r\n  border-radius: $radius;\r\n  box-shadow: $shadow-normal;\r\n  padding: 1em;\r\n  @content;\r\n}'],sourceRoot:""}]);const h=l},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(o[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(a," */"),o=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[r].concat(o).concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},o=[],A=0;A<n.length;A++){var c=n[A],s=t.base?c[0]+t.base:c[0],d=i[s]||0,l="".concat(s," ").concat(d);i[s]=d+1;var p=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=a(f,t);t.byIndex=A,r.splice(A,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function a(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,a){var i=t(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var A=e(i[o]);r[A].references--}for(var c=t(n,a),s=0;s<i.length;s++){var d=e(i[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,a&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},925:(n,r,e)=>{n.exports=e.p+"aa3a8f31b54d9c5a1020.ttf"},364:(n,r,e)=>{n.exports=e.p+"c1a27b46f38f95912220.woff"}},m={};function C(n){var r=m[n];if(void 0!==r)return r.exports;var e=m[n]={id:n,exports:{}};return h[n](e,e.exports,C),e.exports}C.m=h,C.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return C.d(r,{a:r}),r},C.d=(n,r)=>{for(var e in r)C.o(r,e)&&!C.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},C.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),C.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;C.g.importScripts&&(n=C.g.location+"");var r=C.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),C.p=n})(),C.b=document.baseURI||self.location.href,n=C(379),r=C.n(n),e=C(795),t=C.n(e),a=C(569),i=C.n(a),o=C(565),A=C.n(o),c=C(216),s=C.n(c),d=C(589),l=C.n(d),p=C(539),(f={}).styleTagTransform=l(),f.setAttributes=A(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=s(),r()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();