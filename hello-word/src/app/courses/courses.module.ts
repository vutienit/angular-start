import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course/course.component';
import { LikeModule } from '../like/like.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LikeModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
