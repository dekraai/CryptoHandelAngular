import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = sessionStorage.getItem('token');
      console.log(`Dit is de Bearer ${sessionStorage.getItem('token')}`);
  
  
      if (token) {
        console.log('er is een token');
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        });
      }
      return next.handle(request);
    }
}
