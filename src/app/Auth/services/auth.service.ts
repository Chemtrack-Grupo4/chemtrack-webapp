import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { LoginRequest } from '../model/login-request';
import { SignupRequest } from '../model/signup-request';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API_URL = 'http://localhost:8080/api/v1/auth'; // <-- Cambiado a tu backend real

  constructor(private http: HttpClient) {}

  login(req: LoginRequest): Observable<User> {
    // Cambiado a /signin para coincidir con tu backend Spring
    return this.http.post<User>(`${this.API_URL}/signin`, req);
  }

  signup(req: SignupRequest): Observable<User> {
    // Cambiado a /signup
    return this.http.post<User>(`${this.API_URL}/signup`, req);
  }
}
