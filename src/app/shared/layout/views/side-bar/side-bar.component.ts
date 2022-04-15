import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { SideBarService } from 'src/app/shared/services/utility/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  display=false
  items:any
  constructor(private sidebarService:SideBarService,private router:Router) { 
this.sidebarService.items.subscribe(res=>{
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd ){
      console.log(event.url)
    res.forEach(element=>{
      if(element.link==event.url || element.link==event.urlAfterRedirects){
        
        element.active=true
        console.log(element.active)
      }else{  element.active=false}
    }
     )
    }
  })
  console.log(res)
  this.items=res
})
  }
  
  ngOnInit(): void {
  }

}
