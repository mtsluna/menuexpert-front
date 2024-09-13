import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DetailComponent} from "./detail.component";
import {SharedModule} from "../../components/shared/shared.module";
import {ImageComponent} from "./components/image/image.component";
import {BannerComponent} from "./components/banner/banner.component";
import {ObservationComponent} from "./components/observation/observation.component";
import {OptionSelectorComponent} from "./components/option-selector/option-selector.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {GalleryViewerComponent} from "../../components/shared/gallery-viewer/gallery-viewer.component";

const routes: Routes = [
  {
    path: ':productId',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [
    DetailComponent,
    ImageComponent,
    BannerComponent,
    ObservationComponent,
    OptionSelectorComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatIconModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatRadioModule,
        GalleryViewerComponent
    ]
})
export class DetailModule { }
