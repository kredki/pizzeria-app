import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {UserData} from '../models/user-data';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sub: Subscription;
  adminLogged = false;

  constructor(readonly http: HttpClient, public router: Router) {
  }

  checkLogin(login: string, password: string): Observable<UserData[]> {
    return this.getUsers().pipe(
      map(x => x.filter(y => y.name === login && y.password === password))
    );
  }

  public getUsers() {
    return this.http.get<UserData[]>('/api/users');
  }
}
