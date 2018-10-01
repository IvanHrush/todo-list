import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioComponent implements OnInit {

  get filterOption() {
    return this.todoListService.filterOption;
  }
  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
  }

  onRadioBtnChange(option) {
    if (option === this.todoListService.filterOption) return;
    this.todoListService.onRadioBtnChange(option);
  }

}
