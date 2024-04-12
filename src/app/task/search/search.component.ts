import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchContent: any = '';

  @Output() search: EventEmitter<string> = new EventEmitter();

  searchBtn(){
    this.search.emit(this.searchContent);
  }


}
