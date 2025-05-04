import { Restaurant } from "./restaurant";
import { Review } from "./review";

export interface User{
    userId: string;
    fullName: string;
    email: string;
    role: string;
    phoneNumber?: string;
    passwordHash?: string;
    reviews?: Review[];
    ownedRestaurants?: Restaurant[];
}