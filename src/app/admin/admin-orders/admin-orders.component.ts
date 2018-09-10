import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../order';
import {OrderService} from '../../order.service';
import {Subscription} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  constructor(private orderService: OrderService, readonly http: HttpClient) {
  }

  showOrder(order) {
    this.orderToShow = order;
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
    this.orderService.getAllOrders()
      .subscribe(res => this.orders = res);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
