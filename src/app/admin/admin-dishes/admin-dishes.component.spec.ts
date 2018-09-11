import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminDishesComponent} from './admin-dishes.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AdminDishesComponent', () => {
  let component: AdminDishesComponent;
  let fixture: ComponentFixture<AdminDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishesComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
