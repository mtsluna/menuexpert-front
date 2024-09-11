import {Component, Inject, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {user} from "@angular/fire/auth";
import {Client} from "../../../../../interfaces/client";
import {ClientService} from "../../../../../services/client/client.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.scss']
})
export class UserCheckoutComponent implements OnInit {

  userGoogle: firebase.User;
  client: Client;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: { userGoogle: firebase.User, client: Client },
    private readonly clientService: ClientService
  ) {
    this.userGoogle = data.userGoogle;
    this.client = data.client;

    this.form = new FormGroup<any>({
      email: new FormControl({
        value: this.client?.email,
        disabled: !!this.client?.email
      }, {
        validators: [ Validators.required, Validators.email ],
      }),
      phone: new FormControl(this.client?.phone, {
        validators: [ Validators.required, Validators.pattern(/^\d{13}$/) ],
      }),
      address: new FormControl(this.client?.address, {
        validators: [ Validators.required ],
      })
    });
  }

  async ngOnInit(): Promise<void> {}

  async saveAndGo() {
    await lastValueFrom(this.clientService.put(this.client?.id || '', {
      ...this.client,
      ...this.form.getRawValue(),
      id: undefined
    }))
  }
}
