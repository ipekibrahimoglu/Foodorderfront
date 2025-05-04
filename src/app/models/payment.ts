export interface Payment{
    paymentId: string;
    orderId: string;
    paymentDate: string;   // ISO-8601
    amount: number;
    paymentMethod: string;
    isSuccessful?: boolean;  // bazı kayıtlarda eksik
   // order?: Order;
}