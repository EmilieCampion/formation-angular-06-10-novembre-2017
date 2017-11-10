import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDepartementComponent } from './product-departement/product-departement.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductRowComponent,
    ProductDepartementComponent,
    ProductImageComponent,
    CartComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
