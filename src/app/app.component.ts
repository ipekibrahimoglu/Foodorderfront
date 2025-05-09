import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { MenuComponent } from "./components/menu/menu.component";
import { OrderComponent } from './components/order/order.component';
import { HttpClientModule } from '@angular/common/http';  // ✅ BU SATIRI EKLE
import { FormsModule } from '@angular/forms';
import { MenuItems } from './models/Menu/menuItems';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,     // ✅ BURAYA EKLENMELİ!
    NaviComponent,
    OrderComponent,
    MenuComponent,
    FormsModule,
    MenuItemComponent,
    RestaurantComponent,
    ReviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "ipek";
}
