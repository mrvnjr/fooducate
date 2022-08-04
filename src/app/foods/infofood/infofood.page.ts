import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hmeal } from 'src/app/hmeal/hmeal.model';
import { FoodService } from 'src/app/foods/foods.service';

@Component({
  selector: 'app-infofood',
  templateUrl: './infofood.page.html',
  styleUrls: ['./infofood.page.scss'],
})
export class InfofoodPage implements OnInit {
  food: string;
  hmeal: Hmeal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private FoodsService: FoodService,
    ) { 
    this.food = this.activatedRoute.snapshot.paramMap.get('food');
  }

  ngOnInit() {
    this.hmeal = this.FoodsService.getHmeals(this.food);
  }

}