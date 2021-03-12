import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient ) { }

  addUser(user: IUser): Observable<any> {
    return this.http.post('http://localhost:3000/users', user)
      .pipe( map( (res: any) => {
        return res;
      }))
  }
}
