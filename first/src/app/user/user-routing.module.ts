import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogOutComponent } from './components/log-out/log-out.component';


const USER_ROUTES: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  {path:'log-out',component:LogOutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(USER_ROUTES)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
