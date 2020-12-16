import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.toString() != "http://127.0.0.1:8000/api/login" && req.url.toString() != "http://localhost:3000/users") {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('auth_tkn')}`
        }
      });
    }
    return next.handle(req);
  }
}
