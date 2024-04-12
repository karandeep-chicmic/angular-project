import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: {
    id: number;
    name: string;
    price: number;
    discountedPrice: number;
    imgSrc: string;
    availability?: number;
  };

  flag: boolean = true;

  calculateDiscount(product: any): number {
    return Math.round((1 - product.discountedPrice / product.price) * 100);
  }
}
