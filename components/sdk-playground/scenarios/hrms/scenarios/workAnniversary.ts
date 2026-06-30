import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const WorkAnniversaryScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "work-anniversary",

  category: ScenarioCategory.HRMS,

  title: "Work Anniversary",

  description: "Triggered when work anniversary.",

  event: HrmsEvents.WORK_ANNIVERSARY,

  payload: {
    id: "evt-work-anniversary",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
