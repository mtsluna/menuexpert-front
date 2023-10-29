import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {CartItem} from "../interfaces/cart-item";
import * as uuid from 'uuid';
import {Option} from "../interfaces/option";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<CartItem> = [];
  private subject: Subject<CartItem> = new Subject();

  constructor() { }

  addItem(cartItem: CartItem) {
    cartItem.id = uuid.v4();
    this.items.push(cartItem);
    this.subject.next(cartItem);
  }

  getItems() {
    return this.items;
  }

  getItem(cartItem: string): CartItem {
    const index = this.items.findIndex((cart) => cart.id == cartItem);
    return this.items[index];
  }

  updateItem(cartItem: CartItem) {
    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    this.items[index] = cartItem;
  }

  removeItem(cartItem: CartItem) {
    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotal() {
    return this.items.map((item) => {
      const extras = item.selections.map((value) => {
        return (value.selected.filter((value) => value !== false) as Array<Option>)
          .map((value) => value.price)
          .reduce((acc, next) => acc + next.amount, 0)
      }).reduce((acc, next) => acc + next, 0);

      return ((item.product?.price.amount || 0) + extras) * item.quantity;
    }).reduce((acc, next) => acc + next, 0);
  }

  getCurrency() {
    if(this.items.length > 0) {
      // @ts-ignore
      return this.items[0].product.price.currency;
    }
    return ''
  }
}
