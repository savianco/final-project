//SERVICIO CONEXION A BACK PARA CON API GESTIONAR DB
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  BASE_URL: string = 'http://localhost:3000';

  options: Object = {withCredentials:true};

  constructor(private http: Http) {}

  handleError(e) {
  return Observable.throw(e.json().message);
  }

  getProducts() {
    return this.http.get(`${this.BASE_URL}/api/product`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getProduct(id) {
    return this.http.get(`${this.BASE_URL}/api/product/${id}`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

//   searchProduct( word:string ):Product[]{
//
//     let productsArr:Product[] = [];
//     word = word.toLowerCase();
//
//     for( let product of this.products ){
//       let name = product.name.toLowerCase();
//
//       if ( name.indexOf( word ) >= 0 ){
//         productsArr.push( product );
//       }
//     }
//     return productsArr;
//   }
//
//
// }
//








  edit(product) {
    return this.http.put(`${this.BASE_URL}/product/${product.id}`, product, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/product/${id}`, this.options)
      .map((res) => res.json())
      .catch(this.handleError);
  }
}
