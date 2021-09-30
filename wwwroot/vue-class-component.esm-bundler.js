import{e as t,F as e}from"./vendor.js";
/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function l(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e,r){Object.defineProperty(t,e,{get:r,enumerable:!1,configurable:!0})}function y(t,e){return t.hasOwnProperty(e)?t[e]:void 0}var h=function(){function o(t,e){var n=this;r(this,o),b(this,"$props",(function(){return t})),b(this,"$attrs",(function(){return e.attrs})),b(this,"$slots",(function(){return e.slots})),b(this,"$emit",(function(){return e.emit})),Object.keys(t).forEach((function(e){Object.defineProperty(n,e,{enumerable:!1,configurable:!0,writable:!0,value:t[e]})}))}var i,c,a;return i=o,a=[{key:"registerHooks",value:function(t){var e;(e=this.__h).push.apply(e,l(t))}},{key:"with",value:function(t){var e=new t,n={};Object.keys(e).forEach((function(t){var r=e[t];n[t]=null!=r?r:null}));var o=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(this);return o.__b={props:n},o}},{key:"__vccOpts",get:function(){if(this===v)return{};var r=this,n=y(r,"__c");if(n)return n;var o=u({},y(r,"__o"));r.__c=o;var i=function(t){var e=Object.getPrototypeOf(t.prototype);if(e)return e.constructor}(r);i&&(o.extends=i.__vccOpts);var c=y(r,"__b");c&&(o.mixins=o.mixins||[],o.mixins.unshift(c)),o.methods=u({},o.methods),o.computed=u({},o.computed);var f=r.prototype;Object.getOwnPropertyNames(f).forEach((function(t){if("constructor"!==t)if(r.__h.indexOf(t)>-1)o[t]=f[t];else{var e=Object.getOwnPropertyDescriptor(f,t);"function"!=typeof e.value?(e.get||e.set)&&(o.computed[t]={get:e.get,set:e.set}):o.methods[t]=e.value}})),o.setup=function(n,o){var i,u=new r(n,o),c=Object.keys(u),f={},a=null;return c.forEach((function(e){void 0===u[e]||u[e]&&u[e].__s||(f[e]=t(u[e]),function(t,e,r){Object.defineProperty(t,e,{get:function(){return r[e].value},set:function(t){r[e].value=t},enumerable:!0,configurable:!0})}(u,e,f))})),c.forEach((function(t){if(u[t]&&u[t].__s){var r=u[t].__s();r instanceof Promise?(a||(a=Promise.resolve(f)),a=a.then((function(){return r.then((function(r){return f[t]=e(r),f}))}))):f[t]=e(r)}})),null!==(i=a)&&void 0!==i?i:f};var a=y(r,"__d");return a&&a.forEach((function(t){return t(o)})),["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"].forEach((function(t){r[t]&&(o[t]=r[t])})),o}}],(c=null)&&n(i.prototype,c),a&&n(i,a),o}();h.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var v=h;export{v as V};
//# sourceMappingURL=vue-class-component.esm-bundler.js.map