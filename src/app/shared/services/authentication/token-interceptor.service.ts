import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService, private messageService: MessageService,) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('TOKEN');
      
       console.log(authToken)
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken,
             
             
            }
        });
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authService.logOut();
                this.messageService.add({severity:'error', summary:'Error', detail:'Unauthorized! please logIn'});
            }

            console.log(err)
     
            return throwError(err);
        }))
    }
  }

