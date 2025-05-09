import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { MenuComponent } from "./components/menu/menu.component";
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';
import { filter } from 'rxjs';
import { OrderItemsComponent } from "./components/orderitem/orderItems.components";

@Component({
  selector: 'app-root',
  standalone: true,                                  
  imports: [CommonModule, NaviComponent, MenuComponent, RouterOutlet, RouterModule,
    FormsModule, MenuItemComponent, RestaurantComponent, ReviewComponent, OrderItemsComponent 
    ],        
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "ipek";
  hideLayout:boolean = false;
  
  constructor(private router: Router) {
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

