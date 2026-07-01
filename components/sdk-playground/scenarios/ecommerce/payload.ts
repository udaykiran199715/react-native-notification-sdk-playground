export interface EcommercePayload {
  orderId: string;

  customerId: string;

  customerName: string;

  customerEmail?: string;

  amount: number;

  currency: string;

  paymentMethod: string;

  status: string;

  trackingId?: string;

  assignedTo?: string;

  estimatedDelivery?: string;

  image?: string;
}
