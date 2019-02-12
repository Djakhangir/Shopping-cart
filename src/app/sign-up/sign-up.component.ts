import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userPassword:string;

  @ViewChild('signUpForm') signUPForm:NgForm

  constructor() { }

  ngOnInit() {
    this.userPassword='';
  }

  onSignUp() {
    console.log('form is:', this.signUPForm);
  }

  changeForm(){
    this.signUPForm.setValue({
      userInformation:{
        email:'john@doe.com',
        userName:'John_Doe'
      },
      password:'somePass',
      showPassword:'true'
    });
  }

  enterName(){
    this.signUPForm.form.patchValue({
      userInformation:{
        userName:'Jane Williams'
      }
    })
  }

}
