import { Injectable } from "@angular/core";
import { Hmeal } from '../hmeal/hmeal.model';

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    getHmeal(): Hmeal[] {
        return [
            {
              foods: 'monday',
              name: 'Monday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              foods: 'tuesday',
              name: 'Tuesday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              foods: 'wednesday',
              name: 'Wednesday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              foods: 'thursday',
              name: 'Thursday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              foods: 'friday',
              name: 'Friday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              foods: 'saturday',
              name: 'Saturday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },{
              foods: 'sunday',
              name: 'Sunday',
              breakfast: 'egg',
              lunch: 'egg',
              dinner:'egg',
            },        ];
    }
    
    getHmeals(foods: string): Hmeal {
        return this.getHmeal().find((hmeal) => hmeal.foods ==foods);
    }
}
