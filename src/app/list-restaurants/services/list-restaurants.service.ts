import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListRestaurantsService {

  constructor( private http: HttpClient ) { }

  getRestaurants(): Observable<any> {
    return this.http.get('http://localhost:3000/restaurants')
      .pipe( map( (res: any) => {
        return res;
      }));
  }
}
