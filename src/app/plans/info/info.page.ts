import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/meal/meal.model';
import { PlanService } from 'src/app/plans/plans.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  plan: string;
  meal: Meal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PlansService: PlanService,
    ) { 
    this.plan = this.activatedRoute.snapshot.paramMap.get('plan');
  }

  ngOnInit() {
    this.meal = this.PlansService.getMeals(this.plan);
  }

}