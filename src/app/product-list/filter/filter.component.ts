import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  filter: string = 'allProducts';

  setFilter(str: string) {
    this.filter = str;
    this.filterChange.emit(str);
  }
  
  @Input()
  inStock: number = 0;
  @Input()
  outStock: number = 0;
  @Input()
  all: number = 50;
}
