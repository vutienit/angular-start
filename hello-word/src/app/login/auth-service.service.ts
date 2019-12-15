import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRpZW4iLCJpYXQiOjE1MTYyMzkwMjJ9.W1j5DphVkVEPnvOoVUbOno_JWjcPdp_cqSczoNWtkjU';
  adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRpZW4iLCJpYXQiOjE1MTYyMzkwMjIsImlzQWRtaW4iOnRydWV9.J0EOiGUUh_6XyPm4dNuA8oyZy9af1IcmSz3yTsVIcW8';
  constructor() { }
  login(credentials): Observable<any>{
    if(credentials.username === 'vutien' && credentials.password === '123456'){
      return of ({status : 200, token : this.token, message : 'Login successful'});
    }else if(credentials.username === 'admin' && credentials.password === '123456'){
      return of ({status : 200, token : this.adminToken, message : 'Login successful'});
    }else{
      return throwError(new Error('Invalid username or password'));
    }
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLogin(){
    return this.localToken ? true : false;
  }

  isAdmin(){
    if(jwt_decode(this.localToken) && jwt_decode(this.localToken).isAdmin){
      return true;
    }else{
      return false;
    }
  }

  get localToken(){
    return localStorage.getItem('token');
  }
  
}
