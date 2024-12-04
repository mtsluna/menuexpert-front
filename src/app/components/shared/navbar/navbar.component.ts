import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: SocialUser | undefined;
  image: string | undefined;
  loggedIn: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: SocialAuthService
  ) {
    const localUser = JSON.parse(localStorage.getItem('user') || '{}');

    if(!this.user && Object.keys(localUser).length) {
      this.user = localUser;
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
    this.user = undefined;
    localStorage.removeItem('user')
    await this.authService.signOut()
    this.cartService.clearCart();
    await this.cartService.getCartId();
  }
}
