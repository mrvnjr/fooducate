import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealPageRoutingModule } from './meal-routing.module';

import { MealPage } from './meal.page';
import { PlansModule } from '../plans/plans.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealPageRoutingModule,
    PlansModule,
    Ng2SearchPipeModule,
    
  ],
  declarations: [MealPage]
})
export class MealPageModule {}
