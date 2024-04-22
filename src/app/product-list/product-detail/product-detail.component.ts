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

  
  cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  product: Product;

  // Logic for Adding to Cart Product and saving it to local storage
  addToCart(product: any) {
    var valAlreadyInCart = this.cart.find((val) => val.id === product.id);
    if (valAlreadyInCart) {
      valAlreadyInCart.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      product.quantity = 1;
      this.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    console.log(this.cart);
  }
  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
