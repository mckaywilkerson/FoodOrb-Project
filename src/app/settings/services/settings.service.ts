import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor( private http: HttpClient ) { }

  getUserInfo(userId: string): Observable<any> {
    const param = new HttpParams()
      .set('id', userId);

    return this.http.get('http://localhost:3000/users', { params: param })
      .pipe( map( (res: any) => {
        return res;
      }));
  }

  updateUserInfo(user: IUser): Observable<any> {

    return this.http.put('http://localhost:3000/users/' + user.id, user)
      .pipe( map( (res: any) => {
        return res;
      }));

  }

}
