import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const BirthdayWishScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "birthday-wish",

  category: ScenarioCategory.HRMS,

  title: "Birthday Wish",

  description: "Triggered when birthday wish.",

  event: HrmsEvents.BIRTHDAY_WISH,

  payload: {
    id: "evt-birthday-wish",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
