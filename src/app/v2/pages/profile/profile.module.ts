import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QrNotAvailableComponent} from "../qr/qr-not-available/qr-not-available.component";
import {QrComponent} from "../qr/qr.component";
import {ProfileComponent} from "./profile.component";
import {SharedModule} from "../../../components/shared/shared.module";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIcon,
    MatMiniFabButton,
    MatDivider,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardContent
  ]
})
export class ProfileModule { }
