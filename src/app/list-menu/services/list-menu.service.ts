import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListMenuService {

  constructor( private http: HttpClient ) { }

  getMenu(restaurantId: string): Observable<any> {

    const param = new HttpParams()
      .set('restaurantId', restaurantId);

    return this.http.get('http://localhost:3000/menu', { params: param })
      .pipe( map( (res: any) => {
        return res;
      }));

  }
}
