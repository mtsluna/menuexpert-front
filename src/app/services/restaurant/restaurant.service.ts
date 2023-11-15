import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Observable} from "rxjs";
import {Restaurant} from "../../interfaces/restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getRestaurantByMenu(id: string): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`${backendConstants.baseUrl}/restaurant/${id}`)
  }
}
