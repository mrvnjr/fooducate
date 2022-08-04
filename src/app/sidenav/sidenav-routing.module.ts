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
        path: 'foods',
        loadChildren: () => import('../foods/foods.module').then( m => m.FoodsPageModule)
      },
      {
        path: 'meal',
        loadChildren: () => import('../meal/meal.module').then( m => m.MealPageModule)
      },
      {
        path: 'abouts',
        loadChildren: () => import('../abouts/abouts.module').then( m => m.AboutsPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../favorite/favorite.module').then(m =>m.FavoritePageModule)
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
