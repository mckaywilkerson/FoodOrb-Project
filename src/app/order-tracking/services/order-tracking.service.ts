import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOrder } from 'src/app/shared/Interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderTrackingService {

  constructor( private http: HttpClient ) { }

  getOrderStatus(orderId: string): Observable<any> {

    const param = new HttpParams()
      .set('id', orderId);

    return this.http.get('http://localhost:3000/orders', { params: param })
      .pipe( map( (res: any) => {
        return res;
      }));
  }

  updateOrderStatus(order: IOrder): Observable<any> {
    return this.http.put('http://localhost:3000/orders/' + order.id, order)
      .pipe(map((res: any) => {
        return res;
    }));
  }
}
