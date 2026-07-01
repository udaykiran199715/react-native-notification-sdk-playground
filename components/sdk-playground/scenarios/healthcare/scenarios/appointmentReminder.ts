import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const AppointmentReminderScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "appointment-reminder",

  category: ScenarioCategory.HEALTHCARE,

  title: "Appointment Reminder",

  description: "Triggered when appointment reminder.",

  event: HealthcareEvents.APPOINTMENT_REMINDER,

  payload: {
    id: "evt-appointment-reminder",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
