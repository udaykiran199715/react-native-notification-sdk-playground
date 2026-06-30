import { asNotificationEvent } from "react-native-notification-sdk";

export const SaasEvents = {
  WORKSPACE_INVITE: asNotificationEvent("WORKSPACE_INVITE"),

  TASK_ASSIGNED: asNotificationEvent("TASK_ASSIGNED"),

  TASK_COMPLETED: asNotificationEvent("TASK_COMPLETED"),

  COMMENT_ADDED: asNotificationEvent("COMMENT_ADDED"),

  MENTION_RECEIVED: asNotificationEvent("MENTION_RECEIVED"),

  SUBSCRIPTION_RENEWED: asNotificationEvent("SUBSCRIPTION_RENEWED"),

  INVOICE_GENERATED: asNotificationEvent("INVOICE_GENERATED"),

  STORAGE_LIMIT_REACHED: asNotificationEvent("STORAGE_LIMIT_REACHED"),

  MAINTENANCE_SCHEDULED: asNotificationEvent("MAINTENANCE_SCHEDULED"),

  NEW_FEATURE_RELEASED: asNotificationEvent("NEW_FEATURE_RELEASED"),
} as const;