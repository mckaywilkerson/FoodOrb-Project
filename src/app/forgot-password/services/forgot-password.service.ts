import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor( private http: HttpClient ) { }



  changePassword(user: IUser): Observable<any> {
    return this.http.put('http://localhost:3000/users/'+user.id, user)
      .pipe( map( (res: any) => {
        return res;
    }));
  }



  findUser(email: string): Observable<any> {

    const param = new HttpParams()
      .set('email', email);

    return this.http.get('http://localhost:3000/users', { params: param })
      .pipe( map( (res: any) => {
        return res;
      }));
  }
}
