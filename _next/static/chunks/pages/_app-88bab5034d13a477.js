(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3498)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(1003),l=n(880),c=n(9246);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function d(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var p=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,b=e.as,h=e.children,v=e.prefetch,y=e.passHref,g=e.replace,m=e.shallow,j=e.scroll,O=e.locale,w=e.onClick,k=e.onMouseEnter,C=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var E,x=!1!==v,S=l.useRouter(),_=i.default.useMemo((function(){var e=o(u.resolveHref(S,p,!0),2),t=e[0],n=e[1];return{href:t,as:b?u.resolveHref(S,b):n||t}}),[S,p,b]),M=_.href,I=_.as,R=i.default.useRef(M),A=i.default.useRef(I);a&&(E=i.default.Children.only(n));var L=a?E&&"object"===typeof E&&E.ref:t,P=o(c.useIntersection({rootMargin:"200px"}),3),K=P[0],N=P[1],T=P[2],H=i.default.useCallback((function(e){A.current===I&&R.current===M||(T(),A.current=I,R.current=M),K(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[I,L,M,T,K]);i.default.useEffect((function(){var e=N&&x&&u.isLocalURL(M),t="undefined"!==typeof O?O:S&&S.locale,n=s[M+"%"+I+(t?"%"+t:"")];e&&!n&&d(S,M,I,{locale:t})}),[I,M,N,O,x,S]);var U={ref:H,onClick:function(e){a||"function"!==typeof w||w(e),a&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,S,M,I,g,m,j,O)},onMouseEnter:function(e){a||"function"!==typeof k||k(e),a&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),u.isLocalURL(M)&&d(S,M,I,{priority:!0})}};if(!a||y||"a"===E.type&&!("href"in E.props)){var D="undefined"!==typeof O?O:S&&S.locale,X=S&&S.isLocaleDomain&&u.getDomainLocale(I,D,S&&S.locales,S&&S.domainLocales);U.href=X||u.addBasePath(u.addLocale(I,D,S&&S.defaultLocale))}return a?i.default.cloneElement(E,U):i.default.createElement("a",Object.assign({},C,U),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],b=o(a.useState(t?t.current:null),2),h=b[0],v=b[1],y=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,d,g]};var a=n(7294),i=n(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3498:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=(n(7107),n(1664)),a=n.n(o),i=n(7294),u=JSON.parse('{"L1":[{"id":"62931f40f5b7c500233fb65f","title":"index","image":null,"descriptions":["Code for Japan\u306eproj-inclusive\u306eWeb\u30b5\u30a4\u30c8\u3067\u3059","\u30c6\u30b9\u30c8\u3067\u66f8\u304d\u8fbc\u3093\u3067\u307f\u308b[tkgshn.icon]"],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600931993,"views":2,"linked":0,"commitId":"629342aba06b4d00232c277e","created":1653808962,"updated":1653818027,"accessed":1653818026,"snapshotCreated":1653818016,"pageRank":0},{"id":"62931f6ee56319001db4586a","title":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4e00\u89a7","image":null,"descriptions":[],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600931965,"views":0,"linked":0,"commitId":"62931f8138b8e50023af2994","created":1653809021,"updated":1653809025,"accessed":1653809021,"snapshotCreated":null,"pageRank":0},{"id":"62931f852807ae00233e654a","title":"\u30e1\u30c7\u30a3\u30a2\u63b2\u8f09","image":null,"descriptions":[],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600931953,"views":0,"linked":0,"commitId":"62931f8d38b8e50023af2a5d","created":1653809031,"updated":1653809037,"accessed":1653809031,"snapshotCreated":null,"pageRank":0},{"id":"62931fc16a4cd0001de7d735","title":"\u53c2\u52a0\u3059\u308b","image":null,"descriptions":[],"user":{"id":"5b614e70895ac50014bb24d4"},"pin":9007197600931893,"views":0,"linked":0,"commitId":"62931fc938b8e50023af2dd7","created":1653809090,"updated":1653809097,"accessed":1653809090,"snapshotCreated":null,"pageRank":0},{"id":"629342a714b9ff001d25a62e","title":"tkgshn","image":"https://lh3.googleusercontent.com/a-/AOh14Gho_Zlj7OV6PjDhgKHv4KfKMxO6CSTjSiEXW83eQFM=s96-c#.png","descriptions":["[https://lh3.googleusercontent.com/a-/AOh14Gho_Zlj7OV6PjDhgKHv4KfKMxO6CSTjSiEXW83eQFM=s96-c#.png]","this is tkgshn\u2019s page","#member"],"user":{"id":"5b9f8ea76ffa88001309c5f2"},"pin":0,"views":0,"linked":0,"commitId":"629342a8a06b4d00232c26ef","created":1653818024,"updated":1653818024,"accessed":1653818024,"snapshotCreated":null,"pageRank":0}]}');function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var f=function(e){var t=e.Component,n=e.pageProps,o=(0,i.useState)([]),l=o[0],f=o[1];return(0,i.useEffect)((function(){var e=u.L1.filter((function(e){return 0<e.pin})).map((function(e){return e.title}));f(e)}),[]),(0,r.jsxs)("div",{className:"root",children:[(0,r.jsx)("h1",{children:"\u5305\u6442\u7814\u7a76\u4f1a | Code for Japan"}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:l.map((function(e){return"index"===e?(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("a",{children:"Home"})})},e):(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/"+e,children:(0,r.jsx)("a",{children:e})})},e)}))})}),(0,r.jsx)(t,c({},n))]})}},7107:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);