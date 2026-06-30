import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const DeliveryCompletedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "delivery-completed",

  category: ScenarioCategory.LOGISTICS,

  title: "Delivery Completed",

  description: "Triggered when delivery completed.",

  event: LogisticsEvents.DELIVERY_COMPLETED,

  payload: {
    id: "evt-delivery-completed",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
