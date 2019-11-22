import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list.component';
import { UserListService } from './user-list.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserListService
  ],
  exports: [
    UserListComponent, UserComponent
  ]
})
export class UserListModule { }
