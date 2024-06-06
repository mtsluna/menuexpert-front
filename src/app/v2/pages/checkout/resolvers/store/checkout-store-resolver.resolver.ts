import {ActivatedRoute, ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {StoreService} from "../../../../../services/store/store.service";
import {Store} from "../../../../../interfaces/store";

export const checkoutStoreResolver: ResolveFn<Store> = (route, state) => {
  const storeId = inject(ActivatedRoute).snapshot.queryParamMap.get('store') || undefined;

  return inject(StoreService).getStoreById(storeId || '');
};
