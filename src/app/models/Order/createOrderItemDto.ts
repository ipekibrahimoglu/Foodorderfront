export interface CreateOrderItemDto {
  orderId:    string;
  menuItemId: string;
  quantity:   number;
  price:      number;
}