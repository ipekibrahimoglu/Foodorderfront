import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //api çağrısı yapabilmemizi sağlıyor.
import { Order } from '../../models/Order/order';
import { OrderService } from '../../services/order.service';
import { OrderItem } from '../../models/Order/orderItem';
import { OrderItemService } from '../../services/orderitem.service';
import { Route, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  orders: Order[] = []; //siparişlerimiz var.
  dataLoaded = false;
  selectedOrder!: Order;
  userOrders: Order[] = [];
  restaurantOrders: Order[] = [];
  orderItems: OrderItem[] = [];


  // orderResponseModel:OrderResponseModel={
  //   data:this.orders,
  //   message:"",
  //   success:true
  // }//eğer this.orderResponseModel=response ise kullanırsın.

  constructor(private orderService: OrderService,private orderItemService: OrderItemService,private router:Router ) {}

  ngOnInit(): void {
    this.getOrders();
  }
 
  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response;
      this.dataLoaded = true;
    });
  }
  getStatusText(status: string): string {
    switch (status) {
      case 'Pending':
        return 'Beklemede';
      case 'Preparing':
        return 'Hazırlanıyor';
      case 'Delivered':
        return 'Teslim Edildi';
      case 'Cancelled':
        return 'İptal Edildi';
      default:
        return status;
    }
  }
  
  addOrder(newOrder: Order) {
    this.orderService.addOrder(newOrder).subscribe((response) => {
      console.log('Sipariş eklendi:', response);
      this.getOrders(); // Listeyi yenile
    });
  }
  updateOrder(updatedOrder: Order) {
    this.orderService.updateOrder(updatedOrder).subscribe((response) => {
      console.log('Sipariş güncellendi:', response);
      this.getOrders(); // Listeyi yenile
    });
  }
  getOrderById(id: string) {
    this.orderService.getOrderById(id).subscribe((response) => {
      this.selectedOrder = response;
    });
  }
  deleteOrder(id: string) {
    this.orderService.deleteOrder(id).subscribe((response) => {
      console.log('Sipariş silindi:', response);
      this.getOrders(); // Listeyi yenile
    });
  }
  getOrdersByUser(userId: string) {
    this.orderService.getOrdersByUser(userId).subscribe((response) => {
      this.userOrders = response;
    });
  }
  getOrdersByRestaurant(restaurantId: string) {
    this.orderService
      .getOrdersByRestaurant(restaurantId)
      .subscribe((response) => {
        this.restaurantOrders = response;
      });
  }
  getOrderItems(orderId: string): void {
    this.orderItemService.getOrderItemsByOrder(orderId).subscribe((response:any) => {
      this.orderItems = response;
    });
  }
   goToOrderItems(orderId: string): void {
   this.router.navigate(['/order-items', orderId]);
   }//bu satırın ne yaptığına bak gönder hepsini ne yapmak istediği yaz hatayı bulsun.
  
}
