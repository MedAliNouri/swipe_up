import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    ProgressSpinnerModule
  ]
})
export class AuthModule { }
