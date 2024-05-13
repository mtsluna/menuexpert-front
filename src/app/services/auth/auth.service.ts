import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  async login() {
    return this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  logout() {
    this.angularFireAuth.signOut()
  }

  getSession() {
    return this.angularFireAuth.user;
  }
}
