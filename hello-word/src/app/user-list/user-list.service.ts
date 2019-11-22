import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  url = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  getLists() {
    return this.http.get(this.url + 'users');
  }
  deleteUser(id) {
    return this.http.delete(this.url + 'users/' + id);
  }
  createUser(body) {
    return this.http.post(this.url + 'users', body)
  }
  renameCourse(id) {
    return this.http.put(this.url + 'users/' + id, '')
  }
}
