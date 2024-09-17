import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {Store} from "../../interfaces/store";
import {map} from "rxjs/operators";
import { LocalStorageService } from "../localStorage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient,
              private localStorageService: LocalStorageService) { }

  getStoreByCatalogId(id: string): Observable<Store> {
    return this.httpClient.get<Store>(`${backendConstants.baseUrl}/stores/by-catalog/${id}`)
      .pipe(
        map(store => {
          this.localStorageService.setItem("store", JSON.stringify(store));

          return store;
        })
      )
  }

  getStoreById(id: string): Observable<Store> {
    return this.httpClient.get<Store>(`${backendConstants.baseUrl}/stores/${id}`)
      .pipe(
        map(store => {
          this.localStorageService.setItem("store", JSON.stringify(store));

          return store;
        })
      )
  }

  getStoreFromLocalStorage(): Store {
    const storeString = this.localStorageService.getItem("store") || '';
    return JSON.parse(storeString);
  }
}
