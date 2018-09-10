import { Component, OnInit, OnDestroy } from '@angular/core';
import {Dish} from '../../dish';
import {DishService} from '../../dish.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-dishes',
  templateUrl: './admin-dishes.component.html',
  styleUrls: ['./admin-dishes.component.css']
})
export class AdminDishesComponent implements OnInit, OnDestroy {
  dishes: Dish[] = [];
  sub: Subscription;
  dishToShow: Dish;

  constructor(private dishService: DishService) { }

  showDish(dish: Dish) {
    this.dishToShow = dish;
  }

  changeAvailability() {
    this.dishToShow.isAvailable = !this.dishToShow.isAvailable;
  }

  ngOnInit() {
    this.sub = this.dishService.getAllDishes()
      .subscribe(res => this.dishes = res);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
