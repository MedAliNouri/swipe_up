import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/api/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {
  cols:any
  products:any
  selectedUser:User[]
  constructor(private userService:UserService) { 
    console.log('work')
        this.userService.getAll().subscribe(res=>{
         let stat= Object.keys(res[0]).filter((el:any)=>{
           if(el=="password"||el=='__v'||el=='_id'){
             return false
           }
           return true
         })
          this.cols  = stat
         console.log(this.cols)
          this.products=res
    })
  }

  ngOnInit(): void {
  }
  openNew(){

  }
  deleteSelectedProducts(){

  }
  deleteUser(user){

  }
  editUser(product){
    
  }
}
