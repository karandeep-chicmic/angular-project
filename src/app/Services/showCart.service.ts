import { Injectable } from '@angular/core';

@Injectable()
export class showCartService {
  constructor() {}
  showCart: boolean = false;

  getShowCart() {
    return this.showCart;
  }
}
