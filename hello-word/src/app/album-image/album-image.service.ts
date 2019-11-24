import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumImageService {

  url = 'https://picsum.photos/';

  constructor(private http: HttpClient) {

  }

  getList() {
    return this.http.get(this.url + 'v2/list');
  }
  getById(id, width, height) {
    return this.http.get(this.url + 'id/' + id + '/' + width + '/' + height);
  }
}
