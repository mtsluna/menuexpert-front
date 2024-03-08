import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../components/shared/shared.module";
import {SectionComponent} from "./components/section/section.component";
import {SectionSelectorComponent} from "./components/section-selector/section-selector.component";
import {VisualCardComponent} from "./components/card/visual-card/visual-card.component";
import {SimpleCardComponent} from "./components/card/simple-card/simple-card.component";

const routes: Routes = [
  {
    path: ':catalogId',
    component: CatalogComponent
  }
];

@NgModule({
  declarations: [
    CatalogComponent,
    SectionComponent,
    SectionSelectorComponent,
    VisualCardComponent,
    SimpleCardComponent
  ],
  exports: [
    SectionComponent,
    SectionSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CatalogModule { }
