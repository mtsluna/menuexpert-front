import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import backendConstants from "../../constants/backend-constants";
import {Product} from "../../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(menuId: string, productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${backendConstants.baseUrl}/products/${productId}`);
  }
}
