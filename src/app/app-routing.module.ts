import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { HomeComponent } from './home/home.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { LoginComponent } from './login/login.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'listrestaurants', component: ListRestaurantsComponent }, 
  { path: 'listmenu', component: ListMenuComponent },
  { path: 'ordertracking', component: OrderTrackingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'friendlist', component: FriendListComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
