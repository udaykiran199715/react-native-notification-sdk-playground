import Notifications, {
  NotificationPayload,
} from "react-native-notification-sdk";

import type { PlaygroundScenario } from "../types/PlaygroundScenario";

export class ScenarioRunner {
  public static async run(
    scenario: PlaygroundScenario,
  ): Promise<NotificationPayload> {
    await Notifications.emit(scenario.event, scenario.payload);

    return scenario.payload;
  }
}
