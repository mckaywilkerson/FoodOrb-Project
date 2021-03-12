import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderTrackingService } from './services/order-tracking.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styles: [
  ]
})
export class OrderTrackingComponent implements OnInit {

  orderNum = this.route.snapshot.queryParamMap.get('orderId') || '';
  orderStatus = '';
  order: any;

  constructor( private orderService: OrderTrackingService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.orderService.getOrderStatus(this.orderNum)
      .subscribe( (res: any) => {
        this.orderStatus = res[0].status;
        this.order = res[0];
      });

  }

  pickedUpHandler(): void {
    // change the order status in the db
    this.order.status = "pickedup";
    this.orderService.updateOrderStatus(this.order)
      .subscribe( (res: any) => {
      });
    this.orderStatus = "pickedup";
  }

  deliveredHandler(): void {
    // change the order status in the db
    this.order.status = "delivered";
    this.orderService.updateOrderStatus(this.order)
      .subscribe( (res: any) => {
      });
    this.order
    this.orderStatus = "delivered";
  }

}
