import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailProductsService {
  public URLProductsID

  constructor( private http:HttpClient) {
    this.URLProductsID='https://api.mercadolibre.com/items/';
  }


  getDetailProducts(id:string):Observable<any>
  {
    return this.http.get(`${this.URLProductsID}${id}`);
  }
  GetDescriptionProduct(id:string):Observable<any>{

    return this.http.get(`${this.URLProductsID}${id}/description`);

  }

}
