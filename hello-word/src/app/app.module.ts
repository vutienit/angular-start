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

import { NavbarModule } from './navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormNameComponent } from './form-name/form-name.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';
import { AlbumImageComponent } from './album-image/album-image.component';
import { AlbumImageModule } from './album-image/album-image.module';
import { ImageDetailComponent } from './album-image/image-detail/image-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UserCardModule } from './user-card/user-card.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDialogComponent } from './shared/dialog/user-dialog/user-dialog.component';
import { SharedModule } from './shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginModule } from './login/login.module';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuardService } from './shared/service/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    ContactFormComponent,
    NewPasswordComponent,
    NotFoundComponent,
    FormNameComponent,
    FormReactiveComponent,
    AuthorsComponent,
    LoginFormComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoursesModule,
    LikeModule,
    ReactiveFormsModule,
    UserCardModule,
    NavbarModule,
    AlbumImageModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    SharedModule,
    LoginModule,
    RouterModule.forRoot([
      {path:'', component : AuthorsComponent, canActivate : [AuthGuardService]},
      {path:'admin', component : AdminComponent, canActivate : [AdminAuthGuardService]},
      {path:'login', component : LoginComponent},
      {path:'courses', component : CoursesComponent, canActivate : [AuthGuardService]},
      {path:'courses/course/:id', component : CourseComponent, canActivate : [AuthGuardService]},
      {path:'name', component : UserCardComponent, canActivate : [AuthGuardService]},
      {path:'reactive', component : FormReactiveComponent, canActivate : [AuthGuardService]},
      {path:'album', component : AlbumImageComponent, canActivate : [AuthGuardService]},
      {path:'album/image/:id/:height/:width', component : ImageDetailComponent, canActivate : [AuthGuardService]},
      {path:'no-access', component : NoAccessComponent},
      {path:'**', component : NotFoundComponent}
    ])
  ],
  bootstrap: [AppComponent],
  providers : [AuthGuardService, AdminAuthGuardService]
})
export class AppModule { }
