import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const LeaveRejectedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "leave-rejected",

  category: ScenarioCategory.HRMS,

  title: "Leave Rejected",

  description: "Triggered when leave rejected.",

  event: HrmsEvents.LEAVE_REJECTED,

  payload: {
    id: "evt-leave-rejected",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
