import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DishesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
