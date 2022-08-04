import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'front',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./sidenav/sidenav.module').then( m => m.SidenavPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then( m => m.FrontPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info/:plan',
    loadChildren: () => import('./plans/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'infofood/:food',
    loadChildren: () => import('./foods/infofood/infofood.module').then( m => m.InfofoodPageModule)
  },


  






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
