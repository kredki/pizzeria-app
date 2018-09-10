import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {UserData} from './user-data';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  sub: Subscription;

  constructor(readonly http: HttpClient, public router: Router) {
  }

  checkLogin(login: string, password: string) {
    let users: UserData[] = [];
    this.sub = this.http.get<UserData[]>('/api/users').pipe(
      map(x => x.filter(y => y.name === login && y.password === password))
    ).subscribe(res => {
      users = res;
      console.log(res);
      if (users.length !== 0) {
        this.router.navigate(['/admin']);
      } else {
        alert("złe dane do logowania");
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
