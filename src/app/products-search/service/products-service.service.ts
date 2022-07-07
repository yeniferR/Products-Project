import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  public URLsearch:string;

  constructor(private http:HttpClient) {
    this.URLsearch ='https://api.mercadolibre.com/sites/MLA/search?q=';
   }

   getProducts(query:string):Observable<any>{
    return this.http.get(`${this.URLsearch}${query}`);
  }


}
