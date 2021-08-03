/*! For license information please see main~0bc0478e.0d04a4d91c00bdeebb40.js.LICENSE.txt */
(self.webpackChunkwebpack5_react_basic_ts=self.webpackChunkwebpack5_react_basic_ts||[]).push([[248],{523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(294),o=n(14),i=n(697),a=n.n(i),c=1073741823,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}const u=r.createContext||function(e,t){var n,i,u="__create-react-context-"+(p["__global_unique_id__"]=(p.__global_unique_id__||0)+1)+"__",l=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=s(t.props.value),t}(0,o.Z)(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof t?t(r,o):c,0!=(n|=0)&&this.emitter.set(e.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);l.childContextTypes=((n={})[u]=a().object.isRequired,n);var f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}(0,o.Z)(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?c:t},r.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?c:e},r.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},r.getValue=function(){return this.context[u]?this.context[u].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return f.contextTypes=((i={})[u]=a().object,i),{Provider:l,Consumer:f}}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,p=o(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))n.call(a,u)&&(p[u]=a[u]);if(t){c=t(a);for(var l=0;l<c.length;l++)r.call(a,c[l])&&(p[c[l]]=a[c[l]])}}return p}},779:(e,t,n)=>{var r=n(826);e.exports=function e(t,n,o){return r(n)||(o=n||o,n=[]),o=o||{},t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(t,n):r(t)?function(t,n,r){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],n,r).source);return u(new RegExp("(?:"+o.join("|")+")",l(r)),n)}(t,n,o):function(e,t,n){return f(i(e,n),t,n)}(t,n,o)},e.exports.parse=i,e.exports.compile=function(e,t){return c(i(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,a=0,c="",u=t&&t.delimiter||"/";null!=(n=o.exec(e));){var l=n[0],f=n[1],h=n.index;if(c+=e.slice(a,h),a=h+l.length,f)c+=f[1];else{var v=e[a],d=n[2],g=n[3],y=n[4],b=n[5],m=n[6],x=n[7];c&&(r.push(c),c="");var w=null!=d&&null!=v&&v!==d,_="+"===m||"*"===m,O="?"===m||"*"===m,E=n[2]||u,j=y||b;r.push({name:g||i++,prefix:d||"",delimiter:E,optional:O,repeat:_,partial:w,asterisk:!!x,pattern:j?s(j):x?".*":"[^"+p(E)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",l(t)));return function(t,o){for(var i="",c=t||{},p=(o||{}).pretty?a:encodeURIComponent,s=0;s<e.length;s++){var u=e[s];if("string"!=typeof u){var l,f=c[u.name];if(null==f){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(r(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=p(f[h]),!n[s].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):p(f),!n[s].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function p(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function l(e){return e&&e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)a+=p(s);else{var f=p(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+f+h+")*"),a+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var v=p(n.delimiter||"/"),d=a.slice(-v.length)===v;return o||(a=(d?a.slice(0,-v.length):a)+"(?:"+v+"(?=$))?"),a+=i?"$":o&&d?"":"(?="+v+"|$)",u(new RegExp("^"+a,l(n)),t)}},703:(e,t,n)=>{"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);