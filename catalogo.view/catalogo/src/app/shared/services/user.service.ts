import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WEB_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  delete(id: number) {
    const url = `${WEB_API}/users/${id}`;
    return this.http.delete(url).pipe(
      map(() => null)
    )
  }
}
