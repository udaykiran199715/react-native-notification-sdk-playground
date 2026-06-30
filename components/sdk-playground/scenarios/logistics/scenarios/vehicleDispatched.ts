import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const VehicleDispatchedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "vehicle-dispatched",

  category: ScenarioCategory.LOGISTICS,

  title: "Vehicle Dispatched",

  description: "Triggered when vehicle dispatched.",

  event: LogisticsEvents.VEHICLE_DISPATCHED,

  payload: {
    id: "evt-vehicle-dispatched",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
