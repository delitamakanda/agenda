(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{UUSl:function(i,n,e){"use strict";e.r(n);var t=e("ofXK"),o=e("3Pt+"),r=e("c7TG"),s=e("tyNb"),b=e("skkq"),a=e("fXoL"),u=e("sYmb");const p=[{path:"",component:(()=>{class i{constructor(i,n){this.authService=i,this.fb=n}ngOnInit(){this.signupForm=this.fb.group({username:["",[o.i.required,o.i.minLength(2),o.i.maxLength(150)]],email:["",[o.i.required,o.i.email]],password:["",[o.i.required]],password2:["",[o.i.required]]})}ngOnDestroy(){this.authSignupSub&&this.authSignupSub.unsubscribe()}onSubmit(){const i={username:this.signupForm.get("username").value,email:this.signupForm.get("email").value,password:this.signupForm.get("password").value,password2:this.signupForm.get("password2").value};this.authSignupSub=this.authService.register(i).subscribe(i=>{const n=i.token||null,e=new Date(i.expires);this.authService.performLogin(n,e)},i=>{this.signupErrors=i.error.detail})}}return i.\u0275fac=function(n){return new(n||i)(a.Wb(b.a),a.Wb(o.a))},i.\u0275cmp=a.Qb({type:i,selectors:[["app-signup"]],decls:28,vars:5,consts:[[1,"flex-form"],[1,"logo","ion-text-center"],["name","chatboxes","size","large"],[1,"stretch"],[3,"formGroup","ngSubmit"],["type","text","formControlName","username"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","password2"],["type","submit","fill","solid","color","primary","expand","full",3,"disabled"],["routerLink","/signin"]],template:function(i,n){1&i&&(a.Zb(0,"ion-content"),a.Zb(1,"div",0),a.Zb(2,"div",1),a.Xb(3,"ion-icon",2),a.Yb(),a.Xb(4,"div",3),a.Zb(5,"form",4),a.hc("ngSubmit",(function(i){return n.onSubmit()})),a.Zb(6,"ion-list"),a.Zb(7,"ion-item"),a.Zb(8,"ion-label"),a.wc(9,"Username"),a.Yb(),a.Xb(10,"ion-input",5),a.Yb(),a.Zb(11,"ion-item"),a.Zb(12,"ion-label"),a.wc(13,"E-mail"),a.Yb(),a.Xb(14,"ion-input",6),a.Yb(),a.Zb(15,"ion-item"),a.Zb(16,"ion-label"),a.wc(17,"Password"),a.Yb(),a.Xb(18,"ion-input",7),a.Yb(),a.Zb(19,"ion-item"),a.Zb(20,"ion-label"),a.wc(21,"Confirm Password"),a.Yb(),a.Xb(22,"ion-input",8),a.Yb(),a.Zb(23,"ion-button",9),a.wc(24," SIGNUP "),a.Yb(),a.Yb(),a.Yb(),a.Zb(25,"a",10),a.wc(26),a.kc(27,"translate"),a.Yb(),a.Yb(),a.Yb()),2&i&&(a.Mb(5),a.pc("formGroup",n.signupForm),a.Mb(18),a.pc("disabled",n.signupForm.invalid),a.Mb(3),a.xc(a.lc(27,3,"signup.linkSigninPage")))},directives:[r.i,r.k,o.j,o.g,o.c,r.o,r.m,r.n,r.l,r.E,o.f,o.b,r.c,s.i,r.D],pipes:[u.c],styles:["ion-content[_ngcontent-%COMP%]{--background:#ff8c00}"]}),i})()}];let c=(()=>{class i{}return i.\u0275mod=a.Ub({type:i}),i.\u0275inj=a.Tb({factory:function(n){return new(n||i)},imports:[[s.j.forChild(p)],s.j]}),i})();e.d(n,"SignupPageModule",(function(){return l}));let l=(()=>{class i{}return i.\u0275mod=a.Ub({type:i}),i.\u0275inj=a.Tb({factory:function(n){return new(n||i)},imports:[[t.b,o.d,r.z,c,u.b,o.h]]}),i})()}}]);