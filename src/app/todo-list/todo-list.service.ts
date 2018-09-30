import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  tasks: Task[] = [
    new Task('laundry'),
    new Task('cleanup'),
    new Task('homework')
  ]

  constructor() { }

}
