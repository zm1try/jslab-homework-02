import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeworksComponent } from './homeworks/homeworks.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeworksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
