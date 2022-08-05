import { Injectable } from "@angular/core";
import { Foods } from "../foods/foods.model";

@Injectable({
    providedIn: 'root',
})
export class FoodsService {
    getFoods(): Foods[] {
        return [
            {
                id: 'id1',
                title: 'Yogurt and Fruit Parfaits',
                image: 'assets/finalsPic/Yogurt and fruit parfaits.png',
                description: 'Yogurt provides calcium, an important mineral for strong bones, making it a great addition to your breakfast. Yogurt parfaits are enjoyable for both kids and adults, and you don’t even need a specific recipe to make them.',
                description2: 'If you have some time in the morning, set out Greek yogurt, fresh fruit, granola, nuts, and seeds for your family to make their own parfaits. To keep the added sugar content low, use plain yogurt and granola that don’t contain a lot of sweeteners.',
                needs: '',
                instructions: '',
            },{
                id: 'id2',
                title: 'Chocolate Cherry Chia Pudding',
                image: 'assets/finalsPic/Chocolate cherry chia pudding.png',
                description: 'With only a handful of ingredients, chia pudding is a simple but filling option for breakfast. The best part is that you can put the recipe together at night and wake up to a creamy and delicious pudding the next morning.',
                description2: 'What’s more, chia seeds are loaded with antioxidant compounds. Antioxidants help fight reactive molecules called free radicals, which damage cells and may lead to disease ',
                needs: '',
                instructions: '',
            },{
                id: 'id3',
                title: 'Bell Pepper Egg Cups',
                image: 'assets/finalsPic/Bell pepper egg cups.png',
                description: 'For a simple, veggie-loaded breakfast, slice bell peppers in half lengthwise and remove the stems and seeds. Place them into a greased baking dish and cook them for 15 minutes at 350°F (175°C).Remove the dish from the oven and carefully crack an egg into each pepper. Bake them for an additional 15 minutes or until the eggs are cooked to your liking. Garnish with herbs, red pepper flakes, or cheese before eating.',
                description2: 'Two pepper halves, each filled with an egg, comprise one serving. Not only will you get protein from the eggs, but bell peppers are a great source of nutrients that support immunity, such as vitamins A and C',
                needs: '',
                instructions: '',
            },{
                id: 'id4',
                title: 'Peanut Butter Granola bars',
                image: 'assets/finalsPic/Peanut butter granola bars.png',
                description: 'Instead of settling for a store-bought option that might be loaded with added sugar, give homemade granola bars a try. Making them at home can save you money, too.This recipe for peanut butter granola bars is easy to make and kid-friendly. Plus, it includes tips on making them vegan.',
                description2: 'Studies suggest that the compounds found in peanuts can block the absorption of cholesterol from the diet, which may benefit those with high cholesterol levels that put them at an increased risk of heart disease ',
                needs: '',
                instructions: '',
            },{
                id: 'id5',
                title: 'Italian Pasta Salad',
                image: 'assets/finalsPic/Italian pasta salad.png',
                description: 'Pasta salad can be a balanced, nutritious meal. It’s often made with cooked pasta, non-starchy vegetables, and meat, cheese, or beans.',
                description2: 'Plus, pasta salad is served cold and keeps well in the fridge and lunch boxes.',
                needs: '',
                instructions: '',
            },{
                id: 'id6',
                title: 'Slow Cooker Lentil Soup',
                image: 'assets/finalsPic/Slow cooker lentil soup.png',
                description: '“Dump and go” slow cooker meals are an easy option for lunches. Make them on the weekend to eat for lunch during the week, or throw together the ingredients in the morning to have a hot meal by lunchtime.',
                description2: 'This crockpot lentil soup is loaded with veggies and uses pantry spices and ingredients. What’s more, lentils are a source of plant-based protein and fiber, which will help keep you feeling fuller for longer',
                needs: '',
                instructions: '',
            },{
                id: 'id7',
                title: 'Slow Cooker Beef and Broccoli',
                image: 'assets/finalsPic/Slow cooker beef and broccoli.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id8',
                title: 'Taco Salad',
                image: 'assets/finalsPic/Taco salad.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id9',
                title: 'Healthy Mac and Cheese (with veggies)',
                image: 'assets/finalsPic/Healthy mac and cheese (with veggies).png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id10',
                title: 'Sheet pan pork chops and sweet potatoes',
                image: 'assets/finalsPic/Sheet pan pork chops and sweet potatoes.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id11',
                title: 'Caprese chicken breasts',
                image: 'assets/finalsPic/Caprese chicken breasts.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id12',
                title: 'Fridge/freezer stir-fry',
                image: 'assets/finalsPic/Fridge/freezer stir-fry.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id13',
                title: 'Baked potato bar with healthy toppings',
                image: 'assets/finalsPic/Baked potato bar with healthy toppings.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id15',
                title: '',
                image: 'assets/finalsPic/.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id15',
                title: '',
                image: 'assets/finalsPic/.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id15',
                title: '',
                image: 'assets/finalsPic/.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },{
                id: 'id15',
                title: '',
                image: 'assets/finalsPic/.png',
                description: '',
                description2: '',
                needs: '',
                instructions: '',
            },

        ];
    }
    
    getFood(id: string): Foods {
        return this.getFoods().find((foods) => foods.id == id);
    }
}
