import { Component } from '@angular/core';
import { UserService } from './shared/services/api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontEnd';
  constructor(private userService:UserService){

  }
}
