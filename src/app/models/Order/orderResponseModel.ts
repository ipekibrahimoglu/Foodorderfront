export interface Order {
    orderId: string;
    userId: string;
    restaurantId: string;
    orderDate: string; // ISO 8601 tarih formatı
    status: string;
  }
  