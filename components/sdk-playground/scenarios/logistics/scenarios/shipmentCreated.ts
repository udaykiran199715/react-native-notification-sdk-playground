import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const ShipmentCreatedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "shipment-created",

  category: ScenarioCategory.LOGISTICS,

  title: "Shipment Created",

  description: "Triggered when shipment created.",

  event: LogisticsEvents.SHIPMENT_CREATED,

  payload: {
    id: "evt-shipment-created",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
