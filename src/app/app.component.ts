import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {DishesComponent} from './dishes/dishes.component';
import {DishService} from './dish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pizzeria App2';
}
