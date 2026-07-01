import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  workspace: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/workspace",
  },

  project: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/projects",
  },

  billing: {
    notification: true,
    audience: AudienceType.USERS,
    image: true,
    deepLink: "/(tabs)/billing",
  },
});