import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchContent: any = '';
  name = 10;

  @Output() searchTerm = new EventEmitter<string>();

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor() {}
  updateSearch() {
    this.searchContent = this.searchInput.nativeElement.value;
    this.searchTerm.emit(this.searchInput.nativeElement.value);
  }
}
