(()=>{"use strict";function a(b){"@babel/helpers - typeof";return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function c(a,c,d){return c&&b(a.prototype,c),d&&b(a,d),Object.defineProperty(a,"prototype",{writable:!1}),a}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&f(a,b)}function f(a,b){return f=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},f(a,b)}function g(a){var b=j();return function(){var c,d=k(a);if(b){var e=k(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return h(this,c)}}function h(b,c){if(c&&("object"===a(c)||"function"==typeof c))return c;if(void 0!==c)throw new TypeError("Derived constructors may only return object or undefined");return i(b)}function i(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function k(a){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},k(a)}function l(a){"@babel/helpers - typeof";return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}function m(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function n(a,b,c){return b&&m(a.prototype,b),c&&m(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function o(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function p(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&q(a,b)}function q(a,b){return q=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},q(a,b)}function r(a){var b=u();return function(){var c,d=v(a);if(b){var e=v(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return s(this,c)}}function s(a,b){if(b&&("object"===l(b)||"function"==typeof b))return b;if(void 0!==b)throw new TypeError("Derived constructors may only return object or undefined");return t(a)}function t(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function v(a){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},v(a)}var w=function(a){function b(){var a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return d(this,b),a=f.call(this),a.container=document.createElement("div"),a.container.append("<p>Allahu Akbar</p>"),a}e(b,a);var f=g(b);return c(b)}(H5P.EventDispatcher);var x=function(a){function b(a,d,e){var f,g=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};o(this,b),f=c.call(this),f.contentId=d,f.mainWrapper=null;var h=H5PIntegration&&H5PIntegration.user&&H5PIntegration.user.name||"World";return f.title=document.createElement("div"),f.title.innerText=e.titleField.replace("%username",h),f.params.behaviour.enableSolutionsButton=!1,f.params.behaviour.enableRetry=!1,f.content=w,f.prototype.attach=function(a){f.mainWrapper=a,f.isEdge18orEarlier()&&a.addClass("edge-18"),a.append("<div class=\"title-text\">".concat(f.params.titleField,"</div>")),a.append("<div class=\"title-text\">".concat(f.params.image,"</div>"))},f.isEdge18orEarlier=function(){var a=window.navigator.userAgent,b=a.indexOf("Edge/");if(0>b)return!1;var c=a.substring(b+5,a.indexOf(".",b));return 18>=parseInt(c,10)},f}p(b,a);var c=r(b);return n(b)}(H5P.EventDispatcher);H5P=H5P||{},H5P.Page=x})();