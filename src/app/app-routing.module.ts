import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DishesComponent} from './dishes/dishes.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes/pizza', pathMatch: 'full' },
  { path: 'dishes/:type', component: MenuComponent },
  { path: 'menu', component: AppComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
