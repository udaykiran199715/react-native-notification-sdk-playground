import { asNotificationEvent } from "react-native-notification-sdk";

export const ChatEvents = {
  NEW_MESSAGE: asNotificationEvent("NEW_MESSAGE"),

  MESSAGE_REACTION: asNotificationEvent("MESSAGE_REACTION"),

  MESSAGE_MENTION: asNotificationEvent("MESSAGE_MENTION"),

  GROUP_INVITE: asNotificationEvent("GROUP_INVITE"),

  GROUP_REMOVED: asNotificationEvent("GROUP_REMOVED"),

  VOICE_CALL: asNotificationEvent("VOICE_CALL"),

  VIDEO_CALL: asNotificationEvent("VIDEO_CALL"),

  MISSED_CALL: asNotificationEvent("MISSED_CALL"),

  CHANNEL_ANNOUNCEMENT: asNotificationEvent("CHANNEL_ANNOUNCEMENT"),

  ADMIN_BROADCAST: asNotificationEvent("ADMIN_BROADCAST"),
} as const;
