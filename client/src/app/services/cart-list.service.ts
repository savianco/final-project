import { Injectable } from '@angular/core';

@Injectable()
export class CartListService {
    count: number = 0;
    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
}
