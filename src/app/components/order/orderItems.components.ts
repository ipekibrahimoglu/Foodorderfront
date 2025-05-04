import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { orderItems } from '../../models/Order/orderItems';
import { orderItemsResponseModel } from '../../models/Order/orderItemsResponseModel';

@Component({
  standalone: true,
  selector: 'app-order-item',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './orderItems.component.html',
  styleUrl: './orderItems.component.css'
})
export class OrderItemsComponent implements OnInit {
  orderItems: orderItems[] = [];
  apiUrl: string = "https://localhost:7292/api/OrderItems";

  orderItemResponseModel: orderItemsResponseModel = {
    data: this.orderItems,
    message: "",
    success: true,
  };

  constructor(private httpClient: HttpClient) {
    this.httpClient.get;
  }

  ngOnInit(): void {
    console.log("OrderItemComponent başladı");
    this.getOrderItems();
  }

  getOrderItems(): void {
    this.httpClient.get<orderItemsResponseModel>(this.apiUrl)
      .subscribe(response => {
        this.orderItems = response.data;
      });
  }
}
