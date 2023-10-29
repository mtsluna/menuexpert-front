import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {Menu} from "../../interfaces/menu";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getMenu(id: string): Observable<Menu> {
    return this.httpClient.get<Menu>(`${backendConstants.baseUrl}/menu/${id}`)
      .pipe(
        map((menu) => ({
          ...menu,
          sections: menu.sections?.map((section) => ({
            ...section,
            products: menu.products?.filter((product) => product.sectionId == section.id) || []
          }))
        })
      ));
  }
}
