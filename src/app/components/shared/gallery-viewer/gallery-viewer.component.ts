import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {
  ButtonsConfig,
  ButtonsStrategy,
  DescriptionStrategy,
  Image,
  ModalGalleryService,
  ModalLibConfig
} from "@ks89/angular-modal-gallery";

@Component({
  selector: 'app-gallery-viewer',
  standalone: true,
    imports: [
        MatIcon,
        MatMiniFabButton
    ],
  templateUrl: './gallery-viewer.component.html',
  styleUrl: './gallery-viewer.component.scss'
})
export class GalleryViewerComponent {

  @Input()
  images: string[] = [];

  constructor(private modalGalleryService: ModalGalleryService) {
  }

  open() {

    if(this.images.length <= 0) {
      return;
    }

    this.modalGalleryService.open({
      id: 1,
      images: this.images.map((value, index) => new Image(index, { img: value })),
      currentImage: new Image(0, { img: this.images[0] }),
      libConfig: {
        currentImageConfig: {
          description: {
            strategy: DescriptionStrategy.ALWAYS_HIDDEN
          }
        }
      } as ModalLibConfig
    })
  }

}
