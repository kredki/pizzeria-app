import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../models/dish';
import {DishService} from '../../services/dish.service';
import {Subscription} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../../services/login.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-admin-dishes',
  templateUrl: './admin-dishes.component.html',
  styleUrls: ['./admin-dishes.component.css']
})
export class AdminDishesComponent implements OnInit, OnDestroy {
  dishes: Dish[] = [];
  sub: Subscription;
  dishToShow: Dish;
  dishToAdd: Dish = new Dish();

  constructor(private dishService: DishService, readonly http: HttpClient, public loginService: LoginService) {
  }

  showDish(dish: Dish) {
    this.dishToShow = dish;
  }

  changeAvailability() {
    this.dishToShow.isAvailable = !this.dishToShow.isAvailable;
    this.dishService.updateDish(this.dishToShow);
  }

  updateDish() {
    this.dishService.updateDish(this.dishToShow);
  }

  addDish() {
    this.dishService.addDish(this.dishToAdd);
    this.getDishes();
  }

  deleteDish(dish: Dish) {
    this.dishService.deleteDish(dish);
    this.getDishes();
  }

  getDishes() {
    this.sub = this.dishService.getAllDishes()
      .subscribe(res => this.dishes = res);
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
    this.getDishes();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
