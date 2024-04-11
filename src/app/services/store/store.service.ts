import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {Store} from "../../interfaces/store";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getStoreByCatalogId(id: string): Observable<Store> {
    return this.httpClient.get<Store>(`${backendConstants.baseUrl}/stores/by-catalog/${id}`)
      .pipe(
        map(store => {
          localStorage.setItem("store", JSON.stringify(store));

          return store;
        })
      )
  }

  getStoreById(id: string): Observable<Store> {
    return this.httpClient.get<Store>(`${backendConstants.baseUrl}/stores/${id}`)
      .pipe(
        map(store => {
          localStorage.setItem("store", JSON.stringify(store));

          return store;
        })
      )
  }

  getStoreFromLocalStorage(): Store {
    const storeString = localStorage.getItem("store") || '';
    return JSON.parse(storeString);
  }
}
