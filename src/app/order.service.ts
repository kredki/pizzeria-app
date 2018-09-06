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
}
