import { Order } from "./orderResponseModel";
import { MenuItems } from "../Menu/menuItems";

export interface orderItems {
  orderItemId: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  price: number;
  order: Order;
  menuItem: MenuItems;
}
