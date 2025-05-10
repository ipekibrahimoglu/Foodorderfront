import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  private apiUrl = 'https://localhost:7292/api/Payments';

  constructor(private http: HttpClient) {}

  getPayments(): Observable<ListResponseModel<Payment>> {
    return this.http.get<ListResponseModel<Payment>>(this.apiUrl);
  }

  addPayment(payment: Payment): Observable<ListResponseModel<Payment>> {
    return this.http.post<ListResponseModel<Payment>>(this.apiUrl, payment);
  }

  getPaymentById(id: string): Observable<ListResponseModel<Payment>> {
    return this.http.get<ListResponseModel<Payment>>(${this.apiUrl}/${id});
  }

  updatePayment(payment: Payment): Observable<ListResponseModel<Payment>> {
    return this.http.put<ListResponseModel<Payment>>(this.apiUrl, payment);
  }

  deletePayment(id: string): Observable<ListResponseModel<Payment>> {
    return this.http.delete<ListResponseModel<Payment>>(${this.apiUrl}/${id});
  }
}