import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';

export const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full' // ← ÖNEMLİ!
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'iletisim',
    loadComponent: () =>
      import('./components/iletisim/iletisim.component').then(m => m.IletisimComponent)
  },
  {
    path: '**',
    redirectTo: ''
  },
  { path: '', redirectTo: 'menus', pathMatch: 'full' },
  { path: 'menus', component: MenuComponent },
  { path: 'menuitems', component: MenuItemComponent },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'reviews', component: ReviewComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
