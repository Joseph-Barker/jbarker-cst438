import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username: string = "admin";
  password: string = "password"
  usernameInput: string = "";
  passwordInput: string = "";
  validUsername: boolean = false;
  validPassword: boolean = false;
  submit: boolean = false;
  validSignIn: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  signInClick() {
    this.submit = true;
    if (this.username == this.usernameInput) {
      this.validUsername = true;
    } else {
      this.validUsername = false;
    }
    if (this.password == this.passwordInput) {
      this.validPassword = true;
    } else {
      this.validPassword = false;
    }
    if (this.validUsername && this.validPassword) {
      this.validSignIn = true;
    } else {
      this.validSignIn = false;
    }
  }
  setClasses() {
    let myClasses = {
      success: this.validSignIn == true,
      fail: this.validSignIn == false,
    }
    return myClasses;
  }
}
