"use strict";(self.webpackChunkshopexpert_front=self.webpackChunkshopexpert_front||[]).push([[336],{5336:(G,g,a)=>{a.r(g),a.d(g,{CheckoutModule:()=>D});var l=a(177),d=a(52),u=a(467),_=a(4843),p=a(6354),t=a(4438),m=a(1028),y=a(1626);let k=(()=>{class n{constructor(e){this.httpClient=e}postCheckout(e,o){return this.httpClient.post(`${m.A.baseUrl}/checkout`,{cartId:e,storeId:o})}static{this.\u0275fac=function(o){return new(o||n)(t.KVO(y.Qq))}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var T=a(6978);let M=(()=>{class n{constructor(e){this.httpClient=e}post(e){return this.httpClient.post(`${m.A.baseUrl}/clients`,e)}put(e,o){return this.httpClient.put(`${m.A.baseUrl}/clients/${e}`,o)}search(e,o){return this.httpClient.get(`${m.A.baseUrl}/clients`,{params:{source:o,externalId:e}})}static{this.\u0275fac=function(o){return new(o||n)(t.KVO(y.Qq))}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var v=a(667),P=a(4963),h=a(5951);function F(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",4)(1,"div",5),t.nrm(2,"img",6),t.j41(3,"div",7),t.EFF(4),t.k0s()(),t.j41(5,"div",8)(6,"mat-radio-button",9),t.bIt("change",function(){const i=t.eBV(e).$implicit,c=t.XpG();return t.Njj(c.onChange(i))}),t.k0s()()()}if(2&n){const e=s.$implicit,o=s.index;t.R7$(2),t.FS9("src",e.icon,t.B4B),t.R7$(2),t.SpI(" ",e.name," "),t.R7$(2),t.Y8G("checked",0==o)("value",e.id)}}let O=(()=>{class n{constructor(){this.paymentTypeEvent=new t.bkB,this.paymentTypes=[{id:"2",name:"Mercadopago",icon:"assets/icons/mercado-pago.png"}]}onChange(e){this.paymentTypeEvent.emit(e)}static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-payments-selector"]],outputs:{paymentTypeEvent:"paymentTypeEvent"},decls:6,vars:1,consts:[[1,"payments-selector"],[1,"payments-selector__title"],[1,"payments-selector__options"],["class","payments-selector__options__item  payments-selector__options__divider",4,"ngFor","ngForOf"],[1,"payments-selector__options__item","payments-selector__options__divider"],[1,"payments-selector__options__item__group"],[1,"payments-selector__options__item__group__icon",3,"src"],[1,"payments-selector__options__item__group__name"],[1,"payments-selector__options__item__field"],["color","primary",3,"change","checked","value"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2," Medios de pago "),t.k0s(),t.j41(3,"div",2)(4,"mat-radio-group"),t.DNE(5,F,7,4,"div",3),t.k0s()()()),2&o&&(t.R7$(5),t.Y8G("ngForOf",i.paymentTypes))},dependencies:[l.Sq,h.VT,h._g],styles:[".payments-selector[_ngcontent-%COMP%]{padding:1rem 1rem .5rem;background:#fff}.payments-selector__title[_ngcontent-%COMP%]{font-weight:600}.payments-selector__options[_ngcontent-%COMP%]{display:flex;flex-direction:column}.payments-selector__options__divider[_ngcontent-%COMP%]:not(:last-child){border-bottom:#EBEBEB solid 1px}.payments-selector__options__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:.75rem}.payments-selector__options__item__group[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.payments-selector__options__item__group__icon[_ngcontent-%COMP%]{object-fit:cover;width:20px;height:20px}"]})}}return n})();var f=a(8399);let x=(()=>{class n{constructor(e,o){this.cartService=e,this.activatedRoute=o,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0,this.productsAmount=0}ngOnInit(){var e=this;return(0,u.A)(function*(){const o=yield(0,_._)(e.activatedRoute.data.pipe((0,p.T)(i=>i.cart)));e.currency=yield(0,_._)(e.activatedRoute.data.pipe((0,p.T)(i=>i.currency))),e.productsAmount=o.amount||0})()}static{this.\u0275fac=function(o){return new(o||n)(t.rXU(f.m),t.rXU(d.nX))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-resume"]],decls:16,vars:8,consts:[[1,"resume"],[1,"resume__title"],[1,"resume__detail"],[1,"resume__detail__item"],[1,"resume__total"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2," Resumen "),t.k0s(),t.j41(3,"div",2)(4,"div",3)(5,"div"),t.EFF(6," Productos "),t.k0s(),t.j41(7,"div"),t.EFF(8),t.nI1(9,"currency"),t.k0s()()(),t.j41(10,"div",4)(11,"div"),t.EFF(12," Total "),t.k0s(),t.j41(13,"div"),t.EFF(14),t.nI1(15,"currency"),t.k0s()()()),2&o&&(t.R7$(8),t.SpI(" ",t.i5U(9,2,i.productsAmount,i.currency)," "),t.R7$(6),t.SpI(" ",t.i5U(15,5,i.productsAmount,i.currency)," "))},dependencies:[l.oe],styles:[".resume[_ngcontent-%COMP%]{padding:1rem;background:#fff}.resume__title[_ngcontent-%COMP%]{font-weight:600}.resume__detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:1rem;gap:.25rem}.resume__detail__item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-size:.75rem}.resume__detail__item[_ngcontent-%COMP%]:last-child{padding-bottom:.5rem;border-bottom:#EBEBEB solid 1px}.resume__total[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-size:1rem;padding-top:.5rem;font-weight:600}"]})}}return n})();function E(n,s){if(1&n){const e=t.RV6();t.j41(0,"app-floating-button",8),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.goToMercadoPago())}),t.k0s()}if(2&n){const e=t.XpG(2);t.Y8G("loading",e.loading)}}function b(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",0),t.nrm(1,"app-navigator")(2,"div",1),t.j41(3,"div",2)(4,"div",3)(5,"div",4),t.EFF(6," Checkout "),t.k0s(),t.j41(7,"div",5),t.EFF(8),t.k0s()(),t.j41(9,"app-payments-selector",6),t.bIt("paymentTypeEvent",function(i){t.eBV(e);const c=t.XpG();return t.Njj(c.paymentTypeEvent(i))}),t.k0s(),t.nrm(10,"app-resume"),t.k0s(),t.nrm(11,"div",7),t.DNE(12,E,1,1),t.k0s()}if(2&n){let e;const o=t.XpG();t.R7$(8),t.SpI(" ",s.name," "),t.R7$(4),t.vxM(12,"2"===(e=o.paymentType.id)?12:-1)}}let R=(()=>{class n{constructor(e,o,i,c){this.activatedRoute=e,this.checkoutService=o,this.analytics=i,this.clientService=c,this.cartId=this.activatedRoute.snapshot.paramMap.get("id")||void 0,this.catalogId=this.activatedRoute.snapshot.queryParamMap.get("catalog")||void 0,this.storeId=this.activatedRoute.snapshot.queryParamMap.get("store")||void 0,this.loading=!1,this.paymentType={id:"2"},this.analytics.logEvent("checkout_view",{catalog:this.catalogId}),this.activatedRoute.data.pipe((0,p.T)(r=>r.cart)),this.store$=this.activatedRoute.data.pipe((0,p.T)(r=>r.store))}goToMercadoPago(){var e=this;return(0,u.A)(function*(){yield e.analytics.logEvent("checkout_go_to_pay",{catalogId:e.catalogId}),e.loading=!0;const{content:i}=yield(0,_._)(e.clientService.search("","google.com"));let[c]=i;e.checkoutService.postCheckout(e.cartId||"",e.storeId||"").subscribe({next:r=>{window.location.href=r.initPoint}}),e.loading=!1})()}paymentTypeEvent(e){this.paymentType=e}static{this.\u0275fac=function(o){return new(o||n)(t.rXU(d.nX),t.rXU(k),t.rXU(T.f_),t.rXU(M))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-checkout"]],decls:2,vars:3,consts:[[1,"checkout"],[1,"checkout__holder"],[1,"checkout__cards"],[1,"checkout__cards__header"],[1,"checkout__cards__header__title"],[1,"checkout__cards__header__subtitle"],[3,"paymentTypeEvent"],[1,"checkout__cards__footer"],["title","ir a mercadopago",3,"click","loading"]],template:function(o,i){if(1&o&&(t.DNE(0,b,13,2,"div",0),t.nI1(1,"async")),2&o){let c;t.vxM(0,(c=t.bMT(1,1,i.store$))?0:-1,c)}},dependencies:[v.d,P.g,O,x,l.Jj],styles:[".checkout[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.checkout__holder[_ngcontent-%COMP%]{background:#fff;height:3.75rem}@media (max-width: 768px){.checkout__holder[_ngcontent-%COMP%]{width:100%}}.checkout__cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}@media (min-width: 768px){.checkout__cards[_ngcontent-%COMP%]{width:60%}}.checkout__cards__header[_ngcontent-%COMP%]{padding:1rem;background-color:#fff}@media (min-width: 768px){.checkout__cards__header[_ngcontent-%COMP%]{border-radius:10px 10px 0 0}}.checkout__cards__header__title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.checkout__cards__footer[_ngcontent-%COMP%]{height:1.75rem;background-color:#fff;width:100%}@media (min-width: 768px){.checkout__cards__footer[_ngcontent-%COMP%]{border-radius:0 0 10px 10px;width:60%}}"]})}}return n})();var C=a(9213);let j=(()=>{class n{constructor(e,o){this.activatedRoute=e,this.cartService=o,this.availableTypes={success:{color:"#28a745",subtitle:"Felicitaciones, su pedido ya esta en proceso",title:"PEDIDO EXITOSO",icon:"done"},error:{color:"#dc3545",subtitle:"Algo salio mal en el checkout. Reintente mas tarde!",title:"PEDIDO ERRONEO",icon:"close"},default:{color:"#dc3545",subtitle:"Algo salio mal en el checkout. \nReintente mas tarde!",title:"PEDIDO ERRONEO",icon:"close"}},this.availableType=this.availableTypes.default,this.status=this.activatedRoute.snapshot.queryParamMap.get("status"),this.base_url=localStorage.getItem("base_url")}ngOnInit(){var e=this;return(0,u.A)(function*(){null!==e.status&&e.availableTypes[e.status]&&(e.availableType=e.availableTypes[e.status]),"success"===e.status&&(yield e.cartService.getApiItems(),e.cartService.deleteCart())})()}static{this.\u0275fac=function(o){return new(o||n)(t.rXU(d.nX),t.rXU(f.m))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-confirmation"]],decls:10,vars:7,consts:[[1,"confirmation"],[3,"customNavigation"],[1,"confirmation__logo"],[1,"confirmation__data"],[1,"confirmation__data__title"],[1,"confirmation__data__subtitle"]],template:function(o,i){1&o&&(t.j41(0,"div",0),t.nrm(1,"app-navigator",1),t.j41(2,"div",2)(3,"mat-icon"),t.EFF(4),t.k0s()(),t.j41(5,"div",3)(6,"div",4),t.EFF(7),t.k0s(),t.j41(8,"div",5),t.EFF(9),t.k0s()()()),2&o&&(t.muq("background-color: ",i.availableType.color,""),t.R7$(),t.Y8G("customNavigation",i.base_url||""),t.R7$(3),t.JRh(i.availableType.icon),t.R7$(3),t.SpI(" ",i.availableType.title," "),t.R7$(2),t.SpI(" ",i.availableType.subtitle," "))},dependencies:[v.d,C.An],styles:[".confirmation[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:2rem;align-items:center;height:100vh;color:#fff;background-color:#dc3545}.confirmation__logo[_ngcontent-%COMP%]{color:#fff;border-radius:100%;border:solid 5px #FFFFFF;display:flex;justify-content:center;align-items:center;width:75px;height:75px}.confirmation__data[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;justify-content:center;align-items:center}.confirmation__data__title[_ngcontent-%COMP%]{font-weight:600;font-size:1.5rem}.confirmation__data__subtitle[_ngcontent-%COMP%]{text-align:center;width:75%;color:#fff}"]})}}return n})();var I=a(2334),S=a(9631),$=a(8834),X=a(9417),U=a(573);const V=[{path:":id",component:R,resolve:{store:(n,s)=>{const e=n.queryParamMap.get("store")||void 0;return(0,t.WQX)(U.n).getStoreById(e||"")},cart:a(7562).D,currency:(n,s)=>(0,t.WQX)(f.m).getCurrency(n.queryParamMap.get("catalog")||"")}},{path:":id/confirmation",component:j}];let D=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[l.MD,d.iI.forChild(V),I.G,C.m_,h.Wk,S.fS,$.Hl,X.X1]})}}return n})()}}]);