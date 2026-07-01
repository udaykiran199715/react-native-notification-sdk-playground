import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const AppointmentBookedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "appointment-booked",

  category: ScenarioCategory.HEALTHCARE,

  title: "Appointment Booked",

  description: "Triggered when appointment booked.",

  event: HealthcareEvents.APPOINTMENT_BOOKED,

  payload: {
    id: "evt-appointment-booked",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
