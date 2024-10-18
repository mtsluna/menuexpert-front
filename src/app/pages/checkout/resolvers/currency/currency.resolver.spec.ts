import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currencyResolver } from './currency.resolver';

describe('currencyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currencyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
