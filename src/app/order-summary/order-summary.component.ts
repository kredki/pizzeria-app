import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  order: Order = new Order();

  constructor(private orderService: OrderService) { }

  sendOrder() {
    this.orderService.sendOrder(this.order).subscribe(x => alert('Dodano zamówienie'));
  }

  ngOnInit() {
  }

}
