import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { MenuComponent } from './pages/menu/menu.component';
import { DetailComponent } from './pages/detail/detail.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CartComponent } from './pages/cart/cart.component';
import {MatIconModule} from "@angular/material/icon";
import { ResumeCardComponent } from './components/card/resume-card/resume-card.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentsSelectorComponent } from './components/shared/payments-selector/payments-selector.component';
import { TipsSelectorComponent } from './components/shared/tips-selector/tips-selector.component';
import { ResumeComponent } from './components/shared/resume/resume.component';
import {LoadingInterceptor} from "./middlewares/loading.interceptor";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ConfirmationComponent } from './pages/checkout/confirmation/confirmation.component';
import { QrComponent } from './v2/pages/qr/qr.component';
import {SharedModule} from "./components/shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {environment} from "../environments/environments";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailComponent,
    CartComponent,
    ResumeCardComponent,
    CheckoutComponent,
    PaymentsSelectorComponent,
    TipsSelectorComponent,
    ResumeComponent,
    ConfirmationComponent,
    QrComponent
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
    MatProgressSpinnerModule,
    MatSidenavModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        },
        defaultLanguage: 'es'
      }
    ),
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
