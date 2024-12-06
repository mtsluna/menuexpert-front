import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  constructor(private httpClient: HttpClient) {
  }

  getCatalog(id: string): Observable<Catalog> {
    return this.httpClient.get<Catalog>(`${backendConstants.baseUrl}/catalogs/${id}`)
      .pipe(
        map((catalog) => {

            const categories = catalog.products?.map((product) => product.category) as Category[];

            const uniqueCategoryId = new Set();

            const uniqueCategories = categories.filter((value, index) => {
              if (!uniqueCategoryId.has(value.id)) {
                uniqueCategoryId.add(value.id);
                return true;
              }
              return false;
            }, new Set)

            uniqueCategories.forEach((category) => {
              category.products = catalog.products
                ?.filter((value) => value.category?.id === category.id)
                ?.filter((value) => value.isVisible)
                ?.filter((value) => value.isActive) as Product[]
            })

            return {
              ...catalog,
              categories: uniqueCategories.filter((category) => category.products.length > 0).sort((a, b) => a.order - b.order)
            }
          }
        ));
  }

  getCatalogByStoreId(id: string): Observable<Catalog> {
    return this.httpClient.get<any>(`${backendConstants.baseUrl}/catalogs?storeId=${id}`)
      .pipe(
        map(({content}) => content as Catalog[]),
        map(([catalog]) => {
          localStorage.setItem('catalogId', catalog.id || '');

            const categories = catalog.products?.map((product) => product.category) as Category[];

            const uniqueCategoryId = new Set();

            const uniqueCategories = categories.filter((value, index) => {
              if (!uniqueCategoryId.has(value.id)) {
                uniqueCategoryId.add(value.id);
                return true;
              }
              return false;
            }, new Set)

            uniqueCategories.forEach((category) => {
              category.products = catalog.products
                ?.filter((value) => value.category?.id === category.id)
                ?.filter((value) => value.isVisible)
                ?.filter((value) => value.isActive) as Product[]
            })

            return {
              ...catalog,
              categories: uniqueCategories.filter((category) => category.products.length > 0).sort((a, b) => a.order - b.order)
            }
          }
        ));
  }
}
