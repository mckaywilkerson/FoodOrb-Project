import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  passId = this.route.snapshot.queryParamMap.get('userId');

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

}
