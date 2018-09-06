import {Component, OnInit} from '@angular/core';
import {Dish} from '../dish';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit() {
  }

}
