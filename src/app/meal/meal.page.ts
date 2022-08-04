import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from '../plans/plans.service';
import { Meal } from './meal.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  meal: Meal[] = [];

  constructor(private PlansService: PlanService, private router: Router) { }

  ngOnInit() {
    this.meal = this.PlansService.getMeal();
  }

  goToInfoPage(plant: string) {
    this.router.navigate(['info', plant]);
  }
}
