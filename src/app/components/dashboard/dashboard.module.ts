import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CountingStatComponent } from './counting-stat/counting-stat.component';
import {KnobModule} from 'primeng/knob';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {SkeletonModule} from 'primeng/skeleton';
@NgModule({
  declarations: [
    DashboardComponent,
    CountingStatComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    KnobModule,
    CardModule,
    ToolbarModule,
    SkeletonModule
  ]
})
export class DashboardModule { }
