import { Injectable } from "@angular/core";
import { Meal } from '../meal/meal.model';

@Injectable({
    providedIn: 'root',
})
export class PlanService {
    getMeal(): Meal[] {
        return [
            {
              plans: 'monday',
              name: 'Monday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              plans: 'tuesday',
              name: 'Tuesday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              plans: 'wednesday',
              name: 'Wednesday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              plans: 'thursday',
              name: 'Thursday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              plans: 'friday',
              name: 'Friday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              plans: 'saturday',
              name: 'Saturday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              plans: 'sunday',
              name: 'Sunday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },        ];
    }
    
    getMeals(plans: string): Meal {
        return this.getMeal().find((meal) => meal.plans == plans);
    }
}
