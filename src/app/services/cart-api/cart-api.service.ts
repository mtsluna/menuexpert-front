import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {ICartApiCreateResponse} from "./interfaces";
import {SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(
    private http: HttpClient,
  ) { }

  createCart(client: SocialUser | null, storeId: string): Observable<ICartApiCreateResponse> {
    return this.http.get<ICartApiCreateResponse>(backendConstants.baseUrl + '/carts/create', {
      params: {
        userId: client?.id || '',
        storeId: storeId
      }
    });
  }

  getCartByUser(userId: string): Observable<ICartApiCreateResponse> {
    return this.http.get<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${userId}/by-user-id`);
  }

  getCart(cartId: string): Observable<ICartApiCreateResponse> {
    return this.http.get<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${cartId}`);
  }

  addItem(cartId: string, cartItem: any): Observable<ICartApiCreateResponse> {
    return this.http.post<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${cartId}/item`, cartItem);
  }

  removeItem(cartId: string, itemId: string): Observable<ICartApiCreateResponse> {
    return this.http.delete<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${cartId}/item/${itemId}`);
  }

  updateCartOwner(cartId: string, userId: string): Observable<ICartApiCreateResponse> {
    return this.http.put<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${cartId}/update-cart-owner/${userId}`,{});
  }

  updateItem(cartId: string, cartItem: any): Observable<ICartApiCreateResponse> {
    return this.http.put<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${cartId}/item`, cartItem);
  }
}
