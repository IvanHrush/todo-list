import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCheck() {
    this.task.completed = !this.task.completed;
  }

  onDelete() {
    this.taskDeleted.emit();
  }

}
