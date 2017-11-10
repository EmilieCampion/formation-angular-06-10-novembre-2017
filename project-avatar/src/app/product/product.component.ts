import { Product } from './product.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input() products: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  constructor() {
    this.onProductSelected = new EventEmitter();
   }
  clicked(product) {
    console.log('internal list ', product);
    this.onProductSelected.emit(product);
  }

  ngOnInit() {
  }

}
