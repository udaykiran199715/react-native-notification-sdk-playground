import type {
  AudienceType,
  NotificationEvent,
  NotificationPayload,
} from "react-native-notification-sdk";

import { ScenarioCategory } from "./ScenarioCategory";

export interface PlaygroundScenario {
  readonly id: string;

  readonly category: ScenarioCategory;

  readonly title: string;

  readonly description: string;

  readonly event: NotificationEvent;

  readonly payload: NotificationPayload;

  readonly expected: {
    readonly notification: boolean;

    readonly audience: AudienceType;

    readonly image?: boolean;

    readonly deepLink?: string;

    readonly actions?: boolean;
  };

  readonly tags?: readonly string[];
}
