import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isDishListShown = false;
  isOrderListShown = false;

  constructor(public loginService: LoginService) { }

  showDishList() {
    this.isDishListShown = true;
    this.isOrderListShown = false;
  }

  showOrderList() {
    this.isDishListShown = false;
    this.isOrderListShown = true;
  }

  ngOnInit() {
  }

}
