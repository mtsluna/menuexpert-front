import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Option} from "../../interfaces/option";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartId: string | undefined = this.activatedRoute.snapshot.paramMap.get('cartId') || undefined;
  menuId: string | undefined = this.activatedRoute.snapshot.queryParamMap.get('menuId') || undefined;

  constructor(private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get items() {
    return this.cartService.getItems(this.menuId);
  }

  get currency() {
    if(this.items.length > 0) {
      // @ts-ignore
      return this.items[0].product.price.currency;
    }
    return ''
  }

  get price() {
    return this.cartService.getTotal(this.menuId);
  }

  checkout() {
    this.router.navigate([`/checkout/${this.cartId}`], {
      queryParams: {
        menuId: this.menuId
      }
    })
  }

}
