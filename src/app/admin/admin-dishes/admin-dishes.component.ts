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

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.sub = this.dishService.getDishes()
      .subscribe(res => this.dishes = res);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
