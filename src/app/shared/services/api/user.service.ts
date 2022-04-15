import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
URL=environment.apiUrlUser
  constructor(private http:HttpClient) { }
  getAll(){
   return this.http.get<User[]>(this.URL)
  }
}
