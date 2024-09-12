import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {ICartApiCreateResponse} from "../../../services/cart-api/interfaces";
import {debounceTime, Subject} from "rxjs";

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
  private clickSubject = new Subject<void>();

  constructor(private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.clickSubject.pipe(
      debounceTime(100),
    ).subscribe(() => {
      this.reloadItems();
    });
  }

  async ngOnInit() {
    this.itemResponse = await this.cartService.getApiItems(this.catalogId);
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
    this.itemResponse = await this.cartService.getApiItems(this.catalogId);
    this.price = this.itemResponse.amount || 0;
  }

  handleCartItemUpdate() {
    this.clickSubject.next();
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
