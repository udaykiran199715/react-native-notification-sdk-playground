import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  employee: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/hrms",
  },

  manager: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/manager",
  },

  company: {
    notification: true,

    audience: AudienceType.ALL,

    image: true,

    deepLink: "/(tabs)/announcements",
  },
});
