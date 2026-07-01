import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const LeaveApprovedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "leave-approved",

  category: ScenarioCategory.HRMS,

  title: "Leave Approved",

  description: "Triggered when leave approved.",

  event: HrmsEvents.LEAVE_APPROVED,

  payload: {
    id: "evt-leave-approved",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
