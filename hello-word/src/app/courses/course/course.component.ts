import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CoursesService } from './../courses.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})

export class CourseComponent implements OnInit{
  @Input() course;
  @Output() deleted = new EventEmitter();

  constructor(
    private coursesService: CoursesService,
    private route : ActivatedRoute
    ){

  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      params => {
        // console.log(params);
        if(params.get('id')){
          let id : any = params.get('id');
          this.coursesService.getCourseById(id).subscribe(
            (response : any) => {
              this.course = response;
            }
          );
        }
      }
    );
    this.route.queryParamMap.subscribe(
      params => {
        console.log(params);       
      }
    )
  }

  deleteCourse() {
    this.coursesService.deleteCourse(this.course.id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    this.deleted.emit(this.course.likeCount);
  }

  checkLikeCountEvent(likeCount) {
    this.course.likeCount = likeCount;
  }

  rename() {
    this.coursesService.renameCourse('asdsd').subscribe(
      response => {
        console.log(response);
      },
      error => {
        if (error.status === 500) {
          alert('Cannot rename this course')
        }
        console.log(error);
      }
    )
  }
}
