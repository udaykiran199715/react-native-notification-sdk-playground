import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { LogisticsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoShipmentPayload } from "../payloads";

export const PodUploadedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "pod-uploaded",

  category: ScenarioCategory.LOGISTICS,

  title: "Pod Uploaded",

  description: "Triggered when pod uploaded.",

  event: LogisticsEvents.POD_UPLOADED,

  payload: {
    id: "evt-pod-uploaded",

    data: {
      ...DemoShipmentPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
