import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DishesComponent} from './dishes/dishes.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './/app-routing.module';
import {MenuComponent} from './menu/menu.component';
import {OrderComponent} from './order/order.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin/admin.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {AdminDishesComponent} from './admin/admin-dishes/admin-dishes.component';
import {LoginGuardComponent} from './login-guard/login-guard.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    MenuComponent,
    OrderComponent,
    OrderSummaryComponent,
    LoginComponent,
    AdminComponent,
    AdminOrdersComponent,
    AdminDishesComponent,
    LoginGuardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DishesComponent, OrderComponent, LoginGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
