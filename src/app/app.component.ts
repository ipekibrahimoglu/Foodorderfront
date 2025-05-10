import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { NaviComponent } from './components/navi/navi.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';
import { MenuAddComponent } from './components/menu-add/menu-add.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,                                  
  imports: [CommonModule, NaviComponent, MenuComponent, RouterOutlet, RouterModule,
    FormsModule, MenuItemComponent, RestaurantComponent, ReviewComponent,RouterOutlet,MenuItemComponent,
    MenuAddComponent],        
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
      this.hideLayout = url.includes('/orders') || url.includes('/order-items') || url.includes('/cart') || url.includes('/menu-ekle');
    });}



  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
//   isOrdersPage(): boolean {
//     // tam eşleşme isterseniz === '/orders', 
//     // alt rotalar da dahil olsun derseniz startsWith kullanın:
//     return this.currentUrl.startsWith('/orders');
// }
 

  isMenuAddPage(): boolean {
    return this.router.url === '/menu-ekle';
  }

  get isRestaurantOwner(): boolean {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user?.role === 'RestaurantOwner';
}



}
  

