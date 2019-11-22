import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidator } from '../custom/usename.validator';
import { PasswordValidator } from '../custom/password.validator';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
  form : FormGroup;
  
  constructor(fb : FormBuilder) { 
    this.form = fb.group({
      account : fb.group({
        username : ['',[
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(20),
          UsernameValidator.cannotContainSpace,
          UsernameValidator.cannotContainDigits
        ]],
        address : []
      }),
      password : ['', [
        Validators.required,
        PasswordValidator.cannotContainLetter
      ]]
    });
  }

  // form = new FormGroup({
  //   account : new FormGroup({
  //     username : new FormControl('',[
  //       Validators.required, 
  //       Validators.minLength(5), 
  //       Validators.maxLength(20),
  //       UsernameValidator.cannotContainSpace,
  //       UsernameValidator.cannotContainDigits
  //     ]),
  //     address : new FormControl()
  //   }),
  //   password : new FormControl('', [
  //     Validators.required,
  //     PasswordValidator.cannotContainLetter
  //   ])
  // });

  get username(){
    return this.form.get('account').get('username');
  }
  get password(){
    return this.form.get('password');
  }

  log(){
    console.log(this.form);
  }

}