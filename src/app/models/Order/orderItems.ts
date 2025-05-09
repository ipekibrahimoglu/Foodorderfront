import { Order } from "./order";
import { MenuItems } from "../Menu/menuItems";

export interface OrderItems {
  orderItemId: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  price: number;
  order: Order;
  menuItem: MenuItems;
}
