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

  filterOption: string = 'all';
  tasks: Task[];

  @ViewChild('search') search;

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
    if (state === this.filterOption) return;
    this.filterOption = state;
    this.filterTasks();
    this.search.nativeElement.value = '';
  }

  onSearchKeyUp() {
    const searchStr = this.search.nativeElement.value;
    const re = new RegExp(searchStr, 'i');

    let tasksUpd: Task[] = this.todoListService.filterTasks(this.filterOption);
    tasksUpd = tasksUpd.filter(task => re.test(task.name));
    this.tasks = tasksUpd;

  }

  private filterTasks() {
    this.tasks = this.todoListService.filterTasks(this.filterOption);
  }
}
