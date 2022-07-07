import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Productos';
  resultProducts :any;
  ProductsList:any;
  query:string;
  constructor(private readonly router:Router) { }

  ngOnInit() {
  }

  ProductsSearch(){
    if (!!this.query) {
      this.router.navigate(['items?search=',this.query]);

    }
  }
}
