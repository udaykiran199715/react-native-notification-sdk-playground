import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { LogisticsEvents } from "./events";

export const LogisticsRules: NotificationRule[] = [
  {
    event: LogisticsEvents.SHIPMENT_CREATED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "📦 Shipment Created",

      body: "Shipment {{shipmentId}} has been created successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.DRIVER_ASSIGNED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🚚 Driver Assigned",

      body: "{{driverName}} has been assigned to your shipment.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
        driverId: "{{driverId}}",
      },
    },
  },

  {
    event: LogisticsEvents.VEHICLE_DISPATCHED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🚛 Vehicle Dispatched",

      body: "Vehicle {{vehicleNumber}} has left the warehouse.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.SHIPMENT_DELAYED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "⚠️ Shipment Delayed",

      body: "Shipment {{shipmentId}} has been delayed.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.ARRIVED_AT_HUB,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🏢 Arrived At Hub",

      body: "Shipment reached {{warehouse}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.OUT_FOR_DELIVERY,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🛵 Out For Delivery",

      body: "{{driverName}} is on the way with your shipment.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
        driverId: "{{driverId}}",
      },
    },
  },

  {
    event: LogisticsEvents.DELIVERY_COMPLETED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "✅ Delivery Completed",

      body: "Shipment {{shipmentId}} has been delivered successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.DELIVERY_FAILED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "❌ Delivery Failed",

      body: "Delivery attempt failed for shipment {{shipmentId}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.POD_UPLOADED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "📄 Proof Of Delivery",

      body: "Proof of delivery has been uploaded.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },

  {
    event: LogisticsEvents.RETURN_INITIATED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "↩️ Return Initiated",

      body: "Return process has started for shipment {{shipmentId}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/tracking",

      params: {
        shipmentId: "{{shipmentId}}",
      },
    },
  },
];
