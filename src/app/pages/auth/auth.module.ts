import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../components/shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {MatDivider} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {authGuard} from "./guards/auth.guard";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {NgxMaskDirective} from "ngx-mask";


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [authGuard],
  }
]


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatDivider,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatDialogModule,
    MatIcon,
    MatMiniFabButton,
    NgxMaskDirective,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class AuthModule {
}
