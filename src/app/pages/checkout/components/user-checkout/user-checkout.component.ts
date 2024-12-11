import {Component, Inject, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {user} from "@angular/fire/auth";
import {Client} from "../../../../interfaces/client";
import {ClientService} from "../../../../services/client/client.service";
import {lastValueFrom} from "rxjs";
import {SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.scss']
})
export class UserCheckoutComponent implements OnInit {

  user: SocialUser;
  client: Client;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: { user: SocialUser, client: Client },
    private readonly clientService: ClientService
  ) {
    this.user = data.user;
    this.client = data.client;

    this.form = new FormGroup<any>({
      email: new FormControl({
        value: this.user?.email,
        disabled: !!this.user?.email
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
    await lastValueFrom(this.clientService.post({
      email: this.form?.get('email')?.value || '',
      phone: this.form?.get('phone')?.value || '',
      address: this.form?.get('address')?.value || '',
      source: this.user.provider,
      externalId: this.user.id,
      name: this.user.name
    }))
  }
}
