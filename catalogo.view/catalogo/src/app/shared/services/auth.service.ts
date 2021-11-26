import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { WEB_API } from '../../app.api';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  signIn(email: string, password: string) {
    return this.http
      .post(
        `${WEB_API}/users/login`,
        { email, password },
        { observe: 'response' },
      )
      .pipe(
        tap(res => {
          const authToken = res.headers.get('X-access-token');
          this.tokenService.setToken(authToken);
          console.log(`User ${email} authenticated with token ${authToken}`);
        }),
      );
  }
}
