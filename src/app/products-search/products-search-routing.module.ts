import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsSearchComponent } from './products-search.component';

const routes: Routes = [{ path: '', component: ProductsSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsSearchRoutingModule { }
