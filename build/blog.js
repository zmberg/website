!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=52)}([function(e,t){e.exports=React},function(e,t,n){e.exports=n(14)()},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var r=function(e,t){var n=null;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=this;clearTimeout(n),n=setTimeout(function(){e.apply(i,o)},t)}},o=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},a=function(e){return"".concat(e).length>1&&/^\/[^\/]/.test("".concat(e))?"".concat(window.rootPath).concat(e):e}},function(e,t,n){"use strict";t.a={rootPath:"",port:8080,domain:"openkruise.io",defaultSearch:"google",defaultLanguage:"en-us","en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"docs",text:"DOCS",link:"/en-us/docs/what_is_openkruise.html"},{key:"blog",text:"BLOG",link:"/en-us/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"OpenKruise is an open-source project under Apache License 2.0."},cloudNative:'We are a <a href="https://www.cncf.io">Cloud Native Computing Foundation</a> sandbox project.',documentation:{title:"Documentation",list:[{text:"What is OpenKruise",link:"/en-us/docs/what_is_openkruise.html"},{text:"Components",link:"/en-us/docs/components.html"},{text:"Contribution",link:"https://github.com/openkruise/kruise/blob/master/CONTRIBUTING.md"}]},resources:{title:"Resources",list:[]},copyright:'Copyright © 2021 The OpenKruise Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page: <a href="https://www.linuxfoundation.org/trademark-usage">https://www.linuxfoundation.org/trademark-usage</a>'},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/what_is_openkruise.html"},{key:"blog",text:"博客",link:"/zh-cn/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"OpenKruise is an open-source project under Apache License 2.0."},cloudNative:'We are a <a href="https://www.cncf.io">Cloud Native Computing Foundation</a> sandbox project.',documentation:{title:"文档",list:[{text:"OpenKruise 是什么",link:"/zh-cn/docs/what_is_openkruise.html"},{text:"组件",link:"/zh-cn/docs/components.html"},{text:"贡献指南",link:"https://github.com/openkruise/kruise/blob/master/CONTRIBUTING.md"}]},resources:{title:"资源",list:[]},copyright:'Copyright © 2021 The OpenKruise Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page: <a href="https://www.linuxfoundation.org/trademark-usage">https://www.linuxfoundation.org/trademark-usage</a>'}}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r,o;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=n(0),d=n.n(h),y=n(1),g=n.n(y),b=n(3),v=n(12),w=(n.n(v),{language:g.a.oneOf(["zh-cn","en-us"])}),O=function(e){function t(){return o(this,t),n.apply(this,arguments)}c(t,e);var n=l(t);return i(t,[{key:"render",value:function(){var e=this.props.language,t=b.a[e];return d.a.createElement("footer",{className:"footer-container"},d.a.createElement("div",{className:"cloud-native"},d.a.createElement("div",{className:"container"},d.a.createElement("img",{src:"https://d33wubrfki0l68.cloudfront.net/ea0d91fac8683c38ea9a1fb8a4e9914627ac6aae/8efa9/img/logos/cloud-native-computing.svg"}),d.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.cloudNative}}))),d.a.createElement("div",{className:"copyright"},d.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.copyright}})))}}]),t}(d.a.Component);O.propTypes=w,t.a=O},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n(0),y=n.n(d),g=n(1),b=n.n(g),v=n(5),w=n.n(v),O=n(3),E=n(2),k=n(13),S=(n.n(k),[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}]),_={baidu:{logo:"https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png",url:"https://www.baidu.com/s?wd="},google:{logo:"https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg",url:"https://www.google.com/search?q="}},x=function(){},C={currentKey:b.a.string,logo:b.a.string.isRequired,type:b.a.oneOf(["primary","normal"]),language:b.a.oneOf(["en-us","zh-cn"]),onLanguageChange:b.a.func},j={type:"primary",language:"en-us",onLanguageChange:x},P=function(e){function t(e){var n;return o(this,t),n=r.call(this,e),h(f(n),"onInputChange",function(e){n.setState({searchValue:e.target.value})}),h(f(n),"onKeyDown",function(e){13===e.keyCode&&n.goSearch()}),h(f(n),"toggleMenu",function(){n.setState({menuBodyVisible:!n.state.menuBodyVisible})}),h(f(n),"switchLang",function(){var e;e="zh-cn"===n.state.language?"en-us":"zh-cn",n.setState({language:e}),n.props.onLanguageChange(e)}),h(f(n),"switchSearch",function(){var e;e="baidu"===n.state.search?"google":"baidu",n.setState({search:e})}),h(f(n),"toggleSearch",function(){n.setState({searchVisible:!n.state.searchVisible})}),h(f(n),"goSearch",function(){var e=n.state,t=e.search,r=e.searchValue;window.open("".concat(_[t].url).concat(window.encodeURIComponent("".concat(r," site:").concat(O.a.domain))))}),n.state={menuBodyVisible:!1,language:e.language,search:O.a.defaultSearch,searchValue:"",inputVisible:!1},n}c(t,e);var r=l(t);return i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"render",value:function(){var e=this.props,t=e.type,r=e.logo,o=e.onLanguageChange,a=e.currentKey,i=this.state,c=i.menuBodyVisible,u=i.language,l=i.search,s=i.searchVisible;return y.a.createElement("header",{className:w()(h({"header-container":!0},"header-container-".concat(t),!0))},y.a.createElement("div",{className:"header-body"},y.a.createElement("a",{href:n.i(E.b)("/".concat(u,"/index.html"))},y.a.createElement("img",{className:"logo",alt:O.a.name,title:O.a.name,src:n.i(E.b)(r)})),O.a.defaultSearch?y.a.createElement("div",{className:w()(h({search:!0},"search-".concat(t),!0))},y.a.createElement("span",{className:"icon-search",onClick:this.toggleSearch}),s?y.a.createElement("div",{className:"search-input"},y.a.createElement("img",{src:_[l].logo,onClick:this.switchSearch}),y.a.createElement("input",{autoFocus:!0,onChange:this.onInputChange,onKeyDown:this.onKeyDown})):null):null,o!==x?y.a.createElement("span",{className:w()(h({"language-switch":!0},"language-switch-".concat(t),!0)),onClick:this.switchLang},S.find(function(e){return e.value===u}).text):null,y.a.createElement("div",{className:w()({"header-menu":!0,"header-menu-open":c})},y.a.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?n.i(E.b)("/img/system/menu_white.png"):n.i(E.b)("/img/system/menu_gray.png")}),y.a.createElement("ul",null,O.a[u].pageMenu.map(function(e){var r;return y.a.createElement("li",{className:w()((r={"menu-item":!0},h(r,"menu-item-".concat(t),!0),h(r,"menu-item-".concat(t,"-active"),a===e.key),r)),key:e.key},y.a.createElement("a",{href:n.i(E.b)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(y.a.Component);P.propTypes=C,P.defaultProps=j,t.a=P},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=s();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n(0),h=n.n(m),d=n(11),y=n.n(d),g=n(3),b=function(e){function t(){var e;o(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=n.call.apply(n,[this].concat(a)),p(l(e),"onLanguageChange",function(e){var t,n=window.location.pathname;t="zh-cn"===e?"en-us":"zh-cn";var r=n.replace("".concat(window.rootPath,"/").concat(t),"".concat(window.rootPath,"/").concat(e));y.a.set("docsite_language",e,{expires:365,path:""}),window.location=r}),p(l(e),"getLanguage",function(){var t;t=window.rootPath?window.location.pathname.split("/")[2]:window.location.pathname.split("/")[1];var n=e.props.lang||t||y.a.get("docsite_language")||g.a.defaultLanguage;return"en-us"!==n&&"zh-cn"!==n&&(n=g.a.defaultLanguage),n!==y.a.get("docsite_language")&&y.a.set("docsite_language",n,{expires:365,path:""}),n}),e}a(t,e);var n=c(t);return t}(h.a.Component);t.a=b},,,function(e,t,n){var r,o;!function(a){var i;if(r=a,void 0!==(o="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=o),i=!0,e.exports=a(),i=!0,!i){var c=window.Cookies,u=window.Cookies=a();u.noConflict=function(){return window.Cookies=c,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(r){function o(){}function a(t,n,a){if("undefined"!=typeof document){a=e({path:"/"},o.defaults,a),"number"==typeof a.expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,!0!==a[u]&&(c+="="+a[u].split(";")[0]));return document.cookie=t+"="+n+c}}function i(e,n){if("undefined"!=typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var l=t(c[0]);if(u=(r.read||r)(u,l)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(o[l]=u,e===l)break}catch(e){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(t,n){a(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}return n(function(){})})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(){}function o(){}var a=n(15);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(5),u=n.n(c),l=n(2),s=n(26),f=(n.n(s),{text:i.a.string.isRequired,img:i.a.string.isRequired}),p=function(e){var t=e.text,r=e.img,a=u()({bar:!0});return o.a.createElement("div",{className:a},o.a.createElement("div",{className:"bar-body"},o.a.createElement("img",{src:n.i(l.b)(r),className:"front-img"}),o.a.createElement("span",null,t),o.a.createElement("img",{src:n.i(l.b)(r),className:"back-img"})))};p.propTypes=f,t.a=p},,,function(e,t){},,,,,,,,,,function(e,t,n){"use strict";t.a={"en-us":{barText:"Blog",postsTitle:"All posts",list:[{title:"Kruise Workload Classification Guidance",author:"@Fei-Guo",dateStr:"Oct 10th, 2019",desc:"This blog describes how Kruise classifies different controllers. This can help Kruise users to identify the best workload controllers for their applications.",link:"/en-us/blog/blog1.html"},{title:"Learning Concurrent Reconciling",author:"@Fei-Guo",dateStr:"Nov 10th, 2019",desc:"This blog presents some learnings about kubernetes controller runtime.",link:"/en-us/blog/blog2.html"},{title:"UnitedDeployment - Supporting Multi-domain Workload Management",author:"@Fei-Guo",dateStr:"Nov 20th, 2019",desc:"This blog introduces UnitedDeployment, a new controller to orchestrate multi-domain workload management.",link:"/en-us/blog/blog3.html"}]},"zh-cn":{barText:"博客",postsTitle:"所有文章",list:[{title:"Kruise 控制器分类指引",author:"@Fei-Guo, @FillZpp",dateStr:"Oct 10th, 2019",desc:"This blog describes how Kruise classifies different controllers. This can help Kruise users to identify the best workload controllers for their applications.",link:"/zh-cn/blog/blog1.html"}]}}},,,,,function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n(0),y=n.n(d),g=n(1),b=n.n(g),v=n(5),w=n.n(v),O=n(2),E=n(58),k=(n.n(E),{pageSize:b.a.number}),S={pageSize:5},_=function(e){function t(e){var a;return o(this,t),a=r.call(this,e),h(f(a),"changePage",function(e){a.setState({page:e})}),h(f(a),"renderSliderList",function(){for(var e=a.props,t=e.children,n=e.pageSize,r=a.state,o=r.page,i=r.pageWidth,c=[],u=y.a.Children.count(t),l=Math.ceil(u/n),s=0;s<l;s++)c.push(Array.from(t).slice(s*n,(s+1)*n));return y.a.createElement("div",{className:"slider-list",style:{transform:"translateX(-".concat(o*i,"px)"),transition:"transform 500ms ease",width:l*i}},c.map(function(e,t){return y.a.createElement("div",{className:"slider-page",style:{width:i},key:t},e.map(function(e,t){return y.a.createElement("div",{className:"slider-item",key:t},e)}))}))}),h(f(a),"renderControl",function(){var e=a.props,t=e.children,r=e.pageSize,o=a.state.page,i=y.a.Children.count(t),c=Math.ceil(i/r);return y.a.createElement("div",{className:"slider-control"},y.a.createElement("img",{className:w()({"slider-control-prev":!0,"slider-control-prev-hidden":0===o}),src:n.i(O.b)("/img/system/prev.png"),onClick:a.changePage.bind(f(a),o-1)}),y.a.createElement("img",{className:w()({"slider-control-next":!0,"slider-control-next-hidden":o===c-1}),src:n.i(O.b)("/img/system/next.png"),onClick:a.changePage.bind(f(a),o+1)}))}),a.container=null,a.state={page:0,pageWidth:0},a}c(t,e);var r=l(t);return i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.container.getBoundingClientRect().width;this.setState({pageWidth:t}),this.throttleAdjust=n.i(O.c)(function(){e.setState({pageWidth:e.container.getBoundingClientRect().width})},200),window.addEventListener("resize",this.throttleAdjust)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"render",value:function(){var e=this;return y.a.createElement("div",{className:"page-slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(y.a.Component);_.propTypes=k,_.defaultProps=S,t.a=_},,function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n(0),y=n.n(d),g=n(2),b=n(60),v=(n.n(b),function(e){function t(e){var n;return o(this,t),n=r.call(this,e),h(f(n),"onMouseOver",function(){n.setState({isHovered:!0})}),h(f(n),"onMouseOut",function(){n.setState({isHovered:!1})}),n.state={isHovered:!1},n}c(t,e);var r=l(t);return i(t,[{key:"render",value:function(){var e=this.props.dataSource,t=e.link,r=e.target,o=e.title,a=e.author,i=e.companyIcon,c=e.companyIconHover,u=e.dateStr,l=e.desc,s=this.state.isHovered;return y.a.createElement("a",{href:n.i(g.b)(t),target:r||"_self",className:"blog-item",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},y.a.createElement("div",{className:"title"},y.a.createElement("img",{src:s?n.i(g.b)("/img/system/docs_hover.png"):n.i(g.b)("/img/system/docs_normal.png")}),y.a.createElement("span",null,o)),y.a.createElement("div",{className:"brief-info"},y.a.createElement("span",{className:"author"},a),i?y.a.createElement("img",{src:s?"".concat(window.rootPath).concat(c):"".concat(window.rootPath).concat(i)}):null,y.a.createElement("span",{className:"date"},u)),y.a.createElement("p",null,l))}}]),t}(y.a.Component));t.a=v},,,function(e,t){},,,,,,function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0});var h=n(0),d=n.n(h),y=n(4),g=n.n(y),b=n(8),v=n(7),w=n(23),O=n(41),E=n(43),k=n(6),S=n(36),_=n(2),x=n(46),C=(n.n(x),function(e){function t(){return o(this,t),r.apply(this,arguments)}c(t,e);var r=l(t);return i(t,[{key:"render",value:function(){var e=this.getLanguage(),t=S.a[e],r=t.list;return d.a.createElement("div",{className:"blog-list-page"},d.a.createElement(v.a,{type:"normal",currentKey:"blog",logo:n.i(_.b)("/img/kruise_colorful.png"),language:e,onLanguageChange:this.onLanguageChange}),d.a.createElement(w.a,{img:n.i(_.b)("/img/system/blog.png"),text:t.barText}),d.a.createElement("section",{className:"blog-container"},d.a.createElement("div",{className:"col col-18 left-part"},d.a.createElement(O.a,{pageSize:5},r.map(function(e,t){return d.a.createElement(E.a,{key:t,dataSource:e})}))),d.a.createElement("div",{className:"col col-6 right-part"},d.a.createElement("h4",null,t.postsTitle),d.a.createElement("ul",null,r.map(function(e,t){return d.a.createElement("li",{key:t},d.a.createElement("a",{href:n.i(_.b)(e.link)},d.a.createElement("span",null,e.dateStr,"  "),d.a.createElement("span",null,e.title)))})))),d.a.createElement(k.a,{logo:n.i(_.b)("/img/kruise_gray.png"),language:e}))}}]),t}(b.a));document.getElementById("root")&&g.a.render(d.a.createElement(C,null),document.getElementById("root")),t.default=C},,,,,,function(e,t){},,function(e,t){}]);