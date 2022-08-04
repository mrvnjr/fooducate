import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from 'src/app/meal/meal.model';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {

  @Input() item: Meal;

  @Output() clicked = new EventEmitter();


}
