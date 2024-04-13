import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./pages/cart/cart.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {ConfirmationComponent} from "./pages/checkout/confirmation/confirmation.component";
import {NotFoundComponent} from "./components/shared/not-found/not-found.component";

const routes: Routes = [
  { path: 's', loadChildren: () => import('./v2/pages/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'detail', loadChildren: () => import('./v2/pages/detail/detail.module').then(m => m.DetailModule) },
  { path: 'qr', loadChildren: () => import('./v2/pages/qr/qr.module').then(m => m.QrModule) },
  { path: 'cart/:cartId', component: CartComponent },
  { path: 'checkout/:cartId/confirmation', component: ConfirmationComponent },
  { path: 'checkout/:cartId', component: CheckoutComponent },
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
