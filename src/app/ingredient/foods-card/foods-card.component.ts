import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Foods } from 'src/app/foods/foods.model';


@Component({
  selector: 'app-foods-card',
  templateUrl: './foods-card.component.html',
  styleUrls: ['./foods-card.component.scss'],
})
export class FoodsCardComponent {

  @Input() item: Foods;

  @Output() clicked = new EventEmitter();


  constructor (
   
  ) {}

}
