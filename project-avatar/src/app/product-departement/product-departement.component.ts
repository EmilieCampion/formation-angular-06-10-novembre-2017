import { Product } from './../product/product.model';
import { Component, OnInit, Input } from '@angular/core';
@Component ({
    selector: 'app-product-departement',
    // tslint:disable-next-line:max-line-length
    template: '<div class="product-departement"><span *ngFor="let name of product.departement; let i=index"><a href="#">{{name}}</a><span>{{i <(product.departement.length-1) ? ">" : ""}}</span></span></div>'
})


export class ProductDepartementComponent implements OnInit {
    @Input() product: Product;

    constructor() {

    }

    ngOnInit() {}
}
