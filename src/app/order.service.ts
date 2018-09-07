import { Injectable } from '@angular/core';
import {Dish} from './dish';
import {Order} from './order';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
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

  sendOrder(): Observable<Order> {
    this.isOrderFinished = false;
    let order = new Order();
    order.city = 'city';
    order.dishIds = [1, 2, 3];
    order.email = 'email';
    order.firstName = 'first name';
    order.lastName = 'last name';
    order.flat = 'flat';
    //order.id = 2;
    order.floor = 'floor';
    order.street = 'street';
    order.telephone = 'telephone';
    return this.http.post<Order>('/api/orders', order, httpOptions);
  }
}
