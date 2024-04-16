import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  selectedProduct: Product;
  flag: boolean = false;

  @Output() productSelected = new EventEmitter<Product>();
  @Input() products: any[] = [
    {
      id: 1,
      name: 'Nike Running Shoes',
      price: 80,
      discountedPrice: 70,
      imgSrc:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      availability: 0,
    },
    {
      id: 2,
      name: 'Adidas Sneakers',
      price: 65,
      discountedPrice: 55,
      imgSrc:
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      availability: 6,
    },
    {
      id: 3,
      name: 'Puma High Heels',
      price: 100,
      discountedPrice: 90,
      imgSrc:
        'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww',
      availability: 0,
    },
    {
      id: 4,
      name: 'Jordan Basketball Shoes',
      price: 120,
      discountedPrice: 100,
      imgSrc:
        'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNob2VzfGVufDB8fDB8fHww',
      availability: 6,
    },
    {
      id: 5,
      name: 'Reef Flip Flops',
      price: 20,
      discountedPrice: 15,
      imgSrc:
        'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNob2VzfGVufDB8fDB8fHww',
      availability: 90,
    },
    {
      id: 6,
      name: 'Timberland Boots',
      price: 150,
      discountedPrice: 130,
      imgSrc:
        'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNob2VzfGVufDB8fDB8fHww',
      availability: 3,
    },
    {
      id: 7,
      name: 'Sperry Loafers',
      price: 70,
      discountedPrice: 60,
      imgSrc:
        'https://images.unsplash.com/photo-1571859856639-d54ab2c18ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHNob2VzfGVufDB8fDB8fHww',
      availability: 34,
    },
    {
      id: 8,
      name: 'Merrell Hiking Shoes',
      price: 110,
      discountedPrice: 95,
      imgSrc:
        'https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
      availability: 6,
    },
    {
      id: 9,
      name: 'Crocs Sandals',
      price: 30,
      discountedPrice: 25,
      imgSrc:
        'https://images.unsplash.com/photo-1523975041633-a62b4a500f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
      availability: 10,
    },
    {
      id: 10,
      name: 'Ecco Dress Shoes',
      price: 90,
      discountedPrice: 80,
      imgSrc:
        'https://plus.unsplash.com/premium_photo-1667161529094-16ba30fa00a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
      availability: 0,
    },
  ];

  @Input() searchItem: string = '';

  allProds = this.products.length;
  inStock = this.products.filter((v) => v.availability).length;
  outStock = this.products.filter(
    (v) => v.availability === 0 || Boolean(v.availability) === false
  ).length;

  selectTheProd(val: Product) {
    this.selectedProduct = val;
    this.flag = true;
  }

  backToAllProds() {
    this.flag = !this.flag;
    this.selectedProduct = null;
  }
}
