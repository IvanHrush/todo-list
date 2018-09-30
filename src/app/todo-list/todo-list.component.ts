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
    this.todoListService.tasksUpdated.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  onTaskAdded(taskName) {
    this.todoListService.addTask(taskName);
  }

  onTaskDeleted(n) {
    this.todoListService.deleteTask(n);
  }

  onRadioBtnChange(state) {
    this.tasks = this.todoListService.filterTasks(state);
  }
}
