import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
  catalogId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('catalog') || undefined;

  constructor(private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get items() {
    return this.cartService.getItems(this.catalogId);
  }

  get currency() {
    if(this.items.length > 0) {
      // @ts-ignore
      return this.items[0].product.price.currency.code;
    }
    return ''
  }

  get price() {
    return this.cartService.getTotal(this.catalogId);
  }

  checkout() {
    this.router.navigate([`/checkout/${this.cartId}`], {
      queryParams: {
        catalog: this.catalogId
      }
    })
  }

}
