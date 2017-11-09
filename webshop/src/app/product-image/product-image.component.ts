import { Product } from './../product/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  template: '<img src="{{product.img}}" alt="{{product.description}}" width="150">',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
