import {Component, Inject, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.scss']
})
export class UserCheckoutComponent implements OnInit {

  userGoogle: firebase.User | undefined;
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: any) {
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
      address: new FormControl('', {
        validators: [ Validators.required ],
      })
    });
  }

  async ngOnInit(): Promise<void> {}
}
