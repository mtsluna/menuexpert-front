import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { SimpleCardComponent } from './components/card/simple-card/simple-card.component';
import { VisualCardComponent } from './components/card/visual-card/visual-card.component';
import { SectionComponent } from './components/section/section.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SectionSelectorComponent } from './components/section-selector/section-selector.component';
import { DetailComponent } from './pages/detail/detail.component';
import { BannerComponent } from './components/banner/banner.component';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    SimpleCardComponent,
    VisualCardComponent,
    SectionComponent,
    MenuComponent,
    NavbarComponent,
    SectionSelectorComponent,
    DetailComponent,
    BannerComponent,
    OptionSelectorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
