import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { checkoutStoreResolver } from './checkout-store-resolver.resolver';
import {Store} from "../../../../interfaces/store";

describe('storeResolverResolver', () => {
  const executeResolver: ResolveFn<Store> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => checkoutStoreResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
