import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {ICartApiCreateResponse} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(
    private http: HttpClient
  ) { }

  createCart(): Observable<ICartApiCreateResponse> {
    return this.http.get<ICartApiCreateResponse>(backendConstants.baseUrl + '/carts/create');
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

  updateItem(cartId: string, cartItem: any): Observable<ICartApiCreateResponse> {
    return this.http.put<ICartApiCreateResponse>(backendConstants.baseUrl + `/carts/${cartId}/item`, cartItem);
  }
}
