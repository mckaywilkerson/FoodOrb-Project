import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  loginUser(email: string, password: string): Observable<any> {
    const param = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get('http://localhost:3000/users', { params: param })
      .pipe( map( (res: any) => {
        return res;
    }));
  }
}
