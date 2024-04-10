import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  currentUser:  string // Assume default role is user

  // Method to set user role
  setUserRole(role: number) {
    if (role === 1) {
      this.currentUser= 'admin';
      localStorage.setItem('user', 'admin');
      console.log('currentUser',this.currentUser);
    } else {
      this.currentUser = 'user';
      localStorage.setItem('user', 'user');
    }
  }


  getUsers(): Observable<any> {
    const url = `auth/getUsers`;
    return this.httpClient.get(url);
  }

  getRole() {
    return this.currentUser;
  }

  signup(email: string, password: string): Observable<any> {
    const url = `auth/signup`;
    const data = { email, password };

    return this.httpClient.post(url, data);
  }

  login(email: string, password: string): Observable<any> {
    const url = `auth/login`;
    const data = { email, password };

    return this.httpClient.post(url, data);
  }

  saveToken(accessToken: string, role: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('whoareyou', role);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('whoareyou');
    localStorage.removeItem('user');
  }
}
