// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from './service/auth.service';

// @Injectable()
// export class MovieShowsInterceptor implements HttpInterceptor {


//   constructor( private authService: AuthService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     console.log("Old Request :::",request);

//     let baseUrl='http://localhost:3000/'
//     let newRequest=request.clone({
//       setHeaders:{
//         'Auth-header':'qwawq'
//       },

//       url:baseUrl+request.url
//     })

//     console.log("New Request :::",newRequest);
//     // const token = localStorage.getItem('token');
//     // if (token) {
//     //   console.log('New Request with token :::', newRequest);
//     //   return next.handle(newRequest);
//     // } else {
//     //   console.log('No token found in local storage');
//     //   return next.handle(request);
//     // }
//     return next.handle(newRequest);
//   }
// }



import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class MovieShowsInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('Old Request :::', request);

    const token = localStorage.getItem('token');
    if (token) {
      const newRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('New Request with token :::', newRequest);
      return next.handle(newRequest);
    } else {
      console.log('No token found in local storage');
      return next.handle(request);
    }
  }
}
