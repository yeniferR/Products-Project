import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProductsComponent } from './detail-products.component';

const routes: Routes = [{ path: '', component: DetailProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProductsRoutingModule { }
