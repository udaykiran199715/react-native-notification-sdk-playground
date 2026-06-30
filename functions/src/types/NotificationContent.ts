import type { NotificationNavigation } from "./NotificationNavigation";
import type { NotificationPayload } from "./NotificationPayload";

export interface NotificationContent {
  readonly title: string;

  readonly body: string;

  readonly image?: string;

  readonly navigation?: NotificationNavigation;

  readonly data?: NotificationPayload;
}
