import { Injectable } from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: SocialUser | null

  constructor(
    private readonly authService: SocialAuthService
  ) {
    if(localStorage.getItem('user')){
      const localUser = JSON.parse(localStorage.getItem('user') || '');
      if (localUser != null) {
        this.user = localUser
      }
    } else {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user))
      });
    }
  }
}
