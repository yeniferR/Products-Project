import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductsRoutingModule } from './detail-products-routing.module';
import { DetailProductsComponent } from './detail-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetailProductsComponent],
  imports: [
    CommonModule,
    DetailProductsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DetailProductsModule { }
