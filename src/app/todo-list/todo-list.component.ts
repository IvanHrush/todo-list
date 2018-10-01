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

  filterOption: string = 'all';
  tasks: Task[];

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.tasks = this.todoListService.tasks;
    this.todoListService.tasksUpdated.subscribe(() => {
      this.filterTasks();
    });
  }

  onTaskAdded(taskName) {
    this.todoListService.addTask(taskName);
  }

  onTaskDeleted(n) {
    this.todoListService.deleteTask(n);
  }

  onRadioBtnChange(state) {
    this.filterOption = state;
    this.filterTasks();
  }

  onSearchKeyUp(str) {
    const re = new RegExp(str, 'i');

    let tasksUpd: Task[] = this.todoListService.filterTasks(this.filterOption);
    tasksUpd = tasksUpd.filter(task => re.test(task.name));
    this.tasks = tasksUpd;

  }

  private filterTasks() {
    this.tasks = this.todoListService.filterTasks(this.filterOption);
  }
}
