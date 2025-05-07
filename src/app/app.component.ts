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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,     // ✅ BURAYA EKLENMELİ!
    NaviComponent,
    CategoryComponent,
    ProductComponent,
    OrderComponent,
    MenuComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "ipek";
}
