import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../order';
import {OrderService} from '../../order.service';
import {Subscription} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Dish} from '../../dish';
import {DishService} from '../../dish.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  sub: Subscription;
  orderToShow: Order;
  dishes: Dish[] = [];
  timerId = null;

  constructor(private orderService: OrderService, readonly http: HttpClient, private dishService: DishService) {
  }

  showOrder(order) {
    this.orderToShow = order;
    this.dishes = [];
    let i;
    for(i = 0; i < this.orderToShow.dishIds.length; i++) {
      this.sub = this.dishService.getDishById(this.orderToShow.dishIds[i])
        .subscribe(res => this.dishes.push(res));
    }
  }

  changeStatusToAccept() {
    this.orderToShow.status = 'accepted';
    const id = this.orderToShow.id;
    this.http.put<Order>('/api/orders/' + id, this.orderToShow, httpOptions).subscribe();
  }

  changeStatusToSend() {
    this.orderToShow.status = 'send';
    const id = this.orderToShow.id;
    this.http.put<Order>('/api/orders/' + id, this.orderToShow, httpOptions).subscribe();
  }

  changeStatusToDelivered() {
    this.orderToShow.status = 'delivered';
    const id = this.orderToShow.id;
    this.http.put<Order>('/api/orders/' + id, this.orderToShow, httpOptions).subscribe();
  }

  ngOnInit() {
    const that = this;
    this.orderService.getAllOrders()
     .subscribe(res => this.orders = res);
    this.timerId = setInterval(() => {
      this.orderService.getAllOrders()
       .subscribe(res => this.orders = res);
    }, 20000);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
