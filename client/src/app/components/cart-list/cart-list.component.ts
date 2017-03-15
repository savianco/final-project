import { Component, OnInit } from '@angular/core';
import { CartListService } from '../../services/cart-list.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  numProductos = 0;
  constructor(public cart: CartListService) {}

  ngOnInit() {
    this.cart.getCart().subscribe((productos) => this.numProductos = productos.length);
  }

}
