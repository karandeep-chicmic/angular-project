import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { TestingService } from '../Services/testing.service';
import { showCartService } from '../Services/showCart.service';
interface ButtonItem {
  name: string;
  ref: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('btnEle', { static: false }) buttonElement: ElementRef;
  showCartBool = inject(showCartService);

  btns: ButtonItem[] = [
    { name: 'Home', ref: '/Home' },
    { name: 'About', ref: '/About' },
    { name: 'Portfolio', ref: '/Portfolio' },
    { name: 'Contact', ref: '/Contact' },
  ];

  showCart() {
    this.showCartBool.showCart = !this.showCartBool.showCart;
    console.log(this.showCartBool.showCart);
  }
}
