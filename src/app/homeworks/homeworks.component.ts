import {Component, OnInit, Input} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent implements OnInit {
  @Input() user: User;
  countOfAllTasks: number;
  countOfIsDoneTasks: number;
  allIsDone: boolean;
  constructor() { }

  ngOnInit() {
    this.allIsDone = this.isGoodBoy();
  }
  isGoodBoy(): boolean {
    this.countOfAllTasks = this.user.list.length;
    this.countOfIsDoneTasks = this.user.list.filter(item => item.isCompleted).length;
    return this.countOfAllTasks === this.countOfIsDoneTasks ? true : false;
  }
}
