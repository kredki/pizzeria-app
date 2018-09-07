import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLogin(login: string, password: string): boolean {
    return true;
  }
}
