import { Component, OnInit } from '@angular/core';
import { IFriend } from '../shared/Interfaces/friend';
import { FriendListService } from './services/friend-list.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styles: [`
  [class*="col-"] {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgba(86, 61, 124, .15);
    border: 1px solid rgba(86, 61, 124, .2);
  }
  `
  ]
})
export class FriendListComponent implements OnInit {

  friendList: IFriend[] = [];

  constructor( private friendService: FriendListService ) { }

  ngOnInit(): void {
    this.friendService.getFriendList()
      .subscribe( (res: any) => {
        this.friendList = res;
    });
  }

  addFriendHandler(friend: IFriend) {
    // go into the DB and change the friend to added
    // change the button to added instead of add
    friend.added = true;
    this.friendService.addFriend(friend)
      .subscribe( (res: any) => {
        console.log(res);
      });
  }

  removeFriendHandler(friend: IFriend) {
    friend.added = false;
    this.friendService.addFriend(friend)
      .subscribe( (res: any) => {
        console.log(res);
      });
  }

}
