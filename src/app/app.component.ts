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
setCurrentMenu(_t9: any) {
throw new Error('Method not implemented.');
}
addToCart(arg0: any) {
throw new Error('Method not implemented.');
}
notifyMe(arg0: any) {
throw new Error('Method not implemented.');
}

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

  // 2. Sadece Logo + Navbar görünecek sayfalardan biri mi?
  isSimplePage(): boolean {
    const url = this.router.url;
    return ['/menu-ekle', '/orders', '/cart'].some(path => url.startsWith(path));
  }

  // 3. Menü ekleme sayfasında mıyız?
  isMenuAddPage(): boolean {
    return this.router.url.startsWith('/menu-ekle');
  }

  // 4. Kullanıcının rolü RestaurantOwner mı? (localStorage üzerinden)
  get isRestaurantOwner(): boolean {
    const userStr = localStorage.getItem('user');
    if (!userStr) return false;

    try {
      const user = JSON.parse(userStr);
      return user?.role === 'RestaurantOwner';
    } catch (e) {
      return false;
    }
  }

}
  

