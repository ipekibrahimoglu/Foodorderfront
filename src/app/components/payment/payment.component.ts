import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  router: any;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.userRole = JSON.parse(user).role;
    }

    if (this.userRole === 'Customer') {
      this.getAllPayments();
    }
  }
  goToPayment(): void {
  this.router.navigate(['/payments']);
}

  getAllPayments(): void {
    this.paymentService.getPayments().subscribe((response: { data: Payment[]; }) => {
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
