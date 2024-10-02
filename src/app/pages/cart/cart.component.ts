import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {ICartApiCreateResponse} from "../../services/cart-api/interfaces";
import {debounceTime, skip, skipWhile, Subject} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {CartItem} from "../../interfaces/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;
  storeId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('store') || undefined;
  itemResponse!: ICartApiCreateResponse;
  price: number = 0;
  private clickSubject = new Subject<any>();

  constructor(private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.clickSubject.pipe(
      skipWhile(event => event === 'skip'),
      debounceTime(500)
    ).subscribe(() => {
      this.reloadItems();
    });
  }

  async ngOnInit() {
    this.itemResponse = await this.cartService.getApiItems();
    this.price = this.itemResponse.amount || 0;
  }

  get currency() {
    if(this.itemResponse?.items?.length > 0) {
      // @ts-ignore
      return this.itemResponse?.items[0].product.price.currency.code;
    }
    return ''
  }

  async reloadItems() {
    this.itemResponse = await this.cartService.getApiItems();
    this.price = this.itemResponse.amount || 0;
  }

  async handleCartItemUpdate(event: { cartItem: CartItem, action: string }) {
    if(event.action === 'remove') {
      this.itemResponse.items = this.itemResponse.items.filter((item) => item.id !== event.cartItem.id);
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
