import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { CustomMaterialModule } from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterhospitalComponent } from './registerhospital/registerhospital.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    UserHomePageComponent,
    ForgotpasswordComponent,
    RegisterhospitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
