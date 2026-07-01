import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const ReturnInitiatedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "return-initiated",

  category: ScenarioCategory.LOGISTICS,

  title: "Return Initiated",

  description: "Triggered when return initiated.",

  event: LogisticsEvents.RETURN_INITIATED,

  payload: {
    id: "evt-return-initiated",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
