import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 
import { AuthGuard } from './helpers/auth-guard';

//components
import { LoginComponent } from '../app/login/login.component';
import { UserConsoleComponent } from '../app/user-console/user-console.component'; 
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { FindPasswordComponent } from '../app/find-password/find-password.component';

const routes: Routes = [
  { path: 'landing', component: UserConsoleComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'find_pw', component: FindPasswordComponent },
  // otherwise redirect to landing
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
