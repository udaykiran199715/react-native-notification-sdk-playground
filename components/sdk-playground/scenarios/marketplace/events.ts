import { asNotificationEvent } from "react-native-notification-sdk";

export const MarketplaceEvents = {
  FLASH_SALE: asNotificationEvent("FLASH_SALE"),

  WISHLIST_PRICE_DROP: asNotificationEvent("WISHLIST_PRICE_DROP"),

  COUPON_AVAILABLE: asNotificationEvent("COUPON_AVAILABLE"),

  SELLER_REPLY: asNotificationEvent("SELLER_REPLY"),

  OFFER_ACCEPTED: asNotificationEvent("OFFER_ACCEPTED"),

  OFFER_REJECTED: asNotificationEvent("OFFER_REJECTED"),

  BID_WON: asNotificationEvent("BID_WON"),

  CART_REMINDER: asNotificationEvent("CART_REMINDER"),

  RESTOCK_ALERT: asNotificationEvent("RESTOCK_ALERT"),

  NEW_ARRIVAL: asNotificationEvent("NEW_ARRIVAL"),
} as const;
