import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { SideBarService } from 'src/app/shared/services/utility/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!:User
  name:string
  constructor(private authService:AuthService) { }
 logOut(){
   this.authService.logOut()
 }
  ngOnInit() {
    if(localStorage.getItem('USER')){
this.user=JSON.parse(localStorage.getItem('USER') || " ")
this.name=this.user.name.split(' ') + ' ' + this.user.lastName
    }
  }
 
}
