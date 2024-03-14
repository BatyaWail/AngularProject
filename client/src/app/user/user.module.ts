import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2'
import { RegisterComponent } from './components/register/register.component';
import { UserRoutingModule } from './user-routing.module';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

// import { HttpModule } from '@angular/http';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'
import { LogOutComponent } from './components/log-out/log-out.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogOutComponent],
  imports: [
    CommonModule, ReactiveFormsModule,HttpClientModule,UserRoutingModule,MdbFormsModule
  ],
  exports:[LoginComponent,RegisterComponent,LogOutComponent]
})
export class UserModule { }
