import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Store} from "../../../interfaces/store";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  store!:Store;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Store) {
    this.store = data;
  }

  ngOnInit(): void {
  }

}
