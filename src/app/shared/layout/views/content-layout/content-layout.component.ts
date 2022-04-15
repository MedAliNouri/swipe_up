import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/api/user.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor(private userService:UserService) {
 
   }

  ngOnInit(): void {
  }

}
