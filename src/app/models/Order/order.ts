
import { Restaurant } from "../restaurant";
import { User } from "../user";
import { OrderItem } from "./orderItem";

export interface Order {
    orderId: string;
    userId: string;
    restaurantId: string;
    orderDate: string; 
    status: string;
    totalPrice:number;
    user?:User;
    restaurant?:Restaurant;
    orderItems:OrderItem[];

  }
  