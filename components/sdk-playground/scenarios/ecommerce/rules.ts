import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { EcommerceEvents } from "./events";

export const EcommerceRules: NotificationRule[] = [
  {
    event: EcommerceEvents.ORDER_CREATED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🛒 Order Created",

      body: "Your order {{orderId}} has been placed successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/orders/details",

      params: {
        orderId: "{{orderId}}",
      },
    },
  },

  {
    event: EcommerceEvents.ORDER_CONFIRMED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "✅ Order Confirmed",

      body: "Hi {{customerName}}, your order {{orderId}} has been confirmed.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/orders/details",

      params: {
        orderId: "{{orderId}}",
      },
    },
  },

  {
    event: EcommerceEvents.PAYMENT_SUCCESSFUL,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "💳 Payment Successful",

      body: "₹{{amount}} payment received for order {{orderId}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/payments/details",

      params: {
        orderId: "{{orderId}}",

        transactionId: "{{transactionId}}",
      },
    },
  },

  {
    event: EcommerceEvents.PAYMENT_FAILED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "❌ Payment Failed",

      body: "Payment failed for order {{orderId}}. {{failureReason}}",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/payments/retry",

      params: {
        orderId: "{{orderId}}",
      },
    },
  },

  {
    event: EcommerceEvents.ORDER_PACKED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "📦 Order Packed",

      body: "Your order {{orderId}} has been packed and is ready for shipment.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/orders/details",

      params: {
        orderId: "{{orderId}}",
      },
    },
  },

  {
    event: EcommerceEvents.ORDER_SHIPPED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🚚 Order Shipped",

      body: "Your order {{orderId}} has been shipped via {{courier}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        trackingId: "{{trackingId}}",
      },
    },
  },

  {
    event: EcommerceEvents.OUT_FOR_DELIVERY,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🛵 Out for Delivery",

      body: "{{driverName}} is on the way with your order {{orderId}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        orderId: "{{orderId}}",

        driverId: "{{driverId}}",
      },
    },
  },

  {
    event: EcommerceEvents.ORDER_DELIVERED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🎉 Order Delivered",

      body: "Your order {{orderId}} has been delivered successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/orders/details",

      params: {
        orderId: "{{orderId}}",
      },
    },
  },

  {
    event: EcommerceEvents.ORDER_CANCELLED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "⚠️ Order Cancelled",

      body: "Your order {{orderId}} has been cancelled.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/orders/details",

      params: {
        orderId: "{{orderId}}",
      },
    },
  },

  {
    event: EcommerceEvents.REFUND_INITIATED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "💰 Refund Initiated",

      body: "Refund of ₹{{refundAmount}} has been initiated.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/refund/details",

      params: {
        refundReference: "{{refundReference}}",
      },
    },
  },

  {
    event: EcommerceEvents.REFUND_COMPLETED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "✅ Refund Completed",

      body: "Refund of ₹{{refundAmount}} has been credited successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/refund/details",

      params: {
        refundReference: "{{refundReference}}",
      },
    },
  },
];
