import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  products:any[] = [];
  word:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService) {

  }

  ngOnInit() {
  //     this.activatedRoute.params.subscribe( params =>{
  //     this.word = params['word'];
  //       this.products = this._productsService.searchProduct( params['word'] );
  //       console.log( this.products );
  //
  //     });
  //
  // }

  }
  
}
