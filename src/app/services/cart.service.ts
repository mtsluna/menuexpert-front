import {Injectable} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, firstValueFrom, reduce, Subject} from "rxjs";
import {CartItem} from "../interfaces/cart-item";
import {CartApiService} from "./cart-api/cart-api.service";
import {ICartApiCreateResponse} from "./cart-api/interfaces";
import {UserService} from "./auth/user.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<CartItem> = [];
  private subject: Subject<CartItem> = new Subject();
  private cart: ICartApiCreateResponse | null = null;
  private _storeId: string | null = null;

  constructor(
    private cartApiService: CartApiService,
    private userService: UserService
  ) {
  }

  async addItem(cartItem: CartItem, catalogId: string | undefined) {
    let cartResponse;
    if (!await this.getCartId()) {
      if(this.userService.user){
        const auth = this.userService.user;
        cartResponse = await firstValueFrom(this.cartApiService.createCart(auth, this.storeId || ''));
        this.setCartId(catalogId, cartResponse.id);
      }
    }
    cartResponse = await this.getCartId();

    this.items = this.getItems()

    const persistanceResponse = await this.persistCartApi(cartResponse, cartItem);

    cartItem.id = persistanceResponse.items[persistanceResponse.items.length - 1].id;
    this.items.push(cartItem);
    this.subject.next(cartItem);
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

  async getCartId(): Promise<string> {
    const auth = this.userService.user;
    if (!auth && localStorage.getItem(`cartId`)) {
      return localStorage.getItem(`cartId`) || '';
    }
    if (!auth) {
      const cartResponse = await firstValueFrom(this.cartApiService.createCart(null, this.storeId || ''));
      localStorage.setItem(`cartId`, cartResponse.id);
      return cartResponse.id;
    }
    if(auth && localStorage.getItem(`cartId`)) {
      this.cart = await firstValueFrom(this.cartApiService.updateCartOwner(localStorage.getItem(`cartId`) || '', auth.id || ''));
      localStorage.removeItem(`cartId`);
      return this.cart.id;
    }
    localStorage.removeItem(`cartId`);
    this.cart = await firstValueFrom(this.cartApiService.getCartByUser(auth?.id || '')).catch(() => {return null});
    if (!this.cart?.id) {
      const cartResponse = await firstValueFrom(this.cartApiService.createCart(auth, this.storeId || ''));
      this.cart = cartResponse;
      return cartResponse.id;
    }
    if(this.cart.items) {
      this.items = this.cart.items;
    }
    return this.cart.id;
  }

  deleteCart() {
    localStorage.removeItem(`cartId`);
  }

  setCartId(catalogId: string | undefined, cartId: string) {
    localStorage.setItem(`cartId__${catalogId}`, cartId);
  }

  getItems(): Array<CartItem> {
    return this.items;
  }

  async getApiItems() {
    this.items = [];
    let cartId;
    if(!this.cart){
      cartId = await this.getCartId();
    }
    const cartResponse = await firstValueFrom(this.cartApiService.getCart(cartId || this.cart?.id || ''));
    this.items = cartResponse.items || [];
    this.cart = cartResponse;
    return cartResponse;
  }

  getItem(cartItem: string, catalogId: string | undefined): CartItem {
    const items = this.getItems();

    const index = items.findIndex((cart) => cart.id == cartItem);
    return items[index];
  }

  async updateItem(cartItem: CartItem) {

    const mappedItem = {
      id: cartItem.id,
      productId: cartItem.product?.id,
      quantity: cartItem.quantity,
      comment: cartItem.comment,
      selections: cartItem.selections
    }
    await firstValueFrom(this.cartApiService.updateItem(await this.getCartId(), mappedItem));
  }

  async removeItem(cartItem: CartItem) {

    await firstValueFrom(this.cartApiService.removeItem(await this.getCartId(), cartItem.id || ''));

    const index = this.items.findIndex((cart) => cart.id == cartItem.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }

  }

  clearCart() {
    this.items = [];
  }

  getCurrency(catalogId: string | undefined) {
    const items = this.getItems();

    if (items.length > 0) {
      // @ts-ignore
      return items[0].product.price.currency.code;
    }
    return ''
  }

  get storeId(): string | null {
    return this._storeId;
  }

  set storeId(value: string | null) {
    this._storeId = value;
  }
}
