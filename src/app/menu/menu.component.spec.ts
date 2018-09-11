import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {DishesComponent} from '../dishes/dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent, MockOrderComponent, MockDishesComponent, MockOrderSummaryComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [DishesComponent, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-order',
  template: ''
})
class MockOrderComponent {
}

@Component({
  selector: 'app-dishes',
  template: ''
})
class MockDishesComponent {
}

@Component({
  selector: 'app-order-summary',
  template: ''
})
class MockOrderSummaryComponent {
}
