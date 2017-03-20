import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: Object[] = [];

    constructor(private productsService: ProductsService,
                private router: Router
    ) {
}

    ngOnInit() {
        this.productsService.getProducts().subscribe((results) => {
            console.log("results from getProducts is: ", results);
            this.products = results;
        }, (err) => {
            console.log("error in getProducts");
        });
    }
    seeProduct(id: string) {
        this.router.navigate(['/product', id]);
    }

}
