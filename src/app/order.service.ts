import { Injectable } from '@angular/core';
import {OrderComponent} from './order/order.component';
import {Dish} from './dish';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  dishes: Dish[] = [];

  constructor() { }

  addToOrder(dish: Dish) {
    this.dishes.push(dish);
  }

  getDishes(): Dish[] {
    return this.dishes;
  }

  delete(dish: Dish) {
    let i;
    for(i = 0; this.dishes.length; i++) {
      if(this.dishes[i] === dish) {
        this.dishes.splice(i, 1);
        break;
      }
    }
  }
}
