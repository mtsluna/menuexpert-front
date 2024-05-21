import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./checkout.component";
import {ConfirmationComponent} from "./components/confirmation/confirmation.component";
import {SharedModule} from "../../../components/shared/shared.module";
import {PaymentsSelectorComponent} from "./components/payments-selector/payments-selector.component";
import {ResumeComponent} from "./components/resume/resume.component";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";

const routes: Routes = [
  {
    path: ':id',
    component: CheckoutComponent
  },
  {
    path: ':id/confirmation',
    component: ConfirmationComponent
  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
    ConfirmationComponent,
    PaymentsSelectorComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class CheckoutModule { }
