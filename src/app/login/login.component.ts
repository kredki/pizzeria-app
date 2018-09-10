import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private loginService: LoginService, public router: Router) { }

  checkLogin() {
    this.loginService.checkLogin(this.login, this.password);
  }

  ngOnInit() {
  }
}
