import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{path:'',component:UsersComponent,children:[
  {path:'',component:AllUserComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { constructor(){console.log('worg')}}
