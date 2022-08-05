import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Foods } from 'src/app/foods/foods.model';
import { FavoriteItem } from 'src/app/favorite/favorite.model';
import { FoodsService } from 'src/app/ingredient/foods.service';
import { FavoriteService } from 'src/app/ingredient/favorites.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: string;
  foods: Foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodsService: FoodsService,
    private favoriteService: FavoriteService,
    private toastCtrl: ToastController
    ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.foods = this.foodsService.getFood(this.id);
  }

  addItemToFavorite() {
    const favoriteItem: FavoriteItem = {
      id: this.foods.id,
      title: this.foods.title,
      image: this.foods.image,
      description: this.foods.description,
      description2:this.foods.description2,
      needs: this.foods.description,
      instructions: this.foods.instructions,
    };

    this.favoriteService.addToFavorite(favoriteItem);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Added to favorite",
      mode: 'md',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}