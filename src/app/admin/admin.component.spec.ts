import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, MockAdminDishesComponent, MockAdminOrdersComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-admin-dishes',
  template: ''
})
class MockAdminDishesComponent {
}


@Component({
  selector: 'app-admin-orders',
  template: ''
})
class MockAdminOrdersComponent {
}
