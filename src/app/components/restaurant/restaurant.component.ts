import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RestaurantResponseModel } from "../../models/restaurantResponseModel";
import { HttpClient } from "@angular/common/http";
import { Restaurant } from "../../models/restaurant";
import { RestaurantService } from "../../restaurant.service";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})

export class RestaurantComponent implements OnInit{
  
  restaurants:Restaurant[]=[];
  currentRestaurant:Restaurant|null=null;
  
  
  constructor(private restaurantService:RestaurantService ){ }

  ngOnInit(): void{ 
    this.getRestaurants();  
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe((response:any)=>{
      console.log("getRestaurants çağırıldı",response);
      this.restaurants=response;
    });
  }

  setCurrentRestaurant(restaurant:Restaurant):void{
    if (this.currentRestaurant?.restaurantId===restaurant.restaurantId){
      this.currentRestaurant=null;
    }else{
      this.currentRestaurant=restaurant;
    }
    }
    
   getLogoForRestaurant(name: string): string {
  const key = name
    .toLowerCase()
    .normalize('NFD')         
    .replace(/[\u0300-\u036f]/g, ''); 

  if (key.includes('dish')) {
    return 'assets/menuler/dishup.png';
  } else if (key.includes('ciger')) {  
    return 'assets/menuler/resim.png';
  } else if (key.includes('lezzet')) {
    return 'assets/menuler/yeniLezzet.png';
  } else {
    return 'assets/restoranlar/default.png';
  }
}
}

