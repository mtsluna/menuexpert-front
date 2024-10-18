"use strict";(self.webpackChunkshopexpert_front=self.webpackChunkshopexpert_front||[]).push([[405],{405:(z,_,i)=>{i.r(_),i.d(_,{CheckoutModule:()=>V});var l=i(177),r=i(7786),d=i(467),h=i(4843),v=i(6354),t=i(4438),y=i(1028),C=i(1626);let k=(()=>{class o{constructor(e){this.httpClient=e}postCheckout(e,n){return this.httpClient.post(`${y.A.baseUrl}/checkout`,{cartId:e,storeId:n})}static#t=this.\u0275fac=function(n){return new(n||o)(t.KVO(C.Qq))};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var p=i(8399),M=i(5351),P=i(1339),T=i(6978),F=i(2753),f=i(667),O=i(4963),m=i(5951);function x(o,c){if(1&o){const e=t.RV6();t.j41(0,"div",4)(1,"div",5),t.nrm(2,"img",6),t.j41(3,"div",7),t.EFF(4),t.k0s()(),t.j41(5,"div",8)(6,"mat-radio-button",9),t.bIt("change",function(){const a=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.onChange(a))}),t.k0s()()()}if(2&o){const e=c.$implicit,n=c.index;t.R7$(2),t.FS9("src",e.icon,t.B4B),t.R7$(2),t.SpI(" ",e.name," "),t.R7$(2),t.Y8G("checked",0==n)("value",e.id)}}let E=(()=>{class o{constructor(){this.paymentTypeEvent=new t.bkB,this.paymentTypes=[{id:"2",name:"Mercadopago",icon:"assets/icons/mercado-pago.png"}]}onChange(e){this.paymentTypeEvent.emit(e)}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-payments-selector"]],outputs:{paymentTypeEvent:"paymentTypeEvent"},decls:6,vars:1,consts:[[1,"payments-selector"],[1,"payments-selector__title"],[1,"payments-selector__options"],["class","payments-selector__options__item  payments-selector__options__divider",4,"ngFor","ngForOf"],[1,"payments-selector__options__item","payments-selector__options__divider"],[1,"payments-selector__options__item__group"],[1,"payments-selector__options__item__group__icon",3,"src"],[1,"payments-selector__options__item__group__name"],[1,"payments-selector__options__item__field"],["color","primary",3,"change","checked","value"]],template:function(n,a){1&n&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2," Medios de pago "),t.k0s(),t.j41(3,"div",2)(4,"mat-radio-group"),t.DNE(5,x,7,4,"div",3),t.k0s()()()),2&n&&(t.R7$(5),t.Y8G("ngForOf",a.paymentTypes))},dependencies:[l.Sq,m.VT,m._g],styles:[".payments-selector[_ngcontent-%COMP%]{padding:1rem 1rem .5rem;background:#fff}.payments-selector__title[_ngcontent-%COMP%]{font-weight:600}.payments-selector__options[_ngcontent-%COMP%]{display:flex;flex-direction:column}.payments-selector__options__divider[_ngcontent-%COMP%]:not(:last-child){border-bottom:#EBEBEB solid 1px}.payments-selector__options__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:.75rem}.payments-selector__options__item__group[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.payments-selector__options__item__group__icon[_ngcontent-%COMP%]{object-fit:cover;width:20px;height:20px}"]})}return o})(),I=(()=>{class o{constructor(e,n){this.cartService=e,this.activatedRoute=n,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0,this.productsAmount=0}ngOnInit(){var e=this;return(0,d.A)(function*(){const n=yield e.cartService.getApiItems();e.productsAmount=n.amount||0})()}get currency(){return this.cartService.getCurrency(this.catalogId)}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(p.m),t.rXU(r.nX))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-resume"]],decls:16,vars:8,consts:[[1,"resume"],[1,"resume__title"],[1,"resume__detail"],[1,"resume__detail__item"],[1,"resume__total"]],template:function(n,a){1&n&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2," Resumen "),t.k0s(),t.j41(3,"div",2)(4,"div",3)(5,"div"),t.EFF(6," Productos "),t.k0s(),t.j41(7,"div"),t.EFF(8),t.nI1(9,"currency"),t.k0s()()(),t.j41(10,"div",4)(11,"div"),t.EFF(12," Total "),t.k0s(),t.j41(13,"div"),t.EFF(14),t.nI1(15,"currency"),t.k0s()()()),2&n&&(t.R7$(8),t.SpI(" ",t.i5U(9,2,a.productsAmount,a.currency)," "),t.R7$(6),t.SpI(" ",t.i5U(15,5,a.productsAmount,a.currency)," "))},dependencies:[l.oe],styles:[".resume[_ngcontent-%COMP%]{padding:1rem;background:#fff}.resume__title[_ngcontent-%COMP%]{font-weight:600}.resume__detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:1rem;gap:.25rem}.resume__detail__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-size:.75rem}.resume__detail__item[_ngcontent-%COMP%]:last-child{padding-bottom:.5rem;border-bottom:#EBEBEB solid 1px}.resume__total[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-size:1rem;padding-top:.5rem;font-weight:600}"]})}return o})();function R(o,c){if(1&o){const e=t.RV6();t.j41(0,"app-floating-button",8),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.goToMercadoPago())}),t.k0s()}if(2&o){const e=t.XpG(2);t.Y8G("loading",e.loading)}}function b(o,c){if(1&o){const e=t.RV6();t.j41(0,"div",0),t.nrm(1,"app-navigator")(2,"div",1),t.j41(3,"div",2)(4,"div",3)(5,"div",4),t.EFF(6," Checkout "),t.k0s(),t.j41(7,"div",5),t.EFF(8),t.k0s()(),t.j41(9,"app-payments-selector",6),t.bIt("paymentTypeEvent",function(a){t.eBV(e);const s=t.XpG();return t.Njj(s.paymentTypeEvent(a))}),t.k0s(),t.nrm(10,"app-resume"),t.k0s(),t.nrm(11,"div",7),t.DNE(12,R,1,1),t.k0s()}if(2&o){let e;const n=t.XpG();t.R7$(8),t.SpI(" ",c.name," "),t.R7$(4),t.vxM(12,"2"===(e=n.paymentType.id)?12:-1)}}let j=(()=>{class o{constructor(e,n,a,s,u,D,G){this.activatedRoute=e,this.checkoutService=n,this.cartService=a,this.matDialog=s,this.authService=u,this.analytics=D,this.clientService=G,this.cartId=this.activatedRoute.snapshot.paramMap.get("id")||void 0,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0,this.storeId=this.activatedRoute.snapshot.queryParamMap.get("store")||void 0,this.loading=!1,this.paymentType={id:"2"},this.analytics.logEvent("checkout_view",{catalog:this.catalogId}),this.cartService.getApiItems(),this.store$=this.activatedRoute.data.pipe((0,v.T)(N=>N.store))}goToMercadoPago(){var e=this;return(0,d.A)(function*(){yield e.analytics.logEvent("checkout_go_to_pay",{catalogId:e.catalogId}),e.loading=!0;const n=yield(0,h._)(e.authService.getSession()),{content:a}=yield(0,h._)(e.clientService.search(n?.uid||"","google.com"));let[s]=a;e.checkoutService.postCheckout(e.cartId||"",e.storeId||"").subscribe({next:u=>{window.location.href=u.initPoint}}),e.loading=!1})()}paymentTypeEvent(e){this.paymentType=e}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(r.nX),t.rXU(k),t.rXU(p.m),t.rXU(M.bZ),t.rXU(P.u),t.rXU(T.f_),t.rXU(F.X))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-checkout"]],decls:2,vars:3,consts:[[1,"checkout"],[1,"checkout__holder"],[1,"checkout__cards"],[1,"checkout__cards__header"],[1,"checkout__cards__header__title"],[1,"checkout__cards__header__subtitle"],[3,"paymentTypeEvent"],[1,"checkout__cards__footer"],["title","ir a mercadopago",3,"click","loading"]],template:function(n,a){if(1&n&&(t.DNE(0,b,13,2,"div",0),t.nI1(1,"async")),2&n){let s;t.vxM(0,(s=t.bMT(1,1,a.store$))?0:-1,s)}},dependencies:[f.d,O.g,E,I,l.Jj],styles:[".checkout[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.checkout__holder[_ngcontent-%COMP%]{background:#fff;height:3.75rem}@media (max-width: 768px){.checkout__holder[_ngcontent-%COMP%]{width:100%}}.checkout__cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}@media (min-width: 768px){.checkout__cards[_ngcontent-%COMP%]{width:60%}}.checkout__cards__header[_ngcontent-%COMP%]{padding:1rem;background-color:#fff}@media (min-width: 768px){.checkout__cards__header[_ngcontent-%COMP%]{border-radius:10px 10px 0 0}}.checkout__cards__header__title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.checkout__cards__footer[_ngcontent-%COMP%]{height:1.75rem;background-color:#fff;width:100%}@media (min-width: 768px){.checkout__cards__footer[_ngcontent-%COMP%]{border-radius:0 0 10px 10px;width:60%}}"]})}return o})();var g=i(9213);let S=(()=>{class o{constructor(e,n){this.activatedRoute=e,this.cartService=n,this.availableTypes={success:{color:"#28a745",subtitle:"Felicitaciones, su pedido ya esta en proceso",title:"PEDIDO EXITOSO",icon:"done"},error:{color:"#dc3545",subtitle:"Algo salio mal en el checkout. Reintente mas tarde!",title:"PEDIDO ERRONEO",icon:"close"},default:{color:"#dc3545",subtitle:"Algo salio mal en el checkout. \nReintente mas tarde!",title:"PEDIDO ERRONEO",icon:"close"}},this.availableType=this.availableTypes.default,this.status=this.activatedRoute.snapshot.queryParamMap.get("status"),this.base_url=localStorage.getItem("base_url")}ngOnInit(){var e=this;return(0,d.A)(function*(){null!==e.status&&e.availableTypes[e.status]&&(e.availableType=e.availableTypes[e.status]),"success"===e.status&&(yield e.cartService.getApiItems(),e.cartService.deleteCart())})()}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(r.nX),t.rXU(p.m))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-confirmation"]],decls:10,vars:7,consts:[[1,"confirmation"],[3,"customNavigation"],[1,"confirmation__logo"],[1,"confirmation__data"],[1,"confirmation__data__title"],[1,"confirmation__data__subtitle"]],template:function(n,a){1&n&&(t.j41(0,"div",0),t.nrm(1,"app-navigator",1),t.j41(2,"div",2)(3,"mat-icon"),t.EFF(4),t.k0s()(),t.j41(5,"div",3)(6,"div",4),t.EFF(7),t.k0s(),t.j41(8,"div",5),t.EFF(9),t.k0s()()()),2&n&&(t.muq("background-color: ",a.availableType.color,""),t.R7$(),t.Y8G("customNavigation",a.base_url||""),t.R7$(3),t.JRh(a.availableType.icon),t.R7$(3),t.SpI(" ",a.availableType.title," "),t.R7$(2),t.SpI(" ",a.availableType.subtitle," "))},dependencies:[f.d,g.An],styles:[".confirmation[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:2rem;align-items:center;height:100vh;color:#fff;background-color:#dc3545}.confirmation__logo[_ngcontent-%COMP%]{color:#fff;border-radius:100%;border:solid 5px #FFFFFF;display:flex;justify-content:center;align-items:center;width:75px;height:75px}.confirmation__data[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;justify-content:center;align-items:center}.confirmation__data__title[_ngcontent-%COMP%]{font-weight:600;font-size:1.5rem}.confirmation__data__subtitle[_ngcontent-%COMP%]{text-align:center;width:75%;color:#fff}"]})}return o})();var X=i(2334),U=i(9631),$=i(8834),B=i(9417),A=i(573);const w=[{path:":id",component:j,resolve:{store:(o,c)=>{const e=(0,t.WQX)(r.nX).snapshot.queryParamMap.get("store")||void 0;return(0,t.WQX)(A.n).getStoreById(e||"")}}},{path:":id/confirmation",component:S}];let V=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.$C({type:o});static#n=this.\u0275inj=t.G2t({imports:[l.MD,r.iI.forChild(w),X.G,g.m_,m.Wk,U.fS,$.Hl,B.X1]})}return o})()}}]);