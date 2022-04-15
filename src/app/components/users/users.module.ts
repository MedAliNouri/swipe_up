import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUserComponent } from './all-user/all-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [
    UsersComponent,
    AllUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    UsersRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    
  ]
})
export class UsersModule { }
