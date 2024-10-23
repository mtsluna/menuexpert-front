import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  @Input() displayForm: string = 'login';
  modal: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDiaglogRef: MatDialogRef<AuthComponent>
  ) {
    if(data.displayForm && data.modal) {
      this.displayForm = data.displayForm;
      this.modal = data.modal;
    }
  }

  handleEvent(event: any) {
    this.matDiaglogRef.close(event);
  }

}
