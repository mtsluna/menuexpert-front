"use strict";(self.webpackChunkmenuexpert_front=self.webpackChunkmenuexpert_front||[]).push([[278],{3278:(et,h,a)=>{a.r(h),a.d(h,{DetailModule:()=>tt});var l=a(6895),f=a(6962),t=a(4650),s=a(4006),C=a(9314),y=a(9806),O=a(4004),Z=a(529);let I=(()=>{class o{constructor(e){this.httpClient=e}getProduct(e,n){return this.httpClient.get(`${y.Z.baseUrl}/products/${n}`).pipe((0,O.U)(i=>(i.customizations?.forEach(r=>{r.options.sort((p,_)=>p.price.amount-_.price.amount)}),i)))}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(Z.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var A=a(230),T=a(1844),J=a(3721);function M(o,c){if(1&o&&t._UZ(0,"img",2),2&o){const e=t.oxw();t.s9C("src",e.product.image,t.LSH),t.MGl("alt","photo of the product: ",e.product.title,"")}}function P(o,c){1&o&&t._UZ(0,"div",3)}let Q=(()=>{class o{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-image"]],inputs:{product:"product"},decls:2,vars:2,consts:[["class","image",3,"src","alt",4,"ngIf"],["class","image image__empty",4,"ngIf"],[1,"image",3,"src","alt"],[1,"image","image__empty"]],template:function(n,i){1&n&&(t.YNc(0,M,1,2,"img",0),t.YNc(1,P,1,0,"div",1)),2&n&&(t.Q6J("ngIf",i.product.image),t.xp6(1),t.Q6J("ngIf",!i.product.image))},dependencies:[l.O5],styles:[".image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.image__empty[_ngcontent-%COMP%]{background-color:#fff;height:3.5rem}"]})}return o})();function z(o,c){if(1&o&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}let F=(()=>{class o{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-banner"]],inputs:{product:"product"},decls:10,vars:7,consts:[[1,"banner"],[1,"banner__data__title"],[1,"banner__data__price"],[1,"banner__data__description"],[1,"banner__data__badges"],["class","banner__data__badges__item",4,"ngFor","ngForOf"],[1,"banner__data__badges__item"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"div",3),t._uU(7),t.qZA(),t.TgZ(8,"div",4),t.YNc(9,z,2,1,"div",5),t.qZA()()),2&n&&(t.xp6(2),t.hij(" ",i.product.title," "),t.xp6(2),t.hij(" ",t.xi3(5,4,i.product.price.amount,i.product.price.currency.code)," "),t.xp6(3),t.hij(" ",i.product.description," "),t.xp6(2),t.Q6J("ngForOf",i.product.badges))},dependencies:[l.sg,l.H9],styles:[".banner[_ngcontent-%COMP%]{background-color:#fff;padding:1rem;display:flex;flex-direction:column;gap:.25rem}.banner__image[_ngcontent-%COMP%]{width:100%}.banner__data__title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.banner__data__price[_ngcontent-%COMP%]{font-size:1rem;color:#363636;font-weight:550}.banner__data__description[_ngcontent-%COMP%]{padding:.5rem 0;font-size:.75rem;color:#989292}.banner__data__badges[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.25rem;font-size:12px}.banner__data__badges__item[_ngcontent-%COMP%]{color:#fff;border-radius:10px;padding:.2rem .5rem;background-color:#21a300}"]})}return o})();var N=a(1959);let U=(()=>{class o{constructor(e){this.formBuilder=e,this.form=this.formBuilder.group({comment:[""],quantity:[1]})}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-observation"]],inputs:{form:"form"},decls:8,vars:2,consts:[[1,"observation",3,"formGroup"],[1,"observation__header__title"],[1,"observation__header__subtitle"],["formControlName","comment","rows","3",1,"observation__content"],[3,"form"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div")(2,"div",1),t._uU(3," Observaciones "),t.qZA(),t.TgZ(4,"div",2),t._uU(5," Escriba aqui cualquier aclaraci\xf3n. "),t.qZA()(),t._UZ(6,"textarea",3)(7,"app-quantity-selector",4),t.qZA()),2&n&&(t.Q6J("formGroup",i.form),t.xp6(7),t.Q6J("form",i.form))},dependencies:[N.y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".observation[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fff;padding:1rem;gap:1rem}.observation__header[_ngcontent-%COMP%]{display:flex;flex-direction:column}.observation__header__title[_ngcontent-%COMP%]{font-size:1rem}.observation__header__subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:#989292}.observation__content[_ngcontent-%COMP%]{resize:none;width:100%;box-sizing:border-box;background-color:#f6f6f6;border-radius:10px;padding:.5rem;border:none}.observation__content[_ngcontent-%COMP%]:focus{outline:2px solid #000000!important}"]})}return o})();var v=a(6709),g=a(495);function q(o,c){1&o&&(t.TgZ(0,"span",14),t._uU(1,"\xa0\xb7 No disponible"),t.qZA())}function Y(o,c){if(1&o&&(t.TgZ(0,"div",15),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" + ",t.xi3(2,1,e.price.amount,null==e||null==e.price||null==e.price.currency?null:e.price.currency.code)," ")}}const x=function(o){return{"option-selector__options__item__name__disabled":o}},b=function(o){return{"option-selector__options__item__not-display":o}};function S(o,c){if(1&o&&(t.TgZ(0,"div",8)(1,"div")(2,"div",9),t._uU(3),t.YNc(4,q,2,0,"span",10),t.qZA(),t.YNc(5,Y,3,4,"div",11),t.qZA(),t.TgZ(6,"div",12),t._UZ(7,"mat-radio-button",13),t.qZA()()),2&o){const e=c.$implicit,n=c.index,i=t.oxw(2);t.xp6(2),t.Q6J("ngClass",t.VKq(8,x,!e.isActive)),t.xp6(1),t.hij(" ",null==e?null:e.title,""),t.xp6(1),t.Q6J("ngIf",!e.isActive),t.xp6(1),t.Q6J("ngIf",0!==(null==e||null==e.price?null:e.price.amount)&&e.isActive),t.xp6(1),t.Q6J("ngClass",t.VKq(10,b,i.enabled)),t.xp6(1),t.Q6J("disabled",!e.isActive)("checked",i.getChecked(n))("value",i.makeProduct(n,e))}}function B(o,c){if(1&o&&(t.TgZ(0,"div",5)(1,"mat-radio-group",6),t.YNc(2,S,8,12,"div",7),t.qZA()()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("ngForOf",null==e.customization?null:e.customization.options)}}function k(o,c){1&o&&(t.TgZ(0,"span",14),t._uU(1,"\xa0\xb7 No disponible"),t.qZA())}function w(o,c){if(1&o&&(t.TgZ(0,"div",15),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" + ",t.xi3(2,1,e.price.amount,null==e||null==e.price||null==e.price.currency?null:e.price.currency.code)," ")}}function E(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",8)(1,"div")(2,"div",9),t._uU(3),t.YNc(4,k,2,0,"span",10),t.qZA(),t.YNc(5,w,3,4,"div",11),t.qZA(),t.TgZ(6,"div",12)(7,"mat-checkbox",17),t.NdJ("change",function(i){const r=t.CHM(e),p=r.index,_=r.$implicit,d=t.oxw(2);return t.KtG(d.changePick(i,p,_))}),t.qZA()()()}if(2&o){const e=c.$implicit,n=c.index,i=t.oxw(2);t.xp6(2),t.Q6J("ngClass",t.VKq(6,x,!e.isActive)),t.xp6(1),t.hij(" ",null==e?null:e.title,""),t.xp6(1),t.Q6J("ngIf",!e.isActive),t.xp6(1),t.Q6J("ngIf",0!==(null==e||null==e.price?null:e.price.amount)&&e.isActive),t.xp6(1),t.Q6J("ngClass",t.VKq(8,b,i.enabled)),t.xp6(1),t.Q6J("formControlName",n)}}function j(o,c){if(1&o&&(t.TgZ(0,"div",5),t.ynx(1,16),t.YNc(2,E,8,10,"div",7),t.BQk(),t.qZA()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("ngForOf",null==e.customization?null:e.customization.options)}}let G=(()=>{class o{constructor(){}ngOnInit(){}changePick(e,n,i){const r=this.form.get("selected"),p=!!e.checked&&i;r.at(n).setValue(p);const _=r.getRawValue(),d=_.filter(m=>0!=m).length;_.forEach((m,u)=>{!1===m||m.isActive?d==this.customization.max&&0==m||!this.customization.options[u].isActive?r.at(u).disable():r.at(u).enable():r.at(u).disable()})}makeProduct(e,n){return this.customization?.options.map((i,r)=>r===e&&n)}getChecked(e){return e===this.customization.options.map(n=>n.isActive).indexOf(!0)}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-option-selector"]],inputs:{customization:"customization",form:"form",enabled:"enabled"},decls:8,vars:4,consts:[[1,"option-selector"],[1,"option-selector__header"],[1,"option-selector__header__title"],[1,"option-selector__header__description"],["class","option-selector__options",3,"formGroup",4,"ngIf"],[1,"option-selector__options",3,"formGroup"],["formControlName","selected"],["class","option-selector__options__item  option-selector__options__divider",4,"ngFor","ngForOf"],[1,"option-selector__options__item","option-selector__options__divider"],[1,"option-selector__options__item__name",3,"ngClass"],["class","option-selector__options__item__name__disabled__tag",4,"ngIf"],["class","option-selector__options__item__price",4,"ngIf"],[1,"option-selector__options__item__field",3,"ngClass"],["color","primary",3,"disabled","checked","value"],[1,"option-selector__options__item__name__disabled__tag"],[1,"option-selector__options__item__price"],["formArrayName","selected"],["color","primary",3,"formControlName","change"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._uU(5),t.qZA()(),t.YNc(6,B,3,2,"div",4),t.YNc(7,j,3,2,"div",4),t.qZA()),2&n&&(t.xp6(3),t.hij(" ",i.customization.name," "),t.xp6(2),t.hij(" Elige hasta ",i.customization.max," "),t.xp6(1),t.Q6J("ngIf",1===i.customization.max),t.xp6(1),t.Q6J("ngIf",i.customization.max>1))},dependencies:[l.mk,l.sg,l.O5,v.oG,s.JJ,s.JL,s.sg,s.u,s.CE,g.VQ,g.U0,l.H9],styles:[".option-selector[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;padding:1rem;gap:.5rem}.option-selector__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.option-selector__header__title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600}.option-selector__header__description[_ngcontent-%COMP%]{font-size:.75rem;color:#989292}.option-selector__options[_ngcontent-%COMP%]{display:flex;flex-direction:column}.option-selector__options__divider[_ngcontent-%COMP%]:not(:last-child){border-bottom:#EBEBEB solid 1px}.option-selector__options__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:.75rem}.option-selector__options__item__name__disabled[_ngcontent-%COMP%]{color:#626262;text-decoration:line-through}.option-selector__options__item__name__disabled__tag[_ngcontent-%COMP%]{text-decoration:none;display:inline-block}.option-selector__options__item__price[_ngcontent-%COMP%]{color:#626262}.option-selector__options__item__price__disabled[_ngcontent-%COMP%]{color:#626262;text-decoration:line-through}.option-selector__options__item__not-display[_ngcontent-%COMP%]{visibility:hidden}"]})}return o})();function V(o,c){1&o&&t._UZ(0,"div",9)}function D(o,c){if(1&o&&t._UZ(0,"app-option-selector",10),2&o){const e=c.$implicit,n=c.index,i=t.oxw(2);t.Q6J("form",i.getFormElement(n))("enabled",!i.store.cartEnabled)("customization",e)}}function L(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"app-floating-button",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.addItem())}),t.ALo(1,"currency"),t.qZA()}if(2&o){const e=t.oxw(2);t.MGl("title","agregar al pedido \xb7 ",t.xi3(1,2,e.price,e.product.price.currency.code),""),t.Q6J("hidden",!e.store.cartEnabled)}}function $(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"app-floating-button",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.updateItem())}),t.ALo(1,"currency"),t.qZA()}if(2&o){const e=t.oxw(2);t.MGl("title","modificar pedido \xb7 ",t.xi3(1,2,e.price,e.product.price.currency.code),""),t.Q6J("hidden",!e.store.cartEnabled)}}function R(o,c){if(1&o&&(t.ynx(0),t._UZ(1,"app-image",2),t.YNc(2,V,1,0,"div",3),t.TgZ(3,"div",4),t._UZ(4,"app-banner",5),t.YNc(5,D,1,3,"app-option-selector",6),t._UZ(6,"app-observation",7),t.YNc(7,L,2,5,"app-floating-button",8),t.YNc(8,$,2,5,"app-floating-button",8),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("product",e.product),t.xp6(1),t.Q6J("ngIf",!e.product.image),t.xp6(2),t.Q6J("product",e.product),t.xp6(1),t.Q6J("ngForOf",e.product.customizations),t.xp6(1),t.Q6J("hidden",!e.store.cartEnabled)("form",e.form),t.xp6(1),t.Q6J("ngIf",!e.cartItem),t.xp6(1),t.Q6J("ngIf",e.cartItem)}}let H=(()=>{class o{constructor(e,n,i,r,p,_,d){this.formBuilder=e,this.cartService=n,this.router=i,this.activatedRoute=r,this.productService=p,this.storeService=_,this.location=d,this.form=this.formBuilder.group({quantity:[1],product:null,comment:[""],selections:[]}),this.error=!1,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0,this.productId=this.activatedRoute.snapshot.paramMap.get("productId")||void 0,this.cartItem=this.activatedRoute.snapshot.queryParamMap.get("cartItem")||void 0,this.store={},this.product={id:"",title:"",price:{amount:0,currency:{code:"",name:"",symbol:""}},description:"",badges:[],image:"",customizations:[]}}ngOnInit(){if(this.store=this.storeService.getStoreFromLocalStorage(),this.catalogId&&this.productId)if(this.cartItem){const e=this.cartService.getItem(this.cartItem,this.catalogId);e.product&&(this.product=e.product),this.form=this.initForm(),this.form.patchValue(e)}else this.productService.getProduct(this.catalogId,this.productId).subscribe({next:e=>{this.product=e,this.form=this.initForm()},error:()=>{this.router.navigate(["not-found"])}})}initForm(){const e=n=>1===n.max?{selected:this.formBuilder.control({value:n.options.map((i,r)=>1===n.max&&r===n.options.map(p=>p.isActive).indexOf(!0)&&i),disabled:!1})}:{selected:this.formBuilder.array(n.options.map((i,r)=>this.formBuilder.control({value:1===n.max&&0==r&&i,disabled:!i.isActive})))};return this.formBuilder.group({id:"",quantity:[1],product:this.product,comment:[""],selections:this.formBuilder.array(this.product?.customizations?.map(n=>this.formBuilder.group({id:[n?.id],...e(n)}))||[])})}getFormElement(e){return this.form.get("selections").at(e)}addItem(){this.cartService.addItem(this.form.getRawValue(),this.catalogId),this.location.back()}updateItem(){this.cartService.updateItem(this.form.getRawValue(),this.catalogId),this.location.back()}get price(){const e=this.form.getRawValue(),n=e?.selections?.map(i=>i.selected.filter(r=>!1!==r).map(r=>r.price).reduce((r,p)=>r+p.amount,0)).reduce((i,r)=>i+r,0);return(this.product.price.amount+n)*e.quantity}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(C.N),t.Y36(f.F0),t.Y36(f.gz),t.Y36(I),t.Y36(A.d),t.Y36(l.Ye))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-detail"]],decls:3,vars:1,consts:[[1,"detail"],[4,"ngIf"],[1,"detail__image",3,"product"],["class","detail__image__empty",4,"ngIf"],[1,"detail__content"],[3,"product"],[3,"form","enabled","customization",4,"ngFor","ngForOf"],[3,"hidden","form"],[3,"hidden","title","click",4,"ngIf"],[1,"detail__image__empty"],[3,"form","enabled","customization"],[3,"hidden","title","click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-navigator"),t.YNc(2,R,9,8,"ng-container",1),t.qZA()),2&n&&(t.xp6(2),t.Q6J("ngIf",!i.error))},dependencies:[l.sg,l.O5,T.S,J.w,Q,F,U,G,l.H9],styles:[".detail[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;margin-bottom:5rem}.detail__image[_ngcontent-%COMP%]{height:12.5rem}.detail__image__empty[_ngcontent-%COMP%]{background-color:#fff;height:3.5rem}.detail__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}"]})}return o})();var K=a(5621),X=a(7392);const W=[{path:":productId",component:H}];let tt=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.ez,f.Bz.forChild(W),K.m,X.Ps,v.p9,s.UX,g.Fk]})}return o})()}}]);