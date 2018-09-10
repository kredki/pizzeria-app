import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {AdminDishesComponent} from './admin/admin-dishes/admin-dishes.component';

const routes: Routes = [
  {path: '', redirectTo: 'dishes/pizza', pathMatch: 'full'},
  {path: 'dishes/:type', component: MenuComponent},
  {path: 'menu', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/dishes', component: AdminDishesComponent},
  {path: 'admin/orders', component: AdminOrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
