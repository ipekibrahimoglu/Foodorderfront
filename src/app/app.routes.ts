import { Routes } from '@angular/router';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
    { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
    { path: 'restaurants', component: RestaurantComponent },
    
    {path:"",pathMatch:"full",component:ReviewComponent},
    {path:"reviews",component:ReviewComponent}
];
