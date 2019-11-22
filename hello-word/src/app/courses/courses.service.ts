import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {

  }

  getCourses() {
    return this.http.get(this.url + 'posts')
  }
  getCourseById(id) {
    return this.http.get(this.url + 'posts/' + id)
  }

  createCourse(body) {
    return this.http.post(this.url + 'posts', body)
  }

  renameCourse(postId) {
    return this.http.put(this.url + 'posts/' + postId, '')
  }

  deleteCourse(postId) {
    return this.http.delete(this.url + 'posts/' + postId)
  }
}
