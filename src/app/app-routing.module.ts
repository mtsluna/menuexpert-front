import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/shared/not-found/not-found.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'detail', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) },
  { path: 'qr', loadChildren: () => import('./pages/qr/qr.module').then(m => m.QrModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
