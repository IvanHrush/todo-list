import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';

import { TodoListService } from '../todo-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  @ViewChild('search') search;

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.todoListService.radioButtonClicked.subscribe(() => {
      this.search.nativeElement.value = '';
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSearchKeyUp() {
    const searchStr = this.search.nativeElement.value;
    const re = new RegExp(searchStr, 'i');

    this.todoListService.onSearch(re);
  }
}
