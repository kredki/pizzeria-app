import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DishesComponent} from './dishes.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DishService} from '../dish.service';
import {Dish} from '../dish';
import {of, Subject} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;
  let service: DishService;
  const dishes: Dish[] = [{id: 1, name: 'dish', isAvailable: true, description: 'desc', type: 'pizza', price: 1}];
  const drinks: Dish[] = [{id: 1, name: 'drink', isAvailable: true, description: 'desc', type: 'pizza', price: 1}];
  const pizzas: Dish[] = [{id: 1, name: 'pizza', isAvailable: true, description: 'desc', type: 'pizza', price: 1}];
  const spagettis: Dish[] = [{id: 1, name: 'spagetti', isAvailable: true, description: 'desc', type: 'pizza', price: 1}];
  const dishServiceMock = {
    getDishes: jasmine.createSpy('getDishes').and.returnValue(of(dishes)),
    getPizzas: jasmine.createSpy('getPizzas').and.returnValue(of(pizzas)),
    getDrinks: jasmine.createSpy('getDrinks').and.returnValue(of(drinks)),
    getSpagettis: jasmine.createSpy('getSpagettis').and.returnValue(of(spagettis)),
    dishes: new Subject<Dish[]>()
  };
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      declarations: [DishesComponent],
      providers: [
        {provide: DishService, useValue: dishServiceMock},
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: params
          }
        }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
    service = TestBed.get(DishService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with pizzas', fakeAsync(() => {
    // given
    params.next(<ParamMap>({
      get: (key: string) => 'pizza'
    }));
    component.ngOnInit();

    // then
    tick();
    expect(service.getPizzas).toHaveBeenCalled();
    expect(component.dishes).toBe(pizzas);
  }));

  it('should init with drinks', fakeAsync(() => {
    // given
    params.next(<ParamMap>({
      get: (key: string) => 'drink'
    }));
    component.ngOnInit();

    // then
    tick();
    expect(service.getPizzas).toHaveBeenCalled();
    expect(component.dishes).toBe(drinks);
  }));

  it('should init with spagettis', fakeAsync(() => {
    // given
    params.next(<ParamMap>({
      get: (key: string) => 'spagetti'
    }));
    component.ngOnInit();

    // then
    tick();
    expect(service.getPizzas).toHaveBeenCalled();
    expect(component.dishes).toBe(spagettis);
  }));

  it('should init with spagettis', fakeAsync(() => {
    // given
    params.next(<ParamMap>({
      get: (key: string) => 'something'
    }));
    component.ngOnInit();

    // then
    tick();
    expect(service.getPizzas).toHaveBeenCalled();
    expect(component.dishes).toBe(dishes);
  }));

  it('should get Spagettis', () => {
    //when
    component.getSpagettis();

    //then
    expect(service.getSpagettis).toHaveBeenCalled();
    expect(component.dishes).toBe(spagettis);
  });

  it('should get drinks', () => {
    //when
    component.getDrinks();

    //then
    expect(service.getDrinks).toHaveBeenCalled();
    expect(component.dishes).toBe(drinks);
  });

  it('should get pizzas', () => {
    //when
    component.getPizzas();

    //then
    expect(service.getPizzas).toHaveBeenCalled();
    expect(component.dishes).toBe(pizzas);
  });

  it('should get dishes', () => {
    //when
    component.getDishes();

    //then
    expect(service.getDishes).toHaveBeenCalled();
    expect(component.dishes).toBe(dishes);
  });

  it('should sort by name', () => {
    //given
    const dishesToSort: Dish[] = [{id: 1, name: 'b', isAvailable: true, description: 'desc', type: 'pizza', price: 1},
      {id: 1, name: 'a', isAvailable: true, description: 'desc', type: 'pizza', price: 1}];
    component.dishes = dishesToSort;

    //when
    component.sortByName();

    //then
    expect(component.dishes[0].name).toBe('a');
    component.dishes = [];
  });

  it('should sort by desription', () => {
    //given
    const dishesToSort: Dish[] = [{id: 1, name: 'dish', isAvailable: true, description: 'b', type: 'pizza', price: 1},
      {id: 1, name: 'dish', isAvailable: true, description: 'a', type: 'pizza', price: 1}];
    component.dishes = dishesToSort;

    //when
    component.sortByDescrption();

    //then
    expect(component.dishes[0].description).toBe('a');
    component.dishes = [];
  });

  it('should sort by desription', () => {
    //given
    const dishesToSort: Dish[] = [{id: 1, name: 'dish', isAvailable: true, description: 'desc', type: 'pizza', price: 2},
      {id: 1, name: 'dish', isAvailable: true, description: 'desc', type: 'pizza', price: 1}];
    component.dishes = dishesToSort;

    //when
    component.sortByPrice();

    //then
    expect(component.dishes[0].price).toBe(1);
    component.dishes = [];
  });

});
