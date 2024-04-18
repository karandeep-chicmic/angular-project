import { Component, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string = '';
  

  @ViewChild('productListDetail') productListDetail: ProductListComponent;
  
  
  setSearchTerm(ev: string) {
    this.searchTerm = ev;
  }
}
