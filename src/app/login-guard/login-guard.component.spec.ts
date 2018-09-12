import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginGuardComponent} from './login-guard.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginGuardComponent', () => {
  let component: LoginGuardComponent;
  let fixture: ComponentFixture<LoginGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGuardComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
