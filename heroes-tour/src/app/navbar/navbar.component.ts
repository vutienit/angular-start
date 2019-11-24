import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

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
}
