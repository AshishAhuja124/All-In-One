import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/loginservices.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  
})
export class WelcomeComponent implements OnInit {

  constructor(private _service:LoginService) { }

  public pageNumber : number = 0;
  public pageCount : number = 0;
  public pages = [
      {image: "http://asset.url/1.png"},
      {image: "http://asset.url/2.png"}
  ];

  mess:string
  value:boolean
  ngOnInit() {
   
  }

  method(message:string):void{
    this.mess=message;
    console.log(this.mess);
    console.log("I am in method function of welcome")
    if(this.mess=='venkatesh')
    {
      console.log("if cond is satisfied")
this.value=true;
    }
    }
  logout():void {
    this._service.logout();
  }
}


