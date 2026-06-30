import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const LeaveRequestedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "leave-requested",

  category: ScenarioCategory.HRMS,

  title: "Leave Requested",

  description: "Triggered when leave requested.",

  event: HrmsEvents.LEAVE_REQUESTED,

  payload: {
    id: "evt-leave-requested",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
