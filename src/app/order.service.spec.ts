import {inject, TestBed} from '@angular/core/testing';

import {OrderService} from './order.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
