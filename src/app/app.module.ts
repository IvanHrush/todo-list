import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './todo-list/task/task.component';
import { RadioComponent } from './todo-list/radio/radio.component';
import { SearchComponent } from './todo-list/search/search.component';
import { TaskListComponent } from './todo-list/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskComponent,
    RadioComponent,
    SearchComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
