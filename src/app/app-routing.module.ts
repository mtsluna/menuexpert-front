import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./pages/menu/menu.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {CartComponent} from "./pages/cart/cart.component";

const routes: Routes = [
  { path: 'menu/:menuId', component: MenuComponent },
  { path: 'menu/:menuId/detail/:detailId', component: DetailComponent },
  { path: 'cart/:cartId', component: CartComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
