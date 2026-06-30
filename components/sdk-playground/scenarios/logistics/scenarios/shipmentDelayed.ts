import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const ShipmentDelayedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "shipment-delayed",

  category: ScenarioCategory.LOGISTICS,

  title: "Shipment Delayed",

  description: "Triggered when shipment delayed.",

  event: LogisticsEvents.SHIPMENT_DELAYED,

  payload: {
    id: "evt-shipment-delayed",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
