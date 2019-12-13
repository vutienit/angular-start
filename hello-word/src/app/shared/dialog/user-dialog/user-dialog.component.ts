import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from 'src/app/custom/password.validators';
import { UserCardService } from 'src/app/user-card/user-card.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    fb: FormBuilder,
    private userCardService: UserCardService
    ) {
    this.form = fb.group({
      account: fb.group({
        username: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          CustomFormValidators.cannotContainDigit
        ]],
      }),
      email: ['', [
        Validators.required,
      ]],
      birthdate: [{value : '', disabled: true}, [
        Validators.required,
      ]],
      company: ['', [
        Validators.required,
      ]]
    })
  }

  ngOnInit() {
  }


  create() {
    const body = {
      id: 100,
      name: this.username.value,
      company: {
        name: this.company.value
      },
      email: this.email.value,
    }
    const temp_date : Date = new Date();
    console.log(temp_date);
    console.log(new Date(this.birthdate.value).toLocaleDateString());
    console.log();
    this.dialogRef.close(body);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get username() {
    return this.form.get('account').get('username')
  }

  get email() {
    return this.form.get('email')
  }

  get company() {
    return this.form.get('company')
  }
  get birthdate(){
    return this.form.get('birthdate')
  }
}
