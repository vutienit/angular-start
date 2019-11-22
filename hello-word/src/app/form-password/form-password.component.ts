import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../custom/password.validator';
import { UsernameValidator } from '../custom/usename.validator';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent {

  form : FormGroup;
  
  constructor(fb : FormBuilder) { 
    this.form = fb.group({
      oldpassword : ['',[
        Validators.required,
        PasswordValidator.checkOldPassword
      ]],
      passwords : fb.group({
        newpassword : ['',[
          Validators.required, 
          Validators.minLength(5),
          UsernameValidator.cannotContainSpace,
          PasswordValidator.cannotContainSpecialCharacters,
          PasswordValidator.notcontainUppercaseLetter
        ]],     
        confirmpassword : ['', [
          Validators.required
        ]]
      }),
    });
  }

  // checkConfirmPassword(){
  //   if(this.form.get('newpassword').value != null && this.form.get('confirmpassword').value != null && 
  //     this.form.get('newpassword').value != this.form.get('confirmpassword').value){
  //     return true;
  //   }
  //   return null;
  // }

  get oldpassword(){
    return this.form.get('oldpassword');
  }
  get newpassword(){
    return this.form.get('passwords').get('newpassword');
  }
  get confirmpassword(){
    return this.form.get('passwords').get('confirmpassword');
  }
  log(){
    console.log(this.form)
  }
}
