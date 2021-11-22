import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3006';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzY1MDA4OTd9.uoE0_xpUFe3fyYDT3IF28yDEW_-yvjO2HSOkIJCIT0o'
    }

    return this.http.post(API_URL + '/users/login',
      { email, password },
      { headers: new HttpHeaders(headerDict), observe: 'response' })

      .pipe(tap(res => {
        const authToken = res.headers.get('x-acces-token');
        console.log(authToken);
      }))

  }
}
