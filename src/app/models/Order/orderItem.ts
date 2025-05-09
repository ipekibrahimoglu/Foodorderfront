import { MenuItems } from "../Menu/menuItems";
import { Order } from "./order";

export interface OrderItem {
  orderItemId: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  price: number;
  order: Order;
  menuItem: MenuItems;
}
