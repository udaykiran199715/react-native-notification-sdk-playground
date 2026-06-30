import { asNotificationEvent } from "react-native-notification-sdk";

export const EcommerceEvents = {
  ORDER_CREATED: asNotificationEvent("ORDER_CREATED"),

  ORDER_CONFIRMED: asNotificationEvent("ORDER_CONFIRMED"),

  PAYMENT_SUCCESSFUL: asNotificationEvent("PAYMENT_SUCCESSFUL"),

  PAYMENT_FAILED: asNotificationEvent("PAYMENT_FAILED"),

  ORDER_PACKED: asNotificationEvent("ORDER_PACKED"),

  ORDER_SHIPPED: asNotificationEvent("ORDER_SHIPPED"),

  OUT_FOR_DELIVERY: asNotificationEvent("OUT_FOR_DELIVERY"),

  ORDER_DELIVERED: asNotificationEvent("ORDER_DELIVERED"),

  ORDER_CANCELLED: asNotificationEvent("ORDER_CANCELLED"),

  REFUND_INITIATED: asNotificationEvent("REFUND_INITIATED"),

  REFUND_COMPLETED: asNotificationEvent("REFUND_COMPLETED"),
} as const;
