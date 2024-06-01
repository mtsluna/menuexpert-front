"use strict";(self.webpackChunkmenuexpert_front=self.webpackChunkmenuexpert_front||[]).push([[33],{3033:(Ct,v,c)=>{c.r(v),c.d(v,{CatalogModule:()=>ht});var r=c(6895),b=c(9751),y=c(8421);const{isArray:Z}=Array;var O=c(515),w=c(5403),M=c(3269);var t=c(4650),g=c(6962),C=c(9314),P=c(9806),I=c(4004),U=c(529);let S=(()=>{class n{constructor(e){this.httpClient=e}getCatalog(e){return this.httpClient.get(`${P.Z.baseUrl}/catalogs/${e}`).pipe((0,I.U)(o=>{const i=o.products?.map(d=>d.category),s=new Set,l=i.filter((d,_)=>!s.has(d.id)&&(s.add(d.id),!0),new Set);return l.forEach(d=>{d.products=o.products?.filter(_=>_.category?.id===d.id)?.filter(_=>_.isVisible)?.filter(_=>_.isActive)}),{...o,categories:l.filter(d=>d.products.length>0).sort((d,_)=>d.order-_.order)}}))}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(U.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var N=c(230),u=c(5412),m=c(7392),x=c(4859),k=c(6188);function J(n,a){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"date"),t.ALo(3,"date"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.AsE("",t.xi3(2,2,e.openAt,"HH:mm")," a ",t.xi3(3,5,e.closeAt,"HH:mm"),"")}}function F(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Cerrado"),t.qZA())}function q(n,a){if(1&n&&(t.TgZ(0,"div",11)(1,"div"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,J,4,8,"div",12),t.YNc(5,F,2,0,"div",12),t.qZA()),2&n){const e=a.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,3,"schedule.days."+e.day)),t.xp6(2),t.Q6J("ngIf",!e.closedAllDay),t.xp6(1),t.Q6J("ngIf",e.closedAllDay)}}let Q=(()=>{class n{constructor(e){this.data=e,this.store=e}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(u.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-information"]],decls:17,vars:5,consts:[[1,"information"],[1,"information__header"],["mat-mini-fab","","color","accent",1,"information__header__close",3,"mat-dialog-close"],[1,"information__header__button__icon"],[1,"information__header__title"],[1,"information__schedule"],[1,"information__schedule__icon"],[1,"information__schedule__items"],[1,"information__schedule__items__title"],[1,"information__schedule__items__content"],["class","information__schedule__items__content__item",4,"ngFor","ngForOf"],[1,"information__schedule__items__content__item"],[4,"ngIf"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2)(3,"mat-icon",3),t._uU(4,"close"),t.qZA()(),t.TgZ(5,"div",4),t._uU(6,"Informaci\xf3n"),t.qZA()(),t.TgZ(7,"div",5)(8,"div",6)(9,"mat-icon"),t._uU(10,"schedule"),t.qZA()(),t.TgZ(11,"div",7)(12,"div",8),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"div",9),t.YNc(16,q,6,5,"div",10),t.qZA()()()()),2&o&&(t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(11),t.hij(" ",t.lcZ(14,3,"schedule.title")," "),t.xp6(3),t.Q6J("ngForOf",i.store.schedule))},dependencies:[r.sg,r.O5,m.Hw,x.nh,u.ZT,r.uU,k.X$],styles:[".information[_ngcontent-%COMP%]{z-index:999999}.information__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem}.information__header__button__icon[_ngcontent-%COMP%]{transform:scale(.8)}.information__header__title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.information__schedule[_ngcontent-%COMP%]{display:flex;flex-direction:row}.information__schedule__icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:1.5rem;padding-left:1rem;padding-right:1rem}.information__schedule__items[_ngcontent-%COMP%]{padding-right:1rem;width:100%;display:flex;flex-direction:column;gap:.5rem}.information__schedule__items__title[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:1.5rem;font-weight:600;font-size:16px}.information__schedule__items__content__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;gap:1rem}"]})}return n})();function Y(n,a){if(1&n&&t._UZ(0,"img",9),2&n){const e=t.oxw();t.s9C("src",e.store.image,t.LSH),t.MGl("alt","Banner of ",e.store.name,"")}}function j(n,a){if(1&n&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.s9C("src",e.store.logo,t.LSH),t.MGl("alt","Logo of ",e.store.name,"")}}let B=(()=>{class n{constructor(e){this.dialog=e}openInformation(){this.dialog.open(Q,{maxWidth:"100vw",maxHeight:"100vh",height:"100%",width:"100%",panelClass:"full-screen-modal",data:this.store}).afterClosed().subscribe()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(u.uw))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-brand"]],inputs:{store:"store"},decls:12,vars:5,consts:[[1,"brand"],[1,"brand__banner"],["class","brand__banner__image",3,"src","alt",4,"ngIf"],["mat-mini-fab","","color","accent",1,"brand__banner__information",3,"click"],[1,"navigator__button__icon"],["class","brand__logo",4,"ngIf"],[1,"brand__header",3,"ngClass"],[1,"brand__header__title"],[1,"brand__header__subtitle"],[1,"brand__banner__image",3,"src","alt"],[1,"brand__logo"],[1,"brand__logo__image",3,"src","alt"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,Y,1,2,"img",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return i.openInformation()}),t.TgZ(4,"mat-icon",4),t._uU(5,"info_outline"),t.qZA()()(),t.YNc(6,j,2,2,"div",5),t.TgZ(7,"div",6)(8,"div",7),t._uU(9),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("ngIf",i.store.image),t.xp6(4),t.Q6J("ngIf",i.store.logo),t.xp6(1),t.Q6J("ngClass",i.store.logo?"brand__header__extra-padding":"brand__header"),t.xp6(2),t.Oqu(i.store.name),t.xp6(2),t.Oqu(i.store.description))},dependencies:[r.mk,r.O5,m.Hw,x.nh],styles:[".brand[_ngcontent-%COMP%]{position:relative;background:#FFFFFF}.brand__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:1rem}.brand__header__extra-padding[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:4.25rem 1rem 1rem}.brand__header__title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.brand__header__subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:#989292}.brand__banner[_ngcontent-%COMP%]{background-color:#f6f6f6;width:100%;height:175px}.brand__banner__image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.brand__banner__information[_ngcontent-%COMP%]{position:absolute;right:1rem;top:1rem}.brand__logo[_ngcontent-%COMP%]{border-radius:100%;position:absolute;background-color:#fff;top:7.68rem;left:1rem;width:104px;height:104px}.brand__logo__image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}"]})}return n})();var p=c(5861),z=c(6901),f=c(1561);function L(n,a){1&n&&(t.ynx(0),t.TgZ(1,"mat-icon",8),t._uU(2,"person"),t.qZA(),t.BQk())}function H(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",9),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.s9C("src",e.image,t.LSH)}}function V(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.login())}),t.TgZ(1,"mat-icon"),t._uU(2,"login"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Login"),t.qZA()()}}function R(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.login())}),t.TgZ(1,"mat-icon"),t._uU(2,"sync"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Cambiar de usuario"),t.qZA()()}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.logout())}),t.TgZ(1,"mat-icon"),t._uU(2,"logout"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Logout"),t.qZA()()}}let X=(()=>{class n{constructor(e){this.authService=e,this.loading=!0}ngOnInit(){var e=this;return(0,p.Z)(function*(){e.setAuthUserData()})()}login(){var e=this;return(0,p.Z)(function*(){const o=yield e.authService.login();console.log(o),e.image=o.additionalUserInfo?.profile.picture})()}logout(){this.authService.logout()}setAuthUserData(){this.authService.getSession().subscribe(e=>{this.loading=!1,this.image=e?.photoURL||void 0,this.user=e})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(z.e))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],decls:11,vars:6,consts:[[1,"navbar"],["alt","menu expert icon","src","assets/images/logo.svg",1,"navbar__logo"],[1,"navbar__actions",3,"matMenuTriggerFor"],[1,"navbar__login"],[4,"ngIf"],[1,"menu-custom"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngIf"],[1,"navigator__button__icon"],[1,"navbar__login__icon",3,"src"],["mat-menu-item","",3,"click"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"button",3),t.YNc(4,L,3,0,"ng-container",4),t.YNc(5,H,2,1,"ng-container",4),t.qZA()(),t.TgZ(6,"mat-menu",5,6),t.YNc(8,V,5,0,"button",7),t.YNc(9,R,5,0,"button",7),t.YNc(10,E,5,0,"button",7),t.qZA()()),2&o){const s=t.MAs(7);t.xp6(2),t.Q6J("matMenuTriggerFor",s),t.xp6(2),t.Q6J("ngIf",!i.image&&!i.loading),t.xp6(1),t.Q6J("ngIf",i.image&&!i.loading),t.xp6(3),t.Q6J("ngIf",!i.user),t.xp6(1),t.Q6J("ngIf",i.user),t.xp6(1),t.Q6J("ngIf",i.user)}},dependencies:[r.O5,m.Hw,f.VK,f.OP,f.p6],styles:[".mat-mdc-menu-panel{border-radius:0!important;box-shadow:none!important}.navbar[_ngcontent-%COMP%]{height:4rem;background-color:#fff;padding:0 0 0 1rem;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between}.navbar__logo[_ngcontent-%COMP%]{height:2rem}.navbar__button[_ngcontent-%COMP%]{all:unset}.navbar__actions[_ngcontent-%COMP%]{height:100%;padding:0 1rem 0 0;display:flex;align-items:center;justify-content:center}.navbar__login[_ngcontent-%COMP%]{all:unset;background-color:#f6f6f6;border-radius:100%;overflow:hidden;height:40px;width:40px;display:flex;align-items:center;justify-content:center}.navbar__login__icon[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%}"]})}return n})();var $=c(3721);let D=(()=>{class n{constructor(e,o){this.cartService=e,this.activatedRoute=o,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0}get hasCartItems(){return 0!==this.cartService.getItems(this.catalogId).length}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(C.N),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],decls:20,vars:1,consts:[[1,"footer",3,"ngClass"],["ngSrc","assets/images/logo.svg","height","55","width","108","alt","menuexpert.app logo"],[1,"footer__social-media"],["href","https://www.instagram.com/menuexpert.app/"],["ngSrc","assets/icons/instagram.svg","height","30","width","30","alt","Instagram logo"],["href","https://www.facebook.com/menuexpert.app"],["ngSrc","assets/icons/facebook.svg","height","30","width","30","alt","Facebook logo"],["href","https://twitter.com/menuexpert.app"],["ngSrc","assets/icons/x.svg","height","30","width","30","alt","X logo"],[1,"footer__links"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"section"),t._UZ(2,"img",1)(3,"hr"),t.qZA(),t.TgZ(4,"section",2)(5,"a",3),t._UZ(6,"img",4),t.qZA(),t.TgZ(7,"a",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"a",7),t._UZ(10,"img",8),t.qZA()(),t.TgZ(11,"section",9)(12,"a"),t._uU(13,"Contacto"),t.qZA(),t.TgZ(14,"a"),t._uU(15,"Integra tu negocio"),t.qZA(),t.TgZ(16,"a"),t._uU(17,"T\xe9rminos Condiciones"),t.qZA(),t.TgZ(18,"p"),t._uU(19,"\xa9 2024 QTech S.R.L."),t.qZA()()()),2&o&&t.Q6J("ngClass",i.hasCartItems?"footer__white-space":"footer__none-white-space")},dependencies:[r.mk,r.Zd],styles:[".footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 1rem;gap:1rem}.footer__white-space[_ngcontent-%COMP%]{margin-bottom:5.5rem}.footer__none-white-space[_ngcontent-%COMP%]{margin-bottom:1rem}.footer__social-media[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.5rem}.footer__links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}"]})}return n})();function G(n,a){if(1&n&&t._UZ(0,"img",8),2&n){const e=t.oxw();t.MGl("alt","Image of ",e.product.title,""),t.s9C("src",e.product.image,t.LSH)}}function K(n,a){if(1&n&&(t.TgZ(0,"div",9),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,e.product.price.amount-(e.product.price.discount||0),e.product.price.currency.code)," ")}}function W(n,a){1&n&&t._UZ(0,"div",9)}function tt(n,a){if(1&n&&(t.TgZ(0,"div",10)(1,"div",11),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.primaryBadge.name," ")}}let et=(()=>{class n{constructor(e,o){this.router=e,this.activatedRoute=o,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0}ngOnInit(){}redirectToDetail(){var e=this;return(0,p.Z)(function*(){yield e.router.navigate([`/detail/${e.product?.id}`],{queryParams:{catalog:e.catalogId}})})()}get primaryBadge(){return this.product.badges?this.product?.badges[0]:null}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.F0),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-visual-card"]],inputs:{product:"product"},decls:12,vars:9,consts:[[1,"visual-card",3,"click"],[1,"visual-card__resource"],["class","visual-card__resource__image",3,"alt","src",4,"ngIf"],[1,"visual-card__data"],[1,"visual-card__data__title"],["class","visual-card__data__price__discount",4,"ngIf"],[1,"visual-card__data__price"],["class","visual-card__badge",4,"ngIf"],[1,"visual-card__resource__image",3,"alt","src"],[1,"visual-card__data__price__discount"],[1,"visual-card__badge"],[1,"visual-card__badge__item"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return i.redirectToDetail()}),t.TgZ(1,"div",1),t.YNc(2,G,1,2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.YNc(6,K,3,4,"div",5),t.YNc(7,W,1,0,"div",5),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.YNc(11,tt,3,1,"div",7),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngIf",i.product.image),t.xp6(3),t.hij(" ",i.product.title," "),t.xp6(1),t.Q6J("ngIf",i.product.price.discount&&i.product.price.discount>0),t.xp6(1),t.Q6J("ngIf",!i.product.price.discount||0===i.product.price.discount),t.xp6(2),t.hij(" ",t.xi3(10,6,i.product.price.amount,i.product.price.currency.code)," "),t.xp6(2),t.Q6J("ngIf",null!=i.primaryBadge))},dependencies:[r.O5,r.H9],styles:[".visual-card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;border-radius:10px;height:13.0625rem;background-color:#fff}.visual-card__badge[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;flex-direction:row;gap:.25rem;font-size:12px}.visual-card__badge__item[_ngcontent-%COMP%]{color:#fff;border-radius:0 10px;padding:.2rem .5rem;background-color:#21a300}.visual-card__data[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.5rem;height:4.3125rem}.visual-card__data__title[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:1rem;height:2rem;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.visual-card__data__price[_ngcontent-%COMP%]{font-size:12px}.visual-card__data__price__discount[_ngcontent-%COMP%]{height:.75rem;color:#989292;font-size:10px;font-weight:400;text-decoration:line-through}.visual-card__resource__image[_ngcontent-%COMP%]{object-fit:cover;border-radius:10px 10px 0 0;height:120px;width:100%}"]})}return n})();function nt(n,a){if(1&n&&(t.TgZ(0,"span",8),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,e.product.price.amount,e.product.price.currency.code))}}function ot(n,a){if(1&n&&(t.TgZ(0,"div",9),t._UZ(1,"img",10),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.MGl("alt","Image of ",e.product.title,""),t.s9C("src",e.product.image,t.LSH)}}function it(n,a){if(1&n&&(t.TgZ(0,"div",11)(1,"div",12),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.primaryBadge.name," ")}}let at=(()=>{class n{constructor(e,o){this.router=e,this.activatedRoute=o,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0}ngOnInit(){}redirectToDetail(){var e=this;return(0,p.Z)(function*(){yield e.router.navigate([`/detail/${e.product?.id}`],{queryParams:{catalog:e.catalogId}})})()}get primaryBadge(){return this.product.badges?this.product?.badges[0]:null}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.F0),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-simple-card"]],inputs:{product:"product"},decls:12,vars:9,consts:[[1,"simple-card",3,"click"],[1,"simple-card__data"],[1,"simple-card__data__title"],[1,"simple-card__data__price"],["class","simple-card__data__price__discount",4,"ngIf"],[1,"simple-card__data__description"],["class","simple-card__resource",4,"ngIf"],["class","simple-card__badge",4,"ngIf"],[1,"simple-card__data__price__discount"],[1,"simple-card__resource"],[1,"simple-card__resource__image",3,"alt","src"],[1,"simple-card__badge"],[1,"simple-card__badge__item"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return i.redirectToDetail()}),t.TgZ(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._uU(5),t.ALo(6,"currency"),t.YNc(7,nt,3,4,"span",4),t.qZA(),t.TgZ(8,"div",5),t._uU(9),t.qZA()(),t.YNc(10,ot,2,2,"div",6),t.YNc(11,it,3,1,"div",7),t.qZA()),2&o&&(t.xp6(3),t.hij(" ",i.product.title," "),t.xp6(2),t.hij(" ",t.xi3(6,6,i.product.price.amount-(i.product.price.discount||0),i.product.price.currency.code)," "),t.xp6(2),t.Q6J("ngIf",i.product.price.discount&&i.product.price.discount>0),t.xp6(2),t.hij(" ",i.product.description," "),t.xp6(1),t.Q6J("ngIf",i.product.image),t.xp6(1),t.Q6J("ngIf",null!=i.primaryBadge))},dependencies:[r.O5,r.H9],styles:[".simple-card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;justify-content:space-between;gap:.25rem;background-color:#fff;border-radius:10px;padding:.5rem}.simple-card__badge[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;flex-direction:row;gap:.25rem;font-size:12px}.simple-card__badge__item[_ngcontent-%COMP%]{color:#fff;border-radius:0 10px;padding:.2rem .5rem;background-color:#21a300}.simple-card__data[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.simple-card__data__title[_ngcontent-%COMP%]{font-size:14px;font-weight:500;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.simple-card__data__price[_ngcontent-%COMP%]{font-size:12px}.simple-card__data__price__discount[_ngcontent-%COMP%]{color:#989292;font-size:10px;font-weight:400;text-decoration:line-through}.simple-card__data__description[_ngcontent-%COMP%]{font-size:12px;color:#989292;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.simple-card__resource[_ngcontent-%COMP%]{height:104px;width:104px}.simple-card__resource__image[_ngcontent-%COMP%]{border-radius:10px;height:104px;width:104px;object-fit:cover}.simple-card__resource__no-image[_ngcontent-%COMP%]{background-color:#00000005}"]})}return n})();function ct(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-visual-card",5),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("product",e)}}function rt(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-simple-card",5),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("product",e)}}function st(n,a){if(1&n&&(t.ynx(0),t.YNc(1,ct,2,1,"ng-container",4),t.YNc(2,rt,2,1,"ng-container",4),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf","VISUAL"===(null==e.category?null:e.category.categoryType)),t.xp6(1),t.Q6J("ngIf","NORMAL"===(null==e.category?null:e.category.categoryType))}}const lt=function(n,a){return{section__visual:n,section__normal:a}};let dt=(()=>{class n{constructor(){this.type="VISUAL"}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-section"]],inputs:{type:"type",category:"category"},decls:5,vars:7,consts:[[1,"section",3,"id"],[1,"section__name"],[3,"ngClass"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"product"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,st,3,2,"ng-container",3),t.qZA()()),2&o&&(t.Q6J("id",null==i.category?null:i.category.id),t.xp6(2),t.hij(" ",null==i.category?null:i.category.name," "),t.xp6(1),t.Q6J("ngClass",t.WLB(4,lt,"VISUAL"===(null==i.category?null:i.category.categoryType),"NORMAL"===(null==i.category?null:i.category.categoryType))),t.xp6(1),t.Q6J("ngForOf",null==i.category?null:i.category.products))},dependencies:[r.mk,r.sg,r.O5,et,at],styles:[".section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.section__name[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600}.section__visual[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:.5rem .5rem}.section__normal[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:.5rem 1rem}"]})}return n})();function _t(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onClick(s.id))}),t.TgZ(1,"div",3),t._uU(2),t.qZA()()}if(2&n){const e=a.$implicit,o=a.index,i=t.oxw();t.Q6J("ngClass",(null==e?null:e.id)===i.selected||""===i.selected&&0===o?"section-selector__item__line-active":"section-selector__item__line-inactive"),t.xp6(2),t.hij(" ",null==e?null:e.name," ")}}let gt=(()=>{class n{constructor(){this.sectionsPosition=[],this.selected=""}ngOnInit(){this.sections&&this.sections[0]&&(this.selected=this?.sections[0]?.id)}ngOnChanges(e){this.sectionsPosition=this.sections?.map(o=>({id:o.id,yValue:document.getElementById(o.id)?.getClientRects()[0].y||0}))||[]}onClick(e){document.getElementById(e)?.scrollIntoView()}detectPosition(){this.sectionsPosition=this.sections?.map(o=>({id:o.id,yValue:window.scrollY+(document.getElementById(o.id)?.getBoundingClientRect().y||0)}))||[],this.sectionsPosition.sort((o,i)=>o.yValue-i.yValue);let[e]=this.sectionsPosition.filter(o=>o.yValue-170<window.scrollY).slice(-1);e||([e]=this.sectionsPosition.slice(0,1)),this.selected=e.id||""}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-section-selector"]],hostBindings:function(o,i){1&o&&t.NdJ("scroll",function(l){return i.detectPosition(l)},!1,t.Jf7)},inputs:{sections:"sections"},features:[t.TTD],decls:2,vars:1,consts:[[1,"section-selector"],["class","section-selector__item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"section-selector__item",3,"ngClass","click"],[1,"section-selector__item__name"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,_t,3,2,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",i.sections))},dependencies:[r.mk,r.sg],styles:[".section-selector[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.section-selector[_ngcontent-%COMP%]{z-index:800;padding:0 1rem;background-color:#fff;position:sticky;top:0;display:flex;flex-direction:row;overflow:hidden;overflow-x:scroll;-ms-overflow-style:none}.section-selector__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:3.25rem;border-bottom:5px solid black;white-space:nowrap}.section-selector__item__name[_ngcontent-%COMP%]{padding:0 1rem}.section-selector__item__line-active[_ngcontent-%COMP%]{border-bottom:5px solid #000000}.section-selector__item__line-inactive[_ngcontent-%COMP%]{border-bottom:5px solid #E2E2E2}"]})}return n})();function pt(n,a){1&n&&t._UZ(0,"app-section",5),2&n&&t.Q6J("category",a.$implicit)}let ut=(()=>{class n{constructor(e,o,i,s,l){this.router=e,this.cartService=o,this.menuService=i,this.storeService=s,this.activatedRoute=l,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0,this.storeId=this.activatedRoute.snapshot.queryParamMap.get("store")||void 0,this.catalog={id:"",name:"",categories:[],products:[]},this.store={id:"",name:"",description:"",image:void 0}}ngOnInit(){(function A(...n){const a=(0,M.jO)(n),e=function T(n){return 1===n.length&&Z(n[0])?n[0]:n}(n);return e.length?new b.y(o=>{let i=e.map(()=>[]),s=e.map(()=>!1);o.add(()=>{i=s=null});for(let l=0;!o.closed&&l<e.length;l++)(0,y.Xf)(e[l]).subscribe((0,w.x)(o,d=>{if(i[l].push(d),i.every(_=>_.length)){const _=i.map(h=>h.shift());o.next(a?a(..._):_),i.some((h,vt)=>!h.length&&s[vt])&&o.complete()}},()=>{s[l]=!0,!i[l].length&&o.complete()}));return()=>{i=s=null}}):O.E})(this.menuService.getCatalog(this.catalogId||""),this.storeService.getStoreById(this.storeId||"")).subscribe({next:([e,o])=>{e.isActive?(this.catalog=e,this.store=o):this.router.navigate(["catalog/not-available"])},error:e=>{this.router.navigate(["not-found"])}})}viewCart(){this.router.navigate([`/cart/${this.cartService.getCartId(this.catalogId)}`],{queryParams:{catalog:this.catalog.id}})}get hiddenCart(){return!this.store.cartEnabled||0===this.cartService.getItems(this.catalogId).length}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.F0),t.Y36(C.N),t.Y36(S),t.Y36(N.d),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-catalog"]],decls:7,vars:5,consts:[[3,"store"],[3,"sections"],[1,"catalog","catalog__white-space"],[3,"category",4,"ngFor","ngForOf"],["subtitle","Ver pedido",3,"hidden","title","click"],[3,"category"]],template:function(o,i){1&o&&(t._UZ(0,"app-navbar")(1,"app-brand",0)(2,"app-section-selector",1),t.TgZ(3,"div",2),t.YNc(4,pt,1,1,"app-section",3),t.qZA(),t.TgZ(5,"app-floating-button",4),t.NdJ("click",function(){return i.viewCart()}),t.qZA(),t._UZ(6,"app-footer")),2&o&&(t.xp6(1),t.Q6J("store",i.store),t.xp6(1),t.Q6J("sections",i.catalog.categories),t.xp6(2),t.Q6J("ngForOf",i.catalog.categories),t.xp6(1),t.s9C("title",i.store.name),t.Q6J("hidden",i.hiddenCart))},dependencies:[r.sg,B,X,$.w,D,dt,gt],styles:[".catalog[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.catalog__white-space[_ngcontent-%COMP%]{margin:1rem 1rem 3rem}"]})}return n})();var mt=c(5621);const ft=[{path:"catalog/not-available",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-catalog-not-available"]],decls:7,vars:0,consts:[[1,"catalog-not-available"],["src","assets/images/disabled-catalog.svg","alt","Catalog not available",1,"catalog-not-available__image"],[1,"catalog-not-available__content"],[1,"catalog-not-available__content__title"],[1,"catalog-not-available__content__subtitle"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3),t._uU(4," Catalogo Deshabilitado "),t.qZA(),t.TgZ(5,"div",4),t._uU(6," Este catalogo se encuentra momentaneamente deshabilitado "),t.qZA()()())},styles:[".catalog-not-available[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;gap:2rem}.catalog-not-available__image[_ngcontent-%COMP%]{width:100px}.catalog-not-available__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.catalog-not-available__content__title[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:600}.catalog-not-available__content__subtitle[_ngcontent-%COMP%]{font-size:16px;color:#989292;text-align:center}"]})}return n})()},{path:"s/:catalogId",component:ut}];let ht=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[r.ez,g.Bz.forChild(ft),mt.m]})}return n})()}}]);