import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(public authService:AuthService) {
  }

  login(){
    this.authService.login('johnd', 'm38rmF$').subscribe();
  }

  logout(){
    this.authService.logout();
  }

}
