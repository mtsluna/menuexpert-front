import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CartService} from "../../../../services/cart.service";

export const checkoutResolver: ResolveFn<boolean> = async (route, state) => {
  const cartService = inject(CartService);
  await cartService.getApiItems();

  return true;
};
