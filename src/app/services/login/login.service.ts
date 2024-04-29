import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(email: any, password: any) {
    const body: any = {
      email: email,
      password: password
    };
    return this.http.post(`${API_URL}/auth/login`, body);
  }
}
