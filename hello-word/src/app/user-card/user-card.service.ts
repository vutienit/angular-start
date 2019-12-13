import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserCardService {

  url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url)
  }

  createUser(body) {
    return this.http.post(this.url, body)
  }

  renameUser(userID) {
    return this.http.put(this.url + userID, '')
  }

  deleteUser(userID) {
    return this.http.delete(this.url  + userID)
  }
}
