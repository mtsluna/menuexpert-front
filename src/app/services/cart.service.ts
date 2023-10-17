import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Product} from "../interfaces/product";
import {CartItem} from "../interfaces/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<CartItem> = [];
  private subject: Subject<CartItem> = new Subject();

  constructor() { }

  addItem(cartItem: CartItem) {
    this.items.push(cartItem);
    this.subject.next(cartItem);
  }

  getItems() {
    return this.items;
  }
}
