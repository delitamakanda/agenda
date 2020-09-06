function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7fH7":function(n,e,t){"use strict";t.r(e);var o,i=t("c7TG"),a=t("ofXK"),r=t("3Pt+"),l=t("tyNb"),c=t("fXoL"),u=t("skkq"),s=((o=function(){function n(e){_classCallCheck(this,n),this.authService=e}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.authService.performLogout()}}]),n}()).\u0275fac=function(n){return new(n||o)(c.Wb(u.a))},o.\u0275cmp=c.Qb({type:o,selectors:[["app-sidebar"]],decls:6,vars:0,consts:[["auto-hide","false"],["routerDirection","root","lines","none","detail","false",3,"click"],["name","log-out","slot","start","color","primary"]],template:function(n,e){1&n&&(c.Zb(0,"div"),c.Zb(1,"ion-menu-toggle",0),c.Zb(2,"ion-item",1),c.hc("click",(function(){return e.logout()})),c.Xb(3,"ion-icon",2),c.Zb(4,"ion-label"),c.wc(5,"Se d\xe9connecter"),c.Yb(),c.Yb(),c.Yb(),c.Yb())},directives:[i.r,i.m,i.k,i.n],styles:[""]}),o);function b(n,e){if(1&n&&(c.Zb(0,"ion-tab-button",5),c.Xb(1,"ion-icon",6),c.Zb(2,"ion-label"),c.wc(3),c.Yb(),c.Yb()),2&n){var t=e.$implicit;c.pc("tab",t.url),c.Mb(1),c.pc("name",t.icon),c.Mb(2),c.xc(t.label)}}var f,p,h=[{path:"tabs",component:(f=function(){function n(){_classCallCheck(this,n),this.pages=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.pages=[{icon:"paper",label:"News",url:"news"},{icon:"information-circle-outline",label:"Info",url:"info"},{icon:"time",label:"Agenda",url:"agenda"},{icon:"pin",label:"Venue",url:"venue"},{icon:"chatboxes",label:"Contact",url:"contact"}]}}]),n}(),f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=c.Qb({type:f,selectors:[["app-tabs"]],decls:7,vars:1,consts:[["disabled","true","contentId","content"],["contentId","content"],["id","content"],["slot","bottom"],[3,"tab",4,"ngFor","ngForOf"],[3,"tab"],[3,"name"]],template:function(n,e){1&n&&(c.Zb(0,"ion-app"),c.Zb(1,"ion-split-pane",0),c.Zb(2,"ion-menu",1),c.Xb(3,"app-sidebar"),c.Yb(),c.Zb(4,"ion-tabs",2),c.Zb(5,"ion-tab-bar",3),c.vc(6,b,4,3,"ion-tab-button",4),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&n&&(c.Mb(6),c.pc("ngForOf",e.pages))},directives:[i.a,i.v,i.p,s,i.y,i.w,a.i,i.x,i.k,i.n],styles:[""]}),f),children:[{path:"news",children:[{path:"",loadChildren:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"qUUn")).then((function(n){return n.NewsPageModule}))}}]},{path:"info",children:[{path:"",loadChildren:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"hico")).then((function(n){return n.InfoPageModule}))}}]},{path:"agenda",children:[{path:"",loadChildren:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"uB5f")).then((function(n){return n.AgendaPageModule}))}}]},{path:"venue",children:[{path:"",loadChildren:function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"epEz")).then((function(n){return n.VenuePageModule}))}}]},{path:"contact",children:[{path:"",loadChildren:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"14/Y")).then((function(n){return n.ContactPageModule}))}}]},{path:"",redirectTo:"/tabs/news",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/news",pathMatch:"full"}],d=((p=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ub({type:p}),p.\u0275inj=c.Tb({factory:function(n){return new(n||p)},imports:[[l.j.forChild(h)],l.j]}),p);t.d(e,"TabsPageModule",(function(){return g}));var m,g=((m=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ub({type:m}),m.\u0275inj=c.Tb({factory:function(n){return new(n||m)},imports:[[i.B,a.b,r.d,d]]}),m)}}]);