import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

const BASEURL = environment.apiUrl;


@Injectable()
export class CartListService {
    productos: any = [];
    productAddEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(private http: Http) { }

    handleError(e) {
    return Observable.throw(e.json().message);
    }


    addProduct(id){
      this.productos.push(id);
      this.productAddEvent.emit(this.productos);
    }

    getProductsForCart(){
      console.log("calling get products for cart.");

      return this.http.post(`${BASEURL}/api/product/cart`, this.productos)
        .map(res => {
          console.log("got response from server");
          return res.json();
        })
        .catch(this.handleError);
    }

    getCart(){
      return this.productAddEvent;
    }
}
