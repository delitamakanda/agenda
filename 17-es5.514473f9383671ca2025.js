!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{hO9l:function(t,o,i){"use strict";i.r(o),i.d(o,"TabsPageModule",function(){return P});var a,r=i("TEn/"),c=i("ofXK"),b=i("3Pt+"),l=i("tyNb"),u=i("fXoL"),s=i("skkq"),p=function(){return["/"]},d=function(){return["/contact"]},f=((a=function(){function t(e){n(this,t),this.authService=e}return e(t,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.authService.performLogout()}}]),t}()).\u0275fac=function(n){return new(n||a)(u.Ib(s.a))},a.\u0275cmp=u.Cb({type:a,selectors:[["app-sidebar"]],decls:28,vars:4,consts:[["auto-hide","false"],[1,"menu-header-bg"],[1,"header-content"],["src","./assets/images/loren-williams.jpeg","alt",""],[1,"action-button"],["slot","start","name","add"],["lines","none",1,"menu-items"],["routerLinkActive","router-link-active",3,"routerLink"],["name","pie-chart-outline","slot","start"],["name","person-outline","slot","start"],["routerDirection","root","lines","none","detail","false",3,"click"],["name","log-out-outline","slot","start"]],template:function(n,t){1&n&&(u.Nb(0,"div"),u.Nb(1,"ion-menu-toggle",0),u.Jb(2,"div",1),u.Nb(3,"div",2),u.Nb(4,"ion-avatar"),u.Jb(5,"img",3),u.Mb(),u.Nb(6,"ion-label"),u.Nb(7,"h2"),u.kc(8,"Loren Williams"),u.Mb(),u.Nb(9,"p"),u.kc(10,"Dreamer"),u.Mb(),u.Mb(),u.Mb(),u.Nb(11,"div",4),u.Nb(12,"ion-button"),u.Jb(13,"ion-icon",5),u.kc(14," Add Event "),u.Mb(),u.Mb(),u.Nb(15,"ion-list",6),u.Nb(16,"ion-item",7),u.Jb(17,"ion-icon",8),u.Nb(18,"ion-label"),u.kc(19,"My Account"),u.Mb(),u.Mb(),u.Nb(20,"ion-item",7),u.Jb(21,"ion-icon",9),u.Nb(22,"ion-label"),u.kc(23,"Contact"),u.Mb(),u.Mb(),u.Nb(24,"ion-item",10),u.Vb("click",function(){return t.logout()}),u.Jb(25,"ion-icon",11),u.Nb(26,"ion-label"),u.kc(27,"Se d\xe9connecter"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb()),2&n&&(u.yb(16),u.dc("routerLink",u.ec(2,p)),u.yb(4),u.dc("routerLink",u.ec(3,d)))},directives:[r.t,r.b,r.p,r.e,r.m,r.q,r.o,l.i,r.J,l.h],styles:[".menu-header-bg[_ngcontent-%COMP%]{height:180px;width:350px;background:#ff8c00;background:linear-gradient(90deg,#ffb253,#ff8c00);box-shadow:0 1px 10px rgba(255,161,98,.5);transform:rotate(-15deg);border-radius:10px 10px 10px 50px;margin-left:-18px;margin-top:-50px;margin-bottom:60px;position:relative}.header-content[_ngcontent-%COMP%]{position:absolute;top:30px;left:15px;display:flex;align-items:center}.header-content[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-right:14px}.header-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#e5e5e5;letter-spacing:.4px}.action-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.action-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{text-transform:capitalize;--background:#ff8c00;--border-radius:7px;--box-shadow:none}.action-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:1px}.menu-items[_ngcontent-%COMP%]{margin:0}.menu-items[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:20px;color:#86979f}.menu-items[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding-left:20px;margin-bottom:10px}"]}),a);function g(n,t){if(1&n&&(u.Nb(0,"ion-tab-button",5),u.Jb(1,"ion-icon",6),u.Nb(2,"ion-label"),u.kc(3),u.Mb(),u.Mb()),2&n){var e=t.$implicit;u.dc("tab",e.url),u.yb(1),u.dc("name",e.icon),u.yb(2),u.lc(e.label)}}var m,h,M,k=[{path:"tabs",component:(m=function(){function t(){n(this,t),this.pages=[]}return e(t,[{key:"ngOnInit",value:function(){this.pages=[{icon:"newspaper-outline",label:"News",url:"tab1"},{icon:"calendar-outline",label:"Agenda",url:"tab2"},{icon:"location-outline",label:"Venue",url:"tab3"}]}}]),t}(),m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=u.Cb({type:m,selectors:[["app-tabs"]],decls:7,vars:1,consts:[["disabled","true","contentId","content"],["contentId","content"],["id","content"],["slot","bottom"],[3,"tab",4,"ngFor","ngForOf"],[3,"tab"],[3,"name"]],template:function(n,t){1&n&&(u.Nb(0,"ion-split-pane",0),u.Nb(1,"ion-menu",1),u.Nb(2,"ion-content"),u.Jb(3,"app-sidebar"),u.Mb(),u.Mb(),u.Nb(4,"ion-tabs",2),u.Nb(5,"ion-tab-bar",3),u.jc(6,g,4,3,"ion-tab-button",4),u.Mb(),u.Mb(),u.Mb()),2&n&&(u.yb(6),u.dc("ngForOf",t.pages))},directives:[r.x,r.r,r.k,f,r.A,r.y,c.i,r.z,r.m,r.p],styles:[""]}),m),children:[{path:"tab1",loadChildren:function(){return Promise.all([i.e(0),i.e(14)]).then(i.bind(null,"tmrb")).then(function(n){return n.Tab1PageModule})}},{path:"tab2",loadChildren:function(){return Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"TUkU")).then(function(n){return n.Tab2PageModule})}},{path:"tab3",loadChildren:function(){return Promise.all([i.e(0),i.e(16)]).then(i.bind(null,"k+ul")).then(function(n){return n.Tab3PageModule})}},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}],x=((M=function t(){n(this,t)}).\u0275mod=u.Gb({type:M}),M.\u0275inj=u.Fb({factory:function(n){return new(n||M)},imports:[[l.k.forChild(k)],l.k]}),M),P=((h=function t(){n(this,t)}).\u0275mod=u.Gb({type:h}),h.\u0275inj=u.Fb({factory:function(n){return new(n||h)},imports:[[r.D,c.b,b.d,x]]}),h)}}])}();