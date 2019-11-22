import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userListService : UserListService,  fb : FormBuilder) {
    
   }

  users : any = [];
  ngOnInit(){
    //this.courses = this.courseService.getCourses();
    this.users = this.userListService.getLists().subscribe(
      (response : any) => {
        this.users = response.slice(0, 5);
        console.log(this.users)
      },
      (error : any) => {
        alert('Can not get');
      }
    );
  }

  deleteUser(id, index){
    
  }

}
