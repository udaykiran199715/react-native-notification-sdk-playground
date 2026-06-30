import { asNotificationEvent } from "react-native-notification-sdk";

export const SocialEvents = {
  NEW_FOLLOWER: asNotificationEvent("NEW_FOLLOWER"),

  FRIEND_REQUEST: asNotificationEvent("FRIEND_REQUEST"),

  FRIEND_ACCEPTED: asNotificationEvent("FRIEND_ACCEPTED"),

  NEW_LIKE: asNotificationEvent("NEW_LIKE"),

  NEW_COMMENT: asNotificationEvent("NEW_COMMENT"),

  STORY_MENTION: asNotificationEvent("STORY_MENTION"),

  LIVE_STARTED: asNotificationEvent("LIVE_STARTED"),

  PROFILE_VERIFIED: asNotificationEvent("PROFILE_VERIFIED"),

  ACHIEVEMENT_UNLOCKED: asNotificationEvent("ACHIEVEMENT_UNLOCKED"),

  WEEKLY_SUMMARY: asNotificationEvent("WEEKLY_SUMMARY"),
} as const;