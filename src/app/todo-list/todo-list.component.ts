import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task } from './task.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.tasks = this.todoListService.tasks;
  }

  onTaskDeleted(n) {
    this.tasks = [
        ...this.tasks.slice(0, n),
        ...this.tasks.slice(n + 1)

    ]
  }

}
