import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any | undefined;
  image: string | undefined;
  loading: boolean = true;

  constructor(
    public authService: AuthService,
    private cartService: CartService
  ) { }

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe({
      next: (data) => {
        console.log(data)
        this.user = data;
        this.image = data?.picture
        this.loading = false;
      }
    })
  }

  async login() {
    // this.authService.loginWithRedirect({
    //   authorizationParams: {
    //     screen_hint: 'login',
    //     prompt: 'select_account',
    //     display: 'page',
    //   }
    // })
  }

  async logout() {
    this.authService.logout({
      logoutParams: {
        returnTo: window.location.origin + '/qr',
      }
    });
    this.cartService.clearCart();
    await this.cartService.getCartId();
  }

  protected readonly document = document;
}
