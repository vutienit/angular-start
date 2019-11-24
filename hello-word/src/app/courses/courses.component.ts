import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [];

  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  page = 1;
  limit = 5;
  sort = 'desc';
  ngOnInit() {

    this.route.queryParamMap.subscribe(
      params => {
        if (params.get('page')) {
          this.page = Number(params.get('page'));
        }
        if (params.get('limit')) {
          this.limit = Number(params.get('limit'));
        }
        if (params.get('sort')) {
          this.sort = params.get('sort');
        }
      }
    );

    this.courseService.getCourses().subscribe(
      (response: any) => {
        if (this.sort == 'asc') {
          response.sort(function (a, b) {
            // so sánh 2 giá trị title liền kề nhau để sắp xếp phần tử
            // Dùng toUpperCase() để không phân biệt ký tự hoa thường
            const genreA = a.title.toUpperCase();
            const genreB = b.title.toUpperCase();

            let comparison = 0;
            if (genreA > genreB) {
              comparison = 1;
            } else if (genreA < genreB) {
              comparison = -1;
            }
            return comparison;
          });
        } else {
          response.sort(function (a, b) {
            const genreA = a.title.toUpperCase();
            const genreB = b.title.toUpperCase();

            let comparison = 0;
            if (genreA > genreB) {
              comparison = -1;
            } else if (genreA < genreB) {
              comparison = 1;
            }
            return comparison;
          });
        }
        this.courses = response.slice(this.limit * (this.page - 1), this.limit * this.page);
        console.log(this.courses);
      },
      error => {
        alert('An unexpected error occurred');
        console.log(error);
      });
  }

  navigatePage(page : string){
    this.router.navigate(['/courses'],{
      queryParams: {
        page : page
      },
      queryParamsHandling : 'merge'
    });
  }
  navigateSort(sort : string){
    this.router.navigate(['/courses'],{
      queryParams: {
        sort : sort
      },
      queryParamsHandling : 'merge'
    });
  }

  deleteCourse(index, likeCount) {
    likeCount >= 5 ? alert('you cannot delete this course') : this.courses.splice(index, 1);
  }

  submit(form) {
    console.log(form);
    if (form.valid) {
      this.courseService.createCourse(form.value.newPost).subscribe(
        (response: any) => {
          console.log(response);
          this.courses.unshift({
            title: form.value.newPost,
            id: response.id
          })
        },
        error => {
          console.log(error);
          alert('Create Post Unsuccessful')
        });
    }
  }

}
