import {Component, OnDestroy, OnInit} from '@angular/core';
import { Dish } from '../dish';
import {DishService} from '../dish.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit, OnDestroy {
  dishes: Dish[];
  sub: Subscription;

  constructor(private dishService: DishService) {
  }

  getDishes(): void {
    this.sub = this.dishService.getDishes()
      .subscribe(res => this.dishes = res);

  }

  ngOnInit() {
    this.getDishes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
