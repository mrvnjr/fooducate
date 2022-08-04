import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfofoodPage } from './infofood.page';

const routes: Routes = [
  {
    path: '',
    component: InfofoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfofoodPageRoutingModule {}
