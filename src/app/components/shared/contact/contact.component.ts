import {Component, Inject} from '@angular/core';
import firebase from "firebase/compat";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContactService} from "../../../services/contact/contact.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  storeId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('store') || undefined;

  userGoogle: firebase.User | undefined;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: any,
    private readonly dialogRef: MatDialogRef<ContactComponent>,
    private readonly contactService: ContactService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.userGoogle = data.userGoogle;

    this.form = new FormGroup<any>({
      email: new FormControl({
        value: this.userGoogle?.email,
        disabled: !!this.userGoogle?.email
      }, {
        validators: [ Validators.required, Validators.email ],
      }),
      phone: new FormControl({
        value: this.userGoogle?.phoneNumber,
        disabled: !!this.userGoogle?.phoneNumber
      }, {
        validators: [ Validators.required, Validators.pattern(/^\d{13}$/) ],
      }),
      observation: new FormControl('', {
        validators: [ Validators.required ],
      }),
      type: new FormControl('', {
        validators: [ Validators.required ],
      }),
    });
  }

  async ngOnInit(): Promise<void> {}

  send() {
    this.contactService.post({
      ...this.form.getRawValue(),
      storeId: this.storeId,
      catalogId: this.catalogId
    }).subscribe({
      next: (data) => {
        this.dialogRef.close({
          status: 'success',
          message: `El formulario ha sido enviado correctamente!`
        })
      },
      error: (_) => {
        this.dialogRef.close({
          status: 'error',
          error: 'Hubo un error al enviar el contacto'
        })
      }
    })
  }

}
