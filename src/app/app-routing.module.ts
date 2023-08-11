import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./pages/menu/menu.component";
import {DetailComponent} from "./pages/detail/detail.component";

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'detail', component: DetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
