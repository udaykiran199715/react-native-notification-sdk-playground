import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const AttendanceReminderScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "attendance-reminder",

  category: ScenarioCategory.HRMS,

  title: "Attendance Reminder",

  description: "Triggered when attendance reminder.",

  event: HrmsEvents.ATTENDANCE_REMINDER,

  payload: {
    id: "evt-attendance-reminder",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
