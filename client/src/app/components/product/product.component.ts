import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartListService } from '../../services/cart-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  product:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService,
               private cartListService:CartListService
   ){
    this.activatedRoute.params.subscribe( (params:any) =>{
      console.log("WE Have paraMS!!");
      console.log(params);
      this._productsService.getProduct(params.id).subscribe((product) => {
        this.product = product;
      });
    });
  }

  addToCart(productID){
    this.cartListService.addProduct(productID);
  }

}
