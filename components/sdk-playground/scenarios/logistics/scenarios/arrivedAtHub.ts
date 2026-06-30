import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const ArrivedAtHubScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "arrived-at-hub",

  category: ScenarioCategory.LOGISTICS,

  title: "Arrived At Hub",

  description: "Triggered when arrived at hub.",

  event: LogisticsEvents.ARRIVED_AT_HUB,

  payload: {
    id: "evt-arrived-at-hub",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
