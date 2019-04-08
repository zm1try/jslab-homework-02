import {Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';
import {isGood} from '../isGood';
import {markParentViewsForCheck} from "@angular/core/src/view/util";

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
    this.allIsDone = isGood(this.user);
  }
  ngDoCheck() {
    this.allIsDone = isGood(this.user);
    this.cd.detectChanges();
  }
}
