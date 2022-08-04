import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'hmeal',
        loadChildren: () => import('../hmeal/hmeal.module').then( m => m.HmealPageModule)
      },
      {
        path: 'meal',
        loadChildren: () => import('../meal/meal.module').then( m => m.MealPageModule)
      }
      
      /*
      {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full'
      } */
    ]
  },

  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule {}
