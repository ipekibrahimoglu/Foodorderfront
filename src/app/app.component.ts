import { Component } from '@angular/core';
<<<<<<< HEAD
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
=======
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { WeatherForecastComponent } from './components/weatherforecast/weatherforecast.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',//sen eni diğer sayfalarda html bodyleri gibi app-root yazarak gösterebilirsin.
  standalone: true,
  imports: [RouterOutlet, CommonModule, NaviComponent, CategoryComponent, WeatherForecastComponent,HttpClientModule],
  templateUrl: './app.component.html',//neyin componentisin sen app.component.html in datasını yönetecek olan componentsin.
  styleUrl: './app.component.css'//html in cssleri burada bulunuyor.
})
// ./ aynı klasorde olduğunu söyler.

//üst kısım classsın ama bir component olduğunu belli eder imza gibi düşün


export class AppComponent {
  title = 'northwind';
  user = "ekincan algün";

}
//any her şey demek  {}demek ise obje demek  []array demek
//datayı yönettiğin yer.veri ekleme çıkarma yapacağın yer.
//angularda her şey class nype dayanır
//html in datasını destekleyen kısım yani datayı yönettiğimiz yer => component
//@component e ne denir deklarisyon ?? bunla nalıyoruz kodun component olduğunu
//javascript te tip vermezsin ama ts seni korur title:string='northwind';


>>>>>>> e41cde0f8ff84c0833d990b427ad5cbbb641bb55
