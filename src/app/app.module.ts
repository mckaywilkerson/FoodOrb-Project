import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InitialHeaderComponent } from './initial-header/initial-header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    HomeComponent,
    ListRestaurantsComponent,
    FriendListComponent,
    ListMenuComponent,
    OrderTrackingComponent,
    HeaderComponent,
    FooterComponent,
    InitialHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
