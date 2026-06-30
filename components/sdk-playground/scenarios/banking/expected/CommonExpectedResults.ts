import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  customer: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/banking",
  },

  account: {
    notification: true,

    audience: AudienceType.USERS,

    image: false,

    deepLink: "/(tabs)/accounts",
  },

  security: {
    notification: true,

    audience: AudienceType.USERS,

    image: false,

    deepLink: "/(tabs)/security",
  },
});
