"use strict";(self.webpackChunkwebpack5_react_basic_ts=self.webpackChunkwebpack5_react_basic_ts||[]).push([[26],{727:(e,t,n)=>{n.d(t,{VK:()=>s,rU:()=>y});var r=n(550),a=n(14),i=n(294),c=n(731),o=(n(697),n(462)),l=n(366),u=n(177),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,c.lX)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(r.F0,{history:this.history,children:this.props.children})},t}(i.Component);i.Component;var f=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?(0,c.ob)(e,null,null,t):e},p=function(e){return e},h=i.forwardRef;void 0===h&&(h=p);var m=h((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,c=(0,l.Z)(e,["innerRef","navigate","onClick"]),u=c.target,s=(0,o.Z)({},c,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=p!==h&&t||n,i.createElement("a",s)})),y=h((function(e,t){var n=e.component,a=void 0===n?m:n,c=e.replace,s=e.to,y=e.innerRef,d=(0,l.Z)(e,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=e.history,r=v(f(s,e.location),e.location),l=r?n.createHref(r):"",m=(0,o.Z)({},d,{href:l,navigate:function(){var t=f(s,e.location);(c?n.replace:n.push)(t)}});return p!==h?m.ref=t||y:m.innerRef=y,i.createElement(a,m)}))})),d=function(e){return e},C=i.forwardRef;void 0===C&&(C=d),C((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,c=e.activeClassName,s=void 0===c?"active":c,p=e.activeStyle,h=e.className,m=e.exact,R=e.isActive,Z=e.location,g=e.sensitive,k=e.strict,w=e.style,b=e.to,_=e.innerRef,E=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=Z||e.location,c=v(f(b,n),n),l=c.pathname,K=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=K?(0,r.LX)(n.pathname,{path:K,exact:m,sensitive:g,strict:k}):null,A=!!(R?R(N,n):N),x=A?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(h,s):h,D=A?(0,o.Z)({},w,{},p):w,S=(0,o.Z)({"aria-current":A&&a||null,className:x,style:D,to:c},E);return d!==C?S.ref=t||_:S.innerRef=_,i.createElement(y,S)}))}))}}]);