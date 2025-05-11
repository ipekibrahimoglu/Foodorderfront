import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //api çağrısı yapabilmemizi sağlıyor.
import { Order } from '../../models/Order/order';
import { OrderService } from '../../services/order.service';
import { OrderItem } from '../../models/Order/orderItem';
import { OrderItemService } from '../../services/orderitem.service';
import { Route, Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  dataLoaded = false;
  selectedOrder!: Order;
  userOrders: Order[] = [];
  restaurantOrders: Order[] = [];
  orderItems: OrderItem[] = [];



  constructor(private orderService: OrderService,private orderItemService: OrderItemService,private router:Router ) {}

  ngOnInit(): void {
    this.getOrders();
  }
 
  getOrders() {
    this.orderService.getOrders().subscribe((response:Order[]) => {
      this.orders = response;
      this.dataLoaded = true;
    });
  }
 
  
}
