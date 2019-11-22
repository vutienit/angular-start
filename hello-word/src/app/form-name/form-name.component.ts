import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.css']
})
export class FormNameComponent {
  constructor() { }
  contactList = [
    {value : 1, name : "Tien"},
    {value : 2, name : "Ti"}
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
