import {Component, OnInit, OnDestroy} from '@angular/core';
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
  orderToShow: Order;

  constructor(private orderService: OrderService) {
  }

  showOrder(order) {
    this.orderToShow = order;
  }

  changeStatusToAccept() {
    this.orderToShow.status = 'accepted';
  }

  changeStatusToSend() {
    this.orderToShow.status = 'send';
  }

  changeStatusToDelivered() {
    this.orderToShow.status = 'delivered';
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
