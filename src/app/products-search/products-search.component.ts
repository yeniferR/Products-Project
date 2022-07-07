import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsServiceService } from './service/products-service.service';


@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.sass']
})
export class ProductsSearchComponent implements OnInit {
  resultProducts :any;
  ProductsList:any;
  query:string;
  subscription: Subscription;
  code:any;
  filter:any;
  filterList:any;
  filterName:any;
  constructor(private readonly router:Router,private  routerActivatedRoute:ActivatedRoute,public ProductsSearchService:ProductsServiceService) { }

  ngOnInit() {
    this.subscription = this.routerActivatedRoute.params
    .subscribe(
     (codeParams) =>{
      console.log(codeParams);
       this.code =codeParams['query'];
      console.log(this.code);
       this.search();
     });
  }

   search(){
    this.ProductsSearchService.getProducts(this.code).subscribe(
      (data) =>(
        this.resultProducts = data),
      (err) => console.log(),
      () => {
        if(this.resultProducts){
          this.ProductsList = this.resultProducts.results;
          this.filterList = this.resultProducts.filters;
          console.log( this.filterList);
          console.log(this.resultProducts);
          for (let index = 0; index <= 3; index++) {
            const element = this.ProductsList[index];

            console.log( element);


            // .forEach(element1 => {
            //   this.filterName =element1.name;
            //   console.log(element1.name);

            // });

          }
        }
      }
    )

  }

  DetailProducts(event:any){
    console.log(event);

  }

}
