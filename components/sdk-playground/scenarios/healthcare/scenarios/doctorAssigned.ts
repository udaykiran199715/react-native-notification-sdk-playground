import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const DoctorAssignedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "doctor-assigned",

  category: ScenarioCategory.HEALTHCARE,

  title: "Doctor Assigned",

  description: "Triggered when doctor assigned.",

  event: HealthcareEvents.DOCTOR_ASSIGNED,

  payload: {
    id: "evt-doctor-assigned",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
