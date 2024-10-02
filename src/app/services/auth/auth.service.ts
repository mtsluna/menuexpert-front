import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {Client} from "../../interfaces/client";
import {ClientService} from "../client/client.service";
import {lastValueFrom, Observable} from "rxjs";
import firebase from "firebase/compat";
import {CartService} from "../cart.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private clientService: ClientService
  ) {}

  async login() {
    const user = await this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());

    const pageable = await lastValueFrom(this.clientService.search(user.user?.uid || '', 'google.com'));

    if(user.additionalUserInfo?.isNewUser || (user.additionalUserInfo && pageable.empty)) {
      await lastValueFrom(this.clientService.post({
        email: user.user?.email || undefined,
        externalId: user.user?.uid,
        name: user.user?.displayName || undefined,
        source: user.additionalUserInfo.providerId,
      }))
    } else if(!pageable.empty && user.additionalUserInfo) {
      await lastValueFrom(this.clientService.put(pageable?.content[0].id || '', {
        ...pageable.content[0],
        email: user.user?.email || undefined,
        externalId: user.user?.uid,
        name: user.user?.displayName || undefined,
        source: user.additionalUserInfo.providerId,
        id: undefined
      }))
    }

    return user;
  }

  async logout() {
    await this.angularFireAuth.signOut()
  }

  getSession(): Observable<firebase.User | null> {
    return this.angularFireAuth.user;
  }

  getUser() {
    return this.angularFireAuth.user
  }

  hasUser() {
    const user = this.angularFireAuth.user

    return !!user;
  }
}
