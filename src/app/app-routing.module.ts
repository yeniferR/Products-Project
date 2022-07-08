import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'items/:id/:desciprcion', loadChildren: () => import('./detail-products/detail-products.module').then(m => m.DetailProductsModule) },
  { path: 'items?search=/:query', loadChildren: () => import('./products-search/products-search.module').then(m => m.ProductsSearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }