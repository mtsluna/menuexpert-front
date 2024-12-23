import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../components/shared/shared.module";
import {SectionComponent} from "./components/section/section.component";
import {SectionSelectorComponent} from "./components/section-selector/section-selector.component";
import {VisualCardComponent} from "./components/card/visual-card/visual-card.component";
import {SimpleCardComponent} from "./components/card/simple-card/simple-card.component";
import { CatalogNotAvailableComponent } from './catalog-not-available/catalog-not-available.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIcon} from "@angular/material/icon";
import {NotFoundComponent} from "../../components/shared/not-found/not-found.component";
import {GoogleSigninButtonModule} from "@abacritt/angularx-social-login";

const routes: Routes = [
  {
    path: 'catalog/not-available',
    component: CatalogNotAvailableComponent
  },
  {
    path: 's/:catalogId',
    component: CatalogComponent
  },
  {
    path: ':storeName',
    component: CatalogComponent
  },
  {
    path: '',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    CatalogComponent,
    SectionComponent,
    SectionSelectorComponent,
    VisualCardComponent,
    SimpleCardComponent,
    CatalogNotAvailableComponent
  ],
  exports: [
    SectionComponent,
    SectionSelectorComponent
  ],
  imports: [
    MatSnackBarModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIcon,
    GoogleSigninButtonModule
  ]
})
export class CatalogModule { }
