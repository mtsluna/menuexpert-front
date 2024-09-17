import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {Catalog} from "../../interfaces/catalog";
import {map} from "rxjs/operators";
import {Category} from "../../interfaces/category";
import {Product} from "../../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient: HttpClient) { }

  getCatalog(id: string): Observable<Catalog> {
    // @ts-ignore
    return this.httpClient.get<Catalog>(`${backendConstants.baseUrl}/catalogs/${id}`)
      .pipe(
        map((catalog) => {

          const categories = Array.from(
            new Map(
              // @ts-ignore
              catalog.products?.map((product) => [product.category.id, { ...product.category, products: [] }])
            ).values()
          );

          categories.forEach((category) => {
            // @ts-ignore
            category.products = catalog.products
              ?.filter((product) => product.category?.id === category.id)
              ?.filter((product) => product.isVisible && product.isActive) as Product[];
          });

          return  {
            ...catalog,
            // @ts-ignore
            categories: categories.filter((category) => category.products.length > 0).sort((a, b) => a.order - b.order),
          }
        }
      ));
  }
}
