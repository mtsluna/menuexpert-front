import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart.component";
import {ResumeCardComponent} from "./components/resume-card/resume-card.component";
import {SharedModule} from "../../components/shared/shared.module";
import {cartResolver} from "./resolvers/cart.resolver";

const routes: Routes = [
  {
    path: ':id',
    component: CartComponent,
    resolve: {
      cart: cartResolver
    }
  }
];

@NgModule({
  declarations: [
    ResumeCardComponent,
    CartComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CartModule { }
