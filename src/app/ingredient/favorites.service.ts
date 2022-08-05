import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavoriteItem } from '../favorite/favorite.model';

@Injectable ({
    providedIn: 'root'
})
export class FavoriteService {

    private item = new BehaviorSubject<FavoriteItem[]>([
        
    ]);

    getFavorites(): FavoriteItem[] {
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
                description: 'Beef and broccoli is a popular take-out dish that you can easily make at home with wholesome ingredients for a more affordable price. Not to mention, it can be made in the slow cooker, which means there will be minimal cleanup.',
                description2: 'Plus, beef is packed with iron, which is vital for red blood cells to transport oxygen in the body, and vitamin B12, which helps your body produce red blood cells',
                needs: '',
                instructions: '',
            },{
                id: 'id8',
                title: 'Taco Salad',
                image: 'assets/finalsPic/Taco salad.png',
                description: 'Taco salad is another recipe that you can prep in advance and assemble when you’re ready to eat. Combine chopped romaine, cooked ground beef with taco seasoning, sliced cherry tomatoes, avocado or guacamole, shredded cheese, and pinto or black beans. Fun additions include sliced radishes, cooked corn, or crushed tortilla chips.',
                description2: 'For a simple and healthy dressing, thin plain Greek yogurt with lime juice and drizzle it over the salad. Greek yogurt contributes some additional protein and calcium .',
                needs: '',
                instructions: '',
            },{
                id: 'id9',
                title: 'Healthy Mac and Cheese (with veggies)',
                image: 'assets/finalsPic/Healthy mac and cheese (with veggies).png',
                description: 'Mac and cheese is always a crowd-pleaser, and adding veggies to it brings the nutrition up a notch. Making mac and cheese from scratch also means that you can control the ingredients and avoid excess sodium or unnecessary additives.',
                description2: 'This healthy mac and cheese is kid-friendly and features both zucchini and cauliflower. It contains carbs from pasta, vitamins and minerals from veggies, and protein and fat from cheese.',
                needs: '',
                instructions: '',
            },{
                id: 'id10',
                title: 'Sheet pan pork chops and sweet potatoes',
                image: 'assets/finalsPic/Sheet pan pork chops and sweet potatoes.png',
                description: 'Sheet pan meals are the epitome of hassle-free cooking. Plus, they make cleanup a breeze. This healthy sheet pan meal features pork chops, sweet potatoes, onions, apples, and pantry spices for a wholesome and balanced meal. The leftovers make a great lunch the next day, too.',
                description2: 'Pork contains an abundance of nutrients, including selenium, an essential mineral that’s necessary for healthy reproduction and thyroid function.',
                needs: '',
                instructions: '',
            },{
                id: 'id11',
                title: 'Caprese chicken breasts',
                image: 'assets/finalsPic/Caprese chicken breasts.png',
                description: 'For a delicious meal that’s on the table in 30 minutes, try chicken breasts made with Caprese salad ingredients — tomatoes, mozzarella, and basil. This recipe includes instructions for making them in a single skillet. Make some pasta while they cook — or better yet, ahead of time — and you’ll have a balanced meal in no time.',
                description2: 'The chicken provides filling protein. Plus, tomatoes are a source of lycopene, an antioxidant compound that boosts heart health.',
                needs: '',
                instructions: '',
            },{
                id: 'id12',
                title: 'Fridge/freezer stir-fry',
                image: 'assets/finalsPic/Fridge-freezer stir fry.png',
                description: 'Making a stir-fry with ingredients you already have is an easy way to put a healthy meal on the table fast.',
                description2: 'Stir-fries typically consist of protein, non-starchy veggies, and a carbohydrate, such as rice or noodles. Therefore, they’re balanced meals that will keep you full.',
                needs: '',
                instructions: '',
            },{
                id: 'id13',
                title: 'Baked potato bar with healthy toppings',
                image: 'assets/finalsPic/Baked potato bar with healthy toppings.png',
                description: 'Baked potatoes are one of the most affordable bases for a healthy meal. Plus, potatoes are incredibly nutritious, providing potassium, magnesium, iron, and vitamins B6 and C.',
                description2: 'Since they provide energizing carbs, top them with a source of protein, some non-starchy veggies, and a healthy fat for a balanced meal.',
                needs: '',
                instructions: '',
            },{
                id: 'id14',
                title: 'Peanut butter and banana roll-ups',
                image: 'assets/finalsPic/Peanut butter and banana roll-ups.png',
                description: 'Peanut butter and banana is a winning culinary combo, and these roll-ups are great for kids.',
                description2: 'Bananas are also one of the best dietary sources of potassium, a mineral that contributes to healthy blood pressure ',
                needs: '',
                instructions: '',
            },{
                id: 'id15',
                title: 'Veggie quesadillas',
                image: 'assets/finalsPic/Veggie quesadillas.png',
                description: 'Veggie quesadillas are one of the easiest recipes to make, and they’re a good way to get kids to eat more veggies. Eating vegetables is linked to a lower risk of disease and longer life',
                description2: '',
                needs: '',
                instructions: '',
            }
            
        ];
    }
    
    getFavoriteItem(id: string): FavoriteItem {
        return this.getFavorites().find((favoriteItem) => favoriteItem.id == id);
    }

    constructor(
       
        ) { }

    getFavorite() {
        return this.item.asObservable();
    }
    
    addToFavorite(newItem: FavoriteItem) {
        this.item.next([...this.item.getValue(), newItem]);
    }

    removeFavorite(id: string) {
        this.item.next(this.item.getValue().filter((favoriteItem) => favoriteItem.id !== id));
    }
}