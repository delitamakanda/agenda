(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{uB5f:function(t,e,n){"use strict";n.r(e);var i=n("c7TG"),o=n("tyNb"),a=n("ofXK"),s=n("3Pt+"),c=n("fXoL");function b(t,e){if(1&t&&(c.Zb(0,"div"),c.Zb(1,"div"),c.Zb(2,"ion-label"),c.wc(3),c.kc(4,"date"),c.Yb(),c.Zb(5,"ion-label"),c.wc(6),c.kc(7,"date"),c.Yb(),c.Yb(),c.Yb()),2&t){const t=e.$implicit;c.Mb(3),c.xc(c.mc(4,2,t,"d","fr")),c.Mb(3),c.xc(c.mc(7,6,t,"EEEE","fr"))}}function r(t,e){1&t&&(c.Zb(0,"ion-item"),c.Zb(1,"ion-avatar",4),c.Xb(2,"img",5),c.Yb(),c.Zb(3,"ion-label"),c.Zb(4,"h3"),c.wc(5,"On the politics of experience"),c.Yb(),c.Zb(6,"p"),c.wc(7,"Loren Williams"),c.Yb(),c.Zb(8,"p"),c.Xb(9,"ion-icon",6),c.wc(10," 45 min"),c.Yb(),c.Yb(),c.Yb())}const d=function(){return[1,2]};function l(t,e){1&t&&(c.Zb(0,"ion-card"),c.Zb(1,"ion-item",3),c.Zb(2,"ion-label"),c.Zb(3,"h5"),c.wc(4,"10:00 AM"),c.Yb(),c.Yb(),c.Yb(),c.vc(5,r,11,0,"ion-item",1),c.Yb()),2&t&&(c.Mb(5),c.pc("ngForOf",c.qc(1,d)))}const u=function(){return[1,2,3,4]};let p=(()=>{class t{constructor(t,e){this.datePipe=t,this.router=e,this.dateBeginActive=(new Date).getDay(),this.countWeek=1,this.countselect=0}ngOnInit(){this.initializeDates()}initializeDates(){this.dateBegin=this.getPreviousMonday(),this.dateEnd=new Date(this.dateBegin),this.dateEnd.setDate(this.dateEnd.getDate()+6),this.dates=[];const t=this.dateBegin,e=this.dateEnd;for(e.setDate(e.getDate()+60);t<=e;)this.dates.push(new Date(t)),t.setDate(t.getDate()+1)}getPreviousMonday(){const t=new Date;return t.setDate(t.getDate()-(t.getDay()+6)%7),t}}return t.\u0275fac=function(e){return new(e||t)(c.Wb(a.d),c.Wb(o.g))},t.\u0275cmp=c.Qb({type:t,selectors:[["app-agenda"]],decls:10,vars:4,consts:[[1,"header"],[4,"ngFor","ngForOf"],[1,"events"],["lines","none"],["slot","start"],["src","./assets/images/loren-williams.jpeg"],["name","time","size","small"]],template:function(t,e){1&t&&(c.Zb(0,"ion-header"),c.Zb(1,"ion-toolbar"),c.Zb(2,"ion-title"),c.wc(3," AGENDA "),c.Yb(),c.Yb(),c.Yb(),c.Zb(4,"ion-content"),c.Zb(5,"div",0),c.Zb(6,"nav"),c.vc(7,b,8,10,"div",1),c.Yb(),c.Yb(),c.Zb(8,"div",2),c.vc(9,l,6,2,"ion-card",1),c.Yb(),c.Yb()),2&t&&(c.Mb(7),c.pc("ngForOf",e.dates),c.Mb(2),c.pc("ngFor",e.card)("ngForOf",c.qc(3,u)))},directives:[i.j,i.u,i.t,i.i,a.i,i.n,i.e,i.m,i.b,i.k],pipes:[a.d],styles:[""]}),t})();n.d(e,"AgendaPageModule",(function(){return g}));let g=(()=>{class t{}return t.\u0275mod=c.Ub({type:t}),t.\u0275inj=c.Tb({factory:function(e){return new(e||t)},providers:[a.d],imports:[[i.v,a.b,s.d,o.i.forChild([{path:"",component:p}])]]}),t})()}}]);