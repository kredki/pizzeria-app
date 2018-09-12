import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesComponent} from './dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {DishService} from '../dish.service';
import {Dish} from '../dish';
import {of, Subject} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;
  let service: DishService;
  const dishes: Dish[] = [new Dish()];
  const dishServiceMock = {
    getDishes: jasmine.createSpy('getDishes').and.returnValue(of(dishes)),
    getPizzas: jasmine.createSpy('getPizzas').and.returnValue(of(dishes)),
    getDrinks: jasmine.createSpy('getDrinks').and.returnValue(of(dishes)),
    getSpagettis: jasmine.createSpy('getSpagettis').and.returnValue(of(dishes)),
    dishes: new Subject<Dish[]>()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesComponent ],
      providers: [HttpClient, HttpHandler,
        {provide: DishService, useValue: dishServiceMock}],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(DishService);
    component.dishes = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Spagettis', () => {
    //when
    component.getSpagettis();

    //then
    expect(service.getSpagettis).toHaveBeenCalled();
    expect(component.dishes).toBe(dishes);
  });

  it('should get drinks', () => {
    //when
    component.getDrinks();

    //then
    expect(service.getDrinks).toHaveBeenCalled();
    expect(component.dishes).toBe(dishes);
  });

  it('should get pizzas', () => {
    //when
    component.getPizzas();

    //then
    expect(service.getPizzas).toHaveBeenCalled();
    expect(component.dishes).toBe(dishes);
  });

  it('should get dishes', () => {
    //when
    component.getDishes();

    //then
    expect(service.getDishes).toHaveBeenCalled();
    expect(component.dishes).toBe(dishes);
  });

});
