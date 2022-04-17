import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUserComponent } from './all-user/all-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [
    UsersComponent,
    AllUserComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    ReactiveFormsModule,
    CardModule,
    MessageModule,
    TableModule,
    ProgressSpinnerModule,
    UsersRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
     FormsModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    SplitButtonModule,
    
  ]
})
export class UsersModule { }
