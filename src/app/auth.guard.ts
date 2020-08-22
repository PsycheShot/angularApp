import { Token } from './shared/model/token.model';
import { LoginService } from './login.service';
import { logging } from 'protractor';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authservice:AuthService;
  private loginservice:LoginService;
  private router:Router
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(localStorage.getItem('login')=="true"){
        return true;
      }
      else{
        alert("LOGIN FIRST")
      }
      
    }
  
}