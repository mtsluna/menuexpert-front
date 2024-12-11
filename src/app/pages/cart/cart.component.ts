import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {ICartApiCreateResponse} from "../../services/cart-api/interfaces";
import {debounceTime, firstValueFrom, Observable, skip, skipWhile, Subject} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {CartItem} from "../../interfaces/cart-item";
import {Store} from "../../interfaces/store";
import {map} from "rxjs/operators";
import {cartResolver} from "./resolvers/cart.resolver";
import {UserService} from "../../services/auth/user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  storeId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('store') || undefined;
  cart!: ICartApiCreateResponse;
  price: number = 0;
  private clickSubject = new Subject<any>();

  constructor(
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public userService: UserService
  ) {
    this.clickSubject.pipe(
      skipWhile(event => event === 'skip'),
      debounceTime(500)
    ).subscribe(() => {
      this.reloadItems();
    });
  }

  async ngOnInit() {
    this.cart = await firstValueFrom(this.activatedRoute.data.pipe(map(data => data['cart'])));

    this.price = this.cart.amount || 0;
  }

  get currency() {
    if(this.cart?.items?.length > 0) {
      // @ts-ignore
      return this.itemResponse?.items[0].product.price.currency.code;
    }
    return ''
  }

  async reloadItems() {
    this.cart = await this.cartService.getApiItems();
    this.price = this.cart.amount || 0;
  }

  async handleCartItemUpdate(event: { cartItem: CartItem, action: string }) {
    if(event.action === 'remove') {
      this.cart.items = this.cart.items.filter((item) => item.id !== event.cartItem.id);
      await this.cartService.removeItem(event.cartItem);
      this.clickSubject.next('skip')
    } else {
      this.clickSubject.next('proceed');
    }
  }

  trackByFn(index: number, item:any) {
    return item.id;
  }

  checkout() {
    this.router.navigate([`/checkout/${this.cartId}`], {
      queryParams: {
        catalog: this.catalogId,
        store: this.storeId
      }
    })
  }

}
