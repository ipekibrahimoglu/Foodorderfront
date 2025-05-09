import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/Order/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = 'https://localhost:7292/api/Orders';

  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiUrl);
  }

  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.apiUrl, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.apiUrl, order);
  }

  getOrderById(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`${this.apiUrl}/${id}`);
  }

  deleteOrder(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  getOrdersByUser(userId: string): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.apiUrl}/byusers/${userId}`);
  }

  getOrdersByRestaurant(restaurantId: string): Observable<Order[]> {
    return this.httpClient.get<Order[]>(
      `${this.apiUrl}/byrestaurants/${restaurantId}`
    );
  }
}
