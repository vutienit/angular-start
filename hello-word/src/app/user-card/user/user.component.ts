import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  @Output() deleted = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onDeleted(){
    this.deleted.emit();
  }
}
