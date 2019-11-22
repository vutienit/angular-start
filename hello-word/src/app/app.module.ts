import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { SummaryPipe } from './summary.pipe';
import { LikeModule } from './like/like.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { UserListModule } from './user-list/user-list.module';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormNameComponent } from './form-name/form-name.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    ContactFormComponent,
    LoginComponent,
    NewPasswordComponent,
    NotFoundComponent,
    FormNameComponent,
    FormReactiveComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoursesModule,
    LikeModule,
    ReactiveFormsModule,
    UserListModule,
    NavbarModule,
    RouterModule.forRoot([
      {path:'', component : AuthorsComponent},
      {path:'courses', component : CoursesComponent},
      {path:'courses/course/:id', component : CourseComponent},
      {path:'name', component : FormNameComponent},
      {path:'reactive', component : FormReactiveComponent},
      {path:'**', component : NotFoundComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
