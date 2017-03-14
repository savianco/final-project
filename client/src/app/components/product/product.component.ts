import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  product:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService
   ){
    this.activatedRoute.params.subscribe( (params:any) =>{
      console.log("WE Have paraMS!!");
      console.log(params);
      this._productsService.getProduct(params.id).subscribe((product) => {
        this.product = product;
      });
    });

  }

}
