import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CartService} from "../../../../services/cart.service";

export const currencyResolver: ResolveFn<string> = (route, state) => {
  const cartService = inject(CartService);

  return cartService.getCurrency(route.queryParamMap.get('catalog') || '');
};
