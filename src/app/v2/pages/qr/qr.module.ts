import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QrComponent} from "./qr.component";
import { QrNotAvailableComponent } from './qr-not-available/qr-not-available.component';

const routes: Routes = [
  {
    path: 'not-available',
    component: QrNotAvailableComponent
  },
  {
    path: ':id',
    component: QrComponent
  }
];

@NgModule({
  declarations: [
    QrNotAvailableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QrModule { }
