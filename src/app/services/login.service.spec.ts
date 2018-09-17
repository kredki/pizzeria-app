import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {UserData} from '../models/user-data';
import {of} from 'rxjs';

fdescribe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, HttpClient, HttpHandler],
      imports: [RouterTestingModule, FormsModule]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should check correct login', fakeAsync(() => {
    inject([LoginService], (service: LoginService) => {
      //given
      const userData: UserData = new UserData();
      userData.id = 1;
      userData.name = 'admin';
      userData.password = 'pass';
      const observableUserData = of([userData]);
      const getSpy = spyOn(service, 'getUsers').and.returnValue(observableUserData);

      //when
      const returnedUserData = service.checkLogin(userData.name, userData.password);

      //then
      expect(getSpy).toHaveBeenCalled();
      tick();
      expect(returnedUserData).toBe(observableUserData);
    });
  }));

  it('should check incorrect login', fakeAsync(() => {
    inject([LoginService], (service: LoginService) => {
      //given
      const userData: UserData = new UserData();
      userData.id = 1;
      userData.name = 'admin';
      userData.password = 'pass';

      const userDataInDB: UserData = new UserData();
      userDataInDB.id = 1;
      userDataInDB.name = 'admin';
      userDataInDB.password = 'pass';

      const observableUserData = of([userDataInDB]);
      const getSpy = spyOn(service, 'getUsers').and.returnValue(observableUserData);

      //when
      const returnedUserData = service.checkLogin(userData.name, userData.password);

      //then
      expect(getSpy).toHaveBeenCalled();
      tick();
      expect(returnedUserData).toBe(of([]));
    });
  }));

});
