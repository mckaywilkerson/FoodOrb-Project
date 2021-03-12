import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenu } from '../shared/Interfaces/menu';
import { ListMenuService } from './services/list-menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styles: [
  ]
})
export class ListMenuComponent implements OnInit {

  menuList: IMenu[] = [];
  orderCart: IMenu[] = [];
  newOrder: any;

  passUserId = this.route.snapshot.queryParamMap.get('userId');
  passRestId = this.route.snapshot.queryParamMap.get('resId') || '';
  passOrderId: any;

  constructor( private menuService: ListMenuService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.menuService.getMenu(this.passRestId)
      .subscribe( (res: any) => {
        this.menuList = res;
    });
  }

  addToCartHandler(item: IMenu): void {
    this.orderCart.push(item);
  }

  removeItemHandler(index: number): void {
    if (index > -1) {
      this.orderCart.splice(index, 1);
    }
  }

  submitCartHandler(): void {

    this.newOrder = {
      orderedItems: this.orderCart.length,
      status: "placed"
    }

    // make a new order (in db)
    this.menuService.createOrder(this.newOrder)
      .subscribe( (res: any) => {
        this.passOrderId = res.id;
        this.router.navigate(['/ordertracking'], {queryParams: {userId: this.passUserId, orderId: this.passOrderId}});
      });
  }

}
