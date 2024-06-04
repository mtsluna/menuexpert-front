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
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingInterceptor} from "./middlewares/loading.interceptor";
import {MatSidenavModule} from "@angular/material/sidenav";
import { QrComponent } from './v2/pages/qr/qr.component';
import {SharedModule} from "./components/shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {environment} from "../environments/environments";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {CartModule} from "./v2/pages/cart/cart.module";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";
import {ScreenTrackingService, UserTrackingService} from "@angular/fire/analytics";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailComponent,
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
    AngularFireAnalyticsModule,
    NgxMaskDirective,
    NgxMaskPipe,
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
    CartModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    provideNgxMask(),
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
