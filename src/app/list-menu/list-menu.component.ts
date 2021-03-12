import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  passUserId = this.route.snapshot.queryParamMap.get('userId');
  passRestId = this.route.snapshot.queryParamMap.get('resId') || '';

  constructor( private menuService: ListMenuService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.menuService.getMenu(this.passRestId)
      .subscribe( (res: any) => {
        this.menuList = res;
    });
  }

  addToCartHandler(item: IMenu): void {
    this.orderCart.push(item);
  }

}
