import { Injectable } from '@angular/core';
import {OrderComponent} from './order/order.component';
import {Dish} from './dish';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  dishes: Dish[] = [];
  cost = 0;
  isOrderFinished = false;

  constructor() { }

  addToOrder(dish: Dish) {
    this.dishes.push(dish);
    const num = dish.price;
    this.cost = parseFloat((this.cost + num * 100 / 100).toFixed(2));
  }

  getDishes(): Dish[] {
    return this.dishes;
  }

  delete(dish: Dish) {
    let i;
    for (i = 0; this.dishes.length; i++) {
      if (this.dishes[i] === dish) {
        this.dishes.splice(i, 1);
        const num = dish.price;
        this.cost = parseFloat((this.cost - num * 100 / 100).toFixed(2));
        break;
      }
    }
  }

  getCost(): number {
    return this.cost;
  }
}
