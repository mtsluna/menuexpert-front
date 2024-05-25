import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {TranslateModule} from "@ngx-translate/core";
import {MatMenuModule} from "@angular/material/menu";
import { AllowedDevicesComponent } from './allowed-devices/allowed-devices.component';

@NgModule({
  declarations: [
    BrandComponent,
    LoaderComponent,
    NavbarComponent,
    NavigatorComponent,
    NotFoundComponent,
    FloatingButtonComponent,
    QuantitySelectorComponent,
    FooterComponent,
    InformationComponent,
    AllowedDevicesComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        NgOptimizedImage,
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatExpansionModule,
        TranslateModule,
        MatMenuModule
    ],
    exports: [
        BrandComponent,
        LoaderComponent,
        NavbarComponent,
        NavigatorComponent,
        NotFoundComponent,
        FloatingButtonComponent,
        QuantitySelectorComponent,
        FooterComponent,
        AllowedDevicesComponent
    ]
})
export class SharedModule { }
