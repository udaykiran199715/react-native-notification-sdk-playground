import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  social: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/social",
  },

  profile: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/profile",
  },

  post: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/feed",
  },
});