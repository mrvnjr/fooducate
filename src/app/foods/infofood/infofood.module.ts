import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfofoodPageRoutingModule } from './infofood-routing.module';
import { InfofoodPage } from './infofood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfofoodPageRoutingModule
  ],
  declarations: [InfofoodPage]
})
export class InfofoodPageModule {}
