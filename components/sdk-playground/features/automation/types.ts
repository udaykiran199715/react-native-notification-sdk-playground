import type {
  NotificationPayload,
  NotificationRule,
} from "react-native-notification-sdk";
import { PlaygroundScenario } from "../../scenarios";

export interface AutomationResult {
  scenario?: PlaygroundScenario;

  rule?: NotificationRule;

  payload?: NotificationPayload;

  audience: string[];

  matched: boolean;
}
