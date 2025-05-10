import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { Restaurant } from "../../models/restaurant";
import { ReviewFormComponent } from "../add-review/add-review.component";
import { Review } from "../../models/review";
import { Router, RouterModule } from '@angular/router';
import { RestaurantService } from "../../services/restaurant.service";
import { ReviewService } from "../../services/review.service";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule,ReviewFormComponent,RouterModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})

export class RestaurantComponent implements OnInit{
  [x: string]: any;
  
  restaurants:Restaurant[]=[];
  currentRestaurant:Restaurant|null=null;
  reviews:Review[]=[];
  
  constructor(private restaurantService:RestaurantService ,private reviewService:ReviewService,private router:Router ){ }

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
      this.reviews=[];
    }else{
      this.currentRestaurant=restaurant;
      this.getReviews(restaurant.restaurantId)
    }
    }
    getReviews(restaurantId: string) {
    this.reviewService["getReviewsByRestaurant"](restaurantId).subscribe((data: Review[]) => {
      this.reviews = data;
    });
  }
  
  showReviewFormId: string | null = null;

  toggleReviewForm(restaurantId: string) {
  if (this.showReviewFormId === restaurantId) {
    this.showReviewFormId = null;
  } else {
    this.showReviewFormId = restaurantId;
  }
}

  onReviewAdded(restaurantId: string) {
    this.getReviews(restaurantId);
   this.showReviewFormId = null;
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

