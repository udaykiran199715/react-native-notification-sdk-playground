import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const HolidayAnnouncementScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "holiday-announcement",

  category: ScenarioCategory.HRMS,

  title: "Holiday Announcement",

  description: "Triggered when holiday announcement.",

  event: HrmsEvents.HOLIDAY_ANNOUNCEMENT,

  payload: {
    id: "evt-holiday-announcement",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
