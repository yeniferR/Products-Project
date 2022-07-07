import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSearchRoutingModule } from './products-search-routing.module';
import { ProductsSearchComponent } from './products-search.component';


@NgModule({
  declarations: [ProductsSearchComponent],
  imports: [
    CommonModule,
    ProductsSearchRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ProductsSearchModule { }
