import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private readonly URL=environment.apiUrlUser
private readonly URL_UPLOAD=environment.apiUrlUserAvatar
private readonly URL_REGISTER=environment.apiUrlRegister
  constructor(private http:HttpClient) { }
  getAll(){
   return this.http.get<User[]>(this.URL)
  }

  saveAndUploadSingle(user,file: File){
    const formData: FormData = new FormData();
console.log(user)

    formData.append('file', file);
    formData.append('user', JSON.stringify(user));
    console.log(formData)
    return this.http.post(this.URL_UPLOAD, formData)
    // const req = new HttpRequest('POST', this.URL_UPLOAD, formData, {
        
    //   //reportProgress: false,
    //   //responseType: 'json'
    // });

    // return this.http.request(req);
  }
  saveUser(user:any){
 
    }
}
