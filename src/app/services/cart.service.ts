import { Injectable } from '@angular/core';
import {reduce, Subject} from "rxjs";
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

  addItem(cartItem: CartItem, catalogId: string | undefined) {
    this.getCartId(catalogId);
    this.items = this.getItems(catalogId)

    cartItem.id = uuid.v4();
    this.items.push(cartItem);
    this.subject.next(cartItem);

    this.persistCart(catalogId);
  }

  persistCart(catalogId: string | undefined) {
    localStorage.setItem(`cart-content__${catalogId}`, JSON.stringify(this.items));
  }

  getCartId(catalogId: string | undefined): string {
    const cartId = localStorage.getItem(`cartId__${catalogId}`);

    if(!cartId) {
      localStorage.setItem(`cartId__${catalogId}`, uuid.v4());
    }

    return localStorage.getItem(`cartId__${catalogId}`) || '';
  }

  getItems(catalogId: string | undefined): Array<CartItem> {
    return JSON.parse(localStorage.getItem(`cart-content__${catalogId}`) || '[]')
  }

  getItem(cartItem: string, catalogId: string | undefined): CartItem {
    const items = this.getItems(catalogId);

    const index = items.findIndex((cart) => cart.id == cartItem);
    return items[index];
  }

  getRawItems(catalogId: string | undefined) {
    const items = this.getItems(catalogId);

    return items.map((cartItem) => ({
      ...cartItem,
      selections: cartItem.selections.map((selection) => ({
        ...selection,
        selected: selection.selected.filter((selected) => selected != false)
      }))
    }))
  }

  updateItem(cartItem: CartItem, catalogId: string | undefined) {

    if(!this.items.length) {
      this.items = this.getItems(catalogId);
    }

    const index = this.items.findIndex((cart) => cart.id == cartItem.id);

    this.items[index] = cartItem;

    this.persistCart(catalogId);
  }

  removeItem(cartItem: CartItem, catalogId: string | undefined) {
    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }

    this.persistCart(catalogId);
  }

  getTotal(catalogId: string | undefined) {
    return this.getItems(catalogId).map((item) => {
      const extras = item.selections.map((value) => {
        return (value.selected.filter((value) => value !== false) as Array<Option>)
          .map((value) => value.price)
          .reduce((acc, next) => acc + next.amount - (next.discount || 0), 0)
      }).reduce((acc, next) => acc + next, 0);

      return ((item.product?.price.amount || 0) - (item.product?.price.discount || 0) + extras) * item.quantity;
    }).reduce((acc, next) => acc + next, 0);
  }

  getCurrency(catalogId: string | undefined) {
    const items = this.getItems(catalogId);

    if(items.length > 0) {
      // @ts-ignore
      return items[0].product.price.currency.code;
    }
    return ''
  }
}
