import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hmeal } from 'src/app/hmeal/hmeal.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent {

  @Input() item: Hmeal;

  @Output() clicked = new EventEmitter();


}
