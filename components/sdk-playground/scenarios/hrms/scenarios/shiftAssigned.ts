import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const ShiftAssignedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "shift-assigned",

  category: ScenarioCategory.HRMS,

  title: "Shift Assigned",

  description: "Triggered when shift assigned.",

  event: HrmsEvents.SHIFT_ASSIGNED,

  payload: {
    id: "evt-shift-assigned",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
