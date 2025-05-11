import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from '../models/Order/orderItem';
import { CreateOrderItemDto } from '../models/Order/createOrderItemDto';


@Injectable({
  providedIn: 'root'
})

export class OrderItemService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'http://localhost:5161/api/OrderItems';


  getOrderItems(): Observable<OrderItem[]>{
     return this.httpClient.get<OrderItem[]>(this.apiUrl);
      
  }
  
  addOrderItem(dto: CreateOrderItemDto): Observable<OrderItem> {
    return this.httpClient.post<OrderItem>(this.apiUrl, dto);
  }

  
  deleteOrderItem(orderItemId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${orderItemId}`);
  }
  
  getOrderItemsByOrderId(orderId: string): Observable<OrderItem[]> {
    return this.httpClient.get<OrderItem[]>(`${this.apiUrl}/byorder/${orderId}`);
  }
}

