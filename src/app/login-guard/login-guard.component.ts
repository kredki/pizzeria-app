import {Component, OnInit} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login-guard',
  templateUrl: './login-guard.component.html',
  styleUrls: ['./login-guard.component.css']
})
export class LoginGuardComponent implements OnInit, CanActivate  {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  canActivate(): boolean {
    if(this.loginService.adminLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }

}
