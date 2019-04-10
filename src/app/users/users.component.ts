import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
// import { HomeworksComponent } from '../homeworks/homeworks.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // directives: [ HomeworksComponent ]
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {
  }
  getUsers(): void {
    // this.users = this.userService.getUsers();
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  ngOnInit() {
    this.getUsers();
  }
  onClick() {
   this.users.forEach(item => item.name = 'test');
   this.users[3].list[0].isCompleted = false;
  }
}
