import { Restaurant } from "./restaurant";
import { Review } from "./review";

export interface User{
    userId: string;
    fullName: string;
    email: string;
    role: 'RestaurantOwner'|'Customer';
    phoneNumber?: string;
    passwordHash?: string;
    reviews?: Review[];
    ownedRestaurants?: Restaurant[];
}