"use strict";(self.webpackChunkmenuexpert_front=self.webpackChunkmenuexpert_front||[]).push([[592],{230:(S,a,r)=>{r.d(a,{d:()=>l});var s=r(9806),_=r(4004),o=r(4650),c=r(529);let l=(()=>{class e{constructor(t){this.httpClient=t}getStoreByCatalogId(t){return this.httpClient.get(`${s.Z.baseUrl}/stores/by-catalog/${t}`).pipe((0,_.U)(n=>(localStorage.setItem("store",JSON.stringify(n)),n)))}getStoreFromLocalStorage(){const t=localStorage.getItem("store")||"";return JSON.parse(t)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(c.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);