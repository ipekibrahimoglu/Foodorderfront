import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { Router, RouterOutlet } from '@angular/router';
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
    CategoryComponent,  
    OrderComponent, 
    MenuComponent,
    RouterModule,
    HttpClientModule,     // ✅ BURAYA EKLENMELİ!
    FormsModule,
    MenuItemComponent,
    RestaurantComponent,
    ReviewComponent
     ] 
                 
})
export class AppComponent {
  constructor(public router: Router) {}
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
 



function isLoginPage() {
  throw new Error('Function not implemented.');
}

