import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodsService } from '../ingredient/foods.service';
import {Foods} from './foods.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  foods: Foods[] = [];
  
  constructor(
    private foodsService: FoodsService, 
    private router: Router,
    ) { }

  ngOnInit() {
    this.foods = this.foodsService.getFoods();
  }

  goToDetailPage(id: string) {
    this.router.navigate(['detail', id]);
  }

}
