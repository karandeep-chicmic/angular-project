import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product;

  calculateDiscount(product: any): number {
    return Math.round((1 - product.discountedPrice / product.price) * 100);
  }
}
