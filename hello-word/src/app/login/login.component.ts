import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomFormValidators } from './../custom/password.validators';
import { AuthServiceService } from './auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder,
    private authService : AuthServiceService,
    private router : Router,
    private route : ActivatedRoute) {
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
  error : any;
  successMessage : any;
  login() {
    this.error = null;
    this.successMessage = null;
    const body = {username : this.username.value, password : this.form.value.password};
    this.authService.login(body).subscribe(
      (response: any) => {
        this.successMessage = response.message;
        localStorage.setItem('token', response.token);
        let returnUrl = this.route.snapshot.queryParams['returnUrl'];
        const source = timer(1000);
        source.subscribe(
          val => {
            this.router.navigate([returnUrl || ''],{
              queryParams: {
                
              },
              queryParamsHandling : ''
            });
          });
        console.log(response);
      },
      error => {
        this.error = error;
        console.log(error);
        const source = timer(1000);
        const subscribe = source.subscribe(val => console.log(val));
      }
    );
  }

  get username() {
    return this.form.get('account').get('username')
  }

  get password() {
    return this.form.get('password') // ==> this.form.controls.password
  }
}
