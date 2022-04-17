import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentLayoutComponent } from './layout/views/content-layout/content-layout.component';
import { HeaderComponent } from './layout/views/header/header.component';
import { FooterComponent } from './layout/views/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarComponent } from './layout/views/side-bar/side-bar.component';
import {SidebarModule} from 'primeng/sidebar';
import {AvatarModule} from 'primeng/avatar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { NgxLetterImageAvatarModule } from 'ngx-letter-image-avatar';

@NgModule({
  declarations: [
   
    ContentLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SidebarModule,
    AvatarModule,
    OverlayPanelModule,
     NgxLetterImageAvatarModule
  ]
})
export class SharedModule { }
