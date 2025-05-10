import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { MenuComponent } from "./components/menu/menu.component";
import { OrderComponent } from './components/order/order.component';
import { RouterModule } from '@angular/router'; 
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';
import { filter } from 'rxjs';
import { UserComponent } from './components/user/user.component';
//import { LoginComponent } from './components/login/login.component';



@Component({
  selector: 'app-root',
  standalone: true, 
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  ,                               
  imports: [
    RouterOutlet,
    CommonModule, 
    NaviComponent,   
    MenuComponent,
    RouterModule,
    HttpClientModule,     
    FormsModule,
    MenuItemComponent,
    RestaurantComponent,
    ReviewComponent,
    UserComponent
     ] 
                 
})
export class AppComponent {
  title = 'northwind';
  hideLayout: false;
  constructor(public router: Router) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      this.hideLayout = url.includes('/orders') || url.includes('/order-items') || url.includes('/cart');
    });
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
 
// function isLoginPage() {
//   throw new Error('Function not implemented.');
// }

