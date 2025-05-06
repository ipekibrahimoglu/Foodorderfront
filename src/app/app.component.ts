import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { MenuComponent } from "./components/menu/menu.component";
import { OrderComponent } from './components/order/order.component';
import { RouterModule } from '@angular/router'; 
import { IletisimComponent } from './components/iletisim/iletisim.component';



@Component({
  selector: 'app-root',
  standalone: true,                                 
  imports: [
    RouterOutlet,
    CommonModule, 
    NaviComponent, 
    CategoryComponent, 
    ProductComponent, 
    OrderComponent, 
    MenuComponent,
    RouterModule,
    IletisimComponent],           
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']                 
})
export class AppComponent {
  title = 'northwind';
  user: string = "ipek";

  
}
