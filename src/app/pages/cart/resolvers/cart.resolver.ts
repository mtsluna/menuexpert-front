import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CartService} from "../../../services/cart.service";
import {ICartApiCreateResponse} from "../../../services/cart-api/interfaces";

export const cartResolver: ResolveFn<ICartApiCreateResponse> = async (route, state) => {
  const cartService = inject(CartService);

  return await cartService.getApiItems();
};
