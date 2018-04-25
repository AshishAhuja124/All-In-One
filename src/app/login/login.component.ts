import { Component } from '@angular/core';

import {  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from './loginservices.service';
import { UserComponent } from '../user/user.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent {
  public user = new UserComponent('','');
  public errorMsg = '';

  constructor(private _service:LoginService) { }
  @Output()
  venkatesh:EventEmitter<string>=new EventEmitter<string>();

  
  login() {
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
    else{
     
      this.On();
      console.log("I am in else block in login function")

    }
    
  }
  On()
  {
    this.venkatesh.emit("venkatesh")
    console.log("in on function")
  }

}
