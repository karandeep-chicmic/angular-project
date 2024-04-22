import { Component, DoCheck } from '@angular/core';

interface obj {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  imgSrc: string;
  availability: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements DoCheck {
  cartItems: obj[] = [];
  ngDoCheck(): void {
    this.cartItems = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];
  }

  removeFromCart(i: any) {}
  addFromCart(i: any) {}
}
