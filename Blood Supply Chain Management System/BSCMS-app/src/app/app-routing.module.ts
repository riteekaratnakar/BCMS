import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterhospitalComponent } from './registerhospital/registerhospital.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'registeruser', component: RegisterUserComponent },
  { path: 'userhomepage', component: UserHomePageComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'registerhospital', component: RegisterhospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
