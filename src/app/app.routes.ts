import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderItemsComponent } from './components/orderitem/orderItems.components';
import { OrderComponent } from './components/order/order.component';
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
  { path: 'reviews', component: ReviewComponent }, { path: 'order-items/:orderId', component: OrderItemsComponent },
  { path: 'cart', component: OrderItemsComponent },
  //{path: '',redirectTo: 'order-items/your-default-id',pathMatch: 'full'},
  //,{path:"",loadComponent:()=> import('./components/order/order.component').then(o=>OrderComponent)}
  { path: 'orders', component: OrderComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


