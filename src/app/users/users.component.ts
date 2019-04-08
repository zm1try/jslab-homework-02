import { Component, OnInit } from '@angular/core';
// import { USERS } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
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
   this.users[4].list[0].isCompleted = false;
  }
}
