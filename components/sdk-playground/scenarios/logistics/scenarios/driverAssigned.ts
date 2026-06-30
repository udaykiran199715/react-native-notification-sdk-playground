import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const DriverAssignedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "driver-assigned",

  category: ScenarioCategory.LOGISTICS,

  title: "Driver Assigned",

  description: "Triggered when driver assigned.",

  event: LogisticsEvents.DRIVER_ASSIGNED,

  payload: {
    id: "evt-driver-assigned",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
