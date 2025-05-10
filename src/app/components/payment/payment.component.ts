import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../../models/payment';
import { PaymentService } from '../../payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[] = [];
  newPayment: Payment;
  userRole: string = '';

  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userRole = user.role;
    console.log("userRole:", this.userRole); 

    if (this.userRole?.toLowerCase() !== 'customer') {
      alert("Bu sayfa sadece müşteri hesabı ile görüntülenebilir.");
      this.router.navigate(['/menus']);
      return;
    }

    this.getAllPayments();
    this.resetForm();
  }

  goToPayment(): void {
    this.router.navigate(['/payments']);
  }

  getAllPayments(): void {
    this.paymentService.getPayments().subscribe((response: { data: Payment[] }) => {
      this.payments = response.data;
    });
  }

  addPayment(): void {
    this.paymentService.addPayment(this.newPayment).subscribe((response: any) => {
      console.log('Ödeme başarıyla eklendi:', response);
      this.getAllPayments();
      this.resetForm();
    });
  }

  deletePayment(paymentId: string): void {
    this.paymentService.deletePayment(paymentId).subscribe((response: any) => {
      console.log('Ödeme silindi:', response);
      this.getAllPayments();
    });
  }

  resetForm(): void {
    this.newPayment = {
      paymentId: '',
      orderId: '',
      paymentDate: new Date().toISOString(),
      amount: 0,
      paymentMethod: '',
      isSuccessful: true
    };
  }
}
