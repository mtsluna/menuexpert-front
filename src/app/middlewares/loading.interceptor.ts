import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "../services/loader/loader.service";

const ExcludedUrls = [
  '.*/carts/.*/item',
  '.*/carts'
  ]

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequest = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!ExcludedUrls.some(url => new RegExp(url).test(request.url))) {
      this.loaderService.setEvent(true);
    }
    this.totalRequest++;
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequest--;
        if(this.totalRequest === 0) {
          this.loaderService.setEvent(false);
        }
      })
    );
  }
}
