import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFriend } from 'src/app/shared/Interfaces/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  constructor( private http: HttpClient ) { }

  getFriendList(): Observable<any> {
    return this.http.get('http://localhost:3000/friends')
      .pipe( map( (res: any) => {
        return res;
      }));
  }

  addFriend(friend: IFriend): Observable<any> {
    return this.http.put('http://localhost:3000/friends/' + friend.id, friend)
      .pipe( map( (res: any) => {
        return res;
      }));
  }

}
