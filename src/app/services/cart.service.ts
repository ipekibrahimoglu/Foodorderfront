import { Injectable } from '@angular/core';
import { MenuItems } from '../models/Menu/menuItems';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  addTocart(menuitem: MenuItems) {
    let item = CartItems.find(
      (c) => c.menuItem.menuItemId == menuitem.menuItemId
    );
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.menuItem = menuitem;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
    list(): CartItem[] {
    return CartItems;
  }
}
