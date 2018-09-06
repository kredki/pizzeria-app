import { Component, OnInit } from '@angular/core';
import {Dish} from '../dish';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dishes: Dish[] = [];

  constructor() { }

  add(dish: Dish) {
    console.log('before ' + this.dishes);
    this.dishes.push(dish);
    console.log('after ' + this.dishes);
  }

  ngOnInit() {
  }

}
