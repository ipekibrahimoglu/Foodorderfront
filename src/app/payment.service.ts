// src/app/services/payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './models/payment';
import { ListeResponsemodel } from './models/listeResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  private apiUrl = 'http://localhost:5161/api/Payments';

  constructor(private http: HttpClient) {}

  getPayments(): Observable<ListeResponsemodel<Payment>> {
    return this.http.get<ListeResponsemodel<Payment>>(this.apiUrl);
  }

  addPayment(payment: Payment): Observable<ListeResponsemodel<Payment>> {
    return this.http.post<ListeResponsemodel<Payment>>(this.apiUrl, payment);
  }

  getPaymentById(id: string): Observable<ListeResponsemodel<Payment>> {
    return this.http.get<ListeResponsemodel<Payment>>(`${this.apiUrl}/${id}`);
  }

  updatePayment(payment: Payment): Observable<ListeResponsemodel<Payment>> {
    return this.http.put<ListeResponsemodel<Payment>>(this.apiUrl, payment);
  }

  deletePayment(id: string): Observable<ListeResponsemodel<Payment>> {
    return this.http.delete<ListeResponsemodel<Payment>>(`${this.apiUrl}/${id}`);
  }
}
