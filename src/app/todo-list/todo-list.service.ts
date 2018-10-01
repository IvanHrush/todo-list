import { Injectable, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  @Output() tasksUpdated: EventEmitter<Task[]> = new EventEmitter();
  @Output() radioButtonClicked: EventEmitter<any> = new EventEmitter();
  @Output() searchPerformed: EventEmitter<any> = new EventEmitter();

  tasks: Task[] = [
    new Task('laundry'),
    new Task('cleanup'),
    new Task('todo-list')
  ];

  filterOption: string = 'all';

  constructor() { }

  addTask(taskName) {
    this.tasks.push(new Task(taskName));
    this.tasksUpdated.emit();
  }

  deleteTask(id) {
    const pos = this.tasks.findIndex(task => task.id === id);
    this.tasks = [
        ...this.tasks.slice(0, pos),
        ...this.tasks.slice(pos + 1)
    ];

    this.tasksUpdated.emit();
  }

  filterTasks(): Task[] {
    let filteredTasks: Task[];
    switch (this.filterOption) {
      case 'all':
        filteredTasks = this.tasks;
        break;
      case 'active':
        filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      case 'completed':
        filteredTasks = this.tasks.filter(task => task.completed);
        break;
    }
    return filteredTasks;
  }

  onRadioBtnChange(option) {
    this.filterOption = option;
    this.tasksUpdated.emit();
    this.radioButtonClicked.emit();
  }

  onSearch(re) {
    this.searchPerformed.emit(re);
  }
}
