import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorAlert } from 'src/app/shared/layout/features/alert/error.alert';
import { SuccessAlert } from 'src/app/shared/layout/features/alert/success.alert';

import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {
  contactForm: any;
loading=false
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,

    private router:Router) {

    this.contactForm=formBuilder.group({
      email:["gameeforall@gmail.com",[Validators.email,Validators.required]],
      password:["Dali",[Validators.min(6),Validators.required]]
    })
   }

  ngOnInit(): void {
  }
submit(){

  const controls = this.contactForm.controls;
  if (this.contactForm.invalid) {
		Object.keys(controls).forEach(controlName =>
	 		controls[controlName].markAsTouched()
	 	);
		return;
		}
    this.authService.login(this.contactForm.value).subscribe((res:any)=>{
      this.loading=false
      if(!res.status){
        
        new ErrorAlert(res.data)
     }else{
       this.authService.storeLogedUser(res.data)
       this.router.navigateByUrl('/')
     }
     
    })

}

isControlHasError(controlName: string, validationType: string): boolean {
  const control = this.contactForm.controls[controlName];
  if (!control) {
    return false;
  }

  const result = control.hasError(validationType) && (control.dirty || control.touched);
  return result;
}

resetPassword(){
   
Swal.fire({
  title: 'Forgot your password?',
  text: 'Enter your email address below and we will send you a link where you can enter a new password.',
  input: 'email',
  inputPlaceholder: "exemple@exemple.com",
			showCancelButton: true,
			confirmButtonText: "Restore",
      color: 'white',
      background: '#d50b1e',
      confirmButtonColor: "#031f32",
  showLoaderOnConfirm: true,
  preConfirm: (email) => {
    
    return  new Promise( async(resolve) => {
      this.authService.resetPassword(email)
      .subscribe( async(response:any) => {
        console.log(response)
        if (await response.status ===true) {
          Swal.fire(`Message envoyé avec succès`);
         
        } else {
       
        Swal.showValidationMessage(response.message)
        resolve('fd')
        }
      });
    });

     
  }})
}
}
