import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomFormValidators } from '../custom/password.validators';
import { UserCardService } from './user-card.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../shared/dialog/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  users = [];

  form: FormGroup;
  page: any;
  order: any;
  loading = true;
  constructor(
    private userCardService: UserCardService,
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
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
      company: ['', [
        Validators.required,
      ]]
    })
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
      this.page = params.get('page');
      this.order = params.get('order');
      this.loading = true;
      this.userCardService.getUsers().subscribe(
        (response: any[]) => {
          this.users = response.slice((this.page - 1) * 5, this.page * 5);

          if (this.order) {
            this.users.sort((a, b) => {
              let nameA = a.name.toUpperCase(); // bỏ qua hoa thường
              let nameB = b.name.toUpperCase(); // bỏ qua hoa thường
              if (nameA < nameB) {
                if (this.order === 'ascending') {
                  return -1;
                } else {
                  return 1;
                }
              }
              if (nameA > nameB) {
                if (this.order === 'ascending') {
                  return 1;
                } else {
                  return -1;
                }
              }
  
              // name trùng nhau
              return 0;
            });
          }
          this.loading = false;
        },
        error => console.log(error)
      )
    })
  }

  delete(user, index) {
    this.userCardService.deleteUser(user.id).subscribe(
      response => {
        this.users.splice(index, 1);
      },
      error => {

      })
  }

  navigate(page: number) {
    this.router.navigate([], {
      queryParams: {
        page: page
      },
      queryParamsHandling: 'merge',
    });
  }

  sort(ascending: boolean) {
    this.router.navigate([], {
      queryParams: {
        order: ascending
      },
      queryParamsHandling: 'merge',
    });
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

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loading = true;
      if (result){
        this.userCardService.createUser(result).subscribe(
          response => {
            this.loading = false;
            this.users.push(result);
          },
          error => {
    
          })
      }
      console.log('The dialog was closed');
    });
  }
}
