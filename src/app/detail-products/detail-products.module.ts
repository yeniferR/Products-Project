import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductsRoutingModule } from './detail-products-routing.module';
import { DetailProductsComponent } from './detail-products.component';


@NgModule({
  declarations: [DetailProductsComponent],
  imports: [
    CommonModule,
    DetailProductsRoutingModule
  ]
})
export class DetailProductsModule { }
