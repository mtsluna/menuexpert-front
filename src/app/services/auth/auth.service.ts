import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ClientService} from "../client/client.service";
import {Observable} from "rxjs";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private clientService: ClientService
  ) {}



  async login() {
    // const user = await this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
    //
    // const pageable = await lastValueFrom(this.clientService.search(user.user?.uid || '', 'google.com'));
    //
    // if(user.additionalUserInfo?.isNewUser || (user.additionalUserInfo && pageable.empty)) {
    //   await lastValueFrom(this.clientService.post({
    //     email: user.user?.email || undefined,
    //     externalId: user.user?.uid,
    //     name: user.user?.displayName || undefined,
    //     source: user.additionalUserInfo.providerId,
    //   }))
    // } else if(!pageable.empty && user.additionalUserInfo) {
    //   await lastValueFrom(this.clientService.put(pageable?.content[0].id || '', {
    //     ...pageable.content[0],
    //     email: user.user?.email || undefined,
    //     externalId: user.user?.uid,
    //     name: user.user?.displayName || undefined,
    //     source: user.additionalUserInfo.providerId,
    //     id: undefined
    //   }))
    // }
    //
    // return user;
    return undefined;
  }

  async loginWithEmail(email: string, password: string) {
    try {
      const userCredential = await this.angularFireAuth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error logging in with email and password', error);
      throw error;
    }
  }

  async registerWithEmail(email: string, password: string) {
    try {
      const userCredential = await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error registering with email and password', error);
      throw error;
    }
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
