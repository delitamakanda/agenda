(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{uB5f:function(t,e,n){"use strict";n.r(e);var s=n("c7TG"),a=n("tyNb"),o=n("ofXK"),i=n("3Pt+"),r=n("Cfvw"),c=n("LRne"),l=n("cp0P"),u=n("eIep"),h=n("nYR2"),f=n("fXoL"),d=n("e8h1"),b=n("tk/3");let p=(()=>{class t{constructor(t,e,n){this.storage=t,this.http=e,this.toastController=n}checkForEvents(){return Object(r.a)(this.storage.get("fanfiction-app")).pipe(Object(u.a)(t=>{let e=JSON.parse(t);return e&&e.length>0?this.sendRequests(e).pipe(Object(h.a)(()=>{this.toastController.create({message:"Local data succesfully synced to API!",duration:3e3,position:"bottom"}).then(t=>t.present()),this.storage.remove("fanfiction-app")})):(console.log("no local events to sync"),Object(c.a)(!1))}))}storeRequest(t,e,n){this.toastController.create({message:"Your data is stored locally because you seem to be offline.",duration:3e3,position:"bottom"}).then(t=>t.present());let s={url:t,type:e,data:n,time:(new Date).getTime(),id:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5)};return this.storage.get("fanfiction-app").then(t=>{let e=JSON.parse(t);return e?e.push(s):e=[s],this.storage.set("fanfiction-app",JSON.stringify(e))})}sendRequests(t){let e=[];for(let n of t){console.log("Make one request: ",n);let t=this.http.request(n.type,n.url,n.data);e.push(t)}return Object(l.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(f.fc(d.b),f.fc(b.b),f.fc(s.J))},t.\u0275prov=f.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("mrSG"),v=n("kwrG"),O=n("2Vo4"),w=function(t){return t[t.Online=0]="Online",t[t.Offline=1]="Offline",t}({});let m=(()=>{class t{constructor(t,e,n){this.network=t,this.toastController=e,this.plt=n,this.status=new O.a(w.Offline),this.plt.ready().then(()=>{this.initializeNetworkEvents(),this.status.next("none"!==this.network.type?w.Online:w.Offline)})}initializeNetworkEvents(){this.network.onDisconnect().subscribe(()=>{this.status.getValue()===w.Online&&(console.log("WE ARE OFFLINE"),this.updateNetworkStatus(w.Offline))}),this.network.onConnect().subscribe(()=>{this.status.getValue()===w.Offline&&(console.log("WE ARE ONLINE"),this.updateNetworkStatus(w.Online))})}updateNetworkStatus(t){return Object(g.b)(this,void 0,void 0,(function*(){this.status.next(t),this.toastController.create({message:`You are now ${t==w.Offline?"Offline":"Online"}`,duration:3e3,position:"bottom"}).then(t=>t.present())}))}onNetworkChange(){return this.status.asObservable()}getCurrentNetworkStatus(){return this.status.getValue()}}return t.\u0275fac=function(e){return new(e||t)(f.fc(v.a),f.fc(s.J),f.fc(s.F))},t.\u0275prov=f.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=n("lJxs"),k=n("vkgz"),D=n("JIr8"),E=n("YAbo");let N=(()=>{class t{constructor(t,e,n,s){this.http=t,this.networkService=e,this.storage=n,this.offlineManager=s}getEvents(t=!1){return this.networkService.getCurrentNetworkStatus()!=w.Offline&&t?this.http.get(`${E.b}/events/events`).pipe(Object(y.a)(t=>t),Object(k.a)(t=>{this.log("fetched events"),this.setLocalData("events",t)}),Object(D.a)(this.handleError("getEvents",[]))):Object(r.a)(this.getLocalData("categories"))}handleError(t="operation",e){return n=>(console.error(n),this.log(`${t} failed: ${n.message}`),Object(c.a)(e))}log(t){console.log(t)}setLocalData(t,e){this.storage.set(`${E.a}-${t}`,e)}getLocalData(t){return this.storage.get(`${E.a}-${t}`)}}return t.\u0275fac=function(e){return new(e||t)(f.fc(b.b),f.fc(m),f.fc(d.b),f.fc(p))},t.\u0275prov=f.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=n("o5fY");function j(t,e){if(1&t&&(f.bc(0,"div"),f.bc(1,"div"),f.bc(2,"ion-label"),f.yc(3),f.mc(4,"date"),f.ac(),f.bc(5,"ion-label"),f.yc(6),f.mc(7,"date"),f.ac(),f.ac(),f.ac()),2&t){const t=e.$implicit;f.Mb(3),f.zc(f.oc(4,2,t,"d","fr")),f.Mb(3),f.zc(f.oc(7,6,t,"EEEE","fr"))}}function C(t,e){1&t&&(f.bc(0,"ion-item"),f.bc(1,"ion-avatar",4),f.Xb(2,"img",5),f.ac(),f.bc(3,"ion-label"),f.bc(4,"h3"),f.yc(5,"On the politics of experience"),f.ac(),f.bc(6,"p"),f.yc(7,"Loren Williams"),f.ac(),f.bc(8,"p"),f.Xb(9,"ion-icon",6),f.yc(10," 45 min"),f.ac(),f.ac(),f.ac())}const M=function(){return[1,2]};function F(t,e){1&t&&(f.bc(0,"ion-card"),f.bc(1,"ion-item",3),f.bc(2,"ion-label"),f.bc(3,"h5"),f.yc(4,"10:00 AM"),f.ac(),f.ac(),f.ac(),f.xc(5,C,11,0,"ion-item",1),f.ac()),2&t&&(f.Mb(5),f.rc("ngForOf",f.sc(1,M)))}const L=function(){return[1,2,3,4]};let z=(()=>{class t{constructor(t,e,n){this.eventDataService=t,this.datePipe=e,this.router=n,this.dateBeginActive=(new Date).getDay(),this.countWeek=1,this.countselect=0}ngOnInit(){this.initializeDates()}initializeDates(){this.dateBegin=this.getPreviousMonday(),this.dateEnd=new Date(this.dateBegin),this.dateEnd.setDate(this.dateEnd.getDate()+6),this.dates=[];const t=this.dateBegin,e=this.dateEnd;for(e.setDate(e.getDate()+60);t<=e;)this.dates.push(new Date(t)),t.setDate(t.getDate()+1)}getPreviousMonday(){const t=new Date;return t.setDate(t.getDate()-(t.getDay()+6)%7),t}}return t.\u0275fac=function(e){return new(e||t)(f.Wb(N),f.Wb(o.d),f.Wb(a.g))},t.\u0275cmp=f.Qb({type:t,selectors:[["app-agenda"]],decls:8,vars:4,consts:[[1,"header"],[4,"ngFor","ngForOf"],[1,"events"],["lines","none"],["slot","start"],["src","./assets/images/loren-williams.jpeg"],["name","time","size","small"]],template:function(t,e){1&t&&(f.bc(0,"app-custom-header"),f.yc(1,"AGENDA"),f.ac(),f.bc(2,"ion-content"),f.bc(3,"div",0),f.bc(4,"nav"),f.xc(5,j,8,10,"div",1),f.ac(),f.ac(),f.bc(6,"div",2),f.xc(7,F,6,2,"ion-card",1),f.ac(),f.ac()),2&t&&(f.Mb(5),f.rc("ngForOf",e.dates),f.Mb(2),f.rc("ngFor",e.card)("ngForOf",f.sc(3,L)))},directives:[S.a,s.i,o.i,s.n,s.e,s.m,s.b,s.k],pipes:[o.d],styles:[""]}),t})();var A=n("PCNd");n.d(e,"AgendaPageModule",(function(){return I}));let I=(()=>{class t{}return t.\u0275mod=f.Ub({type:t}),t.\u0275inj=f.Tb({factory:function(e){return new(e||t)},providers:[o.d],imports:[[s.B,o.b,i.d,a.j.forChild([{path:"",component:z}]),A.a]]}),t})()}}]);