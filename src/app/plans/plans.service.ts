import { Injectable } from "@angular/core";
import { Meal } from '../meal/meal.model';

@Injectable({
    providedIn: 'root',
})
export class PlanService {
    getMeal(): Meal[] {
        return [
          {
            plans: 'Monday',
            name: 'Monday',
            bf1: 'assets/finalsPic/Tab/oatmeal.jpg',
            bname: 'Oat Meal 100ml',
            bf2: 'assets/finalsPic/Tab/boiled eggs.jpeg',
            b2name: '2 Boiled Eggs',
            bt: 'assets/finalsPic/Tab/banana.jpg',
            btname: '1 Banana',
            lunch: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            lname: 'Tuna Sandwich x2 Slices',
            lt: 'assets/finalsPic/Tab/sliced papaya.jpg',
            ltname:'1 Sliced  Papaya',
            d1: 'assets/finalsPic/Tab/steamed chicken breast.jpg',
            d2: 'assets/finalsPic/Tab/steamed brocolli.jpg',
            d1name: 'Steamed Chicken Breast 200gm',
            d2name: 'Steamed Broccolli 50 gm',

          },
          {
            plans: 'Tuesday',
            name: 'Tuesday',
            bf1: 'assets/finalsPic/Tab/cup of coffee.jpg',
            bname: '1 Cup of Coffee',
            bf2: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            b2name: 'Tuna Sandwich x2 Slices',
            bt: 'assets/finalsPic/Tab/sliced papaya.jpg',
            btname: '1 Sliced  Papaya',
            lunch: 'assets/finalsPic/Tab/salad with egg.jpg',
            lname: 'Salad with Egg',
            lt: 'assets/finalsPic/Tab/sliced of honeydew.jpg',
            ltname:'1 Sliced of Honeydew',
            d1: 'assets/finalsPic/Tab/steamed chicken breast.jpg',
            d2: 'assets/finalsPic/Tab/a carrot.jpg',
            d1name: 'Steamed Chicken Breast 200gm',
            d2name: 'A carrot 50 gm',

          }
          ,{
            plans: 'Wednesday',
            name: 'Wednesday',
            bf1: 'assets/finalsPic/Tab/oatmeal.jpg',
            bname: 'Oat Meal 100ml',
            bf2: 'assets/finalsPic/Tab/boiled eggs.jpeg',
            b2name: '2 Boiled Eggs',
            bt: 'assets/finalsPic/Tab/banana.jpg',
            btname: '1 Banana',
            lunch: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            lname: 'Tuna Sandwich x2 Slices',
            lt: 'assets/finalsPic/Tab/sliced of honeydew.jpg',
            ltname:'1 Sliced of Honeydew',
            d1: 'assets/finalsPic/Tab/steamed chicken breast.jpg',
            d2: 'assets/finalsPic/Tab/a carrot.jpg',
            d1name: 'Steamed Chicken Breast 200gm',
            d2name: 'A carrot 50 gm',

          },{
            plans: 'Thursday',
            name: 'Thursday',
            bf1: 'assets/finalsPic/Tab/cup of coffee.jpg',
            bname: '1 Cup of Coffee',
            bf2: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            b2name: 'Tuna Sandwich x2 Slices',
            bt: 'assets/finalsPic/Tab/apple.jpg',
            btname: '1 Apple',
            lunch: 'assets/finalsPic/Tab/salad with egg.jpg',
            lname: 'Salad with Egg',
            lt: 'assets/finalsPic/Tab/sliced of watermelon.jpg',
            ltname:'1 Sliced of Watermelon',
            d1: 'assets/finalsPic/Tab/steamed fish.png',
            d2: 'assets/finalsPic/Tab/brocolli.jpg',
            d1name: 'Steamed Fish 150gm',
            d2name: 'brocolli 50 gm',

          },{
            plans: 'Friday',
            name: 'Friday',
            bf1: 'assets/finalsPic/Tab/oatmeal.jpg',
            bname: 'Oat Meal 100ml',
            bf2: 'assets/finalsPic/Tab/boiled eggs.jpeg',
            b2name: '2 Boiled Eggs',
            bt: 'assets/finalsPic/Tab/banana.jpg',
            btname: '1 Banana',
            lunch: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            lname: 'Tuna Sandwich x2 Slices',
            lt: 'assets/finalsPic/Tab/sliced of honeydew.jpg',
            ltname:'1 Sliced of Honeydew',
            d1: 'assets/finalsPic/Tab/steamed chicken breast.jpg',
            d2: 'assets/finalsPic/Tab/a carrot.jpg',
            d1name: 'Steamed Chicken Breast 200gm',
            d2name: 'A carrot 50 gm',

          },{
            plans: 'Saturday',
            name: 'Saturday',
            bf1: 'assets/finalsPic/Tab/cup of coffee.jpg',
            bname: '1 Cup of Coffee',
            bf2: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            b2name: 'Tuna Sandwich x2 Slices',
            bt: 'assets/finalsPic/Tab/apple.jpg',
            btname: '1 Apple',
            lunch: 'assets/finalsPic/Tab/salad with egg.jpg',
            lname: 'Salad with Egg',
            lt: 'assets/finalsPic/Tab/sliced of watermelon.jpg',
            ltname:'1 Sliced of Watermelon',
            d1: 'assets/finalsPic/Tab/steamed fish.jpg',
            d2: 'assets/finalsPic/Tab/brocolli.jpg',
            d1name: 'Steamed Fish 150gm',
            d2name: 'brocolli 50 gm',

          },{
            plans: 'Sunday',
            name: 'Sunday',
            bf1: 'assets/finalsPic/Tab/oatmeal.jpg',
            bname: 'Oat Meal 100ml',
            bf2: 'assets/finalsPic/Tab/boiled eggs.jpeg',
            b2name: '2 Boiled Eggs',
            bt: 'assets/finalsPic/Tab/banana.jpg',
            btname: '1 Banana',
            lunch: 'assets/finalsPic/Tab/tuna sandwich.jpg',
            lname: 'Tuna Sandwich x2 Slices',
            lt: 'assets/finalsPic/Tab/sliced of honeydew.jpg',
            ltname:'1 Sliced of Honeydew',
            d1: 'assets/finalsPic/Tab/steamed chicken breast.jpg',
            d2: 'assets/finalsPic/Tab/a carrot.jpg',
            d1name: 'Steamed Chicken Breast 200gm',
            d2name: 'A carrot 50 gm',

          }
        
        ];
    }
    
    getMeals(plans: string): Meal {
        return this.getMeal().find((meal) => meal.plans == plans);
    }
}
