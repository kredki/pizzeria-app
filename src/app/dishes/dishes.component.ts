import {Component, OnDestroy, OnInit, OnChanges, AfterViewInit} from '@angular/core';
import {Dish} from '../dish';
import {DishService} from '../dish.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  dishes: Dish[];
  sub: Subscription;

  constructor(private dishService: DishService) {
  }


  getDishes(): void {
    this.sub = this.dishService.getDishes()
      .subscribe(res => {this.dishes = res; console.log(res); });
  }

  getDrinks(): void {
    this.sub = this.dishService.getDrinks()
      .subscribe(res => this.dishes = res);

  }

  getPizzas(): void {
    this.sub = this.dishService.getPizzas()
      .subscribe(res => {this.dishes = res; console.log(res); });

  }

  getSpagettis(): void {
    this.sub = this.dishService.getSpagettis()
      .subscribe(res => this.dishes = res);

  }

  ngOnInit() {
    this.getDishes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnChanges() {
    console.log(this.dishes);
  }

  ngAfterViewInit() {
    console.log(this.dishes);
  }
}
