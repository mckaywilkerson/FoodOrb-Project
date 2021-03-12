import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [
  ]
})
export class SettingsComponent implements OnInit {

  editUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  })

  userId = this.route.snapshot.queryParamMap.get('userId') || '';

  user: any;

  isSaved = false;

  constructor( private settingsService: SettingsService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.settingsService.getUserInfo(this.userId)
      .subscribe( (res: any) => {
        this.user = res[0];
        this.editUserForm.get('name')?.setValue(this.user.name);
        this.editUserForm.get('phone')?.setValue(this.user.phone);
        this.editUserForm.get('email')?.setValue(this.user.email);
      });

  }

  handleEditSubmit(): void {
    // edit the info in the DB
    this.user.name = this.editUserForm.get('name')?.value;
    this.user.phone = this.editUserForm.get('phone')?.value;
    this.user.email = this.editUserForm.get('email')?.value;

    this.settingsService.updateUserInfo(this.user)
      .subscribe( (res: any) => {
        this.isSaved = true;
      })
  }

}
