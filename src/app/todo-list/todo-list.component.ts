import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Task } from './task.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
  }

  onTaskAdded(taskName) {
    if (!taskName.trim()) {
      return;
    }
    this.todoListService.addTask(taskName);
  }
}
