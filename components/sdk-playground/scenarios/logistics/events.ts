import { asNotificationEvent } from "react-native-notification-sdk";

export const LogisticsEvents = {
  SHIPMENT_CREATED: asNotificationEvent("SHIPMENT_CREATED"),

  DRIVER_ASSIGNED: asNotificationEvent("DRIVER_ASSIGNED"),

  VEHICLE_DISPATCHED: asNotificationEvent("VEHICLE_DISPATCHED"),

  SHIPMENT_DELAYED: asNotificationEvent("SHIPMENT_DELAYED"),

  ARRIVED_AT_HUB: asNotificationEvent("ARRIVED_AT_HUB"),

  OUT_FOR_DELIVERY: asNotificationEvent("LOGISTICS_OUT_FOR_DELIVERY"),

  DELIVERY_COMPLETED: asNotificationEvent("DELIVERY_COMPLETED"),

  DELIVERY_FAILED: asNotificationEvent("DELIVERY_FAILED"),

  POD_UPLOADED: asNotificationEvent("POD_UPLOADED"),

  RETURN_INITIATED: asNotificationEvent("RETURN_INITIATED"),
} as const;
