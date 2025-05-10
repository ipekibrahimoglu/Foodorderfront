import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../models/cartItem';
import { MenuItems } from '../../models/Menu/menuItems';
import { CartItems } from '../../models/cartItems';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
cartItems:CartItem[]=[];
  loading = false;
  
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  getCart():void {
    this.cartItems=this.cartService.list();
  }
   get total(): number {
    return this.cartItems
      .map(i => i.menuItem.price * i.quantity)
      .reduce((acc, v) => acc + v, 0);
  }

}