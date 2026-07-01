import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  customer: {
    notification: true,

    audience: AudienceType.ALL,

    image: true,

    deepLink: "/(tabs)/orders/details",
  },

  delivery: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/delivery/details",
  },

  refund: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/refund/details",
  },
});
