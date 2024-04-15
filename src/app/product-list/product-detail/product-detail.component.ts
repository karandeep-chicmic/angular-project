import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent;

  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
