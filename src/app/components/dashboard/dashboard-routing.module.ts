import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountingStatComponent } from './counting-stat/counting-stat.component';
import { DashboardComponent } from './dashboard.component';



const routes: Routes = [{path:'',children:[
  {path:'',component:CountingStatComponent}
]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
