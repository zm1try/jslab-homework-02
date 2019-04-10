import {Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeworksComponent implements OnInit, DoCheck {
  @Input() user: User;
  allIsDone: boolean;
  constructor(public cd: ChangeDetectorRef) {
    // this.cd.detach();
  }
  get userName(): string {
    return this.user.name;
  }
  ngOnInit() {
  }
  ngDoCheck() {
    this.allIsDone = this.isGood(this.user);
    // this.cd.detectChanges();
  }
  isGood(user: User): boolean {
    if (user) {
      const countOfAllTasks: number = user.list.length;
      const countOfIsDoneTasks: number = user.list.filter(item => item.isCompleted).length;
      return countOfAllTasks === countOfIsDoneTasks ? true : false;
    }
  }
}
