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
    const id = this.dishToShow.id;
    this.http.put<Dish>('/api/dishes/' + id, this.dishToShow, httpOptions).subscribe();
  }

  updateDish() {
    const id = this.dishToShow.id;
    this.http.put<Dish>('/api/dishes/' + id, this.dishToShow, httpOptions).subscribe();
  }

  addDish() {
    this.http.post<Dish>('/api/dishes', this.dishToAdd, httpOptions).subscribe();
    this.sub = this.dishService.getAllDishes()
      .subscribe(res => this.dishes = res);
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
