import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  obj = {
    name: 'Iphone 13',
    price: 20000000,
    color: 'Black',
    discount: 10,
    stock: 90,
    imgUrl: '/assets/image1.png',
  };
  
  getDiscount() {
    return this.obj.price - (this.obj.price * this.obj.discount) / 100;
  }
}
