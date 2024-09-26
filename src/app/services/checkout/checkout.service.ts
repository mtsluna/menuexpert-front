import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Checkout} from "../../interfaces/checkout";
import {Observable} from "rxjs";
import {CartItem} from "../../interfaces/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient: HttpClient) { }

  postCheckout(cartId: string, storeId: string): Observable<Checkout> {
    return this.httpClient.post<Checkout>(`${backendConstants.baseUrl}/checkout`, {
      cartId,
      storeId
    })
  }

}
