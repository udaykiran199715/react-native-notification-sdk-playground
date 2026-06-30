import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const OvertimeApprovedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "overtime-approved",

  category: ScenarioCategory.HRMS,

  title: "Overtime Approved",

  description: "Triggered when overtime approved.",

  event: HrmsEvents.OVERTIME_APPROVED,

  payload: {
    id: "evt-overtime-approved",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
