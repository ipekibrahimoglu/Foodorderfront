import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from "./components/navi/navi.component";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';
import { OrderComponent } from './components/order/order.component';


@Component({
  selector: 'app-root',
  standalone: true,                                  
  imports: [CommonModule, NaviComponent, MenuComponent, RouterOutlet, OrderComponent,
    FormsModule, MenuItemComponent, RestaurantComponent, ReviewComponent],        
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "ipek";
  hideLayout:boolean =false;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      this.hideLayout = url.includes('/orders') || url.includes('/order-items') ||url.includes('/cart');;
    });
  }
  
}
