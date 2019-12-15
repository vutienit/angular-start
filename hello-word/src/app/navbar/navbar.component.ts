import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../login/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router,
    private authService : AuthServiceService) { }
  
  ngOnInit() {

  }
  
  navigate(path : string){
    console.log(path);
    this.router.navigate([path],{
      queryParams: {
        
      },
      queryParamsHandling : ''
    });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['login'],{
      queryParams: {
        
      },
      queryParamsHandling : ''
    });
  }
}
