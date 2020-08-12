!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=52)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.throttle=function(e,t){var n=null;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=this;clearTimeout(n),n=setTimeout(function(){e.apply(i,o)},t)}},t.getScrollTop=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.getLink=function(e){return(""+e).length>1&&/^\/[^\/]/.test(""+e)?""+window.rootPath+e:e}},function(e,t,n){e.exports=n(14)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={rootPath:"",port:8080,domain:"openkruise.io",defaultSearch:"google",defaultLanguage:"en-us","en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"docs",text:"DOCS",link:"/en-us/docs/what_is_openkruise.html"},{key:"blog",text:"BLOG",link:"/en-us/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"OpenKruise is an open-source project under Apache License 2.0."},documentation:{title:"Documentation",list:[{text:"What is OpenKruise",link:"/en-us/docs/what_is_openkruise.html"},{text:"Components",link:"/en-us/docs/components.html"},{text:"Contribution",link:"https://github.com/openkruise/kruise/blob/master/CONTRIBUTING.md"}]},resources:{title:"Resources",list:[]},copyright:"Copyright © 2019 The OpenKruise Authors, The Kubernetes Authors"},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/what_is_openkruise.html"},{key:"blog",text:"博客",link:"/zh-cn/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"OpenKruise is an open-source project under Apache License 2.0."},documentation:{title:"文档",list:[{text:"OpenKruise 是什么",link:"/zh-cn/docs/what_is_openkruise.html"},{text:"组件",link:"/zh-cn/docs/components.html"},{text:"贡献指南",link:"https://github.com/openkruise/kruise/blob/master/CONTRIBUTING.md"}]},resources:{title:"资源",list:[]},copyright:"Copyright © 2019 The OpenKruise Authors, The Kubernetes Authors"}}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r,o;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(2),f=r(s),d=n(3),p=r(d),m=n(1);n(12);var h={logo:f.default.string.isRequired,language:f.default.oneOf(["zh-cn","en-us"])},g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.logo,n=e.language,r=p.default[n];return c.default.createElement("footer",{className:"footer-container"},c.default.createElement("div",{className:"footer-body"},c.default.createElement("img",{src:(0,m.getLink)(t)}),c.default.createElement("div",{className:"cols-container"},c.default.createElement("div",{className:"col col-12"},c.default.createElement("h3",null,r.disclaimer.title),c.default.createElement("p",null,r.disclaimer.content)),c.default.createElement("div",{className:"col col-6"},c.default.createElement("dl",null,c.default.createElement("dt",null,r.documentation.title),r.documentation.list.map(function(e,t){return c.default.createElement("dd",{key:t},c.default.createElement("a",{href:(0,m.getLink)(e.link),target:e.target||"_self"},e.text))}))),c.default.createElement("div",{className:"col col-6"},c.default.createElement("dl",null,c.default.createElement("dt",null,r.resources.title),r.resources.list.map(function(e,t){return c.default.createElement("dd",{key:t},c.default.createElement("a",{href:(0,m.getLink)(e.link),target:e.target||"_self"},e.text))})))),c.default.createElement("div",{className:"copyright"},c.default.createElement("span",null,r.copyright))))}}]),t}(c.default.Component);g.propTypes=h,t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(2),d=r(f),p=n(5),m=r(p),h=n(3),g=r(h),y=n(1);n(13);var b=[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}],v={baidu:{logo:"https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png",url:"https://www.baidu.com/s?wd="},google:{logo:"https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg",url:"https://www.google.com/search?q="}},w=function(){},_={currentKey:d.default.string,logo:d.default.string.isRequired,type:d.default.oneOf(["primary","normal"]),language:d.default.oneOf(["en-us","zh-cn"]),onLanguageChange:d.default.func},E={type:"primary",language:"en-us",onLanguageChange:w},k=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onInputChange=function(e){n.setState({searchValue:e.target.value})},n.onKeyDown=function(e){13===e.keyCode&&n.goSearch()},n.toggleMenu=function(){n.setState({menuBodyVisible:!n.state.menuBodyVisible})},n.switchLang=function(){var e=void 0;e="zh-cn"===n.state.language?"en-us":"zh-cn",n.setState({language:e}),n.props.onLanguageChange(e)},n.switchSearch=function(){var e=void 0;e="baidu"===n.state.search?"google":"baidu",n.setState({search:e})},n.toggleSearch=function(){n.setState({searchVisible:!n.state.searchVisible})},n.goSearch=function(){var e=n.state,t=e.search,r=e.searchValue;window.open(""+v[t].url+window.encodeURIComponent(r+" site:"+g.default.domain))},n.state={menuBodyVisible:!1,language:e.language,search:g.default.defaultSearch,searchValue:"",inputVisible:!1},n}return l(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.logo,r=e.onLanguageChange,a=e.currentKey,i=this.state,l=i.menuBodyVisible,u=i.language,c=i.search,f=i.searchVisible;return s.default.createElement("header",{className:(0,m.default)(o({"header-container":!0},"header-container-"+t,!0))},s.default.createElement("div",{className:"header-body"},s.default.createElement("a",{href:(0,y.getLink)("/"+u+"/index.html")},s.default.createElement("img",{className:"logo",alt:g.default.name,title:g.default.name,src:(0,y.getLink)(n)})),g.default.defaultSearch?s.default.createElement("div",{className:(0,m.default)(o({search:!0},"search-"+t,!0))},s.default.createElement("span",{className:"icon-search",onClick:this.toggleSearch}),f?s.default.createElement("div",{className:"search-input"},s.default.createElement("img",{src:v[c].logo,onClick:this.switchSearch}),s.default.createElement("input",{autoFocus:!0,onChange:this.onInputChange,onKeyDown:this.onKeyDown})):null):null,r!==w?s.default.createElement("span",{className:(0,m.default)(o({"language-switch":!0},"language-switch-"+t,!0)),onClick:this.switchLang},b.find(function(e){return e.value===u}).text):null,s.default.createElement("div",{className:(0,m.default)({"header-menu":!0,"header-menu-open":l})},s.default.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?(0,y.getLink)("/img/system/menu_white.png"):(0,y.getLink)("/img/system/menu_gray.png")}),s.default.createElement("ul",null,g.default[u].pageMenu.map(function(e){var n;return s.default.createElement("li",{className:(0,m.default)((n={"menu-item":!0},o(n,"menu-item-"+t,!0),o(n,"menu-item-"+t+"-active",a===e.key),n)),key:e.key},s.default.createElement("a",{href:(0,y.getLink)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(s.default.Component);k.propTypes=_,k.defaultProps=E,t.default=k},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=r(l),c=n(11),s=r(c),f=n(3),d=r(f),p=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.onLanguageChange=function(e){var t=window.location.pathname,n=void 0;n="zh-cn"===e?"en-us":"zh-cn";var r=t.replace(window.rootPath+"/"+n,window.rootPath+"/"+e);s.default.set("docsite_language",e,{expires:365,path:""}),window.location=r},r.getLanguage=function(){var e=void 0;e=window.rootPath?window.location.pathname.split("/")[2]:window.location.pathname.split("/")[1];var t=r.props.lang||e||s.default.get("docsite_language")||d.default.defaultLanguage;return"en-us"!==t&&"zh-cn"!==t&&(t=d.default.defaultLanguage),t!==s.default.get("docsite_language")&&s.default.set("docsite_language",t,{expires:365,path:""}),t},i=n,a(r,i)}return i(t,e),t}(u.default.Component);t.default=p},,function(e,t,n){var r,o;!function(a){var i=!1;if(r=a,void 0!==(o="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=o),i=!0,e.exports=a(),i=!0,!i){var l=window.Cookies,u=window.Cookies=a();u.noConflict=function(){return window.Cookies=l,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,o,a){var i;if("undefined"!=typeof document){if(arguments.length>1){if(a=e({path:"/"},r.defaults,a),"number"==typeof a.expires){var l=new Date;l.setMilliseconds(l.getMilliseconds()+864e5*a.expires),a.expires=l}a.expires=a.expires?a.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var u="";for(var c in a)a[c]&&(u+="; "+c,!0!==a[c]&&(u+="="+a[c]));return document.cookie=t+"="+o+u}t||(i={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<s.length;d++){var p=s[d].split("="),m=p.slice(1).join("=");this.json||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var h=p[0].replace(f,decodeURIComponent);if(m=n.read?n.read(m,h):n(m,h)||m.replace(f,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(e){}if(t===h){i=m;break}t||(i[h]=m)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(){}function o(){}var a=n(15);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(2),l=r(i),u=n(5),c=r(u),s=n(1);n(26);var f={text:l.default.string.isRequired,img:l.default.string.isRequired},d=function(e){var t=e.text,n=e.img,r=(0,c.default)({bar:!0});return a.default.createElement("div",{className:r},a.default.createElement("div",{className:"bar-body"},a.default.createElement("img",{src:(0,s.getLink)(n),className:"front-img"}),a.default.createElement("span",null,t),a.default.createElement("img",{src:(0,s.getLink)(n),className:"back-img"})))};d.propTypes=f,t.default=d},,,function(e,t){},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"en-us":{barText:"Blog",postsTitle:"All posts",list:[{title:"Kruise Workload Classification Guidance",author:"@Fei-Guo",dateStr:"Oct 10th, 2019",desc:"This blog describes how Kruise classifies different controllers. This can help Kruise users to identify the best workload controllers for their applications.",link:"/en-us/blog/blog1.html"},{title:"Learning Concurrent Reconciling",author:"@Fei-Guo",dateStr:"Nov 10th, 2019",desc:"This blog presents some learnings about kubernetes controller runtime.",link:"/en-us/blog/blog2.html"},{title:"UnitedDeployment - Supporting Multi-domain Workload Management",author:"@Fei-Guo",dateStr:"Nov 20th, 2019",desc:"This blog introduces UnitedDeployment, a new controller to orchestrate multi-domain workload management.",link:"/en-us/blog/blog3.html"}]},"zh-cn":{barText:"博客",postsTitle:"所有文章",list:[{title:"Kruise 控制器分类指引",author:"@Fei-Guo, @FillZpp",dateStr:"Oct 10th, 2019",desc:"This blog describes how Kruise classifies different controllers. This can help Kruise users to identify the best workload controllers for their applications.",link:"/zh-cn/blog/blog1.html"}]}}},,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(2),f=r(s),d=n(5),p=r(d),m=n(1);n(58);var h={pageSize:f.default.number},g={pageSize:5},y=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changePage=function(e){n.setState({page:e})},n.renderSliderList=function(){for(var e=n.props,t=e.children,r=e.pageSize,o=n.state,a=o.page,i=o.pageWidth,l=[],u=c.default.Children.count(t),s=Math.ceil(u/r),f=0;f<s;f++)l.push(Array.from(t).slice(f*r,(f+1)*r));return c.default.createElement("div",{className:"slider-list",style:{transform:"translateX(-"+a*i+"px)",transition:"transform 500ms ease",width:s*i}},l.map(function(e,t){return c.default.createElement("div",{className:"slider-page",style:{width:i},key:t},e.map(function(e,t){return c.default.createElement("div",{className:"slider-item",key:t},e)}))}))},n.renderControl=function(){var e=n.props,t=e.children,r=e.pageSize,o=n.state.page,a=c.default.Children.count(t),i=Math.ceil(a/r);return c.default.createElement("div",{className:"slider-control"},c.default.createElement("img",{className:(0,p.default)({"slider-control-prev":!0,"slider-control-prev-hidden":0===o}),src:(0,m.getLink)("/img/system/prev.png"),onClick:n.changePage.bind(n,o-1)}),c.default.createElement("img",{className:(0,p.default)({"slider-control-next":!0,"slider-control-next-hidden":o===i-1}),src:(0,m.getLink)("/img/system/next.png"),onClick:n.changePage.bind(n,o+1)}))},n.container=null,n.state={page:0,pageWidth:0},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this,t=this.container.getBoundingClientRect().width;this.setState({pageWidth:t}),this.throttleAdjust=(0,m.throttle)(function(){e.setState({pageWidth:e.container.getBoundingClientRect().width})},200),window.addEventListener("resize",this.throttleAdjust)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"page-slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(c.default.Component);y.propTypes=h,y.defaultProps=g,t.default=y},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(1);n(60);var s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onMouseOver=function(){n.setState({isHovered:!0})},n.onMouseOut=function(){n.setState({isHovered:!1})},n.state={isHovered:!1},n}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.dataSource,t=e.link,n=e.target,r=e.title,o=e.author,a=e.companyIcon,i=e.companyIconHover,l=e.dateStr,s=e.desc,f=this.state.isHovered;return u.default.createElement("a",{href:(0,c.getLink)(t),target:n||"_self",className:"blog-item",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},u.default.createElement("div",{className:"title"},u.default.createElement("img",{src:f?(0,c.getLink)("/img/system/docs_hover.png"):(0,c.getLink)("/img/system/docs_normal.png")}),u.default.createElement("span",null,r)),u.default.createElement("div",{className:"brief-info"},u.default.createElement("span",{className:"author"},o),a?u.default.createElement("img",{src:f?""+window.rootPath+i:""+window.rootPath+a}):null,u.default.createElement("span",{className:"date"},l)),u.default.createElement("p",null,s))}}]),t}(u.default.Component);t.default=s},,,function(e,t){},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(4),f=r(s),d=n(9),p=r(d),m=n(8),h=r(m),g=n(23),y=r(g),b=n(41),v=r(b),w=n(43),_=r(w),E=n(7),k=r(E),O=n(36),j=r(O),x=n(1);n(46);var C=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.getLanguage(),t=j.default[e],n=t.list;return c.default.createElement("div",{className:"blog-list-page"},c.default.createElement(h.default,{type:"normal",currentKey:"blog",logo:(0,x.getLink)("/img/kruise_colorful.png"),language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement(y.default,{img:(0,x.getLink)("/img/system/blog.png"),text:t.barText}),c.default.createElement("section",{className:"blog-container"},c.default.createElement("div",{className:"col col-18 left-part"},c.default.createElement(v.default,{pageSize:5},n.map(function(e,t){return c.default.createElement(_.default,{key:t,dataSource:e})}))),c.default.createElement("div",{className:"col col-6 right-part"},c.default.createElement("h4",null,t.postsTitle),c.default.createElement("ul",null,n.map(function(e,t){return c.default.createElement("li",{key:t},c.default.createElement("a",{href:(0,x.getLink)(e.link)},c.default.createElement("span",null,e.dateStr,"  "),c.default.createElement("span",null,e.title)))})))),c.default.createElement(k.default,{logo:(0,x.getLink)("/img/kruise_gray.png"),language:e}))}}]),t}(p.default);document.getElementById("root")&&f.default.render(c.default.createElement(C,null),document.getElementById("root")),t.default=C},,,,,,function(e,t){},,function(e,t){}]);