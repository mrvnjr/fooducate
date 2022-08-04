import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HmealPageRoutingModule } from './hmeal-routing.module';

import { HmealPage } from './hmeal.page';
import { FoodsModule } from '../foods/foods.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HmealPageRoutingModule,
    FoodsModule,
    Ng2SearchPipeModule,
    
  ],
  declarations: [HmealPage]
})
export class HmealPageModule {}
