import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import { CustomFormValidators } from '../custom/password.validators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  form: FormGroup;
  passwordNotMatch: boolean;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', [
        Validators.required,
      ]],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(5),
        CustomFormValidators.cannotContainSpace,
        CustomFormValidators.cannotContainSpecialCharacter,
        CustomFormValidators.mustContainAtLeastOneUpperCaseLetter,
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    })
  }

  submit() {
    console.log(this.form);

    if (this.newPassword.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({
        pattern: true
      })
    }
    else {
      this.confirmPassword.setErrors(null)
    }

    if (this.oldPassword.value !== 'vietnam') {
      this.oldPassword.setErrors({
        pattern: true
      })
    }
    else {
      this.oldPassword.setErrors(null)
    }
  }

  get oldPassword() {
    return this.form.get('oldPassword')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }
}



