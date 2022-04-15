import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {PasswordModule} from 'primeng/password';

import { AuthModule } from './components/auth/auth.module';
import { TokenInterceptorService } from './shared/services/authentication/token-interceptor.service';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { UsersModule } from './components/users/users.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
    HttpClientModule,
 
    FormsModule,
  SharedModule,
  BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ToastModule,
    UsersModule,
    AuthModule
  ],
  providers: [MessageService,  {
   
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
