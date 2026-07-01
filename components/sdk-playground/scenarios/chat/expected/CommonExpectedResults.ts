import { AudienceType } from "react-native-notification-sdk";

export const CommonExpectedResults = Object.freeze({
  chat: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/chat",
  },

  group: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/groups",
  },

  call: {
    notification: true,

    audience: AudienceType.USERS,

    image: true,

    deepLink: "/(tabs)/calls",
  },
});
