import {Injectable} from '@angular/core';
import {Dish} from './dish';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

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
}
