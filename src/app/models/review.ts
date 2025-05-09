import { Restaurant } from "./restaurant";
import { User } from "./user";

export interface Review{
    reviewId: string;
    userId: string;
    restaurantId: string;
    rating: number; 
    user?: User;
    restaurant?: Restaurant;
    comment:string;
  }
