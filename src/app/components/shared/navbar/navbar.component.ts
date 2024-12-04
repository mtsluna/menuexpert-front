import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  user: SocialUser | undefined;
  image: string | undefined;
  loggedIn: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: SocialAuthService
  ) {

    console.log(this.user)
    if(!this.user) {

      console.log('No user found');

      this.user = JSON.parse(localStorage.getItem('user') || '')

      console.log(this.user)
    }

  }

  async ngOnInit(): Promise<void> {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('user', JSON.stringify(user))
    });
  }

  async logout() {
    await this.authService.signOut()
    this.cartService.clearCart();
    await this.cartService.getCartId();
  }
}
