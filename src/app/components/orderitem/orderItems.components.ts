import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItem } from '../../models/Order/orderItem';
import { OrderItemService } from '../../services/orderitem.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-order-item',
  imports: [CommonModule],
  templateUrl: './orderItems.component.html',
  styleUrl: './orderItems.component.css',
})
export class OrderItemsComponent implements OnInit {
  orderItems: OrderItem[] = [];
  addedOrderItem!: OrderItem;
  loading:boolean=true;

 

  constructor(
    private orderItemService: OrderItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrderItems();
    const orderId = this.route.snapshot.paramMap.get('orderId');
    if (orderId) {
      this.getOrderItemsByOrderId(orderId);
    } else {
      console.warn('OrderId parametresi bulunamadı.');
    };
    }
    
  

  getOrderItems() {
    this.orderItemService.getOrderItems().subscribe((response:any) => {
      this.orderItems = response;
    });
  }
 
  addOrderItem(orderItem: OrderItem): void {
    this.orderItemService.addOrderItem(orderItem).subscribe((response:any)  => {
      this.addedOrderItem = response;
    });
  }
 
  deleteOrderItem(orderItemId: string): void {
    if (confirm("Bu sipariş öğesini silmek istediğinize emin misiniz?")) {
      this.orderItemService.deleteOrderItem(orderItemId).subscribe(() => {
        this.orderItems = this.orderItems.filter(item => item.orderItemId !== orderItemId);
      });
    }
  }
 


 getOrderItemsByOrderId(orderId: string): void {
    this.orderItemService.getOrderItemsByOrderId(orderId).subscribe((response: any)=> {
      this.orderItems = response;
    });
  }
}