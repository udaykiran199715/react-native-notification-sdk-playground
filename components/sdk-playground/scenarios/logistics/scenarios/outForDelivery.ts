import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const OutForDeliveryScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "logistics-out-for-delivery",

    category: ScenarioCategory.LOGISTICS,

    title: "Out For Delivery",

    description: "Triggered when out for delivery.",

    event: LogisticsEvents.OUT_FOR_DELIVERY,

    payload: {
      id: "evt-out-for-delivery",

      data: {
        ...DemoShipmentPayload,
      },
    },

    expected: CommonExpectedResults.customer,
  });
