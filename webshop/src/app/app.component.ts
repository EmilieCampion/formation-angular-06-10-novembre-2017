import { Product } from './product/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  product: Product[] = [];

    constructor() {
      this
        .product.
        // tslint:disable-next-line:max-line-length
        push(new Product ('Black Running Shoes', '#smth', 109.99, 'shoes', 'https://images.sportsdirect.com/images/products/21027940_l.jpg'));
      this
        .product
        // tslint:disable-next-line:max-line-length
        .push(new Product ('Blue Jacket', '#smth', 250.39, 'sportswear', 'https://s1.thcdn.com/productimg/0/600/600/57/11024957-1416937992-180397.jpg'));
      this.product.push(new Product ('Black Cap', '#smth', 29.99, 'cap', 'https://images.sportsdirect.com/images/products/39101803_l.jpg'));
    }

    Product(): Product[] {
      return this.product;
    }
}
