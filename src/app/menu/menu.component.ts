import {Component, OnInit} from '@angular/core';
import {DishesComponent} from '../dishes/dishes.component';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishesComponent: DishesComponent, public orderService: OrderService) { }

  ngOnInit() {
  }

  getPizzas() {
    console.log('getpizzas');
    this.dishesComponent.getPizzas();
  }

}
