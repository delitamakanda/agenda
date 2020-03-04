function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function asyncGeneratorStep(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){asyncGeneratorStep(i,r,o,c,a,"next",e)}function a(e){asyncGeneratorStep(i,r,o,c,a,"throw",e)}c(void 0)}))}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"0BR9":function(e,n,t){"use strict";t.r(n),t.d(n,"ion_action_sheet_controller",(function(){return c})),t.d(n,"ion_alert_controller",(function(){return a})),t.d(n,"ion_anchor",(function(){return u})),t.d(n,"ion_loading_controller",(function(){return s})),t.d(n,"ion_modal_controller",(function(){return l})),t.d(n,"ion_picker_controller",(function(){return f})),t.d(n,"ion_popover_controller",(function(){return p})),t.d(n,"ion_toast_controller",(function(){return h}));var r=t("dSyh"),o=(t("AfW+"),t("pori")),i=t("Dl6n"),c=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-action-sheet",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-action-sheet",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-action-sheet"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}(),a=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-alert",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-alert",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-alert"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}(),u=function(){function e(n){var t=this;_classCallCheck(this,e),Object(r.l)(this,n),this.routerDirection="forward",this.onClick=function(e){Object(i.d)(t.href,e,t.routerDirection)}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn("[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.")}},{key:"render",value:function(){var e,n=Object(r.e)(this),t={href:this.href,rel:this.rel};return Object(r.i)(r.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(i.a)(this.color)),(e={},_defineProperty(e,n,!0),_defineProperty(e,"ion-activatable",!0),e))},Object(r.i)("a",Object.assign({},t),Object(r.i)("slot",null)))}}],[{key:"style",get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]),e}(),s=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-loading",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-loading",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-loading"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}(),l=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-modal",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-modal",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-modal"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}(),f=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-picker",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-picker",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-picker"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}(),p=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-popover",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-popover",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-popover"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}(),h=function(){function e(n){_classCallCheck(this,e),Object(r.l)(this,n)}var n;return _createClass(e,[{key:"create",value:function(e){return Object(o.i)("ion-toast",e)}},{key:"dismiss",value:function(e,n,t){return Object(o.k)(document,e,n,"ion-toast",t)}},{key:"getTop",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.l)(document,"ion-toast"));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}]),e}()}}]);