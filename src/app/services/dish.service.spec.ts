import {inject, TestBed} from '@angular/core/testing';

import {DishService} from './dish.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([DishService], (service: DishService) => {
    expect(service).toBeTruthy();
  }));
});
