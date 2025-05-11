import {  RouterModule, Routes } from '@angular/router';
import { OrderItemsComponent } from './components/orderitem/orderItems.components';
import { OrderComponent } from './components/order/order.component';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';
import { NgModule } from '@angular/core';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { MenuAddComponent } from './components/menu-add/menu-add.component';

export const appRoutes: Routes = [
  
  {path: 'login',loadComponent: () =>import('./components/login/login.component').then(m => m.LoginComponent)},
  {path: 'iletisim',loadComponent: () =>import('./components/iletisim/iletisim.component').then(m => m.IletisimComponent)},
  {path: '', redirectTo: 'menus', pathMatch: 'full' },
  { path: 'menuitems', component: MenuItemComponent },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'reviews', component: ReviewComponent },
  { path: 'order-items/:orderId', component: OrderItemsComponent },
  { path: 'cart',     component: CartSummaryComponent },  //,{path:"",loadComponent:()=> import('./components/order/order.component').then(o=>OrderComponent)}
  { path: 'orders', component: OrderComponent },
  //{path: 'menu-ekle',loadComponent: () => import('./components/menu-add/menu-add.component').then( (m) => m.MenuAddComponent)},
  { path: 'order-items/:orderId', loadComponent: () => import('./components/orderitem/orderItems.components').then(m => m.OrderItemsComponent) },
  {path: 'restaurants/:id/add-review',loadComponent: () => import('./components/add-review/add-review.component').then(m => m.ReviewFormComponent)},
  { path: 'menus', loadComponent: () => import('./components/menu/menu.component').then(m => m.MenuComponent) },
  { path: 'menu-ekle', component: MenuAddComponent },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }




