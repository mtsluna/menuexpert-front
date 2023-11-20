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

  addItem(cartItem: CartItem, menuId: string | undefined) {
    this.getCartId(menuId);
    this.items = this.getItems(menuId)

    cartItem.id = uuid.v4();
    this.items.push(cartItem);
    this.subject.next(cartItem);

    this.persistCart(menuId);
  }

  persistCart(menuId: string | undefined) {
    localStorage.setItem(`cart-content__${menuId}`, JSON.stringify(this.items));
  }

  getCartId(menuId: string | undefined): string {
    const cartId = localStorage.getItem(`cartId__${menuId}`);

    if(!cartId) {
      localStorage.setItem(`cartId__${menuId}`, uuid.v4());
    }

    return localStorage.getItem(`cartId__${menuId}`) || '';
  }

  getItems(menuId: string | undefined): Array<CartItem> {
    return JSON.parse(localStorage.getItem(`cart-content__${menuId}`) || '[]')
  }

  getItem(cartItem: string, menuId: string | undefined): CartItem {
    const items = this.getItems(menuId);

    const index = items.findIndex((cart) => cart.id == cartItem);
    return items[index];
  }

  getRawItems(menuId: string | undefined) {
    const items = this.getItems(menuId);

    return items.map((cartItem) => ({
      ...cartItem,
      selections: cartItem.selections.map((selection) => ({
        ...selection,
        selected: selection.selected.filter((selected) => selected != false)
      }))
    }))
  }

  updateItem(cartItem: CartItem, menuId: string | undefined) {
    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    this.items[index] = cartItem;

    this.persistCart(menuId);
  }

  removeItem(cartItem: CartItem, menuId: string | undefined) {
    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }

    this.persistCart(menuId);
  }

  getTotal(menuId: string | undefined) {
    return this.getItems(menuId).map((item) => {
      const extras = item.selections.map((value) => {
        return (value.selected.filter((value) => value !== false) as Array<Option>)
          .map((value) => value.price)
          .reduce((acc, next) => acc + next.amount, 0)
      }).reduce((acc, next) => acc + next, 0);

      return ((item.product?.price.amount || 0) + extras) * item.quantity;
    }).reduce((acc, next) => acc + next, 0);
  }

  getCurrency(menuId: string | undefined) {
    const items = this.getItems(menuId);

    if(items.length > 0) {
      // @ts-ignore
      return items[0].product.price.currency;
    }
    return ''
  }
}
