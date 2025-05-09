import { Menu } from "./Menu/menu";
import { Review } from "./review";
import { User } from "./user";

export interface Restaurant{
    restaurantId: string;
    ownerId: string;
    name: string;
    description: string;
    address: string;
    phoneNumber?: string;
    user?: User  // JSON'da "user" alanı Owner'ı temsil ediyor
    menus?: Menu[];
    reviews?: Review[];

}