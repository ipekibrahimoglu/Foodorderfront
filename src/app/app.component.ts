import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // ✅ eklendi
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { OrderItemsComponent } from "./components/order/orderItems.components";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,                                  // ✅ eklendi
  imports: [RouterOutlet, CommonModule, NaviComponent, CategoryComponent, ProductComponent, OrderItemsComponent, MenuComponent],             // ✅ CommonModule eklendi
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']                 // ✅ düzeltildi
})
export class AppComponent {
  title = 'northwind';
  user: string = "ipek";

  
}
