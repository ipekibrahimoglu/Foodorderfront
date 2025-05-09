import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItem } from '../../models/Order/orderItem';
import { OrderItemService } from '../../services/orderitem.service';
import { ActivatedRoute } from '@angular/router';

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

  // orderItemResponseModel: ListResponseModel<Order> = {
  //   data: this.orderItems,
  //   message: "",
  //   success: true,
  // };

  constructor(
    private orderItemService: OrderItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
      this.route.paramMap.subscribe(params => {
        const orderId = params.get('orderId');
        if (orderId) {
          this.orderItemService.getOrderItemsByOrder(orderId).subscribe((response: any) => {
            this.orderItems = response;
          });
        } else {
          this.orderItemService.getOrderItems().subscribe((response: any) => {
            this.orderItems = response; this.loading=false;
          });
        }
      });
    }
    
  

  getOrderItems() {
    this.orderItemService.getOrderItems().subscribe((response) => {
      this.orderItems = response;
    });
  }
 
  addOrderItem(orderItem: OrderItem): void {
    this.orderItemService.addOrderItem(orderItem).subscribe((response:any)  => {
      this.addedOrderItem = response;
    });
  }
  loadOrderItemsByOrderId(): void {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('orderId');
      if (orderId) {
        this.orderItemService.getOrderItemsByOrder(orderId).subscribe((response:any) => {
          this.orderItems = response;
        });
      }
    });
  }
  deleteOrderItem(orderItemId: string): void {
    if (confirm("Bu sipariş öğesini silmek istediğinize emin misiniz?")) {
      this.orderItemService.deleteOrderItem(orderItemId).subscribe(() => {
        this.orderItems = this.orderItems.filter(item => item.orderItemId !== orderItemId);
      });
    }
  }
  

}
