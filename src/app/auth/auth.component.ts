import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
enum Mode { login, register }
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  preserveWhitespaces: true,
  providers: [LoginService]
})
export class AuthComponent {
  mode: Mode = Mode.login
  myForm: FormGroup;

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  register = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  constructor(private _loginService: LoginService,private router : Router) {
    if (this.mode === Mode.login) {
      this.myForm = this.login
    } else {
      this.myForm = this.register
    }
  }

  changeMode() {
    if (this.mode === Mode.login) {
      this.mode = Mode.register
      this.myForm = this.register
    }
    else {
      this.mode = Mode.login
      this.myForm = this.login
    }
  }

  loginUser () {
    this._loginService.loginUser (this.myForm.value).subscribe ((response : any) => {
      if (response.isSuccess) {
        window.localStorage.setItem ("accessToken",response.access);
        this.router.navigateByUrl ("/");
      }
    })
  }

  registerUser() {
    this._loginService.registerUser(this.myForm.value).subscribe(
      (response :any) => {
        if (response.isSuccess) {
          this.mode = Mode.login;
          this.myForm = this.login
        }
      })
  }
  getValues() {
    console.log(this.myForm.value)
  }
}
