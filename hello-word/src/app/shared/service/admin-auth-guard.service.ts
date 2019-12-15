import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from 'src/app/login/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private authService : AuthServiceService,
    private router : Router) { }

  canActivate(router, state : RouterStateSnapshot) {
    if(this.authService.isLogin()){
      if(this.authService.isAdmin()){
        return true;
      }else{
        this.router.navigate(['/no-access']);
      }
    }else{
      this.router.navigate(['/login']);
    }
    return false;
  }
}
