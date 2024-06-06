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
import { UserCheckoutComponent } from './components/user-checkout/user-checkout.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {MatDialogClose} from "@angular/material/dialog";
import {checkoutStoreResolver} from "./resolvers/store/checkout-store-resolver.resolver";

const routes: Routes = [
  {
    path: ':id',
    component: CheckoutComponent,
    resolve: {
      store: checkoutStoreResolver
    }
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
    ResumeComponent,
    UserCheckoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatIconModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        MatDialogClose
    ]
})
export class CheckoutModule { }
