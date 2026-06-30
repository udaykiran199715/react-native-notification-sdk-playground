import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  customer: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/tracking",
  },

  driver: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/driver",
  },

  warehouse: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/warehouse",
  },
});
