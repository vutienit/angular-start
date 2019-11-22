import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  isLiked = false;
  @Input() likeCount = 0;
  @Output() likeCountEvent = new EventEmitter();

  likeToggle() {
    this.likeCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
    this.likeCountEvent.emit(this.likeCount);
  }
}
