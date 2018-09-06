import { Component, OnInit } from '@angular/core';
import {DishesComponent} from '../dishes/dishes.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishesComponent: DishesComponent) { }

  ngOnInit() {
  }

  getPizzas() {
    console.log('getpizzas');
    this.dishesComponent.getPizzas();
  }

}
