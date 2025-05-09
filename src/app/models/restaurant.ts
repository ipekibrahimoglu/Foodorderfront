import { Review } from "./review";
import { User } from "./user";

export interface Restaurant{
    restaurantId: string;
    ownerId: string;
    name: string;
    description: string;
    address: string;
    phoneNumber?: string;
    user?: User  
    //menus?: Menu[];
    reviews?: Review[];

}