import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreventLoggedInAccess } from 'src/app/shared/services/authentication/preventLoggedInAccess';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [{path:'',children:[
  {path:'login',component:LoginComponent}
  ,{
    path:'resetPassword/:id',component:ResetPasswordComponent
  }
]},
// {path:'reset-password',component:}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
