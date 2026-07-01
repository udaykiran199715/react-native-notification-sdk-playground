import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const EmiReminderScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "emi-reminder",

  category: ScenarioCategory.BANKING,

  title: "Emi Reminder",

  description: "Triggered when emi reminder.",

  event: BankingEvents.EMI_REMINDER,

  payload: {
    id: "evt-emi-reminder",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
