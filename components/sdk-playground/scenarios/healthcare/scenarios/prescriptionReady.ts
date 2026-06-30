import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const PrescriptionReadyScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "prescription-ready",

  category: ScenarioCategory.HEALTHCARE,

  title: "Prescription Ready",

  description: "Triggered when prescription ready.",

  event: HealthcareEvents.PRESCRIPTION_READY,

  payload: {
    id: "evt-prescription-ready",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
