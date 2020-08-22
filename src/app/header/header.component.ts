import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:string;
  constructor(
    private authservice:AuthService,
    private loginservice:LoginService,
    private router:Router
    ) { }
  
  ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.isLoggedIn = this.authservice.isLoggedIn;
      }
    })
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('login')
    
  }
}


