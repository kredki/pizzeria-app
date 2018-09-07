import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  sendOrder() {
    this.orderService.sendOrder().subscribe();
  }

  ngOnInit() {
  }

}
