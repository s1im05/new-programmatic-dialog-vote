!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(3),r(6);var n=r(8);window.npDialog=function(e){return new n.DialogPopupClass(e)}},function(e,t,r){var n=r(4),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function s(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=r[c]||0,l="".concat(c," ").concat(u);r[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:b(f,t),references:1}),n.push(l)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,y=0;function b(e,t){var r,n,o;if(t.singleton){var i=y++;r=h||(h=u(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=s(r[n]);a[o].references--}for(var i=c(e,t),u=0;u<r.length;u++){var l=s(r[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n)()(!1);o.push([e.i,'@keyframes fadein{from{opacity:0}to{opacity:1}}.np-dialog{overflow:hidden;position:relative;user-select:none}.np-dialog>*:not(.np-dialog-overlay){filter:blur(5px);pointer-events:none}.np-dialog *{box-sizing:border-box}.np-dialog-overlay{font-size:20px;font-family:"Roboto", Arial, sans-serif;color:#fff;filter:none;position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.7);animation:fadein 500ms ease-in;display:flex}.np-dialog-dialog{background:rgba(0,0,0,0.5);padding:20px;margin:auto;width:100%;min-width:300px;max-width:700px;max-height:90vh;position:relative}.np-dialog-dialog-title{margin-top:60px}.np-dialog-dialog-subtitle{position:absolute;padding:5px 10px;background:#444;font-size:14px;border-radius:2px}.np-dialog-feedback{background:rgba(0,0,0,0.5);padding:20px;margin:auto}.np-dialog-items{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:stretch;cursor:pointer}@media (max-width: 480px){.np-dialog-items{flex-direction:column}}.np-dialog-item{font-size:16px;width:50%;padding:10px 10px;background:#555;border-radius:2px;margin-bottom:5px;border-right:5px solid rgba(0,0,0,0.5);text-overflow:ellipsis;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}@media (max-width: 480px){.np-dialog-item{width:100%}}.np-dialog-item-checkbox{display:inline-block;border-radius:10px;border:2px solid #999;width:20px;height:20px;margin-right:10px;flex-shrink:0}.np-dialog-item-checkbox-on{background:#fff;box-shadow:inset 0 0 0 2px #999}.np-dialog-red{color:#f00}.np-dialog-yandex{margin-top:100px;font-size:15px}.np-dialog-yandex a{color:#fff;text-decoration:none}\n',""]),t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(7)},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return h})),r.d(t,"Request",(function(){return x})),r.d(t,"Response",(function(){return _})),r.d(t,"DOMException",(function(){return E})),r.d(t,"fetch",(function(){return O}));var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,a="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),s="FormData"in n,c="ArrayBuffer"in n;if(c)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&u.indexOf(Object.prototype.toString.call(e))>-1};function d(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function f(e){return"string"!=typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:s&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c&&a&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=g(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=y(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var e,t,r,n=y(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=b(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=d(e),t=f(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[d(e)]},h.prototype.get=function(e){return e=d(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(d(e))},h.prototype.set=function(e,t){this.map[d(e)]=f(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},i&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(e,t){if(!(this instanceof x))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(t=t||{}).body;if(e instanceof x){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function T(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},v.call(x.prototype),v.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var A=[301,302,303,307,308];_.redirect=function(e,t){if(-1===A.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})};var E=n.DOMException;try{new E}catch(e){(E=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function O(e,t){return new Promise((function(r,o){var i=new x(e,t);if(i.signal&&i.signal.aborted)return o(new E("Aborted","AbortError"));var s=new XMLHttpRequest;function u(){s.abort()}s.onload=function(){var e,t,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;setTimeout((function(){r(new _(o,n))}),0)},s.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},s.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},s.onabort=function(){setTimeout((function(){o(new E("Aborted","AbortError"))}),0)},s.open(i.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&(a?s.responseType="blob":c&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(s.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof h?i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){s.setRequestHeader(e,f(t.headers[e]))})),i.signal&&(i.signal.addEventListener("abort",u),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",u)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}O.polyfill=!0,n.fetch||(n.fetch=O,n.Headers=h,n.Request=x,n.Response=_)},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.DialogPopupClass=void 0;var i=function(){function e(e){this.config=e}return e.prototype.show=function(){var e=document.querySelector("body");e.classList.add("np-dialog"),e.appendChild(this.createOverlay())},e.prototype.hide=function(){var e=document.querySelector("body");e.classList.remove("np-dialog"),e.removeChild(this.overlay)},e.prototype.createOverlay=function(){var e=this;try{this.overlay=document.createElement("div"),this.overlay.classList.add("np-dialog-overlay"),this.overlay.innerHTML=this.getDialogTemplate(this.config),this.overlay.querySelectorAll(".np-dialog-item").forEach((function(t,r){t.onclick=e.itemClickHandler.bind(e,e.config.items[r].id,r)}))}catch(e){console.error(e)}return this.overlay},e.prototype.getDialogTemplate=function(e){var t=e.items.map((function(e){return'<div class="np-dialog-item">\n        <span class="np-dialog-item-checkbox"></span><span class="np-dialog-item-name">'+e.name+"</span>\n    </div>"})).join("");return'\n      <div class="np-dialog-dialog">\n        <div class="np-dialog-dialog-subtitle">Реклама</div>\n        <p class="np-dialog-dialog-title">'+e.title+'<sup class="np-dialog-red">*</sup></p>\n        <div class="np-dialog-items">'+t+'</div>\n        <div class="np-dialog-yandex">\n          Опрос проводится на технологиях<br>\n          <a target="_blank" href="https://surveys.yandex.ru/"><span class="np-dialog-red">Я</span>ндекс.Взгляда</a>\n        </div>\n      </div>'},e.prototype.itemClickHandler=function(e,t){return n(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return this.clicked?[2]:(this.clicked=!0,this.overlay.querySelectorAll(".np-dialog-item-checkbox")[t].classList.add("np-dialog-item-checkbox-on"),fetch(this.config.url,{method:"POST",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"}}),[4,this.delay(500)]);case 1:return r.sent(),this.overlay.innerHTML='<div class="np-dialog-feedback">'+this.config.feedback+"</div>",[4,this.delay(1e3)];case 2:return r.sent(),this.hide(),[2]}}))}))},e.prototype.delay=function(e){return new Promise((function(t){window.setTimeout((function(){t()}),e)}))},e}();t.DialogPopupClass=i}]);