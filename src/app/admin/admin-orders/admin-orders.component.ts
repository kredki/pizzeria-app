import { Component, OnInit, OnDestroy } from '@angular/core';
import {Order} from '../../order';
import {OrderService} from '../../order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  sub: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders()
      .subscribe(res => this.orders = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
