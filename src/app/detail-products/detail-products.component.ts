import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsServiceService } from '../products-search/service/products-service.service';
import { DetailProductsService } from './shared/detail-products.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.sass']
})
export class DetailProductsComponent implements OnInit {
  subscription: Subscription;
  id:any;
  products: any;
  description:any
  descriptionProduct:any;
  imgProduct:any;
  price:any;
  title:any;
  soldQuantity:any;
  condition:any;
  state:any;
  soldState:any;
  ListCategory:any;
  breadcrumb=[];


  constructor(private readonly router:Router,private  routerActivatedRoute:ActivatedRoute,
    public DetailProduct:DetailProductsService, public productService: ProductsServiceService) { }

  ngOnInit() {
    this.subscription = this.routerActivatedRoute.params
    .subscribe(
    (id) =>{
      this.id =id['id'];
      this.detailProducts(this.id);
      this.getDescription(this.id);
    });

  }


  detailProducts(id:string){

    this.DetailProduct.getDetailProducts(id).subscribe(
      (json) =>(
        this.products = json),
        (err) => console.log(),
        ()=>{
        if (!!this.products) {
          this.products = { author: {name: "Yenifer", lastname: "Rivas Moreno"}, ...this.products }
          this.imgProduct = this.products.pictures[0].url;
          this.title = this.products.title;
          this.price = new Intl.NumberFormat('es-Latn-US').format(this.products.price);
          this.soldQuantity = this.products.sold_quantity;
          if (this.soldQuantity === 1) {
            this.soldState = "vendido"
          }
          if (this.soldQuantity >1) {
            this.soldState = "vendidos"
          }
          this.condition = this.products.condition;
          if(!!this.condition ){
            if (this.condition ==="used") {
              this.state = "Usado";
            }
            else
            {
              this.state = "Nuevo";
            }

          }
          this.ListCategory = JSON.parse(localStorage.getItem('filter'));

        }
        }
    )

  }
  getDescription(idDescription:string){
    this.DetailProduct.GetDescriptionProduct(idDescription).subscribe(
      (data) =>(
        this.description = data),
        (err) => console.log(),
        ()=>{
        if (!!this.description) {
          this.description = { author: {name: "Yenifer", lastname: "Rivas Moreno"}, ...this.description }
          this.descriptionProduct = this.description.plain_text.replace(/\n/g, '<br>');


        }
        }
    )
  }



}
