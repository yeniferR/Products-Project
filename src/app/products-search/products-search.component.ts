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
  subscription: Subscription;
  code:any;
  filter:any;
  filterList:any;
  filterName:any;
  address:any;
  stateName:any;

  constructor(private readonly router:Router,private  routerActivatedRoute:ActivatedRoute,public ProductsSearchService:ProductsServiceService) { }

  ngOnInit() {
    this.subscription = this.routerActivatedRoute.params
    .subscribe(
     (codeParams) =>{
       this.code =codeParams['query'];
       this.searchProducts();
     });
  }

  searchProducts(){
    this.ProductsSearchService.getProducts(this.code).subscribe(
      (data) =>(
        this.resultProducts = data),
      (err) => console.log(),
      () => {
        if(!!this.resultProducts){
          this.resultProducts = { author: {name: "Yenifer", lastname: "Rivas Moreno"}, ...this.resultProducts }
          console.log(this.resultProducts);
          this.ProductsList = this.resultProducts.results;
          for (let index = 0; index < this.ProductsList.length; index++) {
            this.ProductsList[index].price = new Intl.NumberFormat('es-Latn-US').format(this.ProductsList[index].price);
          }
          this.filterList = this.resultProducts.filters;
          console.log( this.filterList);
          if (this.filterList.length > 0) {
            console.log(this.filterList[0].values[0].path_from_root);
            this.filter = this.filterList[0].values[0].path_from_root;
          }

        }
      }
    )

  }

  DetailProducts(event:any)
  {
    if (!!event) {
      let id  = event.id;
      let description = event.title
      // console.log(event);
      this.router.navigate(['items',id,description]);

    }
  }

}
