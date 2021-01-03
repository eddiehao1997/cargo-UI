import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 
import { AuthGuard } from './helpers/auth-guard';

//components
import { LoginComponent } from '../app/login/login.component';
import { UserConsoleComponent } from '../app/user-console/user-console.component'; 

const routes: Routes = [
  { path: 'landing', component: UserConsoleComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to landing
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
