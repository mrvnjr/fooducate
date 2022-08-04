import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../foods/foods.service';
import { Hmeal } from './hmeal.model';

@Component({
  selector: 'app-hmeal',
  templateUrl: './hmeal.page.html',
  styleUrls: ['./hmeal.page.scss'],
})
export class HmealPage implements OnInit {
  hmeal: Hmeal[] = [];

  constructor(private FoodsService: FoodService, private router: Router) { }

  ngOnInit() {
    this.hmeal = this.FoodsService.getHmeal();
  }

  goToInfoPage(food: string) {
    this.router.navigate(['info', food]);
  }
}
