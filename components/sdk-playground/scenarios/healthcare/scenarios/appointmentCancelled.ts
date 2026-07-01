import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const AppointmentCancelledScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "appointment-cancelled",

  category: ScenarioCategory.HEALTHCARE,

  title: "Appointment Cancelled",

  description: "Triggered when appointment cancelled.",

  event: HealthcareEvents.APPOINTMENT_CANCELLED,

  payload: {
    id: "evt-appointment-cancelled",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
