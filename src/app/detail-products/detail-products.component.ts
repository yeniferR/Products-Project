import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  imgProduct:any;
  price:any;
  title:any;
  soldQuantity:any;


  constructor(private readonly router:Router,private  routerActivatedRoute:ActivatedRoute, public DetailProduct:DetailProductsService) { }

  ngOnInit() {
    // localStorage.removeItem('search');
    this.subscription = this.routerActivatedRoute.params
    .subscribe(
     (id) =>{

       this.id =id['id'];
      console.log(this.id);
      this.detailProducts(this.id);
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
          console.log(this.products);
          this.imgProduct = this.products.pictures[0].url;
          this.title = this.products.title;
          this.price = new Intl.NumberFormat('es-Latn-US').format(this.products.price);
          this.soldQuantity = this.products.sold_quantity;

        }
        }
    )

  }

}
