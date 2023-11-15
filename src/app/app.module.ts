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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { ImageComponent } from './components/image/image.component';
import { ObservationComponent } from './components/observation/observation.component';
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CartComponent } from './pages/cart/cart.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import {MatIconModule} from "@angular/material/icon";
import { ResumeCardComponent } from './components/card/resume-card/resume-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NavigatorComponent } from './components/shared/navigator/navigator.component';
import {MatButtonModule} from "@angular/material/button";
import { LoaderComponent } from './components/shared/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentsSelectorComponent } from './components/shared/payments-selector/payments-selector.component';
import { TipsSelectorComponent } from './components/shared/tips-selector/tips-selector.component';
import { ResumeComponent } from './components/shared/resume/resume.component';
import {LoadingInterceptor} from "./middlewares/loading.interceptor";

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
    OptionSelectorComponent,
    FloatingButtonComponent,
    ImageComponent,
    ObservationComponent,
    CartComponent,
    QuantitySelectorComponent,
    ResumeCardComponent,
    NavigatorComponent,
    LoaderComponent,
    CheckoutComponent,
    PaymentsSelectorComponent,
    TipsSelectorComponent,
    ResumeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
