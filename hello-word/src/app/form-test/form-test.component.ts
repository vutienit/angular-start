import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {

  constructor() { }
  categoryList = [
    {value : 1, name : "Development"},
    {value : 2, name : "Frontend"},
    {value : 3, name : "Backend"}
  ];
  checkMessage = false;
  log(name){
    console.log(name);
  }
  check(checkRemember){
    console.log(checkRemember);
    if(checkRemember){
      this.checkMessage = true;
    }else{
      this.checkMessage = false;
    }
  }
  submit(f){
    console.log(f);
  }

}
