import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import * as jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private secretKey = 'weiweio';

  constructor(private http: HttpClient) {}

  LogIn(userData: { email: string; password: string }) {
    console.log("testLogin: : : ", userData);
    this.http.get<any>(`users`).subscribe({
      next: (res) => {
        console.log("response: : : ", res);
        const user_data = res;
        const auth = user_data.find(
          (user) =>
            user.email === userData.email && user.password === userData.password
        )
        console.log("auth: : : ", auth);
        // if (auth) {
        //   console.log('Authentication successful');
        //   const jwtToken = this.createJWTToken(auth);
        //   console.log('Generated JWT Token:', jwtToken);
        //   return !!auth;
        // } else {
        //   return false;
        // }
      }, error: (err) => {
        console.log("error: : : : ", err);
      }, complete: () => {
        console.log("completed");
      }
    })
  }


  // createJWTToken(user: any): string {
  //   return jwt.sign(user, this.secretKey);
  //   // console.log('After Generated JWT Token:');

  // }

  // logIn(userData: { email: string; password: string }): Observable<any> {
  //   console.log('Before Authentication ');

  //   return this.http.get<any>(`users`).pipe(
  //     map((users: any[]) =>
  //       users.find(
  //         (user) =>
  //           user.email === userData.email && user.password === userData.password
  //       )
  //     ),
  //     map((user) => {
  //       if (user) {
  //         console.log('Authentication successful');
  //         return !!user;
  //       } else {
  //         return false;
  //       }
  //     })
  //   );
  // }

  signUp(newUser: string): Observable<any> {
    return this.http.post<any>('users', newUser).pipe(
      map((response) => {
        return response;
      })
    );
  }
}

