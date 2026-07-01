import {
  NotificationEvent,
  NotificationPayload,
} from "react-native-notification-sdk";

import { PlaygroundScenario } from "../types/PlaygroundScenario";
import { ScenarioCategory } from "../types/ScenarioCategory";

type CreateScenarioRequest = {
  id: string;

  category: ScenarioCategory;

  title: string;

  description: string;

  event: NotificationEvent;

  payload: NotificationPayload;

  expected: PlaygroundScenario["expected"];

  tags?: readonly string[];
};

export class ScenarioFactory {
  public static create(request: CreateScenarioRequest): PlaygroundScenario {
    return Object.freeze({
      ...request,
    });
  }
}
