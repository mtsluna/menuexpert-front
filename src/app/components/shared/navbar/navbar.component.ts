import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {ActivatedRoute} from "@angular/router";
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
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  async ngOnInit(): Promise<void> {

    this.setAuthUserData();

  }

  async login() {
    const auth = await this.authService.login();
    this.image = (auth.additionalUserInfo?.profile as any)['picture'];
    const catalogId = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;

    if(catalogId) {
      await this.cartService.getCartId(catalogId);
    }
  }

  logout() {
    this.authService.logout();
    this.cartService.clearCart();
  }

  setAuthUserData() {
    this.authService.getSession().subscribe((data) => {
      this.loading = false;
      this.image = data?.photoURL || undefined;
      this.user = data;
    })
  }

}
