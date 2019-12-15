import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService : AuthServiceService,
    private router : Router) { }

  canActivate(router, state : RouterStateSnapshot) {
    if(this.authService.isLogin()){
      return true;
    }
    this.router.navigate(['/login'],{
      queryParams : {
        returnUrl : state.url
      }
    });
    return false;
  }
}
