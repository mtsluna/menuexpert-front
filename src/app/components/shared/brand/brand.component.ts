import {Component, Input} from '@angular/core';
import {Store} from "../../../interfaces/store";
import {MatDialog} from "@angular/material/dialog";
import {InformationComponent} from "../information/information.component";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  @Input()
  store!:Store;

  constructor(public dialog: MatDialog) {}

  openInformation() {
    const dialogRef = this.dialog.open(InformationComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: this.store
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
