import { Component, OnInit } from '@angular/core';
import { Student } from './register';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student:Student=new Student();
  save(studentForm:NgForm){
    console.log(studentForm.form);
    console.log('Saved:'+JSON.stringify(this.student))
  }
    constructor() { }
  
    ngOnInit() {
    }
  
}
