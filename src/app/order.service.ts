import { Injectable } from '@angular/core';
import {Dish} from './dish';
import {Order} from './order';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  dishes: Dish[] = [];
  cost = 0;
  isOrderFinished = false;

  constructor(readonly http: HttpClient) { }

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

  sendOrder(order: Order): Observable<Order> {
    let dishesIds: number[] = [];
    let i;
    for(i = 0; i < this.dishes.length; i++) {
      dishesIds.push(this.dishes[i].id);
    }
    order.dishIds = dishesIds;
    order.status
    this.isOrderFinished = false;
    return this.http.post<Order>('/api/orders', order, httpOptions);
  }
}
