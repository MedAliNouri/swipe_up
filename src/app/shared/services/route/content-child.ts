import { Route, Routes } from "@angular/router";
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";

export const content_child : Routes=[
   
    {path:'dashboard',
    loadChildren:()=>import('../../../components/dashboard/dashboard.module').then(m=>{console.log('from here');return m.DashboardModule})},
    {path:'users',
    loadChildren:()=>import('../../../components/users/users.module').then(m=>m.UsersModule)},
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
  
]