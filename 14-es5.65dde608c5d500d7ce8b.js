function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7fH7":function(n,t,e){"use strict";e.r(t);var o,a=e("c7TG"),c=e("ofXK"),i=e("3Pt+"),r=e("tyNb"),l=e("fXoL"),s=e("skkq"),u=((o=function(){function n(t){_classCallCheck(this,n),this.authService=t}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.authService.performLogout()}}]),n}()).\u0275fac=function(n){return new(n||o)(l.Wb(s.a))},o.\u0275cmp=l.Qb({type:o,selectors:[["app-sidebar"]],decls:24,vars:0,consts:[["auto-hide","false"],[1,"menu-header-bg"],[1,"header-content"],["src","./assets/images/loren-williams.jpeg","alt",""],[1,"action-button"],["slot","start","name","add"],["lines","none",1,"menu-items"],["name","pie","slot","start"],["routerDirection","root","lines","none","detail","false",3,"click"],["name","log-out","slot","start"]],template:function(n,t){1&n&&(l.bc(0,"div"),l.bc(1,"ion-menu-toggle",0),l.Xb(2,"div",1),l.bc(3,"div",2),l.bc(4,"ion-avatar"),l.Xb(5,"img",3),l.ac(),l.bc(6,"ion-label"),l.bc(7,"h2"),l.yc(8,"Loren Williams"),l.ac(),l.bc(9,"p"),l.yc(10,"Dreamer"),l.ac(),l.ac(),l.ac(),l.bc(11,"div",4),l.bc(12,"ion-button"),l.Xb(13,"ion-icon",5),l.yc(14," Add Event "),l.ac(),l.ac(),l.bc(15,"ion-list",6),l.bc(16,"ion-item"),l.Xb(17,"ion-icon",7),l.bc(18,"ion-label"),l.yc(19,"My Account"),l.ac(),l.ac(),l.bc(20,"ion-item",8),l.jc("click",(function(){return t.logout()})),l.Xb(21,"ion-icon",9),l.bc(22,"ion-label"),l.yc(23,"Se d\xe9connecter"),l.ac(),l.ac(),l.ac(),l.ac(),l.ac())},directives:[a.r,a.b,a.n,a.c,a.k,a.o,a.m],styles:[".menu-header-bg[_ngcontent-%COMP%]{height:180px;width:350px;background:#ff8c00;background:linear-gradient(90deg,#ffb253,#ff8c00);box-shadow:0 1px 10px rgba(255,161,98,.5);transform:rotate(-15deg);border-radius:10px 10px 10px 50px;margin-left:-18px;margin-top:-50px;margin-bottom:60px;position:relative}.header-content[_ngcontent-%COMP%]{position:absolute;top:30px;left:15px;display:flex;align-items:center}.header-content[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-right:14px}.header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#e5e5e5;letter-spacing:.4px}.action-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.action-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{text-transform:capitalize;--background:#ff8c00;--border-radius:7px;--box-shadow:none}.action-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:1px}.menu-items[_ngcontent-%COMP%]{margin:0}.menu-items[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:20px;color:#86979f}.menu-items[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding-left:20px;margin-bottom:10px}"]}),o);function b(n,t){if(1&n&&(l.bc(0,"ion-tab-button",5),l.Xb(1,"ion-icon",6),l.bc(2,"ion-label"),l.yc(3),l.ac(),l.ac()),2&n){var e=t.$implicit;l.rc("tab",e.url),l.Mb(1),l.rc("name",e.icon),l.Mb(2),l.zc(e.label)}}var p,d,f=[{path:"tabs",component:(p=function(){function n(){_classCallCheck(this,n),this.pages=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.pages=[{icon:"paper",label:"News",url:"news"},{icon:"time",label:"Agenda",url:"agenda"},{icon:"pin",label:"Venue",url:"venue"},{icon:"chatboxes",label:"Contact",url:"contact"}]}}]),n}(),p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=l.Qb({type:p,selectors:[["app-tabs"]],decls:8,vars:1,consts:[["disabled","true","contentId","content"],["contentId","content"],["id","content"],["slot","bottom"],[3,"tab",4,"ngFor","ngForOf"],[3,"tab"],[3,"name"]],template:function(n,t){1&n&&(l.bc(0,"ion-app"),l.bc(1,"ion-split-pane",0),l.bc(2,"ion-menu",1),l.bc(3,"ion-content"),l.Xb(4,"app-sidebar"),l.ac(),l.ac(),l.bc(5,"ion-tabs",2),l.bc(6,"ion-tab-bar",3),l.xc(7,b,4,3,"ion-tab-button",4),l.ac(),l.ac(),l.ac(),l.ac()),2&n&&(l.Mb(7),l.rc("ngForOf",t.pages))},directives:[a.a,a.v,a.p,a.i,u,a.y,a.w,c.i,a.x,a.k,a.n],styles:[""]}),p),children:[{path:"news",children:[{path:"",loadChildren:function(){return Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"qUUn")).then((function(n){return n.NewsPageModule}))}}]},{path:"agenda",children:[{path:"",loadChildren:function(){return Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"uB5f")).then((function(n){return n.AgendaPageModule}))}}]},{path:"venue",children:[{path:"",loadChildren:function(){return Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"epEz")).then((function(n){return n.VenuePageModule}))}}]},{path:"contact",children:[{path:"",loadChildren:function(){return Promise.all([e.e(0),e.e(16)]).then(e.bind(null,"14/Y")).then((function(n){return n.ContactPageModule}))}}]},{path:"",redirectTo:"/tabs/news",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/news",pathMatch:"full"}],g=((d=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ub({type:d}),d.\u0275inj=l.Tb({factory:function(n){return new(n||d)},imports:[[r.j.forChild(f)],r.j]}),d);e.d(t,"TabsPageModule",(function(){return m}));var h,m=((h=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ub({type:h}),h.\u0275inj=l.Tb({factory:function(n){return new(n||h)},imports:[[a.B,c.b,i.d,g]]}),h)}}]);