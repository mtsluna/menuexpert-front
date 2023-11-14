import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Checkout} from "../../interfaces/checkout";
import {Observable} from "rxjs";
import { get } from 'scriptjs';
import {CartItem} from "../../interfaces/cart-item";
import {Tip} from "../../interfaces/tip";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService implements OnInit {

  constructor(private httpClient: HttpClient) { }

  postCheckout(cartId: string, items: Array<CartItem>, tip: Tip): Observable<Checkout> {
    return this.httpClient.post<Checkout>(`${backendConstants.baseUrl}/checkout`, {
      cartId,
      items,
      tip
    })
  }

  ngOnInit(): void {
    // get("https://sdk.mercadopago.com/js/v2", () => {
    //
    // });
  }
}
