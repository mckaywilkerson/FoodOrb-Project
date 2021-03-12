import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOrder } from 'src/app/shared/Interfaces/order';

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

  createOrder(newOrder: IOrder): Observable<any> {
    return this.http.post('http://localhost:3000/orders', newOrder)
      .pipe( map( (res: any) => {
        return res;
      }));
  }
}
