import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PascalToCamelInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          return event.clone({ body: this.convertPascalToCamelCase(event.body) });
        }
        return event;
      })
    );
  }

  private convertPascalToCamelCase(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.convertPascalToCamelCase(item));
    } else if (typeof data === 'object' && data !== null) {
      const camelCaseData = {};
      for (const key in data) {
        switch (key) {
          case 'ID':
            // @ts-ignore
            camelCaseData['id'] = this.convertPascalToCamelCase(data[key]);
            break;
          case 'SectionID':
            // @ts-ignore
            camelCaseData['sectionId'] = this.convertPascalToCamelCase(data[key]);
            break;
          default:
            if (data.hasOwnProperty(key)) {
              const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
              // @ts-ignore
              camelCaseData[camelCaseKey] = this.convertPascalToCamelCase(data[key]);
            }
        }
      }
      return camelCaseData;
    } else {
      return data;
    }
  }
}
