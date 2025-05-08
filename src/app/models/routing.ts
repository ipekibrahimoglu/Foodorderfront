import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Restaurant } from './restaurant'; // dosya yolunu kendi yapına göre uyarlayabilirsin
import { RestaurantComponent } from '../components/restaurant/restaurant.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantComponent},                // tüm restoranlar burada listelenecek
  { path: 'restaurants/:id', component: RestaurantComponent},            // aynı component içinde detay ve yorum da gösterilebilir
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
