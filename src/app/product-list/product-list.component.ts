import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  cart: number = 0;
  flag: boolean = true;
  hasAdminPrivileges: boolean = false;
  showProduct: boolean = false;
  arr: number[] = [11, 2, 3, 4, 5, 6];
 
  obj = {
    name: 'Iphone 13',
    price: 20000000,
    color: 'Black',
    discount: 10,
    stock: 10,
    imgUrl: '/assets/image1.png',
  };
  add() {
    if (this.cart >= this.obj.stock) {
      return false;
    } else {
      this.cart++;
      return true;
    }
  }
  minus() {
    if (this.cart <= 0) {
      return false;
    } else {
      this.cart--;
      return true;
    }
  }
  getDiscount() {
    return this.obj.price - (this.obj.price * this.obj.discount) / 100;
  }
  showProductBtn() {
    this.showProduct = !this.showProduct;
  }
}
