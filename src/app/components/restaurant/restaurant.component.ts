import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RestaurantResponseModel } from "../../models/restaurantResponseModel";
import { HttpClient } from "@angular/common/http";
import { Restaurant } from "../../models/restaurant";
import { RestaurantService } from "../../services/restaurant.service";

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
    this.restaurantService.getRestaurants().subscribe(response=>{
      console.log("getRestaurants çağırıldı",response);
      this.restaurants=response;
    });
  }

  setCurrentRestaurant(restaurant:Restaurant):void{
    this.currentRestaurant=restaurant;
    console.log("Seçilen restorant:",restaurant);
    }
    
      
 
}


