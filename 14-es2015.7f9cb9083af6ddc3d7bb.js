(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7fH7":function(n,e,t){"use strict";t.r(e);var a=t("c7TG"),o=t("ofXK"),l=t("3Pt+"),i=t("tyNb"),c=t("fXoL");function r(n,e){if(1&n&&(c.Zb(0,"ion-tab-button",2),c.Xb(1,"ion-icon",3),c.Zb(2,"ion-label"),c.vc(3),c.Yb(),c.Yb()),2&n){const n=e.$implicit;c.oc("tab",n.url),c.Mb(1),c.oc("name",n.icon),c.Mb(2),c.wc(n.label)}}const b=[{path:"tabs",component:(()=>{class n{constructor(){this.pages=[]}ngOnInit(){this.pages=[{icon:"paper",label:"News",url:"news"},{icon:"information-circle-outline",label:"Info",url:"info"},{icon:"time",label:"Agenda",url:"agenda"},{icon:"pin",label:"Venue",url:"venue"},{icon:"chatboxes",label:"Contact",url:"contact"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Qb({type:n,selectors:[["app-tabs"]],decls:3,vars:1,consts:[["slot","bottom"],[3,"tab",4,"ngFor","ngForOf"],[3,"tab"],[3,"name"]],template:function(n,e){1&n&&(c.Zb(0,"ion-tabs"),c.Zb(1,"ion-tab-bar",0),c.uc(2,r,4,3,"ion-tab-button",1),c.Yb(),c.Yb()),2&n&&(c.Mb(2),c.oc("ngForOf",e.pages))},directives:[a.s,a.q,o.h,a.r,a.k,a.n],styles:[""]}),n})(),children:[{path:"news",children:[{path:"",loadChildren:()=>Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"qUUn")).then(n=>n.NewsPageModule)}]},{path:"info",children:[{path:"",loadChildren:()=>Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"hico")).then(n=>n.InfoPageModule)}]},{path:"agenda",children:[{path:"",loadChildren:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"uB5f")).then(n=>n.AgendaPageModule)}]},{path:"venue",children:[{path:"",loadChildren:()=>Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"epEz")).then(n=>n.VenuePageModule)}]},{path:"contact",children:[{path:"",loadChildren:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"14/Y")).then(n=>n.ContactPageModule)}]},{path:"",redirectTo:"/tabs/news",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/news",pathMatch:"full"}];let s=(()=>{class n{}return n.\u0275mod=c.Ub({type:n}),n.\u0275inj=c.Tb({factory:function(e){return new(e||n)},imports:[[i.i.forChild(b)],i.i]}),n})();t.d(e,"TabsPageModule",(function(){return h}));let h=(()=>{class n{}return n.\u0275mod=c.Ub({type:n}),n.\u0275inj=c.Tb({factory:function(e){return new(e||n)},imports:[[a.v,o.b,l.a,s]]}),n})()}}]);