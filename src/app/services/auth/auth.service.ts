import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {}

  async login() {
    return this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  logout() {
    this.angularFireAuth.signOut()
  }

  getSession() {
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
