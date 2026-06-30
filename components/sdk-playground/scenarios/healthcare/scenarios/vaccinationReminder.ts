import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const VaccinationReminderScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "vaccination-reminder",

  category: ScenarioCategory.HEALTHCARE,

  title: "Vaccination Reminder",

  description: "Triggered when vaccination reminder.",

  event: HealthcareEvents.VACCINATION_REMINDER,

  payload: {
    id: "evt-vaccination-reminder",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
