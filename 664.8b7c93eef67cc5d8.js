"use strict";(self.webpackChunkmenuexpert_front=self.webpackChunkmenuexpert_front||[]).push([[664],{5664:(q,u,r)=>{r.r(u),r.d(u,{QrModule:()=>b});var v=r(177),s=r(2791),f=r(467),n=r(4438),m=r(1028),p=r(1626);let h=(()=>{class t{constructor(a){this.httpClient=a}getDefaultCatalogByQr(a){return this.httpClient.get(`${m.A.baseUrl}/qrs/${a}`)}static#t=this.\u0275fac=function(e){return new(e||t)(n.KVO(p.Qq))};static#n=this.\u0275prov=n.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var g=r(6978);const y=[{path:"not-available",component:(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275cmp=n.VBU({type:t,selectors:[["app-qr-not-available"]],decls:7,vars:0,consts:[[1,"qr-not-available"],["src","assets/images/disabled-qr.svg","alt","QR not available",1,"qr-not-available__image"],[1,"qr-not-available__content"],[1,"qr-not-available__content__title"],[1,"qr-not-available__content__subtitle"]],template:function(e,l){1&e&&(n.j41(0,"div",0),n.nrm(1,"img",1),n.j41(2,"div",2)(3,"div",3),n.EFF(4," QR Deshabilitado "),n.k0s(),n.j41(5,"div",4),n.EFF(6," Este QR se encuentra momentaneamente deshabilitado "),n.k0s()()())},styles:[".qr-not-available[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;gap:2rem}.qr-not-available__image[_ngcontent-%COMP%]{width:100px}.qr-not-available__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.qr-not-available__content__title[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:600}.qr-not-available__content__subtitle[_ngcontent-%COMP%]{font-size:16px;color:#989292;text-align:center}"]})}return t})()},{path:":id",component:(()=>{class t{constructor(a,e,l,C){var i=this;this.qrService=a,this.activatedRoute=e,this.router=l,this.analytics=C;const d=this.activatedRoute.snapshot.paramMap.get("id")||"";var c;this.qrService.getDefaultCatalogByQr(d).subscribe({next:(c=(0,f.A)(function*(o){i.analytics.logEvent("qr_scan",{qrId:d,storeId:o.store.id}),o.isActive?yield i.router.navigate([`/s/${o.store.url}`],{queryParams:{qr:o.id,catalog:o.defaultCatalog.id,store:o.store.id}}):yield i.router.navigate(["qr/not-available"])}),function(x){return c.apply(this,arguments)}),error:function(){var c=(0,f.A)(function*(o){yield i.router.navigate(["not-found"])});return function(x){return c.apply(this,arguments)}}()})}static#t=this.\u0275fac=function(e){return new(e||t)(n.rXU(h),n.rXU(s.nX),n.rXU(s.Ix),n.rXU(g.f_))};static#n=this.\u0275cmp=n.VBU({type:t,selectors:[["app-qr"]],decls:0,vars:0,template:function(e,l){}})}return t})()}];let b=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=n.$C({type:t});static#e=this.\u0275inj=n.G2t({imports:[v.MD,s.iI.forChild(y)]})}return t})()}}]);