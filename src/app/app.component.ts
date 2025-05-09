import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // ✅ eklendi
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ProductComponent } from "./components/product/product.component";
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,                                  // ✅ eklendi
  imports: [CommonModule, NaviComponent, CategoryComponent, MenuComponent, RouterOutlet, ProductComponent],             // ✅ CommonModule eklendi
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']                 // ✅ düzeltildi
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
