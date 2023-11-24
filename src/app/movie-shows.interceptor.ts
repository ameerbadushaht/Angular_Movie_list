import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class MovieShowsInterceptor implements HttpInterceptor {


  constructor( private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Old Request :::",request);

    let baseUrl='http://localhost:3000/'
    let newRequest=request.clone({
      setHeaders:{
        'Auth-header':'qwawq'
      },

      url:baseUrl+request.url
    })

    console.log("New Request :::",newRequest);
    return next.handle(newRequest);
  }
}
