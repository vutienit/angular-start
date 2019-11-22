import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent{
  
  listAuthors = ['Author 1', 'Author 2', 'Author 3'];
  status = false;
  count = 0;
  likeStatus = 'Like';
  like(){
    if (this.status == true) {
      this.likeStatus = 'Like';
      this.count--;
    } else {
      this.likeStatus = 'UnLike';
        this.count++;
    }
    this.status = !this.status;
  }

  constructor() { }

}
