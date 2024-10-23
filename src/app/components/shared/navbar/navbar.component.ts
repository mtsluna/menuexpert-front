import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";

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
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.setAuthUserData();
  }

  async login() {
    await this.router.navigate(['/auth/login']);
  }

  async logout() {
    await this.authService.logout();
    this.cartService.clearCart();
    await this.cartService.getCartId();
  }

  setAuthUserData() {
    this.authService.getSession().subscribe((data) => {
      this.loading = false;
      this.image = data?.photoURL || undefined;
      this.user = data;
    })
  }

  navigateToBaseUrl() {
    return localStorage.getItem('base_url');
  }
}
