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
                },
            
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