import { Injectable, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  @Output() tasksUpdated: EventEmitter<Task[]> = new EventEmitter();

  tasks: Task[] = [
    new Task('laundry'),
    new Task('cleanup'),
    new Task('homework')
  ]

  constructor() { }

  addTask(taskName) {
    this.tasks.push(new Task(taskName));
  }

  deleteTask(n) {
    this.tasks = [
        ...this.tasks.slice(0, n),
        ...this.tasks.slice(n + 1)
    ];

    this.tasksUpdated.emit(this.tasks);
  }
}
