import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Qr} from "../../interfaces/qr";
import backendConstants from "../../constants/backend-constants";
import {Contact} from "../../interfaces/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  post(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(`${backendConstants.baseUrl}/contacts`, contact);
  }
}
