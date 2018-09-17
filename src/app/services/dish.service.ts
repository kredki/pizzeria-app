import {Injectable} from '@angular/core';
import {Dish} from '../models/dish';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(readonly http: HttpClient) { }

  getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes');
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable))
    );
  }

  getSpagettis(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'spagetti'))
    );
  }

  getDrinks(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'drink'))
    );
  }

  getPizzas(): Observable<Dish[]> {
    const pizzas = this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'pizza'))
    );
    return pizzas;
  }

  getDishById(id: number): Observable<Dish> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.id === id)[0])
    );
  }

  deleteDish(dish: Dish) {
    this.http.delete<Dish[]>('/api/dishes/' + dish.id).subscribe();
  }

  updateDish(dish: Dish) {
    const id = dish.id;
    this.http.put<Dish>('/api/dishes/' + id, dish, httpOptions).subscribe();
  }

  addDish(dish: Dish) {
    this.http.post<Dish>('/api/dishes', dish, httpOptions).subscribe();
  }
}
