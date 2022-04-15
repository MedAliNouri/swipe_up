import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../../model/authUser';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly URI=environment.apiUriAuth
private readonly URI_RESET=environment.apiUriResetPass
private readonly URI_CHANGE_PASS=environment.apiUrlChangePass
private readonly URI_GET_TOKEN_REST=environment.apiUrlGetToken
  constructor(private http:HttpClient,private router:Router) { 
   
  }
  login(user:AuthUser){
   return this.http.post(this.URI,user)
   }
   logOut(){
    localStorage.removeItem('USER' )
    localStorage.removeItem('TOKEN' )
    this.router.navigateByUrl('/auth/login')
   }
   resetPassword(email){
    let doc={email}
     return this.http.post(this.URI_RESET,doc) 
    }
    change_password(user,password){
      let doc={user,password}
       return this.http.post(this.URI_CHANGE_PASS,doc) 
      }
      get_token_reset_pass(id){
       return this.http.get(this.URI_GET_TOKEN_REST+'/'+id)
      }
  storeLogedUser(data:any){
localStorage.setItem('USER',JSON.stringify(data.user))
localStorage.setItem('TOKEN',data.token)
  }
  get isLoggedIn(){
    return !!localStorage.getItem('TOKEN')
  }
}
