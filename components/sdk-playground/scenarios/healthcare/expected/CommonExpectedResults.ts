import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  patient: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/health",
  },

  doctor: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/appointments",
  },

  hospital: {
    notification: true,
    audience: AudienceType.ALL,
    image: true,
    deepLink: "/(tabs)/hospital",
  },
});
