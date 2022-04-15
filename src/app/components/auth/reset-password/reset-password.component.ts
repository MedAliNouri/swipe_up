import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorAlert } from 'src/app/shared/layout/features/alert/error.alert';
import { SuccessAlert } from 'src/app/shared/layout/features/alert/success.alert';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import {   ConfirmedValidator,  } from 'src/app/shared/services/formValidators/passwordMatch';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  token_ecpired=false
  user
form
loading=false
formHasError=true
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private route:ActivatedRoute,private router:Router) {
    this.form=this.formBuilder.group({
      password:["",[Validators.min(6),Validators.required, Validators.pattern(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])/)]],
      passwordValidation:["",[Validators.min(6),Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'passwordValidation')
    } )
   }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    
    this.authService.get_token_reset_pass(this.route.snapshot.params['id']).subscribe((res:any)=>{
      if(!res.status){
          this.token_ecpired=true
      }
      console.log(res)
      this.user=res.message.user
    })
  }
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) {
      return false;
    }
  
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    this.formHasError=result
  
    return result;
    
  }
  submit(){
 
if(this.form.invalid){
  new ErrorAlert('champs invalide')
  console.log(this.form)
  return;
}


 this.authService
    .change_password(this.user._id,this.form.controls['password'].value)
     .subscribe((res:any)=>{
         if(!res.status){
new ErrorAlert(res.message)

           }
          
        let   coord={email:this.user.email,password:this.form.controls['password'].value}
        console.log(coord)
           this.authService.login(coord).subscribe((res:any)=>{
  console.log(res)
            if(!res.status){
              new ErrorAlert(res.data)
              this.router.navigateByUrl('/')     
            return;
            }
            new SuccessAlert('password updated')
            this.authService.storeLogedUser(res.data)
       this.router.navigateByUrl('/')
           })
           
 })
  }
}
