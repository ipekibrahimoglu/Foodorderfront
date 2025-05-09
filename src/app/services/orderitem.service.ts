import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from '../models/Order/orderItem';


@Injectable({
  providedIn: 'root'
})

export class OrderItemService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:7292/api/OrderItems';


  getOrderItems(): Observable<OrderItem[]>{
     return this.httpClient.get<OrderItem[]>(this.apiUrl);
      
  }
  
  addOrderItem(orderItem: OrderItem): Observable<OrderItem> {
    return this.httpClient.post<OrderItem>(`${this.apiUrl}`, orderItem);
  }

  
  deleteOrderItem(orderItemId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${orderItemId}`);
  }
  
  getOrderItemsByOrderId(orderId: string): Observable<OrderItem[]> {
    return this.httpClient.get<OrderItem[]>(`${this.apiUrl}/byorder/${orderId}`);
  }
}

