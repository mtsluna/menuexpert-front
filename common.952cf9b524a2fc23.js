"use strict";(self.webpackChunkshopexpert_front=self.webpackChunkshopexpert_front||[]).push([[76],{573:(g,_,e)=>{e.d(_,{n:()=>l});var s=e(1028),n=e(6354),a=e(4438),c=e(1626);let l=(()=>{class o{constructor(t){this.httpClient=t}getStoreByCatalogId(t){return this.httpClient.get(`${s.A.baseUrl}/stores/by-catalog/${t}`).pipe((0,n.T)(r=>(localStorage.setItem("store",JSON.stringify(r)),r)))}getStoreById(t){return this.httpClient.get(`${s.A.baseUrl}/stores/${t}`).pipe((0,n.T)(r=>(localStorage.setItem("store",JSON.stringify(r)),r)))}getStoreFromLocalStorage(){const t=localStorage.getItem("store")||"";return JSON.parse(t)}static#t=this.\u0275fac=function(r){return new(r||o)(a.KVO(c.Qq))};static#r=this.\u0275prov=a.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);