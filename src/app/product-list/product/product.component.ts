import { Component, DoCheck, Input, inject } from '@angular/core';
import { Product } from '../../Models/Product';
import { showCartService } from 'src/app/Services/showCart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements DoCheck {
  showBool = inject(showCartService);
  flag: boolean = true;
  ngDoCheck(): void {
    this.flag = !this.showBool.showCart;
  }
  @Input() product: Product;

  calculateDiscount(product: any): number {
    return Math.round((1 - product.discountedPrice / product.price) * 100);
  }
}
