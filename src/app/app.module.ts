import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { PureTaskListComponent } from './components/pure-task-list/pure-task-list.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, TaskListComponent, PureTaskListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
