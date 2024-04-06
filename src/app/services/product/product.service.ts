import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import backendConstants from "../../constants/backend-constants";
import {Product} from "../../interfaces/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(menuId: string, productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${backendConstants.baseUrl}/products/${productId}`)
      .pipe(
        map((product) => {
          product.customizations?.forEach((customization) => {
            customization.options.sort((a, b) => a.price.amount - b.price.amount)
          })

          return product;
        })
      );
  }
}
