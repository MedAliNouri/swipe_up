import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
 
import { ContentLayoutComponent } from './shared/layout/views/content-layout/content-layout.component';
import { AuthGuard } from './shared/services/authentication/auth.guard';
import { PreventLoggedInAccess } from './shared/services/authentication/preventLoggedInAccess';
import { content_child } from './shared/services/route/content-child';

const routes: Routes = [
  {path:'auth',canActivate:[PreventLoggedInAccess],component:AuthComponent,
loadChildren:()=>import('./components/auth/auth.module').then(a=>a.AuthModule)},
  {path:'',
  component:ContentLayoutComponent,
canActivate:[AuthGuard],
  children:content_child},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
