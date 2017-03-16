import { Component, OnInit } from '@angular/core';
import { CartListService } from '../../services/cart-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  products: Array<Object> = [];

  constructor(public cart: CartListService,
              private router: Router
) {}

  ngOnInit() {
  this.cart.getProductsForCart().subscribe((products) => {
      console.log('productos:', products);
      this.products = products;
    });

}
}
