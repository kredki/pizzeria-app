import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesComponent} from './dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
