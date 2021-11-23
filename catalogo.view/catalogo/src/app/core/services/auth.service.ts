import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WEB_API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    return this.http.post(`${WEB_API}/users/login`,
    { email, password })
  }
}
