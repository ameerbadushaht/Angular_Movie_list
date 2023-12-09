import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = 'http://localhost:5000/auth'; 

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  saveToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }
}
