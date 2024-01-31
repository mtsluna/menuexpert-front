import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./pages/menu/menu.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {CartComponent} from "./pages/cart/cart.component";
import {LoaderComponent} from "./components/shared/loader/loader.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {ConfirmationComponent} from "./pages/checkout/confirmation/confirmation.component";
import {NotFoundComponent} from "./components/shared/not-found/not-found.component";

const routes: Routes = [
  { path: 'menu/:menuId', component: MenuComponent },
  { path: 'menu/:menuId/detail/:productId', component: DetailComponent },
  { path: 'cart/:cartId', component: CartComponent },
  { path: 'checkout/:cartId/confirmation', component: ConfirmationComponent },
  { path: 'checkout/:cartId', component: CheckoutComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }