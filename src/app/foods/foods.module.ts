import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodsPageRoutingModule } from './foods-routing.module';

import { FoodsPage } from './foods.page';
import { FoodsCardModule } from '../ingredient/foods-card/foods-card.module';

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FavoritePageModule } from '../favorite/favorite.module';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsPageRoutingModule,
    FoodsCardModule,
    FavoritePageModule,
  ],
  declarations: [FoodsPage]
})
export class FoodsPageModule {}
