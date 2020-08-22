import { User } from './shared/model/user.model';
import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Token } from './shared/model/token.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl
  user:User = {
    password:"",
    username:""
  }
  isLoggedIn:string = "false"
  constructor(private httpClient: HttpClient) { }
  
  login(username: string, password: string) {
    console.log("inside authservice login");
    this.user.password = password;
    this.user.username = username;
    console.log(this.user);
    this.isLoggedIn = "true";
    return this.httpClient.post<any>(`${this.apiUrl}`, this.user)
       
  }
  getToken():string{
    return localStorage.getItem('token');
  }


}