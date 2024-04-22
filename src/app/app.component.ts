import { Component, DoCheck, ViewChild, inject } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { showCartService } from './Services/showCart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  showCartBool = inject(showCartService);
  flag: boolean = false;
  searchTerm: string = '';
  // constructor(private showCartBool: showCartService) {}

  ngDoCheck(): void {
    console.log(this.flag);
    this.flag = !this.showCartBool.showCart;
  }

  @ViewChild('productListDetail') productListDetail: ProductListComponent;

  setSearchTerm(ev: string) {
    this.searchTerm = ev;
  }
}
