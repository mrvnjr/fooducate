import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HmealPage } from './hmeal.page';

const routes: Routes = [
  {
    path: '',
    component: HmealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HmealPageRoutingModule {}
