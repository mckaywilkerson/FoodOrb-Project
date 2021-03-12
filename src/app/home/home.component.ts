import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchLocationForm = new FormGroup ({
    location: new FormControl('', Validators.required ),
  });

  passId = this.route.snapshot.queryParamMap.get('userId');

  constructor( private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  handleSearchLocationSubmit(): void {
    this.router.navigate(['/listrestaurants'], {queryParams: {userId: this.passId}});
  }

}
