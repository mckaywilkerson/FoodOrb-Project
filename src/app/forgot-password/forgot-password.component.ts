import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMustMatch } from './must-match.validator';
import { ForgotPasswordService } from './services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: [
  ]
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: any;

  isSaved = false;
  user: any;

  constructor( private fb: FormBuilder, private passwordService: ForgotPasswordService ) { 
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    }, {
      validator: PasswordMustMatch('newPassword', 'confirmNewPassword')
    });
  }

  ngOnInit(): void {
  }

  handleForgotPasswordSubmit(): void {
    // go into the service and change the password for the user
    this.user = {
      email: this.forgotPasswordForm.get('email')?.value,
      password: this.forgotPasswordForm.get('newPassword')?.value
    }
    this.passwordService.findUser(this.user.email)
      .subscribe( (res: any) => {
        const user2 = res[0];
        user2.password = this.user.password;
        this.passwordService.changePassword(user2)
          .subscribe( (res: any) => {
            this.isSaved = true;
          });
      });
  }

}
