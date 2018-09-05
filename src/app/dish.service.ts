import {Injectable, NgModule} from '@angular/core';
import { Dish } from './dish';
import { DISHES } from './mock-dishes';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(readonly http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes');

    //return of(DISHES);
  }
}
