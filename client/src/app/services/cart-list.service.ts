import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CartListService {
    productos: any = [];
    productAddEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    addProduct(id){
      this.productos.push(id);
      this.productAddEvent.emit(this.productos);
    }

    getCart(){
      return this.productAddEvent;
    }
}
