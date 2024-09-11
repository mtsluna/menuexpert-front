import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {firstValueFrom} from "rxjs";
import {ICartApiCreateResponse} from "../../../services/cart-api/interfaces";

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

  constructor(private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.itemResponse = await firstValueFrom(await this.cartService.getApiItems(this.catalogId));
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
    this.itemResponse = await firstValueFrom(await this.cartService.getApiItems(this.catalogId));
    this.price = this.itemResponse.amount || 0;
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
