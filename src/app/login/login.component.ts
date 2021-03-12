import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginUserForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', Validators.required ),
  });

  showError = false;

  constructor( private router: Router, private loginService: LoginService ) { }

  ngOnInit(): void {
  }

  handleLoginUserSubmit(): void {
    this.loginService.loginUser(this.loginUserForm.get('email')?.value, this.loginUserForm.get('password')?.value)
      .subscribe( (res: any) => {
        if (res.length == 0 || res.length > 1) {
          this.showError = true;
        }
        else {
          this.router.navigate(['/home'], {queryParams: {userId: res[0].id}});
        }
      })
  }

  forgotPasswordHandler(): void {
    this.router.navigate(['/forgotpassword']);
  }

}
