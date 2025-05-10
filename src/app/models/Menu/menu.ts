import { Restaurant } from "../restaurant";
import { MenuItems } from "./menuItems";

export interface Menu {
  menuId: string;
  restaurantId: string;
  name: string;
  description: string;
  restaurant: Restaurant;
  menuItems: MenuItems[];
  
}
