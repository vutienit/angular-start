import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomFormValidators } from './../custom/password.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      account: fb.group({
        username: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          CustomFormValidators.cannotContainSpace,
          CustomFormValidators.cannotContainDigit
        ]],
        address: ''
      }),
      password: ['', [
        Validators.required,
        CustomFormValidators.cannotContainSpecialCharacter
      ]]
    })
  }

  submit() {
    console.log(this.form);
  }

  get username() {
    return this.form.get('account').get('username')
  }

  get password() {
    return this.form.get('password') // ==> this.form.controls.password
  }
}
