import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const MedicineReminderScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "medicine-reminder",

  category: ScenarioCategory.HEALTHCARE,

  title: "Medicine Reminder",

  description: "Triggered when medicine reminder.",

  event: HealthcareEvents.MEDICINE_REMINDER,

  payload: {
    id: "evt-medicine-reminder",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
