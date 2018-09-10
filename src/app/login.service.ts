import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {UserData} from './user-data';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  sub: Subscription;

  constructor(readonly http: HttpClient) {
  }

  checkLogin(login: string, password: string): boolean {
    let users: UserData[] = [];
    this.sub = this.http.get<UserData[]>('/api/users').pipe(
      map(x => x.filter(y => y.name === login && y.password === password))
    ).subscribe(res => {
      users = res;
      console.log(res);
    });
    console.log(users);
    if (users.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
