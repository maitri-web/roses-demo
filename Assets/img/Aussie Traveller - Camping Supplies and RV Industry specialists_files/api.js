(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(mode&1&&(value=__webpack_require__(value)),mode&8||mode&4&&typeof value=="object"&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key2){return value[key2]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)})([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);function k(b){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k(b)}function l(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function m(b,a){for(var c=0;c<a.length;c++){var d=a[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(b,d.key,d)}}function n(b,a,c){return a&&m(b.prototype,a),c&&m(b,c),b}function p(b,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),a&&q(b,a)}function r(b){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},r(b)}function q(b,a){return q=Object.setPrototypeOf||function(a2,d){return a2.__proto__=d,a2},q(b,a)}function t(b,a){if(a&&(typeof a=="object"||typeof a=="function"))return a;if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function u(b){if(Array.isArray(b)){for(var a=0,c=Array(b.length);a<b.length;a++)c[a]=b[a];a=c}else a=void 0;if(a||(a=Symbol.iterator in Object(b)||Object.prototype.toString.call(b)==="[object Arguments]"?Array.from(b):void 0),!(b=a))throw new TypeError("Invalid attempt to spread non-iterable instance");return b}var v=function(){function b(a){l(this,b),this._api=a,this._registered=[]}return n(b,[{key:"register",value:function(a){var c=this,d=a.id,b2=a.contact,e=a.values;e=e===void 0?{}:e;var g=a.elements;if(g=g===void 0?{}:g,a=a.events,a=a===void 0?{}:a,typeof d!="string"||d==="")throw Error("Integration ID cannot be empty.");if(typeof b2!="string"||b2==="")throw Error("Integration contact cannot be empty.");return[["values",e],["elements",g],["events",a]].forEach(function(a2){if(k(a2[1])!=="object")throw Error("Integration ".concat(a2[0]," property must be of type object."));Object.keys(a2[1]).forEach(function(c2){if(typeof a2[1][c2]!="function")throw Error("Integration ".concat(a2[0]," property must contain a function as the value for each key, value pairing."))})}),this._registered=this._registered.filter(function(a2){return a2.id!==d}),this._registered.push({id:d,contact:b2,values:e,elements:g,events:a}),Object.keys(e).forEach(function(a2){return c.updateValue(a2)}),Object.keys(g).forEach(function(a2){return c.updateElement(a2)}),!0}},{key:"updateValue",value:function(a){var c=this;return a=this._api.theme.getValues(a),a.length?Promise.all(a.map(function(a2){return a2&&a2.initialValue?c._api.theme.updateValue(a2.value.name,a2.initialValue,a2.params):Promise.resolve()})).then(function(){return!0}).catch(function(){return!1}):Promise.resolve(!1)}},{key:"updateElement",value:function(a){var c=this;return a=this._api.theme.getElements(a),a.length?Promise.all(a.map(function(a2){return a2?c._api.theme.updateElement(a2.element.name,a2.params):Promise.resolve()})).then(function(){return!0}).catch(function(){return!1}):Promise.resolve(!1)}},{key:"registered",get:function(){return this._registered}}]),b}();function w(b,a){if(b&&!a)return b;if(!b&&a)return a;if(!b&&!a)return{};var c={};return Object.keys(b).forEach(function(a2){c[a2]=b[a2]}),Object.keys(a).forEach(function(d){c[d]=a[d]}),c}function x(b){return b=b.split(":"),b.length===3?b[1]:null}var y=function(){function b(a,c){l(this,b),this._api=a,this._name=c,this._id=x(c),this._handle=(a=x(c))?c.replace(a,"<id>"):c}return n(b,[{key:"name",get:function(){return this._name}},{key:"id",get:function(){return this._id}},{key:"handle",get:function(){return this._handle}}]),b}();function z(b,a){var c=Promise.resolve();return b.forEach(function(d){c=c.then(function(){return a(d)})}),c}var A=function(b){function a(c,d){return l(this,a),c=t(this,r(a).call(this,c,d)),c._activePromise=Promise.resolve(),c}return p(a,b),n(a,[{key:"update",value:function(a2,d){function c(){return z(g,function(c2){return new Promise(function(f){var e=c2.values[b2._handle];if(!e)return f();e=e({id:b2._id,initialValue:a2,value:h,params:d}),e instanceof Promise?e.then(function(a3){h=a3,f()}):(h=e,f())})}).then(function(){return h})}var b2=this,g=this._api.integrations.registered,h=a2;return this._activePromise.then(function(){return c()})}}]),a}(y),Element=function(b){function a(c,d,b2){return l(this,a),c=t(this,r(a).call(this,c,d)),c._container=b2,c._results={},c._activePromise=Promise.resolve(),c}return p(a,b),n(a,[{key:"update",value:function(a2){function c(){var c2={},d=[];return z(e,function(f){return new Promise(function(e2){var g=f.elements[b2._handle];if(!g)return e2();g=g({id:b2._id,params:a2}),g instanceof Promise?g.then(function(a3){c2[f.id]=a3,d.push.apply(d,u(a3.elements)),e2()}):(c2[f.id]=g,d.push.apply(d,u(g.elements)),e2())})}).then(function(){return b2.unload()}).then(function(){return d.forEach(function(a3){return b2._container.appendChild(a3)})}).then(function(){b2._results=c2}).then(function(){return d})}var b2=this,e=this._api.integrations.registered;return this._activePromise.then(function(){return c()})}},{key:"unload",value:function(){var a2=this;Object.keys(this._results).forEach(function(c){var b2=a2._results[c];c=b2.elements,b2=b2.onUnload,b2(),c.forEach(function(c2){a2._container.contains(c2)&&a2._container.removeChild(c2)})}),this._results={}}}]),a}(y),B=function(){function b(a){var c=this;l(this,b),this._api=a,this._values={},this._elements={},this._batchUpdate={values:[],elements:[]},this._isLoaded=!1,window.addEventListener("DOMContentLoaded",function f(){c._isLoaded=!0,c._batchUpdate.values.forEach(function(a2){return a2()}),c._batchUpdate.elements.forEach(function(a2){return a2()}),window.removeEventListener("DOMContentLoaded",f)})}return n(b,[{key:"getValues",value:function(a){var c=this;if(this._values[a])return[this._values[a]];var b2=[];return Object.keys(this._values).forEach(function(d){d=c._values[d],d.value.handle===a&&b2.push(d)}),b2}},{key:"getElements",value:function(a){var c=this;if(this._elements[a])return[this._elements[a]];var b2=[];return Object.keys(this._elements).forEach(function(d){d=c._elements[d],d.element.handle===a&&b2.push(d)}),b2}},{key:"useValue",value:function(a,c){var b2={name:null,handler:null};return a&&k(a)==="object"&&!c?b2=a:a&&typeof a=="string"&&c&&typeof c=="function"&&(b2.name=a,b2.handler=c),this._useValue(b2)}},{key:"useElement",value:function(a,c){var b2={name:null,container:null};return a&&k(a)==="object"&&!c?b2=a:a&&typeof a=="string"&&c&&c instanceof HTMLElement&&(b2.name=a,b2.container=c),this._useElement(b2)}},{key:"updateValue",value:function(a,b2,d){var c=this,e=this._values[a];if(!this._isLoaded&&this._batchUpdate.values.indexOf(e)===-1)return new Promise(function(b3){c._batchUpdate.values.push(function(){return c.updateValue(a).then(function(a2){return b3(a2)})})});if(e&&e.initialValue){var g=e.value,h=e.instances;if(h.length)return g.update(b2,d).then(function(a2){return Promise.all(h.map(function(b3){return b3.handler(a2,d)})).then(function(){return a2})})}return Promise.resolve()}},{key:"updateElement",value:function(a,b2){var c=this,f=this._elements[a];return this._isLoaded||this._batchUpdate.elements.indexOf(f)!==-1?f?f.element.update(b2):Promise.resolve():new Promise(function(b3){c._batchUpdate.elements.push(function(){return c.updateElement(a).then(function(a2){return b3(a2)})})})}},{key:"triggerEvent",value:function(a,b2){function c(){}var f=!1,e=!1;return b2&&typeof b2.cancel=="function"&&(f=!0,c=function(){e=!0,b2.cancel()}),Promise.all(this._api.integrations.registered.map(function(d){return d.events[a]&&(d=d.events[a]({cancellable:f,cancel:c,params:b2||{}}),d instanceof Promise)?d:Promise.resolve()})).then(function(){return e})}},{key:"_useValue",value:function(a){var b2=this,d=a.name,f=a.handler,e=a.initialValue;return a=this._createOrUpdateValue(d,e,a.params).value,a={name:a.name,id:a.id,handle:a.handle,handler:f,unload:function(){b2._values[d].instances=b2._values[d].instances.filter(function(a2){return a2.handler!==f}),b2._values[d].instances.length||delete b2._values[d]}},this._values[d].instances.push(a),e&&this.updateValue(d,e),a}},{key:"_useElement",value:function(a){var b2=this,d=a.name,f=a.params,e=this._createOrUpdateElement(d,a.container,f).element;return a={name:e.name,id:e.id,handle:e.handle,unload:function(){e.unload(),delete b2._elements[d]}},this.updateElement(d,f),a}},{key:"_createOrUpdateValue",value:function(a,b2){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},f=this._values[a];return this._values[a]?(f.initialValue=b2,f.params=w(f.params,c)):(f={value:new A(this._api,a),initialValue:b2,params:c,instances:[]},this._values[a]=f),f}},{key:"_createOrUpdateElement",value:function(a,b2){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},f=this._elements[a];return this._elements[a]?f.params=w(f.params,c):(f={element:new Element(this._api,a,b2),params:c},this._elements[a]=f),f}}]),b}(),C=new(function(){function b(){l(this,b),this._integrations=new v(this),this._theme=new B(this)}return n(b,[{key:"version",get:function(){return 0}},{key:"integrations",get:function(){return this._integrations}},{key:"theme",get:function(){return this._theme}}]),b}()),api_es=C;window.api=api_es}]);
//# sourceMappingURL=/cdn/shop/t/60/assets/api.js.map?v=46720568759306976631685501909