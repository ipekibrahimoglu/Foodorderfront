import { Routes } from '@angular/router';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
    { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
    { path: 'restaurants', component: RestaurantComponent },
    
    {path:"",pathMatch:"full",component:ReviewComponent},
    {path:"reviews",component:ReviewComponent}
];

import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menuitem/menuitem.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [{path:"",pathMatch:"full",component:MenuComponent},
    {path:"menuitems", component:MenuItemComponent}];

    @NgModule({

        imports: [RouterModule.forRoot(routes)],
        exports:[RouterModule]

    })export class AppRoutingModule{

    }