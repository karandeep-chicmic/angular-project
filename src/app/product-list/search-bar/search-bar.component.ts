import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchContent: any = 0;

  changeSearch(event: any) {
    let x = Number(event.target.value.replaceAll(',', ''));
    if (isNaN(x)) {
      event.target.value = 0;
      this.searchContent = 0;
      return;
    }

    var e = x.toLocaleString();

    this.searchContent = e;
  }

  searchBtn() {
    alert(this.searchContent);
  }
}
