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