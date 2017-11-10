import { Product } from './product/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: Product[];
  kartProducts: Product[];

    constructor() {
      this.products = [
        // tslint:disable-next-line:max-line-length
        new Product ('Black Running Shoes', '#smth', 109.99, ['shoes', 'sport', 'blah'], '../assets/images/products/black-shoes.jpg', 'My awesome description'),
        new Product ('Blue Jacket', '#smth', 250.39, ['sportswear', 'sport', 'blah'], '../assets/images/products/blue-jacket.jpg', 'My awesome description'),
        // tslint:disable-next-line:max-line-length
        new Product ('Black Cap', '#smth', 29.99, ['cap', 'sport', 'blah'], '../../assets/images/products/black-hat.jpg', 'My awesome description'),
      ];
      this.kartProducts = [];
    }
    productChanged(product: Product): void {
      this.addToKart(product);
      }
      addToKart(product: Product): void {
        this.kartProducts.push(product);
      }
}
