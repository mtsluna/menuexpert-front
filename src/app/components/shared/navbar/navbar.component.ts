import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../../services/auth/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  image: string | undefined;
  loggedIn: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: SocialAuthService,
    protected userService: UserService,
    private snackBar: MatSnackBar
  ) {

    if(localStorage.getItem('user')){
      const localUser = JSON.parse(localStorage.getItem('user') || '');
      if (localUser != null) {
        this.userService.user = localUser
        this.loggedIn = true;
      }
    }

  }

  async ngOnInit(): Promise<void> {
    this.authService.authState.subscribe((user) => {
      this.userService.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('user', JSON.stringify(user))
    });
  }

  async logout() {
    this.snackBar.open(
      'Cerraste sesión',
      'Cerrar',
      {
        duration: 3000,
      }
    )
    this.userService.user = null;
    localStorage.removeItem('user')
    await this.authService.signOut()
    this.cartService.clearCart();
    await this.cartService.getCartId();
  }
}
