import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req.clone({
      setHeaders: {
        token: `${localStorage.getItem("access_token")}`
      }
    });

    return next.handle(req);
  }
}
