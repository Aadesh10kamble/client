import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  registerUser (object:any) {
    return this.http.post('http://127.0.0.1:8000/auth/register/',{email : object.email,password : object.password})
  }

  loginUser (object:any) {
    return this.http.post ('http://127.0.0.1:8000/auth/login/',{email : object.email,password : object.password})
  }
}
