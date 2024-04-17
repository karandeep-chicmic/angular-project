import { Component, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string = '';
  names: string[] = ['alpha', 'beta', 'gamma', 'wave'];

  @ViewChild('productListDetail') productListDetail: ProductListComponent;
  namesPush() {
    this.names.push('vbdhjfcbvjdhb');
    this.names = [...this.names];
  }
  setSearchTerm(ev: string) {
    this.searchTerm = ev;
  }
}
