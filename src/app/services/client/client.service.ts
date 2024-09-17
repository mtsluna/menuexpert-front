import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import backendConstants from "../../constants/backend-constants";
import {Client} from "../../interfaces/client";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Pageable} from "../../interfaces/pageable";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {}

  post(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${backendConstants.baseUrl}/clients`, client)
  }

  put(id: string, client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${backendConstants.baseUrl}/clients/${id}`, client)
  }

  search(externalId: string, source: string): Observable<Pageable<Client[]>> {
    return this.httpClient.get<Pageable<Client[]>>(`${backendConstants.baseUrl}/clients`, {
      params: {
        source,
        externalId
      }
    });
  }
}
