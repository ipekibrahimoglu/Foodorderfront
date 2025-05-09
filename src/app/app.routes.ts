import { Routes } from '@angular/router';
import { OrderItemsComponent } from './components/orderitem/orderItems.components';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
  { path: 'order-items/:orderId', component: OrderItemsComponent },
  { path: 'cart', component: OrderItemsComponent },
  //{path: '',redirectTo: 'order-items/your-default-id',pathMatch: 'full'},
  //,{path:"",loadComponent:()=> import('./components/order/order.component').then(o=>OrderComponent)}
  { path: 'orders', component: OrderComponent },
];
