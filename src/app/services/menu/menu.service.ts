import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {Menu} from "../../interfaces/menu";
import {map} from "rxjs/operators";
import {Section} from "../../interfaces/section";
import {Product} from "../../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getMenu(id: string): Observable<Menu> {
    return this.httpClient.get<Menu>(`${backendConstants.baseUrl}/menu/${id}`)
      .pipe(
        map((menu) => {

          const sections = menu.products?.map((product) => product.section) as Section[];

          const uniqueSectionsId = new Set();

          const uniqueSections = sections.filter((value, index) => {
            if(!uniqueSectionsId.has(value.id)) {
              uniqueSectionsId.add(value.id);
              return true;
            }
            return false;
          }, new Set)

          uniqueSections.forEach((section) => {
            section.products = menu.products?.filter((value) => value.section?.id === section.id) as Product[]
          })

          return  {
            ...menu,
            sections: uniqueSections
          }
        }
      ));
  }
}
