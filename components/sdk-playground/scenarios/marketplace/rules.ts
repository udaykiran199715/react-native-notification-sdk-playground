import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { MarketplaceEvents } from "./events";

export const MarketplaceRules: NotificationRule[] = [
  {
    event: MarketplaceEvents.FLASH_SALE,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🔥 Flash Sale",

      body: "{{productName}} is now available for ₹{{salePrice}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.WISHLIST_PRICE_DROP,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "💰 Price Dropped",

      body: "{{productName}} is now ₹{{salePrice}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.COUPON_AVAILABLE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🎁 Coupon Available",

      body: "Use coupon {{coupon}} and save on your next purchase.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        coupon: "{{coupon}}",
      },
    },
  },

  {
    event: MarketplaceEvents.SELLER_REPLY,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "💬 Seller Reply",

      body: "{{sellerName}} replied to your query.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        sellerId: "{{sellerId}}",
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.OFFER_ACCEPTED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "✅ Offer Accepted",

      body: "Your offer for {{productName}} has been accepted.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.OFFER_REJECTED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "❌ Offer Rejected",

      body: "Your offer for {{productName}} has been rejected.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.BID_WON,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🏆 Bid Won",

      body: "Congratulations! You won the auction for {{productName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.CART_REMINDER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🛒 Complete Your Purchase",

      body: "{{productName}} is still waiting in your cart.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",
    },
  },

  {
    event: MarketplaceEvents.RESTOCK_ALERT,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "📦 Back In Stock",

      body: "{{productName}} is available again.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },

  {
    event: MarketplaceEvents.NEW_ARRIVAL,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "✨ New Arrival",

      body: "{{productName}} has just arrived in our store.",

      image: "{{image}}",
    },

    navigation: {
      route: "/marketplace",

      params: {
        productId: "{{productId}}",
      },
    },
  },
];
