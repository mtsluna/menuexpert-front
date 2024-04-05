import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrandComponent} from "./brand/brand.component";
import {LoaderComponent} from "./loader/loader.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FloatingButtonComponent} from "./floating-button/floating-button.component";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {QuantitySelectorComponent} from "./quantity-selector/quantity-selector.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    BrandComponent,
    LoaderComponent,
    NavbarComponent,
    NavigatorComponent,
    NotFoundComponent,
    FloatingButtonComponent,
    QuantitySelectorComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ],
  exports: [
    BrandComponent,
    LoaderComponent,
    NavbarComponent,
    NavigatorComponent,
    NotFoundComponent,
    FloatingButtonComponent,
    QuantitySelectorComponent
  ]
})
export class SharedModule { }
