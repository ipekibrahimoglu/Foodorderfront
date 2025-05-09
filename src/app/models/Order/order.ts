
import { Restaurant } from "../restaurant";
import { User } from "../user";
import { OrderItem } from "./orderItem";

export interface Order {
    orderId: string;
    userId: string;
    restaurantId: string;
    orderDate: string; // ISO 8601 tarih formatı
    status: string;
    totalPrice:number;
    user?:User;
    restaurant?:Restaurant;
    orderItems:OrderItem[];

  }
  