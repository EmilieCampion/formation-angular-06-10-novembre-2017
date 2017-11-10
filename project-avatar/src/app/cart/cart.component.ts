import { Product } from './../product/product.model';
import { Cart } from './cart.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() kartProducts: Product[];
  constructor() { }

  ngOnInit() {
  }
  calculateTotal() {
    let price = 0;
    this.kartProducts.map(item => {
      price += item.price;
    });
    return Math.round(price);
  }
  arrangedKartProducts() {
    return this.kartProducts;
  }

}
