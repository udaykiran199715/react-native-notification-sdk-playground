import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const DeliveryFailedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "delivery-failed",

  category: ScenarioCategory.LOGISTICS,

  title: "Delivery Failed",

  description: "Triggered when delivery failed.",

  event: LogisticsEvents.DELIVERY_FAILED,

  payload: {
    id: "evt-delivery-failed",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
