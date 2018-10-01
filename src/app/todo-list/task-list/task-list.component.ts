import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../task.model';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit, OnDestroy {

  tasks: Task[];

  private subscriptions: Subscription[] = [];

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.tasks = this.todoListService.tasks;

    this.subscriptions.push(this.todoListService.tasksUpdated.subscribe(() => {
      this.filterTasks();
    }));

    this.subscriptions.push(this.todoListService.searchPerformed.subscribe((re) => {
      this.search(re);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onTaskDeleted(n) {
    this.todoListService.deleteTask(n);
  }

  private filterTasks() {
    this.tasks = this.todoListService.filterTasks();
  }

  private search(re) {
    let tasksUpd: Task[] = this.todoListService.filterTasks();
    tasksUpd = tasksUpd.filter(task => re.test(task.name));
    this.tasks = tasksUpd;
  }
}
