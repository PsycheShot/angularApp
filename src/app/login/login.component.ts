import { AuthService } from './../auth.service';
import { rolecount } from './../shared/model/rolecount.model';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value:string = "false";
  myForm:FormGroup;
  token:string;
  constructor(
    private loginService:LoginService,
    private formBuilder:FormBuilder,
    private router:Router,
    private authservice:AuthService
    ) { }
    

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  OnSubmit(){
    console.log("inside login component onsumbit")
    console.log(this.myForm.get('password').value);
    this.authservice.login(this.myForm.get('email').value, this.myForm.get('password').value).subscribe(res=>{
      if(res.token){
        localStorage.setItem('token',res.token);
        localStorage.setItem('login',"true")
        this.router.navigateByUrl('home')
      }
      else{
        alert("Invalid login credentials")
      }
    })
    
      
    
  }
}
