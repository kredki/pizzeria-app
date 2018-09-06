import { Injectable } from '@angular/core';
import {OrderComponent} from './order/order.component';
import {Dish} from './dish';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderComponent: OrderComponent) { }

  addToOrder(dish: Dish) {
    this.orderComponent.add(dish);
  }
}
