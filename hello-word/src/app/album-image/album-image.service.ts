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
  getImageById(id, height, width) {
    return this.url + 'id/' + id + '/' + height + '/' + width;
  }
  resizeById(id) {
    return this.url + 'id/' + id + '/300/500';
  }
}
