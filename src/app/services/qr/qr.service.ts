import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import backendConstants from "../../constants/backend-constants";
import {HttpClient} from "@angular/common/http";
import {Qr} from "../../interfaces/qr";

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private httpClient: HttpClient) { }

  getDefaultCatalogByQr(qr: string): Observable<Qr> {
    return this.httpClient.get<Qr>(`${backendConstants.baseUrl}/qrs/${qr}`);
  }
}
