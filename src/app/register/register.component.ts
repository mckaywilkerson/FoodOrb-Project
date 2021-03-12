import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../shared/Interfaces/user';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUserForm = new FormGroup ({
    name: new FormControl('', Validators.required ),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ),
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', Validators.required ),
  });

  isSaved = false;

  user: any;

  constructor( private registerService: RegisterService ) { }

  ngOnInit(): void {
  }

  handleAddUserSubmit(): void {
    // add a service class to make a new user in the DB
    var phoneNumber: number = +this.addUserForm.get('phone')?.value;
    this.user = {
      name: this.addUserForm.get('name')?.value,
      phone: phoneNumber,
      email: this.addUserForm.get('email')?.value,
      password: this.addUserForm.get('password')?.value
    };
    this.registerService.addUser(this.user)
      .subscribe( (res: any) => {
        //console.log(res);
        this.isSaved = true;
      })
  }

}
