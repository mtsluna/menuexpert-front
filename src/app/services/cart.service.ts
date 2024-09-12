import {Injectable} from '@angular/core';
import {debounceTime, distinctUntilChanged, firstValueFrom, reduce, Subject} from "rxjs";
import {CartItem} from "../interfaces/cart-item";
import * as uuid from 'uuid';
import {Option} from "../interfaces/option";
import {HttpClient} from "@angular/common/http";
import {CartApiService} from "./cart-api/cart-api.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<CartItem> = [];
  private subject: Subject<CartItem> = new Subject();

  constructor(
    private cartApiService: CartApiService
  ) {
  }

  async addItem(cartItem: CartItem, catalogId: string | undefined) {
    let cartResponse;
    if (!await this.getCartId(catalogId)) {
      cartResponse = await firstValueFrom(this.cartApiService.createCart());
      this.setCartId(catalogId, cartResponse.id);
    }
    cartResponse = await this.getCartId(catalogId);

    this.items = this.getItems()

    const persistanceResponse = await this.persistCartApi(cartResponse, cartItem);

    cartItem.id = persistanceResponse.items[persistanceResponse.items.length - 1].id;
    this.items.push(cartItem);
    this.subject.next(cartItem);

    this.persistCart(catalogId);
  }

  async persistCartApi(cartId: string, item: CartItem) {

    const mappedItem = {
      productId: item.product?.id,
      quantity: item.quantity,
      comment: item.comment,
      selections: item.selections
    }
    return await firstValueFrom(this.cartApiService.addItem(cartId, mappedItem));
  }

  persistCart(catalogId: string | undefined) {
    localStorage.setItem(`cart-content__${catalogId}`, JSON.stringify(this.items));
  }

  async getCartId(catalogId: string | undefined): Promise<string> {
    const cartId = localStorage.getItem(`cartId__${catalogId}`);

    if (!cartId) {
      const cartResponse = await firstValueFrom(this.cartApiService.createCart());
      localStorage.setItem(`cartId__${catalogId}`, cartResponse.id);
    }

    return localStorage.getItem(`cartId__${catalogId}`) || '';
  }

  setCartId(catalogId: string | undefined, cartId: string) {
    localStorage.setItem(`cartId__${catalogId}`, cartId);
  }

  getItems(): Array<CartItem> {
    return this.items;
  }

  async getApiItems(catalogId: string | undefined) {
    const cartId = await this.getCartId(catalogId);
    const cartResponse = await firstValueFrom(this.cartApiService.getCart(cartId));
    this.items = cartResponse.items || [];
    return cartResponse;
  }

  getItem(cartItem: string, catalogId: string | undefined): CartItem {
    const items = this.getItems();

    const index = items.findIndex((cart) => cart.id == cartItem);
    return items[index];
  }

  getRawItems(catalogId: string | undefined) {
    const items = this.getItems();

    return items.map((cartItem) => ({
      ...cartItem,
      selections: cartItem.selections.map((selection) => ({
        ...selection,
        selected: selection.selected.filter((selected) => selected != false)
      }))
    }))
  }

  async updateItem(cartItem: CartItem, catalogId: string | undefined) {

    const mappedItem = {
      id: cartItem.id,
      productId: cartItem.product?.id,
      quantity: cartItem.quantity,
      comment: cartItem.comment,
      selections: cartItem.selections
    }
    await firstValueFrom(this.cartApiService.updateItem(await this.getCartId(catalogId), mappedItem));
  }

  async removeItem(cartItem: CartItem, catalogId: string | undefined) {

    await firstValueFrom(this.cartApiService.removeItem(await this.getCartId(catalogId), cartItem.id || ''));

    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }

  }

  getCurrency(catalogId: string | undefined) {
    const items = this.getItems();

    if (items.length > 0) {
      // @ts-ignore
      return items[0].product.price.currency.code;
    }
    return ''
  }
}
