import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/api/user.service';

@Component({
  selector: 'app-counting-stat',
  templateUrl: './counting-stat.component.html',
  styleUrls: ['./counting-stat.component.scss']
})
export class CountingStatComponent implements OnInit {
nbUser:any
  constructor(private userService:UserService) { 
    this.userService.getAll().subscribe(res=>{
      this.nbUser=res.length
    })
  }

  ngOnInit(): void {
  }

}
