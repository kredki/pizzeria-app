import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../models/dish';
import {DishService} from '../services/dish.service';
import {Subscription} from 'rxjs';
import {OrderService} from '../services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit, OnDestroy {
  dishes: Dish[] = [];
  sub: Subscription;

  constructor(private readonly dishService: DishService, private readonly orderService: OrderService,
              private readonly route: ActivatedRoute) {
  }


  getDishes(): void {
    this.sub = this.dishService.getDishes()
      .subscribe(res => {this.dishes = res; });
  }

  getDrinks(): void {
    this.sub = this.dishService.getDrinks()
      .subscribe(res => this.dishes = res);

  }

  getPizzas(): void {
    this.sub = this.dishService.getPizzas()
      .subscribe(res => {this.dishes = res; });

  }

  getSpagettis(): void {
    this.sub = this.dishService.getSpagettis()
      .subscribe(res => this.dishes = res);

  }

  addToOrder(dish: Dish): void {
    this.orderService.addToOrder(dish);
  }

  sortByName() {
    this.dishes.sort(function(a, b) {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

  sortByDescrption() {
    this.dishes.sort(function(a, b) {
      const textA = a.description.toUpperCase();
      const textB = b.description.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

  sortByPrice() {
    this.dishes.sort(function(a, b) {
      const numberA = a.price;
      const numberB = b.price;
      return (numberA < numberB) ? -1 : (numberA > numberB) ? 1 : 0;
    });
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');

      if (type === 'pizza') {
        this.getPizzas();
      } else if (type === 'spagetti') {
        this.getSpagettis();
      } else if (type === 'drink') {
        this.getDrinks();
      } else {
        this.getDishes();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
